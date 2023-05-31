<template>
	<view class="mine">
		<view class="img">
			<view><image src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" mode=""></image></view>
			<button style="margin: 10px 0 20px;" type="warn" size="mini" @click="logut">退出登录</button>
		</view>
		<view class="menu" @click="payment">
			修改支付密码
			<view><image src="../../static/arrow-right.png" mode=""></image></view>
		</view>
		<view class="menu" style="border-bottom: 1px solid #cccccc;margin-bottom: 20px;" @click="wallet">
			修改提币地址
			<view><image src="../../static/arrow-right.png" mode=""></image></view>
		</view>
	</view>
</template>

<script>
	import { collectInfo } from '../../common/api.js';
	export default {
		data() {
			return {
				list:{},
			}
		},
		onShow() {
			this.auto()
		},
		onPullDownRefresh() {
			this.auto()
		    uni.stopPullDownRefresh();
		},
		methods: {
			auto() {
				collectInfo().then(res=> {
					this.list=res.data
				})
			},
			logut() {
				uni.removeStorageSync('token');
				uni.reLaunch({url:'/pages/login/login'});
			},
			payment() {
				uni.navigateTo({url: '/pages/payment/payment'});
			},
			wallet() {
				uni.navigateTo({url: '/pages/wallet/wallet'});
			}
		}
	}
</script>

<style>
.img {
	text-align: center;
	padding: 20px;
}
.img image{
	width: 100px;
	height: 100px;
	border-radius: 50px;
}
.menu {
	padding: 20px 20px;
	border-top: 1px solid #cccccc;
	position: relative;
	font-size: 15px;
}
.menu view {
	position: absolute;
	top: 20px;
	right: 20px;
}
.menu view image {
	width: 22px;
	height: 22px;
}
</style>
