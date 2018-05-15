<template>
	<header class="header" id="header">
    <div class="header_l">
        <img :src="msg" />
    </div>
    <div class="header_c">今日头条
        <img :src="refresh" />
    </div>
    <div class="header_r">
        <img :src="search" />
    </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      search: require("../../images/demo_06.jpg"),
      msg: require("../../images/demo_03.jpg"),
      refresh: require("../../images/demo_09.jpg")
    };
  }
};
</script>

<style>

</style>
