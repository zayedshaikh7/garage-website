import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

app.get('/', (req, res) => {
  res.json({ message: 'AutoCare Garage API' });
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { name, phone, email, carModel, serviceType, preferredDate } = req.body;

    if (!name || !phone || !email || !carModel || !serviceType || !preferredDate) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          name,
          phone,
          email,
          car_model: carModel,
          service_type: serviceType,
          preferred_date: preferredDate,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to create booking' });
    }

    res.status(201).json({ message: 'Booking created successfully', booking: data[0] });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch bookings' });
    }

    res.json({ bookings: data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch booking' });
    }

    if (!data) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ booking: data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    const { data, error } = await supabase
      .from('bookings')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to update booking' });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ message: 'Booking updated successfully', booking: data[0] });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase.from('bookings').delete().eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to delete booking' });
    }

    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
