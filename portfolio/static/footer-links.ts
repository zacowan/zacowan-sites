export type Link = {
  label: string;
  href: string;
};

export const LINKEDIN_LINK = "https://www.linkedin.com/in/zacowan/";
export const GITHUB_LINK = "https://github.com/zacowan";

const FOOTER_LINKS: Array<Link> = [
  {
    label: "GitHub",
    href: GITHUB_LINK,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_LINK,
  },
];

export default FOOTER_LINKS;
