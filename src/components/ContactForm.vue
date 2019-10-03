<template>
  <transition name="slide-right">
    <div
      id="contact-form"
      ref="contactForm"
      class="contact-form"
      role="dialog"
      aria-labelledby="contact-form-title"
      :aria-hidden="$route.name !== 'contact'"
    >
      <router-link
        :to="{ name: 'home' }"
        aria-label="Close contact form"
        class="close"
      >
        <img
          src="../assets/close-icon.svg"
          alt=""
          aria-hidden="true"/></router-link
      ><!-- /.close -->
      <transition name="fade">
        <button
          v-if="notification.show"
          class="notification"
          :class="'notification-' + notification.status"
          @click="closeNotification"
        >
          {{ notification.message }}
        </button>
      </transition>
      <h2 id="contact-form-title">Contact</h2>
      <form
        action="https://formspree.io/phegman@icloud.com"
        method="POST"
        novalidate
        @submit.prevent="submitForm"
      >
        <form-input
          v-model="inputs.name"
          name="name"
          label="Your Name"
          type="text"
          :error="errors.name"
        />
        <form-input
          v-model="inputs.email"
          name="email"
          label="Your Email"
          type="email"
          :error="errors.email"
        />
        <form-input
          v-model="inputs.message"
          name="email"
          label="Your Message"
          type="textarea"
          :error="errors.message"
        />
        <input
          v-model="inputs._gotcha"
          type="text"
          name="_gotcha"
          style="display:none"
        />
        <button
          class="btn-primary btn-submit"
          :class="{ loading: sendingEmail }"
          :disabled="sendingEmail"
          type="submit"
          :value="sendingEmail ? '' : 'Send'"
        >
          <div v-show="sendingEmail" class="uil-ring-css"><div></div></div>
          <span v-show="!sendingEmail">Send</span>
        </button>
      </form>
    </div>
    <!-- /.contact-form -->
  </transition>
</template>

<script lang="ts">
import axios from "axios";
import { Route } from "vue-router";
import { FocusTrap } from "focus-trap";
import FormInput from "./FormInput.vue";
import createFocusTrap from "focus-trap";
import InputError from "../interfaces/input-error.interface";
import { Component, Watch, Vue } from "vue-property-decorator";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

@Component({ components: { FormInput } })
export default class ContactForm extends Vue {
  private focusTrap!: FocusTrap;

  errors: { [key: string]: InputError } = {
    name: {
      show: false,
      message: "Your name is required",
    },
    email: {
      show: false,
      message: "Please enter a vaild email address",
    },
    message: {
      show: false,
      message: "Your message is required",
    },
  };

  inputs: { [key: string]: string } = {
    name: "",
    email: "",
    message: "",
    _gotcha: "",
  };

  notification: {
    status: "success" | "error";
    show: boolean;
    message: string;
  } = {
    show: false,
    status: "success",
    message: "Message Sent! I will be in touch shortly.",
  };

  sendingEmail: boolean = false;

  /**
   * Watch $route variable so we can activate/deactivate
   * focus trap and add/remove event handler responsible
   * for closing when escape key is pressed
   */
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(to: Route, from: Route) {
    if (to && to.name === "contact") {
      if (this.focusTrap && this.$refs.contactForm) {
        this.focusTrap.activate();
        disableBodyScroll(this.$refs.contactForm as HTMLElement);
      }
      document.addEventListener("keyup", this.handleEscapeKey);
      document.addEventListener("click", this.handleClickOutside);
    }

    if (from && from.name === "contact") {
      if (this.focusTrap && this.$refs.contactForm) {
        this.focusTrap.deactivate();
        enableBodyScroll(this.$refs.contactForm as HTMLElement);
      }
      document.removeEventListener("keyup", this.handleEscapeKey);
      document.removeEventListener("click", this.handleClickOutside);
    }
  }

