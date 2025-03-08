import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yrrohuxhbkbeafexitqh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlycm9odXhoYmtiZWFmZXhpdHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODk3OTEsImV4cCI6MjA1NjY2NTc5MX0.UtijxIWk7HasQVDwq67ukwvW6TeWU5UXAFP15hFvEsk'
export const supabase = createClient(supabaseUrl, supabaseKey)
