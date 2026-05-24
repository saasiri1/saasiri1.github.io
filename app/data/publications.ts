export type Publication = {
  year: string;
  venue: string;
  content: string;
  url: string;
  type: 'journal' | 'conference';
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    year: "2026",
    venue: "Computers & Security (Elsevier)",
    content: "Paper accepted in Computers & Security, Elsevier Journal.",
    url: "https://doi.org/10.1016/j.cose.2026.104909",
    type: "journal",
    featured: true,
  },
  {
    year: "2026",
    venue: "IEEE Access",
    content: "Paper accepted in IEEE Access Journal.",
    url: "https://doi.org/10.1109/ACCESS.2026.3673632",
    type: "journal",
  },
  {
    year: "2025",
    venue: "MDPI Electronics",
    content: "Paper accepted in MDPI Electronics Journal.",
    url: "https://doi.org/10.3390/electronics14183725",
    type: "journal",
  },
  {
    year: "2025",
    venue: "IEEE Access",
    content: "Survey paper accepted in IEEE Access Journal.",
    url: "https://doi.org/10.1109/access.2025.3556187",
    type: "journal",
  },
  {
    year: "2025",
    venue: "Scientific Reports (Nature)",
    content: "Paper accepted in Scientific Reports Journal.",
    url: "https://doi.org/10.1038/s41598-025-01588-w",
    type: "journal",
    featured: true,
  },
  {
    year: "2025",
    venue: "MDPI Electronics",
    content: "Paper published in MDPI Electronics Journal.",
    url: "https://doi.org/10.3390/electronics14071245",
    type: "journal",
  },
  {
    year: "2024",
    venue: "Computers & Security (Elsevier)",
    content: "Paper accepted in Computers & Security, Elsevier Journal.",
    url: "https://doi.org/10.1016/j.cose.2024.103843",
    type: "journal",
    featured: true,
  },
  {
    year: "2024",
    venue: "ACMSE 2024",
    content: "Paper accepted at ACM Southeast Conference (ACMSE) 2024.",
    url: "https://doi.org/10.1145/3603287.3651193",
    type: "conference",
  },
  {
    year: "2023",
    venue: "MDPI Electronics",
    content: "Paper published in MDPI Electronics Journal.",
    url: "https://www.mdpi.com/2607556",
    type: "journal",
  },
  {
    year: "2023",
    venue: "ACMSE 2023",
    content: "Paper published at ACM Southeast Conference (ACMSE) 2023.",
    url: "https://doi.org/10.1145/3564746.3587004",
    type: "conference",
  },
  {
    year: "2023",
    venue: "IEEE Access",
    content: "Paper published in IEEE Access Journal.",
    url: "https://ieeexplore.ieee.org/abstract/document/10019269",
    type: "journal",
  },
  {
    year: "2022",
    venue: "MDPI Electronics",
    content: "Paper published in MDPI Electronics Journal.",
    url: "https://www.mdpi.com/1629400",
    type: "journal",
  },
  {
    year: "2022",
    venue: "ACMSE 2022",
    content: "Paper published at ACM Southeast Conference (ACMSE) 2022.",
    url: "https://dl.acm.org/doi/abs/10.1145/3476883.3520201",
    type: "conference",
  },
  {
    year: "2021",
    venue: "KDD 2021 (SIGKDD)",
    content: "Paper published at ACM SIGKDD Conference on Knowledge Discovery and Data Mining.",
    url: "https://dl.acm.org/doi/abs/10.1145/3447548.3467301",
    type: "conference",
    featured: true,
  },
];
