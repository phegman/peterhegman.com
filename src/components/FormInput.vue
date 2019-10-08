<template>
  <div class="input-group">
    <div class="input-wrap" :class="classes">
      <label :for="name">{{ label }}</label>
      <input
        v-if="type === 'text' || type === 'email'"
        :id="name"
        :type="type"
        :name="name"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @focusin="focusIn"
        @focusout="focusOut"
      />
      <textarea
        v-else-if="type === 'textarea'"
        :id="name"
        :name="name"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @focusin="focusIn"
        @focusout="focusOut"
      ></textarea>
    </div>
    <div v-if="error.show" class="error" :class="`error-${name}`">
      {{ error.message }}
    </div>
  </div>
  <!-- /.input-group -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import InputError from "../interfaces/input-error.interface";

@Component
export default class FormInput extends Vue {
  @Prop({ required: true }) readonly name!: string;
  @Prop({ required: true }) readonly label!: string;
  @Prop({ required: true }) readonly value!: string;
  @Prop({ required: true }) readonly type!: "text" | "email" | "textarea";
  @Prop() readonly error: InputError | undefined;

  isFocused: boolean = false;

  /**
   * Check if input is empty
   */
  get hasInput(): boolean {
    return this.value !== null && this.value !== "";
  }

  /**
   * Compute CSS classes
   */
  get classes() {
    return {
      "has-input": this.hasInput,
      "is-focused": this.isFocused,
      [this.name]: true,
      [this.type]: true,
    };
  }

  /**
   * Event handler for focusin
   */
  focusIn(): void {
    this.isFocused = true;
  }

  /**
   * Event handler for focusout
   */
  focusOut(): void {
    this.isFocused = false;
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  margin-top: 15px;

  .input-wrap {
    position: relative;

    &.has-input,
    &.is-focused {
      label {
        font-size: 12px;
        transform: translateY(-50%) translateY(-15px);
      }
    }

    &.textarea {
      label {
        top: 30px;
      }
    }

    label {
      font-family: $header-font;
      left: 15px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: font-size 0.3s, transform 0.3s;
      pointer-events: none;
      z-index: 3;
    }

    input,
    textarea {
      background-color: $white;
      border: 0;
      border-radius: 5px;
      height: 60px;
      padding: 15px 15px 0;
      width: 100%;
      z-index: 2;
    }

    textarea {
      height: 200px;
      padding-top: 25px;
    }
  }

  .error {
    color: $error;
    font-family: $header-font;
    margin-top: 10px;
  }
}
</style>
