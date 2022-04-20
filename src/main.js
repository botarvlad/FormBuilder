import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(fas);

const store = createStore({
  state() {
    return {
      globalId: 0,
      droppedItems: [],
    };
  },
  getters: {
    getGlobalId(state) {
      return state.globalId;
    },
    getItemById: (state) => (id) => {
      return state.droppedItems.findIndex((item) => item.id === id);
    },
    getItem: (state) => (id) => {
      const item = state.droppedItems.find((item) => item.id === id);

      return item;
    },
    getDroppedItems(state) {
      return state.droppedItems;
    },
  },
  mutations: {
    increaseGlobalId(state) {
      state.globalId++;
    },
    updateList() {},
    deleteItem(state, itemIndex) {
      state.droppedItems.splice(itemIndex, 1);
    },
    copyItem(state, itemToCopy) {
      const copiedItem = JSON.parse(JSON.stringify(itemToCopy));
      copiedItem.id = state.globalId++;
      state.droppedItems.push(copiedItem);
    },
    clearAll(state) {
      state.droppedItems = [];
    },
  },
});

createApp(App).component("fa", FontAwesomeIcon).use(store).mount("#app");
