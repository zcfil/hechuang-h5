<template>
	<view class="recharge">
		<view class="model-content">
		    <canvas canvas-id="myQrcode"></canvas>
		</view>
		<view style="font-size: 15px;text-align: center;">{{code}}</view>
		<view style="text-align: center;margin-top: 20px;"><button size="mini" type="primary" @click="copy">复制地址</button></view>
		<view style="padding: 20px;font-size: 15px;">注意事项：<text style="color: #666666;">往该钱包充值将直接到账该账号余额（区块校验会延迟2~5分钟左右到账）</text></view>
	</view>
</template>

<script>
	import { getWalletAddress } from '../../common/api.js';
	const qrCode = require('../../common/weapp-qrcode.js')
	export default {
		data() {
			return {
				code:'',
			}
		},
		onLoad() {
			this.auto()
		},
		methods: {
			auto() {
				getWalletAddress().then(res=> {
					this.code=res.data.wallet
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
.model-content{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 60px 0 20px;
}
uni-canvas {
	width: 150px;
}
</style>
