import Vue from "vue";
import Project from "@/components/Project.vue";
import { shallowMount, Wrapper } from "@vue/test-utils";

describe("Project", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(Project, {
      propsData: {
        title: "foo",
        description: "bar",
        builtWith: [
          {
            title: "foo",
            slug: "foo",
            link: "foobar.com",
            logo: "foo.svg",
          },
        ],
        projectLink: "project-link.com",
        gitHubLink: "github.com",
      },
    });
  });

  it("displays title", () => {
    expect(wrapper.find(".title").text()).toEqual("foo");
  });

  it("displays description", () => {
    expect(wrapper.find(".description").text()).toEqual("bar");
  });

  it('displays a "built with section"', () => {
    const builtWithSection = wrapper.find(".built-with");
    expect(builtWithSection.exists()).toBeTruthy();
    expect(builtWithSection.find("a").attributes("href")).toEqual("foobar.com");
    expect(builtWithSection.find("img").attributes("src")).toEqual("foo.svg");
    expect(builtWithSection.find("img").attributes("alt")).toEqual("foo Logo");
  });

  it("displays project link", () => {
    const projectLink = wrapper.find(".project-link");
    expect(projectLink.exists()).toBeTruthy();
    expect(projectLink.attributes("href")).toEqual("project-link.com");
  });

  it("displays GitHub link", () => {
    const githubLink = wrapper.find(".github-link");
    expect(githubLink.exists()).toBeTruthy();
    expect(githubLink.attributes("href")).toEqual("github.com");
  });
});
