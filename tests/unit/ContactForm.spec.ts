import Vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import ContactForm from "@/components/ContactForm.vue";
import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ContactForm", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(ContactForm, {
      localVue,
      router,
    });
  });

  it("submitting with empty fields shows client side errors", () => {
    wrapper.find("form").trigger("submit");
    const errors = wrapper.vm.$data.errors;
    expect(Object.keys(errors).every(field => errors[field].show)).toBeTruthy();
  });

  it("submitting form successfully shows success message", async done => {
    Element.prototype.scrollTo = () => {};
    wrapper.setData({
      inputs: {
        name: "foo",
        email: "bar@baz.com",
        message: "foo bar baz",
      },
    });

    mockedAxios.post.mockResolvedValue({
      data: {},
    });
    wrapper.find("form").trigger("submit");

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const notification = wrapper.find(".notification");
    expect(notification.exists()).toBeTruthy();
    expect(notification.text()).toEqual(
      "Message Sent! I will be in touch shortly."
    );
    done();
  });

  it("checks if email is valid", () => {
    wrapper.setData({
      inputs: {
        name: "foo",
        email: "bar@baz",
        message: "foo bar baz",
      },
    });

    (wrapper.vm as any).submitForm();
    expect(wrapper.vm.$data.isEmailValid).toBeFalsy();
  });

  it("displays error if API returns error", async done => {
    Element.prototype.scrollTo = () => {};
    wrapper.setData({
      inputs: {
        name: "foo",
        email: "bar@baz.com",
        message: "foo bar baz",
      },
    });

    mockedAxios.post.mockRejectedValue(new Error());
    wrapper.find("form").trigger("submit");

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const notification = wrapper.find(".notification");
    expect(notification.exists()).toBeTruthy();
    expect(notification.text()).toEqual(
      "There was an error sending the email, please try again"
    );
    done();
  });
});
