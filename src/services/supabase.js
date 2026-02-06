import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhrparsfzxynkqarfkqm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocnBhcnNmenh5bmtxYXJma3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MjcyMzcsImV4cCI6MjA4NDAwMzIzN30.hK9x0-y57UwLfI-EQ5-0ejHj-Jc4J78REMxtANn62fo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
