<template>
  <div>
    <input type="number" :step="item.step" :max="item.max" :min="item.min" />
  </div>
</template>

<script>
export default {
  props: ["itemId"],
  computed: {
    item() {
      let itemIndex = this.$store.state.droppedItems.findIndex(
        (item) => item.id === this.itemId
      );
      return this.$store.state.droppedItems[itemIndex];
    },
  },
};
</script>

<style></style>
