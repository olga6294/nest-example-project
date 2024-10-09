export const configuration = () => {
  const config = {
    PORT: process.env.PORT,
    STAR_WARS_API: process.env.STAR_WARS_API
  }

  Object.keys(config).forEach((key: string) => {
    if(config[key] === undefined)
      throw new Error(`Missing env variable value for ${key}`);
  });

  return config;
}
