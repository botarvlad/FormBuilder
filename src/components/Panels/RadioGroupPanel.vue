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
    <label class="left-form" for="checkbox">Inline</label>
    <input class="right-form" type="checkbox" v-model="item.inline" />
    <span>Display checkbox inline</span>
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
    <label class="left-form" for="options">Options</label>
    <div class="options-panel">
      <div class="option" v-for="option in item.options" :key="option.id">
        <input type="radio" v-model="option.selected" />
        <input type="text" class="form-text" v-model="option.label" />
        <input type="text" class="form-text" v-model="option.value" />
      </div>
    </div>
  </div>
  <button class="add" @click="addOption">Add Option +</button>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      optionId: 3,
    };
  },
  methods: {
    addOption() {
      this.item.options.push({
        id: this.optionId,
        label: "Option",
        value: "option",
        selected: false,
      });
      this.optionId++;
    },
  },
};
</script>

<style></style>
