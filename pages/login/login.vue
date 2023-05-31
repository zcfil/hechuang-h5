<template>
	<view class="login">
		<view class="welcome">用户登录</view>
		<uni-forms class="content" ref="form" :modelValue="loginForm" :rules="rules">
			<uni-forms-item name="phone">
				<uni-easyinput type="text" v-model="loginForm.phone" maxlength="11" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item name="password" v-if="!show">
				<uni-easyinput type="password" v-model="loginForm.password" maxlength="18" placeholder="请输入密码" />
			</uni-forms-item>
			<uni-forms-item name="code" v-if="show">
				<uni-easyinput type="text" v-model="loginForm.code" placeholder="请输入验证码" />
				<view class="yzm" @click="gainCode" v-show="open">获取验证码</view>
				<view class="yzm" style="color:#999999;font-size: 13px;" v-show="!open">{{count}}s后再次点击</view>
			</uni-forms-item>
		</uni-forms>
		<view class="rt">
			<view v-if="!show" @click="show=true">验证码登录</view>
			<view v-if="show" @click="show=false">密码登录</view>
			<view style="text-align: right;" @click="psw">找回密码？</view>
		</view>
		<button class="btn" @click="submit">登录</button>
		<view class="btm">还没有账号？<text style="color: #333333;" @click="register">马上注册</text></view>
	</view>
</template>

<script>
	import { customerLoginByPassword,customerLoginByCode,verificationCode } from '../../common/api.js';
	export default {
		data() {
			return {
				loginForm:{
					phone:undefined,
					password:undefined,
					code:undefined
				},
				show:false,
				count: "",
				timer: null,
				open: true,
				rules: {
					phone: {
						rules: [
							{required: true,errorMessage: '请输入手机号',},
							{
							    pattern: /^1[3|4|5|7|8|9][0-9]\d{8}$/,
							    errorMessage: '请输入正确的手机号码',
							}
						]
					},
					password: {
						rules: [
							{required: true,errorMessage: '请输入密码',},
							{pattern: /^\d{6,18}$/,errorMessage: '密码长度为6到18位的数字',}
						]
					},
					code: {
						rules: [
							{required: true,errorMessage: '请输入验证码',},
							{minLength: 6,maxLength: 6,errorMessage: '验证码长度为6位',}
						]
					},
				}
			}
		},
		methods: {
			register() {
				uni.navigateTo({url: '/pages/register/register'});
			},
			psw() {
				uni.navigateTo({url: '/pages/psw/psw'});
			},
			gainCode() {
				let reg=/^1[3|4|5|7|8|9][0-9]\d{8}$/
				if (!reg.test(this.loginForm.phone)) {
					this.$tip.error('请输入正确的手机号码')
					return
				}
				var param={
					msgType:'2',
					phone:this.loginForm.phone
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
					if (this.show==false) {
						customerLoginByPassword(this.loginForm).then(res=> {
							this.$tip.success('登录成功')
							uni.setStorageSync('token',res.data);
							uni.switchTab({url:'/pages/index/index'});
						})
					}else if (this.show==true) {
						customerLoginByCode(this.loginForm).then(res=> {
							this.$tip.success('登录成功')
							uni.setStorageSync('token',res.data);
							uni.switchTab({url:'/pages/index/index'});
						})
					}
				})
			},
		}
	}
</script>

<style>
.login {
	position: relative;
	width: 100vw;
	height: 94vh;
	overflow: hidden;
	background: #f8f8f8;
}
.welcome {
	margin: 65px 0 95px 27px;
	font-size: 25px;
	color: #333;
	text-shadow: 1px 0 1px rgb(0 0 0 / 30%);
}
.content {
	padding: 0 44px;
	font-size: 20px;
}
.rt {
	padding: 0 44px;
	color: #333333;
	font-size: 13px;
	display: flex;
}
.rt view {
	flex: 1;
}
.btn {
	margin: 20px 44px;
	background: #beac8b;
	color: #ffffff;
	height: 40px;
	font-size: 16px;
}
.btm {
	font-size: 14px;
	color: #606266;
	text-align: center;
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
