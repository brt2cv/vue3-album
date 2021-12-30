<template>
  <h1> 相册小程序 </h1>

  <van-uploader
    multiple
    v-model="fileList"
    :after-read="afterRead"
  />

  <div>
    <van-image
      width="100"
      height="100"
      :src="rpath('../assets/logo.png')"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"

const fileList = ref([])
console.log(`fileList: ${fileList}`)

const afterRead = (file) => {
    console.log(`file: ${file}`)
}

//name 为图片的名称 包含 图片后缀
const rpath = (name) => {
    return new URL((name), import.meta.url).href;
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
