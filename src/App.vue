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

    <div class="col-3 sticky">
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
      <div class="buttons">
        <button @click="clearDroppedItems" class="button danger">CLEAR</button>
        <button @click="showModal = true" class="button code">[{...}]</button>
      </div>
      <Teleport to="body">
        <modal
          :show="showModal"
          :data="$store.state.droppedItems"
          @close="showModal = false"
        ></modal>
      </Teleport>
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
import Modal from "./components/Modal.vue";

export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    Header,
    Modal,
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
          name: "checkbox-group-",
          options: [
            { id: 0, label: "Option 1", value: "option-1", selected: true },
          ],
        },
        {
          type: "date",
          required: false,
          label: "Date Filed",
          class: "form-control",
          name: "date-",
          icon: "calendar-days",
        },
        {
          label: "File Upload",
          type: "file-upload",
          icon: "upload",
          subtype: "file",
          class: "form-control",
          multipleFiles: false,
          name: "file-",
        },
        {
          type: "header",
          label: "Header",
          icon: "heading",
          headerType: "h1",
          name: "header-",
        },
        {
          type: "hidden-input",
          label: "Hidden input",
          name: "hidden-",
          value: "",
          icon: "user-ninja",
        },
        {
          type: "number",
          label: "Number",
          icon: "hashtag",
          class: "form-control",
          name: "number-",
        },
        {
          type: "paragraph",
          label: "Paragraph",
          icon: "paragraph",
          content: "paragraph",
          paragraphType: "p",
          name: "paragraph-",
        },
        {
          type: "radio-group",
          required: false,
          inline: false,
          label: "Radio Group",
          icon: "radio",
          name: "radio-group-",
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
          name: "select-",
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
          name: "text-field-",
        },
        {
          type: "text-area",
          label: "Text Area",
          icon: "comment",
          textType: "textarea",
          class: "birth-control",
          name: "text-area-",
        },
      ],
      showModal: false,
    };
  },
  methods: {
    log: function (evt) {
      console.log(evt);
    },
    clone(evt) {
      const item = JSON.parse(JSON.stringify(evt));
      item.id = this.$store.getters.getGlobalId;
      item.name += Math.floor(Math.random() * 1000000000) + "-" + item.id;
      this.$store.commit("increaseGlobalId");
      console.log(item);

      return item;
    },
    clearDroppedItems() {
      this.$store.commit("clearAll");
    },
    exportDroppedItems() {},
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
  height: 100%;
}

.sticky {
  position: sticky;
  top: 0;
}

.container {
  display: flex;
  width: 1300px;
  min-height: 100vh;
  margin: auto;
  column-gap: 10px;
  padding: 200px 20px;
  justify-content: center;
  align-items: flex-start;
}

.drop-area {
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  width: 800px;
  min-height: 500px;
}

.empty {
  border: 3px dashed #ccc;
  background-color: rgba(255, 255, 255, 0.25);
}

.buttons {
  position: absolute;
  margin-top: 10px;
}

.button {
  background-color: white;
  padding: 10px 10px;
}

.button:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.button:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.danger {
  background-color: #d9534f;
  color: white;
}

.code {
  background-color: #3e3f3a;
  color: white;
}

.empty::after {
  content: "Drag a field from the right to this area";
  display: block;
  position: relative;
  align-self: center;
  top: 50%;
  margin-top: 14rem;
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
