import { supabase } from "./supabase";

export function listCategories(){
    return supabase.from('categories').select('*').order('nome');
}