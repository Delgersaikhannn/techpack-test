/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "mn", "zh"],
    defaultLocale: "en",
  },
  trailingSlash: true,
};

export default nextConfig;
