import { Router, Request, Response } from 'express';
import { Incident } from '../models/Incident';
import { Server } from 'socket.io';

export const createIncidentRoutes = (io: Server): Router => {
  const router = Router();

  // 1. Get all active incidents
  router.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
      const incidents = await Incident.find().sort({ createdAt: -1 });
      res.status(200).json(incidents);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch incidents' });
    }
  });

  // 2. Create new SOS Emergency Report & Broadcast via Socket
  router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
      const incidentData = {
        ...req.body,
        incidentId: `#EX-${Math.floor(1000 + Math.random() * 9000)}`
      };

      const newIncident = new Incident(incidentData);
      const saved = await newIncident.save();

      // Real-time broadcast to all connected responders
      io.to('responder').emit('new_emergency_alert', saved);

      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create emergency report' });
    }
  });

  // 3. Update Incident Status (Assigned -> En Route -> Arrived -> Resolved)
  router.patch('/:id/status', async (req: Request, res: Response): Promise<void> => {
    try {
      const { status, responderName } = req.body;
      const updated = await Incident.findOneAndUpdate(
        { incidentId: req.params.id },
        { 
          status, 
          ...(responderName && { assignedResponder: responderName }) 
        },
        { new: true }
      );

      if (!updated) {
        res.status(404).json({ error: 'Incident not found' });
        return;
      }

      // Real-time broadcast update to citizens
      io.to('citizen').emit('incident_status_changed', updated);

      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update status' });
    }
  });

  return router;
};