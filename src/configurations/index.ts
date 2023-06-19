export default () => ({
  port: process.env.PORT || 3001,
  db_host: process.env.DB_HOST || 'localhost',
  db_port: process.env.DB_PORT || 5432,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
});
