import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {},
    client: {
        NEXT_PUBLIC_SUPABASE_URL: z.string().min(10),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10),
    },
    // Client variables need to be explicitly passed to the runtime environment in order to be available in the browser
    experimental__runtimeEnv: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
});