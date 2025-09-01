/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
    localeDetection: true
  }
};
export default nextConfig;
