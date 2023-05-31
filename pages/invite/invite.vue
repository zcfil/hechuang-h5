<template>
	<view class="invite">
		<view class="title">您的邀请码</view>
		<view style="text-align: center;margin-top: 10px;">{{invitation_code}}</view>
		<view class="model-content">
		    <canvas canvas-id="myQrcode"></canvas>
		</view>
		<navigator class="a" :url="codes" hover-class="navigator-hover">{{code}}</navigator>
		<view style="text-align: center;margin-top: 20px;"><button size="mini" type="primary" @click="copy">复制邀请码</button></view>
	</view>
</template>

<script>
	import { getCustomerCode } from '../../common/api.js';
	const qrCode = require('../../common/weapp-qrcode.js')
	export default {
		data() {
			return {
				code:'',
				codes:'',
				invitation_code:'',
			}
		},
		onLoad() {
			this.auto()
		},
		methods: {
			auto() {
				getCustomerCode().then(res=> {
					// this.code='http://192.168.1.105:8080/#/pages/register/register?invitation_code='+res.data.invitation_code
					this.code='http://120.76.102.16:8888/#/pages/register/register?invitation_code='+res.data.invitation_code
					// this.code='http://8.129.83.148:8888/#/pages/register/register?invitation_code='+res.data.invitation_code
					this.codes='/pages/register/register?invitation_code='+res.data.invitation_code
					this.invitation_code=res.data.invitation_code
					this.initQrCode()
				})
			},
			initQrCode() {
				new qrCode('myQrcode', {
				    text: this.code,
					width: 150,
					height: 150,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
				    correctLevel: qrCode.CorrectLevel.H
				})
			},
			copy() {
				uni.setClipboardData({
				    data: this.code,
				});
			}
		}
	}
</script>

<style>
.title {
	text-align: center;
	padding-top: 40px;
	font-size: 20px;
	color: #666666;
	letter-spacing: 4px;
}
.model-content{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0 20px;
}
uni-canvas {
	width: 150px;
}
.a {
	font-size: 14px;
	padding: 0 20px;
	color: #444444;
}
</style>
