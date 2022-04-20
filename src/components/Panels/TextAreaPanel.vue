<template>
  <div class="form-group">
    <label class="left-form" for="checkbox">Required</label>
    <input class="right-form" type="checkbox" v-model="item.required" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Label</label>
    <input class="right-form form-text" type="text" v-model="item.label" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Help Text</label>
    <input class="right-form form-text" type="text" v-model="item.helpText" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Placeholder</label>
    <input
      class="right-form form-text"
      type="text"
      v-model="item.placeholder"
    />
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
  <div class="form-group">
    <label class="left-form" for="input-text">Name</label>
    <input class="right-form form-text" type="text" v-model="item.name" />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Value</label>
    <input class="right-form form-text" type="text" v-model="item.value" />
  </div>
  <div class="form-group">
    <label class="left-form">Type</label>
    <select class="right-form" v-model="item.textType">
      <option value="textarea">Text Area</option>
      <option value="tinyMCE">TinyMCE</option>
      <option value="quill">quill</option>
    </select>
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Max Length</label>
    <input
      class="right-form form-text"
      type="number"
      v-model="item.maxLength"
    />
  </div>
  <div class="form-group">
    <label class="left-form" for="input-text">Rows</label>
    <input class="right-form form-text" type="number" v-model="item.rows" />
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
