<template>
  <div class="project">
    <div class="project-wrap">
      <div class="content-wrap">
        <h3 class="title">{{ title }}</h3>
        <!-- /.title -->
        <p class="description">{{ description }}</p>
        <!-- /.description -->
      </div>
      <!-- /.content-wrap -->
      <div class="built-with">
        <h4>Built With</h4>
        <a
          v-for="technology in builtWith"
          :key="technology.slug"
          :href="technology.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :class="`${technology.slug}-logo`"
            :src="technology.logo"
            :alt="`${technology.title} Logo`"
          />
        </a>
      </div>
      <!-- /.built-with -->
      <div class="links">
        <a
          v-if="projectLink"
          class="project-link"
          :href="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/portfolio-link.svg" alt="" aria-hidden="true" />
          <span>Project Link</span>
        </a>
        <a
          v-if="gitHubLink"
          class="github-link"
          :href="gitHubLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/github-logo-portfolio.svg"
            alt=""
            aria-hidden="true"
          />
          <span>GitHub</span>
        </a>
      </div>
      <!-- /.links -->
    </div>
    <!-- /.project-wrap -->
  </div>
  <!-- /.project -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop({ required: true }) readonly title!: string;
  @Prop({ required: true }) readonly description!: string;
  @Prop({ required: true }) readonly builtWith!: {
    title: string;
    slug: string;
    link: string;
    logo: string;
  }[];
  @Prop() readonly projectLink!: string;
  @Prop() readonly gitHubLink!: string;
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  margin-top: 15px;

  @include media-breakpoint-up(lg) {
    margin-top: 30px;
  }

  .project-wrap {
    background-color: $white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 125px;
    position: relative;
    width: 100%;

    @include media-breakpoint-up(sm) {
      padding: 20px;
    }

    @include media-breakpoint-up(lg) {
      padding: 30px;
    }
  }

  .title {
    margin-top: 0;
  }

  .built-with {
    margin-top: auto;

    h4 {
      margin: 10px 0 20px;
    }

    a {
      display: inline-block;
      vertical-align: middle;

      &:not(:last-child) {
        margin-right: 10px;
      }

      img {
        display: block;
      }
    }

    .wordpress-logo {
      width: 150px;
    }

    .vue-logo {
      width: 75px;
    }

    .ts-logo {
      width: 65px;
    }

    .october-logo {
      width: 150px;
    }
  }

  .links {
    bottom: 20px;
    left: 20px;
    position: absolute;

    @include media-breakpoint-up(sm) {
      left: initial;
      right: 20px;
    }

    @include media-breakpoint-up(lg) {
      right: 30px;
    }

    a {
      display: inline-block;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }

      img {
        transition: 0.3s;
      }

      span {
        color: $black;
        display: block;
        font-family: $header-font;
        margin-top: 5px;
      }
    }
  }
}
</style>
