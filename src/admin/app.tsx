import AuthLogo from "./extensions/menu-logo.png";
import favicon from "./extensions/favicon.png";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    tutorials: false,
    notifications: { releases: false },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
