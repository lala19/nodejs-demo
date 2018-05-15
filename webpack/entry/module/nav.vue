<template>
    <nav class="tab" id="nav">
        <ul class="tab_con" id="tab_con">
            <li v-for="key in tab">
                <a href="javascript:void(0)" v-text="key"></a>
            </li>
        </ul>
        <div class="tab_add">
            <img :src="addimg" alt="">
        </div>
    </nav>
</template>
<script>
export default {
  data(){
      return {
            tab: ["推荐","视频","热点","社会","娱乐","军事","推荐","视频","热点","社会","娱乐","军事"],
            addimg: require("../../images/add_15.jpg")
        }
  }
}
</script>
