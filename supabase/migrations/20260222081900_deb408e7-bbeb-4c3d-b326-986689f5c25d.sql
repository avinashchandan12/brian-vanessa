
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  message TEXT,
  attending BOOLEAN NOT NULL,
  guest_names TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert RSVP" ON public.rsvps FOR INSERT WITH CHECK (true);
CREATE POLICY "No public reads" ON public.rsvps FOR SELECT USING (false);
