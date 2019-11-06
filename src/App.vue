<template>
  <div id="app" class="app">
    <contact-form v-show="$route.name === 'contact'" />
    <portfolio v-show="$route.name === 'portfolio'" />
    <div class="container">
      <header
        class="site-header row justify-content-between align-items-center"
      >
        <navigation />
        <div class="col-12 col-lg-auto name-wrap">
          <h1 class="my-name">Peter <strong>Hegman</strong></h1>
          <!-- /.tagline -->
        </div>
      </header>
      <computer />
      <featured-projects />
    </div>
    <!-- /.container -->
  </div>
</template>

<style lang="scss">
@import "./scss/app.scss";
</style>

<script lang="ts">
import Computer from "./components/Computer.vue";
import Portfolio from "./components/Portfolio.vue";
import Navigation from "./components/Navigation.vue";
import ContactForm from "./components/ContactForm.vue";
import { Component, Vue } from "vue-property-decorator";
import FeaturedProjects from "./components/FeaturedProjects.vue";

@Component({
  components: {
    ContactForm,
    Portfolio,
    Navigation,
    Computer,
    FeaturedProjects,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.app {
  background: linear-gradient(
    90deg,
    rgba(0, 15, 8, 1) 0%,
    rgba(11, 57, 84, 1) 100%
  );
  overflow: hidden;

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: 30px;
    padding-top: 20px;
  }
}

.my-name {
  color: $white;
  font-family: $logo-font;
  font-size: 36px;
  letter-spacing: 7px;
  margin: 20px 0 0;
  text-align: center;
  font-weight: 200;

  strong {
    font-weight: 400;
  }

  @include media-breakpoint-up(lg) {
    font-size: 53px;
    margin: 0;
    text-align: right;
  }
}
</style>
