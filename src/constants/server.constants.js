export default {
  app: {
    PORT: process.env.PORT || 8080,
    BASE_URL:
      process.env.APP_BASE_URL ||
      `http://localhost:${process.env.PORT || 8080}`,
  },
  mp: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    PLAN_ID: process.env.PLAN_ID,
    INIT_POINT: process.env.MP_INIT_POINT,
  },
  platform: {
    LOGIN_URL: process.env.PLATFORM_LOGIN_URL,
  },
};
