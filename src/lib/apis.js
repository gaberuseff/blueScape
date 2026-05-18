import { supabase } from "./supabase";

export async function fetchYachts() {
    let { data, error } = await supabase
        .from('yachts')
        .select('*')

    if (error) {
        console.error("Error fetching yachts:", error);
        throw new Error("Failed to fetch yachts");
    }

    return data;
}