import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables", {
    url: supabaseUrl ? "✓ Present" : "✗ Missing",
    key: supabaseAnonKey ? "✓ Present" : "✗ Missing",
  });
  throw new Error("Missing Supabase environment variables");
}

// Validate URL format
if (!supabaseUrl.startsWith("https://")) {
  console.error("Invalid Supabase URL format:", supabaseUrl);
  throw new Error("Invalid Supabase URL format");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "pkce",
    // Enhanced error handling for token issues
    debug: false, // Set to true only in development if needed
    // Custom storage implementation with error handling could go here
  },
  global: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  // Add request interceptor for better error handling
  // This will be handled by our global error handlers instead
});

// Enhanced error logging for Supabase operations
if (typeof window !== "undefined") {
  // Override the original auth methods to add better error logging
  const originalSignOut = supabase.auth.signOut.bind(supabase.auth);
  const originalGetSession = supabase.auth.getSession.bind(supabase.auth);
  const originalGetUser = supabase.auth.getUser.bind(supabase.auth);

  // Enhanced signOut with error handling
  supabase.auth.signOut = async (options?: any) => {
    try {
      const result = await originalSignOut(options);
      return result;
    } catch (error) {
      console.error("Supabase signOut exception:", error);
      throw error;
    }
  };

  // Enhanced getSession with error handling
  supabase.auth.getSession = async () => {
    try {
      const result = await originalGetSession();
      return result;
    } catch (error) {
      console.error("Supabase getSession exception:", error);
      throw error;
    }
  };

  // Enhanced getUser with error handling
  supabase.auth.getUser = async (jwt?: string) => {
    try {
      const result = await originalGetUser(jwt);
      return result;
    } catch (error) {
      console.error("Supabase getUser exception:", error);
      throw error;
    }
  };
}

// Test connection on initialization
const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .schema("forms")
      .from("agents")
      .select("count")
      .limit(1);
    if (error) {
      console.error("Supabase connection test failed:", error);
    } else {
    }

    // Testar configuração do Realtime
    const channel = supabase.channel("realtime-test");
    channel
      .on("system", { event: "test" }, (payload) => {})
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          // Limpar o canal de teste após confirmar que está funcionando
          setTimeout(() => {
            channel.unsubscribe();
          }, 1000);
        }
      });
  } catch (err) {
    console.error("Supabase connection test error:", err);
  }
};

// Only test in browser environment
if (typeof window !== "undefined") {
  testConnection();
}
