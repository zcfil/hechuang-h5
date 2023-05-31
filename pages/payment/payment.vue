<template>
	<view class="payment">
		<uni-forms class="content" ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="验证码" required name="code">
				<uni-easyinput type="text" v-model="formData.code" placeholder="请输入验证码" />
				<view class="yzm" @click="gainCode" v-show="open">获取验证码</view>
				<view class="yzm" style="color:#999999;font-size: 13px;" v-show="!open">{{count}}s后再次点击</view>
			</uni-forms-item>
			<uni-forms-item label="支付密码" required name="newPayPassword">
				<uni-easyinput type="password" v-model="formData.newPayPassword" maxlength="18" placeholder="请输入新的支付密码" />
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">修改</button>
	</view>
</template>

<script>
	import { changePayPasswordByCode,verificationCode,getCustomerPhone } from '../../common/api.js';
	export default {
		data() {
			return {
				formData:{
					code:undefined,
					newPayPassword:undefined
				},
				phone:'',
				count: "",
				timer: null,
				open: true,
				rules: {
					newPayPassword: {
						rules: [
							{required: true,errorMessage: '请输入支付密码',},
							{pattern: /^\d{6,18}$/,errorMessage: '密码长度为6到18位的数字',}
						]
					},
					code: {
						rules: [
							{required: true,errorMessage: '请输入验证码',},
							{minLength: 6,maxLength:6,errorMessage: '验证码长度为6位',}
						]
					},
				}
			}
		},
		onLoad() {
			this.auto()
		},
		methods: {
			auto() {
				getCustomerPhone().then(res=> {
					this.phone=res.data
				})
			},
			gainCode() {
				var param={
					msgType:'3',
					phone:this.phone
				}
				verificationCode(param).then(res=> {
					this.$tip.success('验证码已成功发送到您的手机')
					const TIME_COUNT = 60;
					if (!this.timer) {
					    this.count = TIME_COUNT;
					    this.open = false;
					    this.timer = setInterval(() => {
					        if (this.count > 0 && this.count <= TIME_COUNT) {
					            this.count--;
					        } else {
					            this.open = true;
					            clearInterval(this.timer);
					            this.timer = null;
					        }
					    }, 1000);
					}
				})
			},
			submit() {
				this.$refs.form.validate().then(valid => {
					changePayPasswordByCode(this.formData).then(res=> {
						this.$tip.success('修改成功')
						uni.switchTab({url:'/pages/mine/mine'});
					})
				})
			}
		}
	}
</script>

<style>
.payment {
	padding: 20px;
}
.yzm {
	position: absolute;
	right: 0;
	top: 0;
	height: 36px;
	padding: 0 10px;
	line-height: 36px;
}
</style>
