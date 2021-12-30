<template>
  <h1> 相册小程序 </h1>

  <van-uploader
    multiple
    v-model="fileList"
    :after-read="afterRead"
  />
</template>

<script setup>
import { ref } from "vue"

const fileList = ref([])
console.log(`fileList: ${fileList}`)

const afterRead = (file) => {
    console.log(`file: ${file}`)
}

// export default {
//     data() {
//         return {
//             fileList: []
//         }
//     },

//     methods: {
//         afterRead(file) {
//             console.log(`file: ${file}`)
//         }
//     }
// }
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
