<template>
    <h1>相册小程序</h1>
    <van-uploader v-model="fileList" :after-read="afterRead" accept="image/*" />
    <div>
        <van-image width="100" height="100" :src="rpath('../assets/logo.png')" />
    </div>
</template>

<script setup>
import { ref } from "vue"
import requests from "@/util/http"

const fileList = ref([])
// console.log(`fileList: ${fileList}`)

const afterRead = (file) => {
    console.log(`file: ${file}`)
    let formData = new FormData()
    formData.append("image", file.file)

    // debugger
    requests({
        url: "http://localhost:1314/face/register",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        params: { name: file.file.name },
        data: formData
    }).then(res => {
        if (res.status == 200) {
            console.log("Well Done")
        } else {
            console.log("Something wrong: ", res.status)
        }
    }).catch((err) => {
        console.log(err)
    })
}

//name 为图片的名称 包含 图片后缀
const rpath = (name) => {
    return new URL((name), import.meta.url).href;
}

</script>

<style scoped>
a {
    color: #42b983;
}
</style>
