// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uqaizinmxieqpgdmstow.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxYWl6aW5teGllcXBnZG1zdG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODQwNjIsImV4cCI6MjA2MzU2MDA2Mn0.G3c7j2m4evENil34B0BG47wVtzgxWdWUmGe0WGNBYJM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);