  /**
   * Called when component is mounted
   */
  mounted() {
    this.focusTrap = createFocusTrap(this.$refs.contactForm as HTMLElement, {
      allowOutsideClick: () => true,
    });

    if (this.$route.name === "contact") {
      this.focusTrap.activate();
      disableBodyScroll(this.$refs.contactForm as HTMLElement);
    }
  }

  /**
   * Computed prop
   * Check if there are form errors
   */
  get hasErrors(): boolean {
    return Object.keys(this.errors).some(input => this.errors[input].show);
  }

  /**
   * Computed prop
   * Check if email is valid
   */
  get isEmailValid(): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.inputs.email);
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

  /**
   * Handle click outside contact form
   */
  handleClickOutside(event: MouseEvent) {
    if (
      event.target &&
      !(event.target as HTMLElement).closest("#contact-nav-item") &&
      !(this.$refs.contactForm as HTMLElement).contains(event.target as Node)
    ) {
      this.$router.push({ name: "home" });
    }
  }

  /**
   * Submit contact form
   */
  async submitForm(event: Event) {
    this.errors.name.show = this.inputs.name === "";
    this.errors.email.show = !this.isEmailValid;
    this.errors.message.show = this.inputs.message === "";

    if (!this.hasErrors) {
      const data = {
        name: this.inputs.name,
        _replyto: this.inputs.email,
        message: this.inputs.message,
      };

      this.sendingEmail = true;
      try {
        const response = await axios.post(
          "https://formspree.io/phegman@icloud.com",
          data
        );
        this.sendingEmail = false;
        this.notification.show = true;
        setTimeout(() => {
          this.notification.show = false;
        }, 5000);
        (this.$refs.contactForm as HTMLElement).scrollTo({
          top: 0,
          behavior: "smooth",
        });

        //Reset fields
        for (const input in this.inputs) {
          this.inputs[input] = "";
        }
      } catch (error) {
        this.sendingEmail = false;
        this.notification = {
          show: true,
          status: "error",
          message: "There was an error sending the email, please try again",
        };
        setTimeout(() => {
          this.notification.show = false;
        }, 5000);
        (this.$refs.contactForm as HTMLElement).scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }

  /**
   * Close notification, called when notification is clicked
   */
  closeNotification(): void {
    this.notification.show = false;
  }
}
</script>

<style scoped lang="scss">
@keyframes uil-ring-anim {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.contact-form {
  -webkit-overflow-scrolling: touch;
  background-color: #eaeaea;
  bottom: 0;
  box-shadow: $shadow-2;
  overflow: auto;
  padding: 50px 25px 25px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 5;

  @include media-breakpoint-up(lg) {
    padding: 35px 50px 25px;
    width: 500px;
  }

  &.slide-right-enter-active,
  &.slide-right-leave-active {
    transition: 0.4s ease;
  }

  &.slide-right-leave-to,
  &.slide-right-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.slide-right-enter-to {
    opacity: 1;
    transform: none;
  }

  .close {
    cursor: pointer;
    left: 20px;
    position: absolute;
    top: 20px;
    padding: 5px;
    background-color: transparent;
    border: 0;
    transition: transform 0.3s;

    @include media-breakpoint-up(lg) {
      left: 45px;
    }

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 25px;
      display: block;
    }
  }

  .btn-submit {
    width: 100%;
    margin-top: 40px;
    position: relative;

    &.loading {
      padding: 29px 30px;
    }
  }

  .uil-ring-css {
    background: none;
    height: 25px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    z-index: 3;

    > div {
      animation: uil-ring-anim 1s linear infinite;
      border-radius: 80px;
      box-shadow: 0 2px 0 0 #fff;
      display: block;
      height: 25px;
      width: 25px;
    }
  }

  .notification {
    background-color: $success;
    border: 0;
    border-radius: 5px;
    color: $white;
    cursor: pointer;
    font-family: $header-font;
    left: 15px;
    padding: 20px;
    position: absolute;
    right: 15px;
    text-align: center;
    top: 15px;
    transition: 0.3s;
    z-index: 5;
    width: calc(100% - 30px);

    &.notification-error {
      background-color: $error;
    }

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.3s ease;
    }

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
