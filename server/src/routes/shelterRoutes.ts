import express, { Request, Response } from 'express';
import { Shelter } from '../models/Shelter';

const router = express.Router();

// Haversine Formula (දුර ගණනය කිරීම)
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
};

// 1. Get All Shelters (User Location අනුව Distance Sort වේ)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { lat, lng } = req.query;
    const shelters = await Shelter.find();

    if (lat && lng) {
      const userLat = parseFloat(lat as string);
      const userLng = parseFloat(lng as string);

      const sheltersWithDistance = shelters.map((s) => {
        const doc = s.toObject();
        const sLat = (s as any).lat || 6.6828;
        const sLng = (s as any).lng || 80.4033;
        const distance = getDistance(userLat, userLng, sLat, sLng);
        return { ...doc, distance };
      });

      sheltersWithDistance.sort((a, b) => a.distance - b.distance);
      return res.json(sheltersWithDistance);
    }

    res.json(shelters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching shelters', error });
  }
});

// 2. Comprehensive Sri Lanka Shelters Seed Route
router.post('/seed', async (req: Request, res: Response) => {
  try {
    const allIslandShelters = [
      // Southern / Hambantota / Ranna
      {
        name: "Ranna Community Relief Center",
        location: "Main Road, Ranna, Hambantota",
        capacity: 150,
        occupied: 35,
        status: "Open",
        contact: "+94 47 224 5100",
        lat: 6.0792,
        lng: 80.8486
      },
      {
        name: "Tangalle Urban Council Hall",
        location: "Beach Road, Tangalle",
        capacity: 200,
        occupied: 80,
        status: "Open",
        contact: "+94 47 224 0275",
        lat: 6.0244,
        lng: 80.7941
      },
      {
        name: "Hambantota District Disaster Center",
        location: "Siribopura, Hambantota",
        capacity: 300,
        occupied: 40,
        status: "Open",
        contact: "+94 47 222 0244",
        lat: 6.1248,
        lng: 81.1185
      },
      // Sabaragamuwa / Ratnapura
      {
        name: "Ratnapura Central Relief Camp",
        location: "Town Hall Grounds, Ratnapura",
        capacity: 250,
        occupied: 120,
        status: "Open",
        contact: "+94 45 222 2222",
        lat: 6.6828,
        lng: 80.4033
      },
      {
        name: "Ferguson High School Relief Center",
        location: "Wahalwatte Road, Ratnapura",
        capacity: 150,
        occupied: 140,
        status: "Full",
        contact: "+94 45 222 3344",
        lat: 6.6912,
        lng: 80.3980
      },
      {
        name: "Kuruwita Community Center",
        location: "Kuruwita Junction, Ratnapura",
        capacity: 100,
        occupied: 20,
        status: "Open",
        contact: "+94 45 226 2200",
        lat: 6.7725,
        lng: 80.3667
      },
      // Western / Colombo / Kalutara
      {
        name: "Colombo Disaster Management Center (DMC)",
        location: "Vidya Mawatha, Colombo 07",
        capacity: 400,
        occupied: 90,
        status: "Open",
        contact: "+94 11 213 6136",
        lat: 6.9044,
        lng: 79.8718
      },
      {
        name: "Panadura Town Hall Relief Camp",
        location: "Arthur V Dias Mawatha, Panadura",
        capacity: 180,
        occupied: 50,
        status: "Open",
        contact: "+94 38 223 2275",
        lat: 6.7132,
        lng: 79.9074
      },
      // Central / Kandy
      {
        name: "Kandy Municipal Community Hall",
        location: "William Gopallawa Mawatha, Kandy",
        capacity: 220,
        occupied: 60,
        status: "Open",
        contact: "+94 81 223 4288",
        lat: 7.2906,
        lng: 80.6337
      },
      // Southern / Galle / Matara
      {
        name: "Galle Town Hall Shelter",
        location: "Colombo Road, Galle",
        capacity: 200,
        occupied: 45,
        status: "Open",
        contact: "+94 91 223 4275",
        lat: 6.0367,
        lng: 80.2170
      },
      {
        name: "Matara Rahula College Relief Center",
        location: "Rahula Road, Matara",
        capacity: 250,
        occupied: 75,
        status: "Open",
        contact: "+94 41 222 2238",
        lat: 5.9496,
        lng: 80.5469
      }
    ];

    await Shelter.deleteMany({});
    const created = await Shelter.insertMany(allIslandShelters);
    res.json({ message: 'All-island shelters seeded successfully', count: created.length });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding shelters', error });
  }
});

export default router;