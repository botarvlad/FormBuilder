<template>
  <div :class="{ flex: item.inline }">
    <div
      :class="{ switch: item.toggle }"
      v-for="option in item.options"
      :key="option.id"
    >
      <input
        v-model="option.selected"
        type="checkbox"
        :name="option.label"
        :value="option.value"
      />
      <label for="checkbox">{{ option.label }}</label>
      <span :class="{ slider: item.toggle }"></span>
    </div>
  </div>
</template>

<script>
export default {
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
    addOption() {
      this.item.options.push({
        id: this.optionId,
        label: "Option",
        value: "option",
        selected: false,
      });
      this.optionId++;
    },
    closeEdit() {
      this.showEditPanel = false;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  column-gap: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
