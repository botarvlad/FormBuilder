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

export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    draggable,
    CheckboxGroup,
    Date,
    DroppedItem,
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
          label: "Date",
          icon: "calendar-days",
        },
        {
          label: "File Upload",
          type: "file",
          icon: "upload",
        },
        {
          type: "header",
          label: "Header",
          icon: "heading",
        },
        {
          type: "hidden",
          label: "Hidden input",
          icon: "user-ninja",
        },
        {
          type: "number",
          label: "Number",
          icon: "hashtag",
        },
        {
          type: "paragraph",
          label: "Paragraph",
          icon: "paragraph",
        },
        {
          type: "radio-group",
          label: "Radio Group",
          icon: "radio",
        },
        {
          type: "select",
          label: "Select",
          icon: "list",
        },
        {
          type: "text",
          label: "Text Field",
          icon: "keyboard",
        },
        {
          type: "textarea",
          label: "Text Area",
          icon: "comment",
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
