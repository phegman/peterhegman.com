import Project from "./interfaces/project.interface";

const tsLogo = require("./assets/ts-logo.svg");
const wpLogo = require("./assets/wp-logo.svg");
const vueLogo = require("./assets/vue-logo.svg");
const laravelLogo = require("./assets/laravel-logo.svg");
const octoberLogo = require("./assets/october-logo.svg");

const technologies = {
  vue: {
    title: "Vue",
    slug: "vue",
    link: "https://vuejs.org/",
    logo: vueLogo,
  },
  ts: {
    title: "TypeScript",
    slug: "ts",
    link: "http://www.typescriptlang.org/",
    logo: tsLogo,
  },
  laravel: {
    title: "Laravel",
    slug: "laravel",
    link: "https://laravel.com/",
    logo: laravelLogo,
  },
  wp: {
    title: "Wordpress",
    slug: "wordpress",
    link: "https://wordpress.org/",
    logo: wpLogo,
  },
  october: {
    title: "OctoberCMS",
    slug: "october",
    link: "https://octobercms.com/",
    logo: octoberLogo,
  },
};

export const mapboxGlVue: Project = {
  title: "Mapbox GL JS Vue.js Component",
  description:
    "A simple lightweight (9kb/3kb gzipped) Mapbox GL JS Vue component. A great starting place when using Mapbox and Vue together.",
  builtWith: [technologies.vue, technologies.ts],
  projectLink: "https://www.npmjs.com/package/mapbox-gl-vue",
  gitHubLink: "https://github.com/phegman/vue-mapbox-gl",
};

export const fantasyEws: Project = {
  title: "Fantasy EWS",
  description:
    'A mountain bike fantasy game following the Enduro World Series. Create leagues, set your lineup, and compete against your friends each week. Run during the 2017 and 2018 seasons. Deprecated for the 2019 season in favor of <a target="_blank" rel="noopener noreferrer" href="https://www.pinkbike.com/contest/fantasy/enduro/">Pinkbike Fantasy Enduro.</a>',
  builtWith: [technologies.laravel, technologies.vue],
  projectLink: "https://fantasyews.com/",
};

export const animateVanillaJs: Project = {
  title: "Animate Vanilla JS",
  description:
    "A tiny (3kb/1kb gzipped) promise based animation function written in TypeScript and compiled down to vanilla JavaScript.",
  builtWith: [technologies.ts],
  projectLink: "https://www.npmjs.com/package/animate-vanilla-js",
  gitHubLink: "https://github.com/phegman/animate-vanilla-js",
};

export const vShowSlide: Project = {
  title: "v-show-slide",
  description:
    "A Vue.js directive used to show/hide an element in a sliding motion.",
  builtWith: [technologies.vue, technologies.ts],
  projectLink: "https://www.npmjs.com/package/v-show-slide",
  gitHubLink: "https://github.com/phegman/v-show-slide",
};

export const vScrollLock: Project = {
  title: "v-scroll-lock",
  description:
    "A Vue.js directive for locking the body scroll without breaking the scrolling of a target element (e.g. modal/lightbox/flyouts/nav-menus).",
  builtWith: [technologies.vue, technologies.ts],
  projectLink: "https://www.npmjs.com/package/v-show-slide",
  gitHubLink: "https://github.com/phegman/v-scroll-lock",
};

export const laravelDD: Project = {
  title: "Laravel DD for Wordpress",
  description:
    'A simple WordPress plugin that allows you to use <a target="_blank" rel="noopener noreferrer" href="https://laravel.com/docs/master/helpers#method-dd">Laravel\'s dd()</a> function.',
  builtWith: [technologies.wp],
  projectLink: "https://wordpress.org/plugins/laravel-dd/",
  gitHubLink: "https://github.com/phegman/wp-laravel-dd",
};

export const trailManager: Project = {
  title: "Trail Manager",
  description:
    "A WordPress plugin that allows the user to display trails (mountain bike, hiking, skiing, etc) in a network and easily update trail conditions and description from the WordPress backend. Backend interface is built using Vue.js.",
  builtWith: [technologies.wp, technologies.vue],
  projectLink: "https://wordpress.org/plugins/trail-manager/",
  gitHubLink: "https://github.com/phegman/wp-trail-manager",
};

export const quickResponsiveSlideshows: Project = {
  title: "Quick Responsive Slideshows",
  description: "An OctoberCMS plugin to easily create responsive slideshows.",
  builtWith: [technologies.october],
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
