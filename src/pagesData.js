export const pagesData = {
  0: {
    id: 0,
    title: "My page",
    // data will be fetched from server later
    editorData: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "My Page Title",
            level: 1,
          },
        },
        // {
        //   type: "image",
        //   data: {
        //     file: {
        //       url:
        //         "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
        //     },
        //     caption: "Roadster // tesla.com",
        //     withBorder: true,
        //     withBackground: false,
        //     stretched: false,
        //   },
        // },
        // {
        //   type: "linkTool",
        //   data: {
        //     link: "https://codex.so",
        //     meta: {
        //       title: "CodeX Team",
        //       site_name: "CodeX",
        //       description:
        //         "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
        //       image: {
        //         url: "https://codex.so/public/app/img/meta_img.png",
        //       },
        //     },
        //   },
        // },
      ],
    },
    // sub pages
    children: [],
  },
  1: {
    id: 1,
    title: "Work plan",
    // data will be fetched from server later
    editorData: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "Work Plane Title",
            level: 1,
          },
        },
      ],
    },
    // sub pages
    children: [
      {
        id: 2,
        title: "Work plan - Sub page",
        // data will be fetched from server later
        editorData: {
          time: Date.now(),
          blocks: [
            {
              type: "header",
              data: {
                text: "Sub page header",
                level: 1,
              },
            },
          ],
        },
        // sub pages
        children: [],
      },
    ],
  },
};
