<template>
  <div>
    <input type="date" />
  </div>
</template>

<script>
import DroppedItem from "./DroppedItem.vue";
export default {
  props: ["itemId"],
  data() {
    return {};
  },
  computed: {
    item() {
      let itemIndex = this.$store.state.droppedItems.findIndex(
        (item) => item.id === this.itemId
      );
      return this.$store.state.droppedItems[itemIndex];
    },
  },
  components: { DroppedItem },
};
</script>

<style></style>
