<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div v-click-outside="onClickOutside" class="modal-container">
          <pre><code id="code">{{ data }}</code></pre>
          <button class="copy-btn" @click="copyToClipboard">Copy</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    show: Boolean,
    data: Array,
  },
  methods: {
    onClickOutside() {
      this.$emit("close");
    },
    copyToClipboard() {
      navigator.clipboard
        .writeText(JSON.stringify(this.data, undefined, 2))
        .then(
          function () {
            console.log("Async: Copying to clipboard was successful!");
          },
          function (err) {
            console.log("Async: Could not copy text: ", err);
          }
        );
    },
  },
};
</script>

<style scoped>
.copy-btn {
  background-color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  float: right;
  margin-top: 10px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  max-height: 800px;
  margin: 0px auto;
  padding: 15px 15px;
  padding-bottom: 45px;
  background-color: #23241f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 10px;
}

pre {
  border: 1px solid white;
  padding: 20px 30px;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 700px;
}

code {
  color: wheat;
}

.modal-content {
  border: 1px solid white;
  padding: 20px 30px;
  border-radius: 10px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
