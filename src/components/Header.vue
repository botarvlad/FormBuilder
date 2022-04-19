<template>
  <h1 v-if="item.headerType === 'h1'">{{ item.label }}</h1>
  <h2 v-else-if="item.headerType === 'h2'">{{ item.label }}</h2>
  <h3 v-else-if="item.headerType === 'h3'">{{ item.label }}</h3>
  <h4 v-else-if="item.headerType === 'h4'">{{ item.label }}</h4>
  <h5 v-else-if="item.headerType === 'h5'">{{ item.label }}</h5>
  <h6 v-else="item.headerType === 'h6'">{{ item.label }}</h6>
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
