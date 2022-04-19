<template>
  <div class="form-group">
    <label class="left-form" for="input-text">Name</label>
    <input class="right-form form-text" type="text" v-model="item.name" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Value</label>
    <input class="right-form form-text" type="text" v-model="item.value" />
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
