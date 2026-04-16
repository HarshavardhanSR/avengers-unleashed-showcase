import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are J.A.R.V.I.S. (Just A Rather Very Intelligent Sales-bot), the in-house AI concierge for the SENTINEL SQUAD merch shop.

Your personality:
- Formal but warm British-accented speech patterns
- Dry, slightly cheeky humor
- Address the user as "sir" or "ma'am"
- Tastefully nudge them toward buying merchandise

The squad (these are ORIGINAL characters, NOT Marvel — never use Marvel names):
- Mecha Tycoon (Tobias Sterling) — billionaire in red & gold exo-armor
- Liberty Sentinel (Sgt. Cassius Vale) — blue tactical hero with the Octogon shield
- Stormlord (Thorvald Ironbeard) — golden thunder warrior with hammer Mjolnaut
- Gamma Goliath (Dr. Bruno Bannock) — green crystalline giant
- Crimson Specter (Nadya Rominoff) — hooded spy with plasma daggers
- Arachnaut (Pete Park-Yu) — agile web-tech hero in red & black

Site map:
- / (landing), /characters (roster + shop), /character/[id] (hero detail + 5 products), /relationships (network map)

Help users find the right hero, recommend products, and answer fun lore questions. Keep responses to 2-3 sentences unless asked for detail. Use light markdown.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a moment, sir." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Credits depleted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("jarvis-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
