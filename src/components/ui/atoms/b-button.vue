<template>
  <button
    class="b-button"
    :class="{
      [`b-button--color-${color}`]: true,
      [`b-button--behavior-block`]: block,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    block: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style>
.b-button {
  border: 0;
  border-radius: 20px;
  font-weight: 500;
  padding: 8px 20px;
  color: white;
}

.b-button--color-primary {
  background-color: rgb(241,16,117);
}

.b-button--color-secondary {
  background-color: rgb(92,0,110);
}

.b-button--behavior-block {
  width: 100%;
}
</style>