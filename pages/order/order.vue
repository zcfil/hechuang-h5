<template>
	<view class="order">
		<uni-forms ref="form" label-width="90" :modelValue="formData" :rules="rules">
			<uni-forms-item label="余额（FIL）" name="balance">
				<uni-easyinput type="text" disabled v-model="formData.balance" />
			</uni-forms-item>
			<uni-forms-item label="算力（TB）" required name="hashrate">
				<uni-easyinput type="text" maxlength="8" v-model="formData.hashrate" @input="chang" placeholder="请输入算力值" />
			</uni-forms-item>
			<uni-forms-item label="金额（FIL）" name="price">
				<uni-easyinput type="text" disabled v-model="formData.price" placeholder="请输入金额" />
			</uni-forms-item>
			<uni-forms-item label="备注" name="remark">
				<uni-easyinput type="text" v-model="formData.remark" placeholder="请输入备注" />
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	import { tashratePrice,placeAnOrder,getWalletAddress } from '../../common/api.js';
	export default {
		data() {
			return {
				formData: {
					hashrate:undefined,
				    price:'0',
					balance:undefined,
					remark:undefined
				},
				num:'',
				rules: {
					hashrate: {
						rules: [
							{required: true,errorMessage: '请输入算力值',},
							{
							    pattern: /^[0-9]*[1-9][0-9]*$/,
							    errorMessage: '算力值为数字且不能为小数',
							}
						]
					},
				}
			}
		},
		onLoad() {
			this.auto();
		},
		methods: {
			auto() {
				tashratePrice().then(res=> {
					this.num=res.data
				})
				getWalletAddress().then(res=> {
					this.formData.balance=res.data.balance
				})
			},
			chang(event) {
				this.formData.price=event*this.num
			},
			submit() {
				this.$refs.form.validate().then(valid => {
					placeAnOrder(this.formData).then(res=> {
						this.$tip.success('下单成功')
						uni.switchTab({url:'/pages/power/power'});
					})
				})
			}
		}
	}
</script>

<style>
.order {
	padding: 20px;
}
</style>
