<template>
  <div class="featured-projects">
    <h2>Featued Projects</h2>
    <div class="row projects">
      <project
        v-for="project in projects"
        :key="project.title"
        class="col-md-6"
        v-bind="project"
      />
    </div>
    <!-- /.row projects -->
    <div class="btn-wrap">
      <router-link
        :to="{ name: 'portfolio' }"
        class="btn-white-ghost"
        aria-controls="portfolio"
        :aria-expanded="$route.name === 'portfolio' ? 'true' : 'false'"
      >
        View All Projects
      </router-link>
    </div>
    <!-- /.btn-wrap -->
  </div>
  <!-- /.featured-projects -->
</template>

<script lang="ts">
import Project from "./Project.vue";
import { mapboxGlVue, animateVanillaJs } from "../projects";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Project } })
export default class FeaturedProjects extends Vue {
  projects = [animateVanillaJs, mapboxGlVue];
}
</script>

<style lang="scss" scoped>
.featured-projects {
  > h2 {
    color: $white;
    text-align: center;
  }

  .project {
    @include media-breakpoint-up(md) {
      margin-top: 0;
    }

    &:first-child {
      @include media-breakpoint-down(sm) {
        margin-top: 0;
      }
    }
  }

  .btn-wrap {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
