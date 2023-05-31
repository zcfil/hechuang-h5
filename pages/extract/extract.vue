<template>
	<view class="extract">
		<uni-forms ref="form" label-width="90" :modelValue="formData" :rules="rules">
			<uni-forms-item label="余额（FIL）" name="balance">
				<uni-easyinput type="text" disabled v-model="formData.balance" />
			</uni-forms-item>
			<uni-forms-item label="金额（FIL）" required name="amount">
				<uni-easyinput type="text" maxlength="8" v-model="formData.amount" placeholder="请输入金额" />
			</uni-forms-item>
			<uni-forms-item label="支付密码" required name="password">
				<uni-easyinput type="password" v-model="formData.password" maxlength="18" placeholder="如果没有修改初始密码为登录密码" />
			</uni-forms-item>
			<uni-forms-item label="地址" required name="to_addres">
				<textarea class="text" disabled placeholder="请输入地址" v-model="formData.to_addres"/>
				<view class="yzm" @click="wallet">编辑地址</view>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	import { getWalletAddress,withdrawCoin,withdrawAddress } from '../../common/api.js';
	export default {
		data() {
			return {
				formData: {
					amount:undefined,
					to_addres:undefined,
					balance:undefined,
					password:undefined
				},
				rules: {
					amount: {
						rules: [
							{required: true,errorMessage: '请输入金额',},
							{
							    pattern: /^[0-9]*[1-9][0-9]*$/,
							    errorMessage: '金额为数字且不能为小数',
							}
						]
					},
					password: {
						rules: [
							{required: true,errorMessage: '请输入支付密码',},
							{pattern: /^\d{6,18}$/,errorMessage: '密码长度为6到18位的数字',}
						]
					},
					to_addres: {
						rules: [
							{required: true,errorMessage: '请输入地址',},
						]
					},
				}
			}
		},
		onShow() {
			this.auto();
		},
		methods: {
			auto() {
				getWalletAddress().then(res=> {
					this.formData.balance=res.data.balance
				})
				withdrawAddress().then(res=> {
					this.formData.to_addres=res.data
				})
			},
			submit() {
				this.$refs.form.validate().then(valid => {
					withdrawCoin(this.formData).then(res=> {
						this.$tip.success('提现成功')
						uni.switchTab({url:'/pages/money/money'});
					})
				})
			},
			wallet() {
				uni.navigateTo({url: '/pages/wallet/wallet'});
			}
		}
	}
</script>

<style>
.extract {
	padding: 20px;
}
.text {
	width: 100%;
	border: 1px solid #cccccc;
	border-radius: 6px;
	height: 100px;
	padding: 10px;
	font-size: 14px;
	box-sizing: border-box;
}
.yzm {
	position: absolute;
	right: 0;
	bottom: 22px;
	height: 30px;
	padding: 0 10px;
	line-height: 30px;
	background-color: #cccccc;
	border-radius: 6px;
}
</style>
