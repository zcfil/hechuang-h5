<template>
	<view class="detail">
		<view class="tab">
			<view>金额：<text style="color: #007AFF;">{{data.amount}}</text></view>
			<view v-if="recharge_id!=undefined">转账地址：<text style="color: #007AFF;">{{data.from_address}}</text></view>
			<view v-if="recharge_id!=undefined">收帐地址：<text style="color: #007AFF;">{{data.to_address}}</text></view>
			<view v-if="recharge_id==undefined">地址：<text style="color: #007AFF;">{{data.to_addres}}</text></view>
			<view>区块高度：<text style="color: #007AFF;">{{data.height}}</text></view>
			<view>消息hash：<text style="color: #007AFF;">{{data.cid}}</text></view>
			<view>时间：<text style="color: #007AFF;">{{data.create_time}}</text></view>
			<view class="status" v-if="recharge_id==undefined">状态：
				<text class="b" v-show="data.status==0">待审核</text>
				<text class="b" v-show="data.status==1">确认中</text>
				<text class="c" v-show="data.status==2">已拒绝</text>
				<text class="a" v-show="data.status==3">已到账</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { rechargeById,withdrawById } from '../../common/api.js';
	export default {
		data() {
			return {
				recharge_id:undefined,
				withdraw_id:undefined,
				data:{},
			}
		},
		onLoad(option) {
			if (option.recharge_id!=undefined) {
				this.recharge_id=option.recharge_id
			}else {
				this.withdraw_id=option.withdraw_id
			}
			this.auto();
		},
		methods: {
			auto() {
				if (this.recharge_id!=undefined) {
					rechargeById({recharge_id:this.recharge_id}).then(res=> {
						this.data=res.data
					})
				}else {
					withdrawById({withdraw_id:this.withdraw_id}).then(res=> {
						this.data=res.data
					})
				}
			}
		}
	}
</script>

<style>
.detail {
	padding: 20px;
}
.tab {
	font-size: 15px;
	color: #444444;
}
.tab view {
	margin-bottom: 10px;
	word-break: break-all;
}
.tab .status .a {
	color: #00bc00;
}
.tab .status .b {
	color: #007AFF;
}
.tab .status .c {
	color: rgb(255, 80, 80);
}
</style>
