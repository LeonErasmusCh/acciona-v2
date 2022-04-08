module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f6feecfbb7b4bef95ff071c6cd7bc0e5'),
  },
});
