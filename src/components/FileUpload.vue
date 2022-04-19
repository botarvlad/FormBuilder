<template>
  <div>
    <input
      v-if="item.subtype === 'file'"
      :multiple="item.multipleFiles"
      type="file"
    />
    <div v-else class="drop-zone" @dragover.prevent @drop.prevent>
      <div class="drop-zone-bg" @drop="dragFile">
        <input
          class="input-file"
          type="file"
          :multiple="item.multipleFiles"
          @change="uploadFile"
        />
        Drop files here
        <div v-if="File.length">
          <ul v-for="file in File" :key="file">
            <li>{{ file.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemId"],
  data: () => ({ File: [] }),
  computed: {
    item() {
      let itemIndex = this.$store.state.droppedItems.findIndex(
        (item) => item.id === this.itemId
      );
      return this.$store.state.droppedItems[itemIndex];
    },
  },
  methods: {
    uploadFile(e) {
      this.File = e.target.files;
    },
    dragFile(e) {
      this.File = e.dataTransfer.files;
    },
  },
};
</script>

<style scoped>
.drop-zone {
  border: 1px dashed #ccc;
}

.drop-zone-bg {
  padding: 60px;
  text-align: center;
  color: #ccc;
  font-size: 30px;
  position: relative;
}
.input-file {
  position: absolute;
  top: 20px;
  left: 20px;
}
li {
  list-style: none;
}
</style>
