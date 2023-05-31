<template>
	<view class="news">
		<view class="title">{{data.title}}</view>
		<view class="content">{{data.content}}</view>
	</view>
</template>

<script>
	import { getNewsContent } from '../../common/api.js';
	export default {
		data() {
			return {
				data:{}
			}
		},
		onLoad(option) {
			this.auto(option.id)
		},
		methods: {
			auto(id) {
				getNewsContent({id:id}).then(res=> {
					this.data=res.data
				})
			}
		}
	}
</script>

<style>
.news {
	padding: 30px;
}
.title {
	text-align: center;
	font-size: 20px;
	margin-bottom: 20px;
}
.content {
	font-size: 15px;
	text-indent: 2em;
	color: #666666;
}
</style>
