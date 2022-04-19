<template>
  <input
    :type="item.textType"
    :value="item.value"
    v-model="item.value"
    :maxlength="item.maxLength"
  />
</template>

<script>
export default {
  props: ["itemId"],
  computed: {
    item() {
      return this.$store.getters.getItem(this.itemId);
    },
  },
};
</script>

<style></style>
