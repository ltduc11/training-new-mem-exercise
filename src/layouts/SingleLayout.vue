<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SingleLayout',
};
</script>

<style>
.center {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
