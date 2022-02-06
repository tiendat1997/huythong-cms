module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0a9793dfe82b132b1ca8749866b99a6'),
  },
});
