//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";
//状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
//路由管理
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import page1 from "./components/navbar/page1.vue";
import page2 from "./components/navbar/page2.vue";
import page3 from "./components/navbar/page3.vue";

import home from "./components/home.vue";
import detail from "./components/detail.vue";
const router = new VueRouter({
	routes: [{
			path: '/home',
			component: home,
			children: [{
					path: 'page1',
					component: page1
				},
				{
					path: 'page2',
					component: page2
				},
				{
					path: 'page3',
					component: page3
				}
			]
		},
		{
			path: '/detail',
			component: detail
		}
	]
	// （缩写）相当于 routes: routes
})
/**/
//基站
const store = new Vuex.Store({
	//消息
	state: {
		count: 0,
		bool: false,
		src: "",
		isShowDialog: false
	},
	//获取值得方法
	getters: {
		getSrc(state) {
			//处理数据
			return state.src
		}
	}
})
require("weui");
//容器的样式
require("./base.css");
import xpannel from "./components/pannel.vue";
import xgallery from "./components/gallery.vue";
import xnavbar from "./components/navbar.vue";
new Vue({
	//容器作用域
	el: "#demo",
	//容器内容
	template: `
		<div style="height:100%; width:100%">
			<router-view></router-view>
		</div>
	`,
	//容器数据
	data: {

	},
	store,
	router,
	//容器的逻辑
	methods: {},
	//注册组件
	components: {
		xpannel,
		xgallery,
		xnavbar
	}
})