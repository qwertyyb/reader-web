<template>
	<div id="top">
		<div class="contain">
			<ul>
				<li v-for="(story, index) in top_stories" :style="{   left: (index-activeIndex)*100+'%'}">
					<img :src="story.image" :alt="story.title">
					<p>{{ story.title }}</p>
				</li>
			</ul>
		 	
		</div>

		<div class="swipe left" @click="activeIndex==0?activeIndex=4:activeIndex--;"><span>&lt;</span></div>
		<div class="swipe right" @click="activeIndex==4?activeIndex=0:activeIndex++;"><span>&gt;</span></div>
		<ul>
			<li v-for="(story, index) in top_stories" :class="{selected: activeIndex==index}"@click="activeIndex=index"></li>
		</ul>
	</div>
</template>

<style>
#top {
	position: relative;
	margin: 0 auto;
	font-family: "微软雅黑";
}

@media screen and ( min-width: 600px) {
	#top {
		height: 30rem;
		width: 60rem;
	}
	.contain li img{
		position: absolute;
		top: -11rem;
	}
}
@media screen and ( max-width: 500px) {
	#top {
		height: 12rem;
		width: 100%;
	}
	.contain li img{
		position: absolute;
		top: -5rem;
	}

}
.swipe {
	position: absolute;
	top: 0;
	height: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: white;
	cursor: pointer;
}
.left {
	left: 0;
	background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0));
}
.left:hover {
	background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0));
}
.right {
	right: 0;
	background: linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0));
}
.right:hover{
	background: linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0));
}
.swipe span{
	width: 3rem;
	text-align: center;
	font-size: 4em;
}
.contain {
	height: 100%;
	width: 100%;
	overflow: hidden;
	
}
.contain>ul {
	min-width: 100%;
	display: flex;
	flex-wrap: nowrap;
	position: relative;
}
.contain li {
	list-style: none;
	min-width: 100%;
	position: absolute;
	transition: all 0.5s;
}
.contain li img{
	max-width: 100%;
	width: 100%;
	position: absolute;
}
.contain p {
	position: absolute;
	color: white;
	width: 100%;
	box-sizing: border-box;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 2rem;
	padding-top: 2rem;
	bottom: 0px;
	
	font-size: 1.3em;
	text-align: center;
	background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
}
#top>ul {
	position: absolute;
	bottom: 1rem;
	left: 50%;
	height: 0.6rem;
	width: 4rem;
	margin-left: -2rem;
	display: flex;
	justify-content: space-around;
}
#top>ul>li {
	float: left;
	background: #ABAAAA;
	height: 0.4rem;
	width: 0.4rem;
	list-style: none;
	border-radius: 50%;
	cursor: pointer;
}
#top>ul>.selected{
	background: white;
}
</style>

<script>

export default {
	name: 'top',
	data(){
		return {
			top_stories: '',
			activeIndex: 0,
			box: {
				width: 600,
				height: 400
			}
			
		}
	},
	created(){
		console.log("created")
		var that = this;
		var xmlHttp = new XMLHttpRequest;
		xmlHttp.onreadystatechange = function(){
			if( xmlHttp.readyState==4 && xmlHttp.status == 200){
				var res = JSON.parse(xmlHttp.responseText);
				console.log(that.top_stories.length)
				that.top_stories = res.top_stories;
				console.log(that.top_stories.length)
			}
		}
		xmlHttp.open('GET', 'news-at/api/4/news/latest', true);
		xmlHttp.send();
	},
	mounted(){
/*		var that = this;
		setInterval(function(){
			console.log(that.activeIndex);
			that.activeIndex = (that.activeIndex==4)?0:that.activeIndex+1;
		}, 4000);*/
	},
	methods: {
	}
}


</script>