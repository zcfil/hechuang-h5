<template>
	<view class="power">
		<button style="margin: 20px 20px 10px;" type="primary" size="mini" @click="order">共建矿池</button>
		<view style="margin: 0 20px 10px;color: #444444;">有效算力（TB）：{{hashrate}}</view>
		<view class="tab" v-for="(item,index) in data" :key="index">
			<view>算力：{{item.hashrate}}</view>
			<view>金额：{{item.amount}}</view>
			<view>创建时间：{{item.create_time}}</view>
		</view>
		<view v-show="isLoadMore">
		    <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	import { orderlist } from '../../common/api.js';
	export default {
		data() {
			return {
				data:[],
				hashrate:'',
				queryParams: {
				    pageIndex: 1,
				    pageSize: 10,
				},
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
				isLoadMore:false,  //是否加载中
			}
		},
		onShow() {
			this.data=[]
			this.auto();
		},
		onReachBottom(){  //上拉触底函数
		    if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
		        this.isLoadMore=true
		        this.queryParams.pageIndex+=1
		        this.auto()
		    }
		},
		onPullDownRefresh() {
			this.data=[]
			this.queryParams.pageIndex=1
			this.auto()
		    uni.stopPullDownRefresh();
		},
		methods: {
			auto() {
				orderlist(this.queryParams).then(res=> {
					this.hashrate=res.summation.hashrate
					if(res.data){
					    this.data=this.data.concat(res.data)
					    if(res.data.length<this.queryParams.pageSize){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
					        this.isLoadMore=true                                             
					        this.loadStatus='nomore'
					    }else{
					        this.isLoadMore=false
					    }
					}else{
					    this.isLoadMore=true
					    this.loadStatus='nomore'
					}
				})
			},
			order() {
				uni.navigateTo({url: '/pages/order/order'});
			}
		}
	}
</script>

<style>
.tab {
    font-size: 14px;
	color: #444444;
	border-top: 1px solid #dddddd;
	padding: 11px 20px 15px;
	position: relative;
}
.tab view {
	margin-top: 4px;
}
</style>
