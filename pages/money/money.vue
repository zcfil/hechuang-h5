<template>
	<view class="money">
		<view class="btm">
			<view :class="{active:num=='1'}" @click="charge">充币</view>
			<view :class="{active:num=='2'}" @click="carry">提币</view>
		</view>
		<view v-if="num=='1'">
			<button class="btn" type="primary" size="mini" @click="recharge">充值</button>
			<view style="margin: 0 20px 10px;color: #444444;">余额：{{balance}} &nbsp;&nbsp;&nbsp;冻结资产：{{frozen_capital}}</view>
			<view class="tab" v-for="(item,index) in data" :key="index" @click="detailc(item.recharge_id)">
				<view>金额：{{item.amount}}</view>
				<view>到账时间：{{item.create_time}}</view>
			</view>
		</view>
		<view v-if="num=='2'">
			<button class="btn" type="primary" size="mini" @click="extract">提现</button>
			<view style="margin: 0 20px 10px;color: #444444;">余额：{{balance}} &nbsp;&nbsp;&nbsp;冻结资产：{{frozen_capital}}</view>
			<view class="tab" v-for="(item,index) in data" :key="index" @click="detailt(item.withdraw_id)">
				<view>金额：{{item.amount}}</view>
				<view>提币时间：{{item.create_time}}</view>
				<view class="status">状态：
					<text class="b" v-show="item.status==0">审核中</text>
					<text class="b" v-show="item.status==1">确认中</text>
					<text class="c" v-show="item.status==2">已拒绝</text>
					<text class="a" v-show="item.status==3">已到账</text>
				</view>
			</view>
		</view>
		<view v-show="isLoadMore">
		    <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	import { rechargeList,withdrawList,getWalletAddress } from '../../common/api.js';
	export default {
		data() {
			return {
				num:'1',
				data:[],
				balance:'',
				frozen_capital:'',
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
			this.coll()
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
			this.coll()
		    uni.stopPullDownRefresh();
		},
		methods: {
			auto() {
				if (this.num=='1') {
					rechargeList(this.queryParams).then(res=> {
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
				}else if(this.num=='2') {
					withdrawList(this.queryParams).then(res=> {
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
			coll() {
				getWalletAddress().then(res=> {
					this.balance=res.data.balance
					this.frozen_capital=res.data.frozen_capital
				})
			},
			charge() {
				this.num=1
				this.data=[]
				this.queryParams.pageIndex=1
				this.auto()
			},
			carry() {
				this.num=2
				this.data=[]
				this.queryParams.pageIndex=1
				this.auto()
			},
			recharge() {
				uni.navigateTo({url: '/pages/recharge/recharge'});
			},
			extract() {
				uni.navigateTo({url: '/pages/extract/extract'});
			},
			detailc(recharge_id) {
				uni.navigateTo({url: '/pages/detail/detail?recharge_id='+recharge_id});
			},
			detailt(withdraw_id) {
				uni.navigateTo({url: '/pages/detail/detail?withdraw_id='+withdraw_id});
			},
		}
	}
</script>

<style>
.btm {
	height: 44px;
	line-height: 44px;
	display: flex;
	font-size: 15px;
	padding: 0 20px;
}
.btm view {
	width: 70px;
	text-align: center;
}
.btn {
	margin: 20px 20px 10px;
}
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
.tab .status .a {
	color: #00bc00;
}
.tab .status .b {
	color: #007AFF;
}
.tab .status .c {
	color: rgb(255, 80, 80);
}
.active {
	font-size: 18px;
	color: #007AFF;
}
</style>
