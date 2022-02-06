'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const { transformArgs, getContentTypeArgs } = strapi
      .plugin("graphql")
      .service("builders").utils;
    const extensionService = strapi.plugin("graphql").service("extension");

    const extension = ({ nexus }) => ({
      // Nexus
      types: [
        // nexus.extendType({
        //   type: "Query",
        //   definition: (t) => {
        //     t.field("greetings", {
        //       type: "String",
        //       args: { name: nexus.stringArg({ default: "World" }) },
        //       resolve: (root, args, ctx) => `Hello ${args.name}`
        //     });
        //   }
        // }),
        // nexus.extendType({
        //   type: "Query",
        //   definition(t) {
        //     t.field("findBySlug", {
        //       type: "MessageEntityResponse",
        //       args: { slug: nexus.stringArg() },
        //       async resolve(parent, args, ctx) {
        //         const transformedArgs = transformArgs(args, {
        //           contentType:
        //             strapi.contentTypes["api::message.message"],
        //           usePagination: false
        //         });
        //         // console.log(`transformedArgs`, transformedArgs);

        //         const results = await strapi.entityService.findMany(
        //           "api::message.message",
        //           {
        //             filters: transformedArgs
        //           }
        //         );
        //         if (results.length > 0) {
        //           return {
        //             value: results[0]
        //           };
        //         } else {
        //           throw new Error(ctx.koaContext.response.message);
        //         }
        //       }
        //     });
        //   }
        // })
      ],

      resolversConfig: {
        "Query.greetings": {
          auth: false
        },
        "Query.findBySlug": {
          auth: false
        }
      }
    });

    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
