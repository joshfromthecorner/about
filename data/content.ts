export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Product Designer at Brainbay",
        subTitle: "Hybrid",
        date: "jun 2025 - Present",
        description: "Improving the current platform and developing new products. Also performed a Design Sprint in december'25 for a new product. Brainbay is a sister company of NVM and makes a lot of data accessible and easy to understand for NVM real estate agents.",
      },
      {
        title: "Product Designer at Kiesraad",
        subTitle: "Remote",
        date: "nov 2025 - dec 2025",
        description: "From scratch designed a new election results platform for the Dutch Electoral Council. Troughout the process there were 3 user tests for validation.",
      },
      {
        title: "Product Designer AI at NVM",
        subTitle: "Remote",
        date: "sep 2025 - nov2025",
        description: "From scratch designed a new AI LLM assistant chat interface for NVM. Currently used by real estate agents to help them with their daily work. NVM has a lot of exclusive data about the Dutch housing market. (API's from Brainbay.) Famous LLM's like ChatGPT and Claude are not allowed to use this data.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Master's Degree in Computer Science",
        subTitle: "University of Paris",
        date: "2015 - 2016",
        description: "Specialized in web development.",
      },
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: "University of Paris",
        date: "2012 - 2015",
        description: "Specialized in web development.",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
