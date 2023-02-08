module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
};
