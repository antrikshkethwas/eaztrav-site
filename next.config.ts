import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets your phone open the dev server (npm run dev -- -H 0.0.0.0) at this
  // computer's Wi-Fi address. Only affects local development, not the live site.
  // If your computer's IP changes (check with ipconfig), update it here.
  allowedDevOrigins: ["192.168.29.60"],
};

export default nextConfig;
