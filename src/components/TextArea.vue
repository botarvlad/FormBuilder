<template>
  <textarea
    v-if="item.textType === 'textarea'"
    :type="item.textType"
    v-model="item.value"
    :maxlength="item.maxLength"
    :rows="item.rows"
  ></textarea>
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

<style scoped>
textarea {
  width: 100%;
}
</style>
