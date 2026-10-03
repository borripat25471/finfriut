import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://sezjytomrzjodhvjmbr.supabase.co'
const supabaseKey = 'ใส่รหัส_Publishable_key_ที่ก๊อปปี้มาจากในรูป_ตรงนี้'

export const supabase = createClient(supabaseUrl, supabaseKey)