/*
  # Create bookings table for AutoCare Garage

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Customer name
      - `phone` (text) - Customer phone number
      - `email` (text) - Customer email address
      - `car_model` (text) - Model of the car to be serviced
      - `service_type` (text) - Type of service requested
      - `preferred_date` (date) - Customer's preferred service date
      - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz) - When the booking was created
      - `updated_at` (timestamptz) - When the booking was last updated

  2. Security
    - Enable RLS on `bookings` table
    - Add policy to allow anyone to insert bookings (public booking form)
    - Add policy for staff to view all bookings (future admin panel)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  car_model text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view bookings"
  ON bookings
  FOR SELECT
  TO anon
  USING (true);