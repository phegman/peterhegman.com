<template>
  <nav class="navigation col-12 col-lg-auto">
    <a
      class="nav-item github-logo"
      href="https://github.com/phegman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/github-logo.svg" alt="Github Logo" />
      <span class="nav-text">GitHub</span>
    </a>
    <router-link
      :to="{ name: 'portfolio' }"
      class="nav-item portfolio"
      aria-controls="portfolio"
      :aria-expanded="$route.name === 'portfolio' ? 'true' : 'false'"
    >
      <img src="../assets/portfolio-logo.svg" alt="Portfolio" />
      <span class="nav-text">Portfolio</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(lg) {
    justify-content: flex-start;
  }

  .nav-item {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    text-align: center;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 30px;
    }

    img {
      transition: 0.3s;
      width: 50px;

      &:hover {
        transform: scale(1.05);
      }
    }

    .nav-text {
      color: $white;
      display: block;
      font-family: $header-font;
      margin-top: 7px;
    }
  }
}
</style>
