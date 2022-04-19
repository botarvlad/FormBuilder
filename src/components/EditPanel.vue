<template>
  <div v-show="opened" class="edit-panel">
    <component :item="item" :is="item.type + 'Panel'"></component>
    <button class="close" @click="closeEdit">Close</button>
  </div>
</template>

<script>
import CheckboxGroupPanel from "./Panels/CheckboxGroupPanel.vue";
import DatePanel from "./Panels/DatePanel.vue";
import FileUploadPanel from "./Panels/FileUploadPanel.vue";
import HeaderPanel from "./Panels/HeaderPanel.vue";
import HiddenInputPanel from "./Panels/HiddenInputPanel.vue";
import NumberPanel from "./Panels/NumberPanel.vue";
import ParagraphPanel from "./Panels/ParagraphPanel.vue";
import RadioGroupPanel from "./Panels/RadioGroupPanel.vue";
import SelectPanel from "./Panels/SelectPanel.vue";
import TextFieldPanel from "./Panels/TextFieldPanel.vue";
import TextAreaPanel from "./Panels/TextAreaPanel.vue";

export default {
  components: {
    ParagraphPanel,
    TextAreaPanel,
    TextFieldPanel,
    SelectPanel,
    RadioGroupPanel,
    NumberPanel,
    CheckboxGroupPanel,
    DatePanel,
    FileUploadPanel,
    HeaderPanel,
    HiddenInputPanel,
  },
  props: ["item", "opened"],
  data() {
    return {
      showEditPanel: false,
    };
  },
  methods: {
    closeEdit() {
      this.$emit("closeEdit");
    },
  },
};
</script>

<style>
.edit-panel {
  background: #d8d8d8;
  border-radius: 5px;
  top: -30px;
  padding: 20px 30px;
  border: 1px solid gray;
}

.form-group {
  width: 100%;
}

.left-form {
  width: 16%;
  margin-bottom: 0;
  text-align: right;
  font-weight: 700;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
}

.right-form {
  margin-left: 2%;
  text-align: left;
}

.form-text {
  width: 82%;
}

button {
  cursor: pointer;
  border: none;
  padding: 5px;
  background-color: transparent;
}

.close {
  background-color: white;
  border: 1px solid gray;
  border-bottom: none;
  position: relative;
  bottom: -21px;
  left: 350px;
}
</style>
