<template>
	<view class="wallet">
		<uni-forms ref="form" label-width="90" :modelValue="formData" :rules="rules">
			<uni-forms-item label="钱包地址" required name="wallet">
				<textarea class="text" placeholder="请输入新的钱包地址" v-model="formData.wallet"/>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	import { withdrawAddress,updateWithdrawAddress } from '../../common/api.js';
	export default {
		data() {
			return {
				formData:{
					wallet:undefined
				},
				rules: {
					wallet: {
						rules: [
							{required: true,errorMessage: '请输入钱包地址',},
							{minLength: 3,maxLength:86,errorMessage: '地址长度为3到86位',}
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
				withdrawAddress().then(res=> {
					this.formData.wallet=res.data
				})
			},
			submit() {
				let str=this.formData.wallet.substring(0,2)
				if (str!='f1'&&str!='f2'&&str!='f3'&&str!='t1'&&str!='t2'&&str!='t3') {
					this.$tip.error('钱包地址格式不对')
					return
				}
				this.$refs.form.validate().then(valid => {
					updateWithdrawAddress({wallet:this.formData.wallet}).then(res=> {
						this.$tip.success('修改成功')
						uni.navigateBack({delta:1});
					})
				})
			}
		}
	}
</script>

<style>
.wallet {
	padding: 20px;
}
.text {
	width: 100%;
	border: 1px solid #cccccc;
	border-radius: 6px;
	height: 100px;
	padding: 10px;
	font-size: 15px;
	box-sizing: border-box;
}
</style>
