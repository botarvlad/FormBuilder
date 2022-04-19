<template>
  <p v-if="item.paragraphType === 'p'">{{ item.content }}</p>
  <address v-else-if="item.paragraphType === 'address'">
    {{ item.content }}
  </address>
  <blockquote v-else-if="item.paragraphType === 'blockquote'">
    {{ item.content }}
  </blockquote>
  <canvas v-else-if="item.paragraphType === 'canvas'">{{
    item.content
  }}</canvas>
  <output v-else-if="item.paragraphType === 'output'">{{
    item.content
  }}</output>
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
