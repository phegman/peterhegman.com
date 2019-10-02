<template>
  <transition name="slide-down">
    <div
      id="portfolio"
      ref="portfolio"
      class="portfolio"
      role="dialog"
      aria-labelledby="portfolio-title"
      :aria-hidden="$route.name !== 'portfolio'"
    >
      <div class="container">
        <router-link
          :to="{ name: 'home' }"
          aria-label="Close contact form"
          class="close"
        >
          <img
            src="../assets/close-icon-white.svg"
            alt=""
            aria-hidden="true"/></router-link
        ><!-- /.close -->
        <h2 id="portfolio-title">Portfolio</h2>
        <div class="projects row">
          <project
            v-for="project in projects"
            :key="project.title"
            class="col-lg-6"
            v-bind="project"
          />
        </div>
        <!-- /.projects -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.portfolio -->
  </transition>
</template>

<script lang="ts">
import projects from "../projects";
import { Route } from "vue-router";
import Project from "./Project.vue";
import { FocusTrap } from "focus-trap";
import createFocusTrap from "focus-trap";
import { Component, Watch, Vue } from "vue-property-decorator";
import ProjectInterface from "../interfaces/project.interface";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

@Component({ components: { Project } })
export default class Portfolio extends Vue {
  private focusTrap!: FocusTrap;

  projects = projects;

  /**
   * Watch $route variable so we can activate/deactivate
   * focus trap and add/remove event handler responsible
   * for closing when escape key is pressed
   */
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(to: Route, from: Route) {
    if (to && to.name === "portfolio") {
      if (this.focusTrap && this.$refs.portfolio) {
        this.focusTrap.activate();
        disableBodyScroll(this.$refs.portfolio as HTMLElement);
      }
      document.addEventListener("keyup", this.handleEscapeKey);
    }

    if (from && from.name === "portfolio") {
      if (this.focusTrap && this.$refs.portfolio) {
        this.focusTrap.deactivate();
        enableBodyScroll(this.$refs.portfolio as HTMLElement);
      }
      document.removeEventListener("keyup", this.handleEscapeKey);
    }
  }

  /**
   * Called when component is mounted
   */
  mounted() {
    this.focusTrap = createFocusTrap(this.$refs.portfolio as HTMLElement);

    if (this.$route.name === "portfolio") {
      this.focusTrap.activate();
      disableBodyScroll(this.$refs.portfolio as HTMLElement);
    }
  }

  /**
   * Handle keyup event and check if escape key was pressed
   */
  handleEscapeKey(event: KeyboardEvent) {
    const key = event.key || event.keyCode;

    if (key === "Escape" || key === "Esc" || key === 27) {
      this.$router.push({ name: "home" });
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  -webkit-overflow-scrolling: touch;
  background-color: $primary;
  height: 100vh;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;

  &.slide-down-enter-active,
  &.slide-down-leave-active {
    transition: 0.5s ease;
  }

  &.slide-down-leave-to,
  &.slide-down-enter {
    transform: translateY(-100%);
  }

  &.slide-down-enter-to {
    transform: none;
  }

  .container {
    position: relative;
    padding-bottom: 30px;
    padding-top: 30px;

    @include media-breakpoint-up(lg) {
      padding-bottom: 50px;
      padding-top: 50px;
    }

    > h2 {
      color: $white;
      margin: 0;
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 35px;
    padding: 5px;
    transition: transform 0.3s;

    @include media-breakpoint-up(lg) {
      top: 65px;
    }

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 25px;
      display: block;
    }
  }
}
</style>
