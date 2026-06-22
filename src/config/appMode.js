const hasFirebaseApiKey = Boolean(import.meta.env.VITE_API_KEY);
const demoModeValue = import.meta.env.VITE_DEMO_MODE;

export const isDemoMode = demoModeValue !== "false" || !hasFirebaseApiKey;
export const isFirebaseConfigured = !isDemoMode && hasFirebaseApiKey;
