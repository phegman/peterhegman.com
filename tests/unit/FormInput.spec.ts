import Vue from "vue";
import FormInput from "@/components/FormInput.vue";
import { shallowMount, Wrapper } from "@vue/test-utils";

describe("FormInput", () => {
  let textWrapper: Wrapper<Vue>;
  let emailWrapper: Wrapper<Vue>;
  let textareaWrapper: Wrapper<Vue>;

  beforeEach(() => {
    const defaultProps = {
      name: "foo",
      label: "bar",
      value: "",
      error: {
        show: false,
        message: "foo bar",
      },
    };

    textWrapper = shallowMount(FormInput, {
      propsData: {
        ...defaultProps,
        type: "text",
      },
    });

    emailWrapper = shallowMount(FormInput, {
      propsData: {
        ...defaultProps,
        type: "email",
      },
    });

    textareaWrapper = shallowMount(FormInput, {
      propsData: {
        ...defaultProps,
        type: "textarea",
      },
    });
  });

  it("renders input with correct name and ID", () => {
    const input = textWrapper.find("input");
    expect(input.attributes("name")).toBe("foo");
    expect(input.attributes("id")).toBe("foo");
  });

  it("renders a text input when passed `text` as type", () => {
    expect(textWrapper.find("input").attributes("type")).toBe("text");
  });

  it("renders an email input when passed `email` as type", () => {
    expect(emailWrapper.find("input").attributes("type")).toBe("email");
  });

  it("renders a textearea input when passed `textarea` as type", () => {
    expect(textareaWrapper.find("textarea").exists()).toBeTruthy();
  });

  it("text input emits `input` event when typed in", () => {
    textWrapper.find("input").setValue("foo");
    expect(textWrapper.emitted().input).toBeTruthy();
  });

  it("email input emits `input` event when typed in", () => {
    emailWrapper.find("input").setValue("foo");
    expect(emailWrapper.emitted().input).toBeTruthy();
  });

  it("textarea emits `input` event when typed in", () => {
    textareaWrapper.find("textarea").setValue("foo");
    expect(textareaWrapper.emitted().input).toBeTruthy();
  });

  it("has `has-input` class when value is set", () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        name: "foo",
        label: "bar",
        value: "baz",
        type: "text",
        error: {
          show: false,
          message: "foo bar",
        },
      },
    });

    expect(wrapper.find(".input-wrap").classes()).toContain("has-input");
  });

  it("has `has-focus` class when focused", async done => {
    textWrapper.find("input").trigger("focusin");
    await textWrapper.vm.$nextTick();
    expect(textWrapper.find(".input-wrap").classes()).toContain("is-focused");
    done();
  });
});
