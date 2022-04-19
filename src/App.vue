<template>
  <div class="container">
    <div class="col-3">
      <draggable
        :list="$store.getters.getDroppedItems"
        class="drop-area list-group"
        :class="{ empty: !$store.getters.getDroppedItems.length }"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <DroppedItem :itemId="element.id" class="input-type">
            <template #header>
              <component :itemId="element.id" :is="element.type"></component>
            </template>
          </DroppedItem>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <draggable
        class="list-area list-group"
        :list="itemsList"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
        item-key="id"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            <fa :icon="element.icon ? element.icon : 'coffee'" />
            {{ element.label }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import Date from "./components/Date.vue";
import DroppedItem from "./components/DroppedItem.vue";
import FileUpload from "./components/FileUpload.vue";
import Header from "./components/Header.vue";
import Number from "./components/Number.vue";
import Paragraph from "./components/Paragraph.vue";
import RadioGroup from "./components/RadioGroup.vue";
import Select from "./components/Select.vue";
import TextField from "./components/TextField.vue";
import TextArea from "./components/TextArea.vue";
export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    Header,
    TextField,
    TextArea,
    Select,
    RadioGroup,
    Paragraph,
    Number,
    draggable,
    CheckboxGroup,
    Date,
    DroppedItem,
    FileUpload,
  },
  data() {
    return {
      itemsList: [
        {
          type: "checkbox-group",
          label: "Checkbox",
          icon: "list-check",
          required: false,
          helpText: "",
          toggle: false,
          inline: false,
          class: "",
          name: "",
          options: [
            { id: 0, label: "Option 1", value: "option-1", selected: true },
          ],
        },
        {
          type: "date",
          required: false,
          label: "Date Filed",
          class: "form-control",
          name: "",
          icon: "calendar-days",
        },
        {
          label: "File Upload",
          type: "file-upload",
          icon: "upload",
          subtype: "file",
          class: "form-control",
          multipleFiles: false,
        },
        {
          type: "header",
          label: "Header",
          icon: "heading",
          headerType: "h1",
        },
        {
          type: "hidden-input",
          label: "Hidden input",
          name: "Hidden",
          value: "",
          icon: "user-ninja",
        },
        {
          type: "number",
          label: "Number",
          icon: "hashtag",
          class: "form-control",
        },
        {
          type: "paragraph",
          label: "Paragraph",
          icon: "paragraph",
          content: "paragraph",
          paragraphType: "p",
        },
        {
          type: "radio-group",
          required: false,
          inline: false,
          label: "Radio Group",
          icon: "radio",
          options: [
            {
              id: 0,
              label: "Option 1",
              value: "option-1",
              selected: false,
            },
            { id: 1, label: "Option 2", value: "option-2", selected: false },
            { id: 2, label: "Option 3", value: "option-3", selected: false },
          ],
        },
        {
          type: "select",
          label: "Select",
          icon: "list",
          selectedOption: "",
          options: [
            {
              id: 0,
              label: "Option 1",
              value: "option-1",
            },
            {
              id: 1,
              label: "Option 2",
              value: "option-2",
            },
            {
              id: 2,
              label: "Option 3",
              value: "option-3",
            },
          ],
        },
        {
          type: "text-field",
          label: "Text Field",
          icon: "keyboard",
          textType: "text",
        },
        {
          type: "text-area",
          label: "Text Area",
          icon: "comment",
          textType: "textarea",
          class: "birth-control",
        },
      ],
    };
  },
  methods: {
    log: function (evt) {
      console.log(evt);
    },
    clone(evt) {
      const item = JSON.parse(JSON.stringify(evt));
      item.id = this.$store.getters.getGlobalId;
      this.$store.commit("increaseGlobalId");
      console.log(item);

      return item;
    },
  },
};
</script>

<style>
@import "./assets/base.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  /* background-image: url(./images/49.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  background-color: rgb(138, 34, 138);
}

.container {
  display: flex;
  width: 1300px;
  height: 100vh;
  margin: auto;
  column-gap: 10px;
  padding: 200px 20px;
  justify-content: center;
  align-items: center;
}

.drop-area {
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  width: 800px;
  height: 500px;
}

.empty {
  border: 3px dashed #ccc;
  background-color: rgba(255, 255, 255, 0.25);
}

.empty::after {
  content: "Drag a field from the right to this area";
  display: block;
  position: relative;
  align-self: center;
  top: 50%;
  margin-top: -1rem;
  color: white;
  font-size: 16px;
}

.list-area {
  width: 280px;
  height: 500px;
}

.list-group-item {
  background-color: white;
  border-bottom: 1px solid gray;
  padding: 10px 20px;
  cursor: move;
}

:is(.list-group-item, .input-type):first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

:is(.list-group-item, .input-type):last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.input-type {
  background-color: white;
  padding: 10px 5px;
}
</style>
