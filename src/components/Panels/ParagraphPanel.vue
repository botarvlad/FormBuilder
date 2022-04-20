<template>
  <div class="form-group">
    <label class="left-form" for="checkbox">Content</label>
    <input class="right-form" type="checkbox" v-model="item.required" />
    <textarea cols="30" rows="10" v-model="item.content"></textarea>
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Type</label>
    <select class="right-form" v-model="item.paragraphType">
      <option value="p">p</option>
      <option value="address">address</option>
      <option value="blockquote">blockquote</option>
      <option value="canvas">canvas</option>
      <option value="output">output</option>
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
