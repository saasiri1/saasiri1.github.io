export type NewsType = "publication" | "position" | "award" | "milestone";

export type NewsItem = {
  year: string;
  content: string;
  type: NewsType;
};

export const news: NewsItem[] = [
  {
    year: "2026",
    content: "Started new position as Head of Engineering and Technology Department, King Khalid University, Saudi Arabia.",
    type: "position",
  },
  {
    year: "2026",
    content: "One paper was accepted in Computers & Security, Elsevier Journal 2026.",
    type: "publication",
  },
  {
    year: "2026",
    content: "One paper was accepted in IEEE Access Journal 2026.",
    type: "publication",
  },
  {
    year: "2025",
    content: "One paper was accepted in MDPI Electronics Journal 2025.",
    type: "publication",
  },
  {
    year: "2025",
    content: "One paper was accepted in Scientific Reports Journal 2025.",
    type: "publication",
  },
  {
    year: "2025",
    content: "One paper was accepted in MDPI Electronics Journal 2025.",
    type: "publication",
  },
  {
    year: "2025",
    content: "One survey paper was accepted in IEEE Access Journal 2025.",
    type: "publication",
  },
  {
    year: "2025",
    content: "Started new position as Consultant at the Center of Artificial Intelligence, King Khalid University, Saudi Arabia.",
    type: "position",
  },
  {
    year: "2024",
    content: "Started new position as Director of Programs and Academic Affairs at Applied College, King Khalid University, Muhayil Aseer, Saudi Arabia.",
    type: "position",
  },
  {
    year: "2024",
    content: "Started new position as Assistant Professor at King Khalid University, Muhayil Aseer, Saudi Arabia.",
    type: "position",
  },
  {
    year: "2024",
    content: "Received the Computer Science Department's Outstanding Graduate Research Award for the 2024 academic year.",
    type: "award",
  },
  {
    year: "2024",
    content: "One paper was accepted in Computers & Security, Elsevier Journal 2024.",
    type: "publication",
  },
  {
    year: "2024",
    content: "Passed Ph.D. defense on March 5, 2024 — Ph.D. in Computer Science, The University of Alabama.",
    type: "milestone",
  },
];
