const env = process.env;
const config = {
    db: {
        url: env.DATABASE_URL
    }
};

export default config;
