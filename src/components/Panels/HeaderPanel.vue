<template>
  <div class="form-group">
    <label class="left-form" for="input-text">Label</label>
    <input class="right-form form-text" type="text" v-model="item.label" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Type</label>
    <select class="right-form" v-model="item.headerType">
      <option value="h1">h1</option>
      <option value="h2">h2</option>
      <option value="h3">h3</option>
      <option value="h4">h4</option>
      <option value="h5">h5</option>
      <option value="h6">h6</option>
    </select>
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Class</label>
    <input
      class="right-form form-text"
      type="text"
      v-model="item.class"
      placeholder="space separated classes"
    />
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
