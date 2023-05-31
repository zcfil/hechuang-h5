<template>
	<view class="profit">
		<view class="tab" v-for="(item,index) in data" :key="index" @click="record(item)">
			<view>收益：{{item.customer_income}}</view>
			<view>类型：
			   <text v-if="item.stype=='0'">挖矿收益</text>
			   <text v-if="item.stype=='1'">分润收益</text>
			</view>
			<view>时间：{{item.time}}</view>
		</view>
	</view>
</template>

<script>
	import { settleLogList,orderProfitList } from '../../common/api.js';
	export default {
		data() {
			return {
				data:[],
				stype:'',
				queryParams: {
				    pageIndex: 1,
				    pageSize: 10,
				},
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
				isLoadMore:false,  //是否加载中
			}
		},
		onLoad(option) {
			this.stype=option.stype
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
				if (this.stype=='0') {
					settleLogList(this.queryParams).then(res=> {
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
				}else if (this.stype=='1') {
					orderProfitList(this.queryParams).then(res=> {
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
				}
			},
			record(item) {
				uni.navigateTo({url: '/pages/record/record?id='+item.id+'&stype='+item.stype});
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
