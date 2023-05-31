<template>
	<view class="index">
		<view class="card">
			<view class="today">
				<view>今日挖矿（FIL）</view>
				<view @click="profit(0)">{{list.today_income}}<image src="../../static/right.png" mode=""></image></view>
			</view>
			<view class="income">
				<view>
					<view>总挖矿</view>
					<view>{{list.total_income}}</view>
				</view>
				<view>
					<view>已释放</view>
					<view>{{list.to_customer_balance}}</view>
				</view>
				<view>
					<view>锁仓</view>
					<view>{{list.to_customer_lock}}</view>
				</view>
			</view>
			<view class="income" style="margin-top: 20px;">
				<view>
					<view>分润收益</view>
					<view @click="profit(1)">{{lists.today_income}}<image style="width: 18px;height: 18px;" src="../../static/right.png" mode=""></image></view>
				</view>
				<view>
					<view>总收益</view>
					<view>{{lists.total_income}}</view>
				</view>
				<view>
					<view>累计业绩</view>
					<view @click="achievement">{{lists.accumulative}}<image style="width: 18px;height: 18px;" src="../../static/right.png" mode=""></image></view>
				</view>
			</view>
		</view>
		<view class="new">
			<view><image src="../../static/tongzhi.png" mode=""></image></view>
			<view>
				<swiper class="swiper-nav"
				    :circular="true" 
				    :vertical="true" 
					:autoplay="true" 
					:interval="3000" 
					:duration="1000" >
					<swiper-item v-for="(item,index) in data" :key="index" @click="news(item.id)">{{item.title}}</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="tion">
			<view @click="recharge">
				<view><image src="../../static/cz.png" mode=""></image></view>
				<view>充值</view>
			</view>
			<view @click="extract">
				<view><image src="../../static/te.png" mode=""></image></view>
				<view>提现</view>
			</view>
			<view @click="order">
				<view><image src="../../static/xd.png" mode=""></image></view>
				<view>下单</view>
			</view>
			<view @click="invite">
				<view><image src="../../static/yq.png" mode=""></image></view>
				<view>邀请</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { collectInfo,getNews,collectInfo2 } from '../../common/api.js';
	export default {
		data() {
			return {
				list:{},
				lists:{},
				data:[],
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
				getNews().then(res=> {
					this.data=res.data
				})
				collectInfo2().then(res=> {
					this.lists=res.data
				})
			},
			news(id) {
				uni.navigateTo({url: '/pages/news/news?id='+id});
			},
			order() {
				uni.navigateTo({url: '/pages/order/order'});
			},
			recharge() {
				uni.navigateTo({url: '/pages/recharge/recharge'});
			},
			extract() {
				uni.navigateTo({url: '/pages/extract/extract'});
			},
			invite() {
				uni.navigateTo({url: '/pages/invite/invite'});
			},
			profit(stype) {
				uni.navigateTo({url: '/pages/profit/profit?stype='+stype});
			},
			achievement() {
				uni.navigateTo({url: '/pages/achievement/achievement'});
			}
		}
	}
</script>

<style>
.index {
	background: #f8f8f8;
	padding: 20px;
	box-sizing: border-box;
}
.card {
	height: 260px;
	background: #d4bf9d;
	border-radius: 10px;
}
.today {
	text-align: center;
	padding: 20px 0 30px;
}
.today view:nth-child(1) {
	font-size: 14px;
	color: #555555;
}
.today view:nth-child(2) {
	font-size: 36px;
	color: #333333;
}
.today image {
	width: 24px;
	height: 24px;
}
.income {
	display: flex;
	text-align: center;
}
.income>view {
	flex: 1;
}
.income>view view:nth-child(1) {
	font-size: 14px;
	color: #555555;
}
.income>view view:nth-child(2) {
	font-size: 17px;
	color: #333333;
}
.new {
	display: flex;
	height: 24px;
	overflow: hidden;
	font-size: 14px;
	font-weight: 700;
	color: #444444;
	padding: 0 4px;
}
.new image {
	width: 30px;
	height: 24px;
}
.new>view:nth-child(2) {
	margin-left: 20px;
	width: 100%;
}
.swiper-nav {
	height: 24px;
	line-height: 24px;
}
.tion {
	background: #FFFFFF;
	border-radius: 10px;
	display: flex;
	text-align: center;
	padding: 20px 0;
	margin-top: 20px;
	font-size: 15px;
}
.tion>view {
	flex: 1;
}
.tion image {
	width: 50px;
	height: 50px;
}
</style>
