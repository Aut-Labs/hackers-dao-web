/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerGithub from "common/assets/image/github-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerMedium from "common/assets/image/medium-social.svg";
import footerDocs from "common/assets/image/docs.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, Aut.`,
  social: [
    // {
    //   link: "https://github.com/Aut-Protocol",
    //   icon: footerGithub,
    // },
    {
      link: "https://docs.aut.id",
      icon: footerDocs,
    },
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
    },
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
