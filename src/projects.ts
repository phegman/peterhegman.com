import Project from "./interfaces/project.interface";

const tsLogo = require("./assets/ts-logo.svg");
const wpLogo = require("./assets/wp-logo.svg");
const vueLogo = require("./assets/vue-logo.svg");
const laravelLogo = require("./assets/laravel-logo.svg");
const octoberLogo = require("./assets/october-logo.svg");

export const mapboxGlVue: Project = {
  title: "Mapbox GL JS Vue.js Component",
  description:
    "A simple lightweight (9kb/3kb gzipped) Mapbox GL JS Vue component. A great starting place when using Mapbox and Vue together",
  builtWith: [
    {
      title: "Vue",
      slug: "vue",
      link: "https://vuejs.org/",
      logo: vueLogo,
    },
    {
      title: "TypeScript",
      slug: "ts",
      link: "http://www.typescriptlang.org/",
      logo: tsLogo,
    },
  ],
  projectLink: "https://www.npmjs.com/package/mapbox-gl-vue",
  gitHubLink: "https://github.com/phegman/vue-mapbox-gl",
};

export const fantasyEws: Project = {
  title: "Fantasy EWS",
  description:
    'A mountain bike fantasy game following the Enduro World Series. Create leagues, set your lineup, and compete against your friends each week. Run during the 2017 and 2018 seasons. Deprecated for the 2019 season in favor of <a target="_blank" rel="noopener noreferrer" href="https://www.pinkbike.com/contest/fantasy/enduro/">Pinkbike Fantasy Enduro.</a>',
  builtWith: [
    {
      title: "Laravel",
      slug: "laravel",
      link: "https://laravel.com/",
      logo: laravelLogo,
    },
    {
      title: "Vue",
      slug: "vue",
      link: "https://vuejs.org/",
      logo: vueLogo,
    },
  ],
  projectLink: "https://fantasyews.com/",
};

export const animateVanillaJs: Project = {
  title: "Animate Vanilla JS",
  description:
    "A tiny (3kb/1kb gzipped) promise based animation function written in TypeScript and compiled down to vanilla JavaScript.",
  builtWith: [
    {
      title: "TypeScript",
      slug: "ts",
      link: "http://www.typescriptlang.org/",
      logo: tsLogo,
    },
  ],
  projectLink: "https://www.npmjs.com/package/animate-vanilla-js",
  gitHubLink: "https://github.com/phegman/animate-vanilla-js",
};

export const vShowSlide: Project = {
  title: "v-show-slide",
  description:
    "A Vue.js directive used to show/hide an element in a sliding motion.",
  builtWith: [
    {
      title: "Vue",
      slug: "vue",
      link: "https://vuejs.org/",
      logo: vueLogo,
    },
    {
      title: "TypeScript",
      slug: "ts",
      link: "http://www.typescriptlang.org/",
      logo: tsLogo,
    },
  ],
  projectLink: "https://www.npmjs.com/package/v-show-slide",
  gitHubLink: "https://github.com/phegman/v-show-slide",
};

export const vScrollLock: Project = {
  title: "v-scroll-lock",
  description:
    "A Vue.js directive for locking the body scroll without breaking the scrolling of a target element (e.g. modal/lightbox/flyouts/nav-menus).",
  builtWith: [
    {
      title: "Vue",
      slug: "vue",
      link: "https://vuejs.org/",
      logo: vueLogo,
    },
    {
      title: "TypeScript",
      slug: "ts",
      link: "http://www.typescriptlang.org/",
      logo: tsLogo,
    },
  ],
  projectLink: "https://www.npmjs.com/package/v-show-slide",
  gitHubLink: "https://github.com/phegman/v-scroll-lock",
};

export const laravelDD: Project = {
  title: "Laravel DD for Wordpress",
  description:
    'A simple WordPress plugin that allows you to use <a target="_blank" rel="noopener noreferrer" href="https://laravel.com/docs/master/helpers#method-dd">Laravel\'s dd()</a> function.',
  builtWith: [
    {
      title: "Wordpress",
      slug: "wordpress",
      link: "https://wordpress.org/",
      logo: wpLogo,
    },
  ],
  projectLink: "https://wordpress.org/plugins/laravel-dd/",
  gitHubLink: "https://github.com/phegman/wp-laravel-dd",
};

export const trailManager: Project = {
  title: "Trail Manager",
  description:
    "A WordPress plugin that allows the user to display trails (mountain bike, hiking, skiing, etc) in a network and easily update trail conditions and description from the WordPress backend. Backend interface is built using Vue.js.",
  builtWith: [
    {
      title: "Wordpress",
      slug: "wordpress",
      link: "https://wordpress.org/",
      logo: wpLogo,
    },
    {
      title: "Vue",
      slug: "vue",
      link: "https://vuejs.org/",
      logo: vueLogo,
    },
  ],
  projectLink: "https://wordpress.org/plugins/trail-manager/",
  gitHubLink: "https://github.com/phegman/wp-trail-manager",
};

export const quickResponsiveSlideshows: Project = {
  title: "Quick Responsive Slideshows",
  description: "An OctoberCMS plugin to easily create responsive slideshows.",
  builtWith: [
    {
      title: "OctoberCMS",
      slug: "october",
      link: "https://octobercms.com/",
      logo: octoberLogo,
    },
  ],
  projectLink: "https://octobercms.com/plugin/peterhegman-slickslider",
  gitHubLink: "https://github.com/phegman/October-CMS-Slick-Slider",
};

const projects: Project[] = [
  mapboxGlVue,
  animateVanillaJs,
  vShowSlide,
  vScrollLock,
  fantasyEws,
  laravelDD,
  trailManager,
  quickResponsiveSlideshows,
];

export default projects;
