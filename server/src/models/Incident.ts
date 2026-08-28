import mongoose, { Schema, Document } from 'mongoose';

export interface IIncident extends Document {
  incidentId: string;
  type: string;
  severity: 'Critical' | 'Moderate' | 'Low';
  description?: string;
  location: {
    address: string;
    coordinates?: [number, number];
  };
  peopleAffected: {
    adults: number;
    children: number;
  };
  status: 'Reported' | 'Assigned' | 'En Route' | 'Arrived' | 'Resolved';
  assignedResponder?: string;
  createdAt: Date;
}

const IncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  severity: { type: String, enum: ['Critical', 'Moderate', 'Low'], default: 'Critical' },
  description: { type: String },
  location: {
    address: { type: String, required: true },
    coordinates: { type: [Number], index: '2dsphere' }
  },
  peopleAffected: {
    adults: { type: Number, default: 1 },
    children: { type: Number, default: 0 }
  },
  status: { 
    type: String, 
    enum: ['Reported', 'Assigned', 'En Route', 'Arrived', 'Resolved'], 
    default: 'Reported' 
  },
  assignedResponder: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

export const Incident = mongoose.model<IIncident>('Incident', IncidentSchema);