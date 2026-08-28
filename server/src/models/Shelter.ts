import mongoose, { Document, Schema } from 'mongoose';

export interface IShelter extends Document {
  name: string;
  location: string;
  capacity: number;
  occupied: number;
  status: string;
  contact: string;
  lat: number;
  lng: number;
}

const ShelterSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  occupied: { type: Number, default: 0 },
  status: { type: String, enum: ['Open', 'Full', 'Closed'], default: 'Open' },
  contact: { type: String, required: true },
  lat: { type: Number, default: 6.6828 },
  lng: { type: Number, default: 80.4033 }
}, { timestamps: true });

export const Shelter = mongoose.model<IShelter>('Shelter', ShelterSchema);