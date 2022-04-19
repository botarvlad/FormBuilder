<template>
  <div class="form-group">
    <label class="left-form" for="checkbox">Required</label>
    <div class="input-container">
      <input class="right-form" type="checkbox" v-model="item.required" />
    </div>
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
    <label class="left-form" for="input-text">Type</label>
    <select class="right-form" v-model="item.subtype">
      <option value="file">File</option>
      <option value="fine">Fine</option>
    </select>
  </div>
  <div class="form-group">
    <label class="left-form" for="checkbox">Multiple Files</label>
    <input class="right-form" type="checkbox" v-model="item.multipleFiles" />
    <span>Allow users to upload multiple files</span>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
