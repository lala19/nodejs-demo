var Vue = require("vue");
require("../css/base.css");
require("../css/style.css");
import xheader from "./module/header.vue";
import xnav from "./module/nav.vue";
import xarticle from "./module/article.vue";
new Vue({
  //容器作用域
  el: "#demo",
  //容器内容
  template: `
    <div style="height:100%; width:100%">
    <div class="top">
    <xheader />
    <xnav />
    </div>
    <xarticle />
		</div>
	`,
  //容器数据
  data: {

  },
  //容器的逻辑
  methods: {},
  //注册组件
  components: {
    xheader,
    xnav,
    xarticle
  }
})
