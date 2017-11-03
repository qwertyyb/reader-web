<template>
	<div class="error">
		<i class="el-icon-refresh"></i>
		<p class="text">似乎出了点问题</p>
		<h3 class="action" @click="action">重新加载</h3>
	</div>
</template>

<script>
export default {
	name: 'Error',
	props: {
		action: {
			type: Function,
			default () {}
		}
	}
}
</script>

<style>
.error {
	display: flex;
	margin-top: 220px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.error i {
	color: #bbb;
	font-size: 72px;
}
.error .text {
	color: #bbb;
	margin-top: 5px;
}
.error h3.action {
	margin-top: 15px;
	color: #409EFF;
	cursor: pointer;
}
</style>