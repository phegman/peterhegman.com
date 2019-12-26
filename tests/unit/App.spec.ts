import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";
import Portfolio from "@/components/Portfolio.vue";
import ContactForm from "@/components/ContactForm.vue";

describe("App", () => {
  it("shows contact form when at the `contact` route", () => {
    const $route = {
      name: "contact",
    };

    const wrapper = shallowMount(App, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.find(ContactForm).isVisible()).toBeTruthy();
    expect(wrapper.find(Portfolio).isVisible()).toBeFalsy();
  });

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
    expect(wrapper.find(ContactForm).isVisible()).toBeFalsy();
  });
});
