<template>
  My Home Page
  <div>
    <van-button @click="onClick" type="primary">Vant按钮</van-button>
    <van-rate v-model="value"/>
  </div>
</template>

<script setup>
import requests from "../util/http"

const onClick = () => {
    console.log("Hello")
    // requests.get("http://localhost:1314/index")
    // requests.post("http://localhost:1314/face/thresh?thresh=0.5")
    requests({
        url: "http://localhost:1314/face/thresh",
        method: "post",
        // data: {}
        params: {
            thresh: 0.5
        }
    })
    .then(res=>{
        console.log("响应成功: ", res)
    }, reject=>{
        console.log("响应失败: ", reject)
    })
}
</script>