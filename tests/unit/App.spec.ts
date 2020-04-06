import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";
import Portfolio from "@/components/Portfolio.vue";
import ContactForm from "@/components/ContactForm.vue";

describe("App", () => {
  it("shows portfolio when at the `portfolio` route", () => {
    const $route = {
      name: "portfolio",
    };

    const wrapper = shallowMount(App, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.find(Portfolio).isVisible()).toBeTruthy();
  });
});
