<template>
<div class="main">
    <article class="article clearfix" v-for="c in con">
        <div v-if='c["img"]'>
            <div v-if='c["img"].length==1' class="pic1">
                <h3 v-text='c["title"]'></h3>
                <img v-bind:src="c['img'][0]" alt="">
                <p class="item_btm">
                    <i v-if='c["icon"]=="top"' v-text="'置顶'"></i>
                    <i v-if='c["icon"]=="hot"' v-text="'热'"></i>
                    <span v-if='c["from"]' v-text="c.from"></span>
                    <span v-if='c["comment"]' v-text="'评论 '+c.comment"></span>
                    <span v-if='c["time"]' v-text="c.time+'分钟前'"></span>
                </p>
            </div>
            <div v-else-if='c["img"].length==3' class="pic3">
                <h3 v-text='c["title"]'></h3>
                <img v-bind:src="c['img'][0]" alt="">
                <img v-bind:src="c['img'][1]" alt="">
                <img v-bind:src="c['img'][2]" alt="">
                <p class="item_btm">
                    <i v-if='c["icon"]=="top"' v-text="'置顶'"></i>
                    <i v-if='c["icon"]=="hot"' v-text="'热'"></i>
                    <span v-if='c["from"]' v-text="c.from"></span>
                    <span v-if='c["comment"]' v-text="'评论 '+c.comment"></span>
                    <span v-if='c["time"]' v-text="c.time+'分钟前'"></span>
                </p>
            </div>
        </div>
        <div v-else class="nopic3">
            <h3 v-text='c["title"]'></h3>
            <p class="item_btm">
                <i v-if='c["icon"]=="top"' v-text="'置顶'"></i>
                <i v-if='c["icon"]=="hot"' v-text="'热'"></i>
                <span v-if='c["from"]' v-text="c.from"></span>
                <span v-if='c["comment"]' v-text="'评论 '+c.comment"></span>
                <span v-if='c["time"]' v-text="c.time+'分钟前'"></span>
            </p>
        </div>
    </article>
</div>
</template>
<script>
export default {
  data() {
		return {
			con:[{
                "title":"央视原创时政微视频丨窑洞里的读书人",
                "icon":"top",
                "from":"央视新闻",
                "comment":172,
                "time":4
            },{
                "title":"习近平向中国与葡萄牙语国家最高法院院长会议致贺信",
                "icon":"top",
                "from":"新华网",
                "comment":43,
                "time":12
            },{
                "title":"外交部：王毅将于3月27日至28日对俄罗斯进行工作访问",
                "icon":"hot",
                "from":"环球网",
                "comment":1,
                "time":43
            },{
                "title":"一图丨有了这张卡，你可以畅享102项福利！",
                "icon":"hot",
                "from":"环球网",
                "comment":42,
                "time":38,
                "img":["https://p3.pstatp.com/list/71f300105963ec430926","https://p3.pstatp.com/list/71f40008de30ff437b38","https://p3.pstatp.com/list/71f600085fbc88634a3f"]
            },{
                "title":"库克扎心了！苹果被商务部点名：你们是贸易便利化最大的受益者",
                "from":"上游新闻",
                "comment":222,
                "img":["https://p3.pstatp.com/list/71f70006bfc238644451"]
            },{
                "title":"高速收费开始扫车牌“无感支付”，警方：被套牌会越来越少",
                "icon":"hot",
                "from":"环球网",
                "comment":42,
                "time":38,
                "img":["https://p3.pstatp.com/list/6fa00006c22705dc91e3"]
            },{
                "title":"美媒探访蓝调之乡里的华裔居民：百年来仍保留中国元素",
                "comment":222,
                "img":["https://p3.pstatp.com/list/6eca0004ab0062d9f00e"]
            },{
                "title":"一图丨有了这张卡，你可以畅享102项福利！",
                "icon":"hot",
                "from":"环球网",
                "comment":42,
                "time":38,
                "img":["https://p3.pstatp.com/list/71f300105963ec430926","https://p3.pstatp.com/list/71f40008de30ff437b38","https://p3.pstatp.com/list/71f600085fbc88634a3f"]
            },{
                "title":"库克扎心了！苹果被商务部点名：你们是贸易便利化最大的受益者",
                "from":"上游新闻",
                "comment":222,
                "img":["https://p3.pstatp.com/list/71f70006bfc238644451"]
            },{
                "title":"高速收费开始扫车牌“无感支付”，警方：被套牌会越来越少",
                "icon":"hot",
                "from":"环球网",
                "comment":42,
                "time":38,
                "img":["https://p3.pstatp.com/list/6fa00006c22705dc91e3"]
            },{
                "title":"美媒探访蓝调之乡里的华裔居民：百年来仍保留中国元素",
                "comment":222,
                "img":["https://p3.pstatp.com/list/6eca0004ab0062d9f00e"]
            }],
		}
	}
}
</script>
