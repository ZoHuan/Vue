<template>
	<div>
		<h2>我是标题</h2>
		<p>我是内容</p>
		<h2>{{ name }}</h2>
	</div>
</template>

<script>
export default {
	name: "Cpn",
	data() {
		return {
			name: "我是组件",
		};
	},
};
</script>

<style></style>
