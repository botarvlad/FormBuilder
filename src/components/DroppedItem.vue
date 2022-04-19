<template>
  <div
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
    class="input-container"
    :class="{ hidden_input: item.type === 'hidden-input' }"
  >
    <div v-if="item.type === 'header'">
      {{ item.label }}
    </div>
    <div v-else-if="item.type === 'hidden-input'">
      {{ item.name }}
    </div>
    <div v-else-if="item.type === 'paragraph'">
      {{ item.comntent }}
    </div>
    <div v-else class="input-title">
      {{ item.label }}<span v-if="item.required" class="required">*</span>
      <span v-if="item.helpText" :title="item.helpText" class="helptext"
        >?</span
      >
    </div>
    <slot name="header"></slot>
    <div v-show="showButtons" class="input-actions">
      <button @click="deleteItem(item.id)" class="danger">X</button>
      <button @click="showEditPanel = !showEditPanel" class="edit">E</button>
      <button @click="copyItem(item.id)" class="copy">C</button>
    </div>
    <EditPanel
      @closeEdit="showEditPanel = !showEditPanel"
      :item="item"
      :opened="showEditPanel"
    ></EditPanel>
  </div>
</template>

<script>
import EditPanel from "./EditPanel.vue";

export default {
  components: { EditPanel },
  props: ["itemId"],
  data() {
    return {
      optionId: 1,
      showButtons: false,
      showEditPanel: false,
    };
  },
  computed: {
    item() {
      return this.$store.getters.getItem(this.itemId);
    },
  },
  methods: {
    deleteItem(id) {
      const itemToDelete = this.$store.getters.getItemById(id);

      this.$store.commit("deleteItem", itemToDelete);
    },
    copyItem(id) {
      const itemToCopy = this.$store.getters.getItem(id);

      this.$store.commit("copyItem", itemToCopy);
    },
  },
};
</script>

<style scoped>
.input-container {
  text-align: left;
}

.hidden_input {
  background: rgba(255, 255, 255, 0.7);
}
.input-actions {
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  column-gap: 10px;
}

.input-title {
  font-size: large;
  font-weight: 700;
  margin-bottom: 10px;
}

.required {
  color: red;
  margin-left: 5px;
}

.helptext {
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  margin-left: 5px;
  font-size: 10px;
}
</style>
