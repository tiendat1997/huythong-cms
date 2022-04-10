module.exports = ({ env }) => {
  return ({
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
      },
    },
  })
};
