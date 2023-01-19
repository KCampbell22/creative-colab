export const Data = {
  posts: [
    {
      postId: "1",
      postDate: "2021-03-01",
      authorId: "user1",
      authorName: "John Doe",
      featured: ["user2", "user3"],
      featuredName: ["Jane Doe", "Bob Smith"],
      collaborative: true,
      content:
        "We've been working together on this project for weeks now, and we're finally ready to share it with the world. We hope you enjoy it as much as we do!",
      likes: 25,
      comments: [
        {
          userId: "user4",
          commentsDateTime: "2021-03-04 12:00:00",

          userName: "Sara Johnson",
          content: "This is amazing! I can't wait to read more.",
        },
        {
          userId: "user5",
          commentsDateTime: "2021-03-04 12:00:00",

          userName: "Mike Thompson",
          content:
            "The collaboration between you all is really impressive. Keep up the great work!",
        },
      ],
    },
    {
      postId: "2",
      postDate: "2021-03-02",
      authorId: "user6",
      authorName: "Emily Davis",
      featured: ["user7"],
      featuredName: ["Adam Brown"],
      collaborative: true,
      content:
        "We've been working together on this project for weeks now, and we're finally ready to share it with the world. We hope you enjoy it as much as we do!",
      likes: 20,
      comments: [
        {
          userId: "user8",
          commentsDateTime: "2021-03-04 12:00:00",

          userName: "Emma Rodriguez",
          content: "This is amazing! I can't wait to read more.",
        },
        {
          userId: "user9",
          commentsDateTime: "2021-03-04 12:00:00",

          userName: "Daniel Lee",
          content:
            "The collaboration between you all is really impressive. Keep up the great work!",
        },
      ],
    },
    {
      postId: "3",
      postDate: "2021-03-03",
      authorId: "user10",
      authorName: "Michael Smith",
      featured: ["user11", "user12"],
      featuredName: ["Jessica Wilson", "Jacob Garcia"],
      collaborative: true,
      content:
        "We've been working together on this project for weeks now, and we're finally ready to share it with the world. We hope you enjoy it as much as we do!",
      likes: 30,
      comments: [
        {
          commentsDateTime: "2021-03-03 12:00:00",
          userId: "user13",
          userName: "Amanda Rodriguez",
          content: "This is amazing! I can't wait to read more.",
        },
        {
          userId: "user14",
          commentsDateTime: "2021-03-03 12:00:00",
          userName: "David Martinez",
          content:
            "The collaboration between you all is really impressive. Keep up the great work!",
        },
      ],
    },
    {
      postId: "4",
      postDate: "2021-03-04",

      authorId: "user15",
      authorName: "Emily Thompson",
      collaborative: false,
      content:
        "Just finished writing a new short story. Here's the first chapter for you to check out.",
      likes: 15,
      comments: [
        {
          userId: "user16",
          commentsDateTime: "2021-03-04 12:00:00",
          userName: "Sophia Lee",
          content: "This is really good! I can't wait to read the rest.",
        },
        {
          userId: "user17",
          commentsDateTime: "2021-03-04 12:00:00",

          userName: "Madison White",
          content: "I love your writing style. Keep it up!",
        },
      ],
    },
  ],
};
