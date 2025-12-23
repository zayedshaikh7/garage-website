import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Booking = {
  id: string;
  name: string;
  phone: string;
  email: string;
  car_model: string;
  service_type: string;
  preferred_date: string;
  status: string;
  created_at: string;
  updated_at: string;
};
