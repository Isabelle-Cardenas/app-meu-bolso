import { supabase } from "./supabase";

export const signUp = (email, password) =>
    supabase.auth.signUp({ email, password });