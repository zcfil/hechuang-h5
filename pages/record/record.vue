<template>
	<view class="record">
		<view class="tab" v-if="stype=='0'">
			<view>总收益：<text style="color: #007AFF;">{{data.customer_income}}</text></view>
			<view>锁仓释放：<text style="color: #007AFF;">{{data.customer_lock_release}}</text></view>
			<view>直接释放：<text style="color: #007AFF;">{{data.to_customer_balance}}</text></view>
			<view>锁仓收益：<text style="color: #007AFF;">{{data.to_customer_lock}}</text></view>
			<view>时间：{{data.time}}</view>
		</view>
		<view class="tab" v-if="stype=='1'">
			<view>分润收益：<text style="color: #007AFF;">{{data.profits}}</text></view>
			<view>来源：<text style="color: #007AFF;">{{data.phone}}</text></view>
			<view>订单号：<text style="color: #007AFF;">{{data.order_id}}</text></view>
			<view>类型：
			   <text style="color: #007AFF;" v-if="data.stype=='0'">挖矿收益</text>
			   <text style="color: #007AFF;" v-if="data.stype=='1'">分润收益</text>
			</view>
			<view>时间：{{data.create_time}}</view>
		</view>
	</view>
</template>

<script>
	import { settleLogById,orderProfitById } from '../../common/api.js';
	export default {
		data() {
			return {
				data:{},
				stype:''
			}
		},
		onLoad(option) {
			this.stype=option.stype
			this.auto(option.id)
		},
		methods: {
			auto(id) {
				if (this.stype=='0') {
					settleLogById({id}).then(res=> {
						this.data=res.data
					})
				}else if (this.stype=='1') {
					orderProfitById({id}).then(res=> {
						this.data=res.data
					})
				}
			}
		}
	}
</script>

<style>
.record {
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
</style>
