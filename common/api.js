import request from './request.js'
import qs from 'qs'
// 注册
export function customerRegister(data) {
  data = qs.stringify(data)
  return request({
    url: '/customerRegister?'+data,
    method: 'post',
  })
}
// 登录
export function customerLoginByCode(data) {
  data = qs.stringify(data)
  return request({
    url: '/customerLoginByCode?'+data,
    method: 'post',
  })
}
export function customerLoginByPassword(data) {
  data = qs.stringify(data)
  return request({
    url: '/customerLoginByPassword?'+data,
    method: 'post',
  })
}
// 修改密码
export function changePassword(data) {
  data = qs.stringify(data)
  return request({
    url: '/changePassword?'+data,
    method: 'post',
  })
}
// 获取验证码
export function verificationCode(data) {
  data = qs.stringify(data)
  return request({
    url: '/verificationCode?'+data,
    method: 'post',
  })
}
// 下单
export function placeAnOrder(data) {
  data = qs.stringify(data)
  return request({
    url: '/yun/placeAnOrder?'+data,
    method: 'post',
  })
}
// 算力单价
export function tashratePrice(data) {
  return request({
    url: '/yun/tashratePrice',
    method: 'get',
	data
  })
}
// 获取订单列表
export function orderlist(data) {
  return request({
    url: '/yun/orderlist',
    method: 'get',
	data
  })
}
// 收益
export function collectInfo(data) {
  return request({
    url: '/yun/collectInfo1',
    method: 'get',
	data
  })
}
// 提现
export function withdrawCoin(data) {
  data = qs.stringify(data)
  return request({
    url: '/yun/withdrawCoin?'+data,
    method: 'post',
  })
}
// 充币钱包
export function getWalletAddress(data) {
  return request({
    url: '/yun/getWalletAddress',
    method: 'get',
	data
  })
}
// 提币钱包
export function withdrawAddress(data) {
  return request({
    url: '/yun/withdrawAddress',
    method: 'get',
	data
  })
}
// 获取充值记录
export function rechargeList(data) {
  return request({
    url: '/yun/rechargeList',
    method: 'get',
	data
  })
}
// 获取提取记录
export function withdrawList(data) {
  return request({
    url: '/yun/withdrawList',
    method: 'get',
	data
  })
}
// 充值记录详情
export function rechargeById(data) {
  return request({
    url: '/yun/rechargeById',
    method: 'get',
	data
  })
}
// 提取记录详情
export function withdrawById(data) {
  return request({
    url: '/yun/withdrawById',
    method: 'get',
	data
  })
}
// 修改钱包地址
export function updateWithdrawAddress(data) {
  data = qs.stringify(data)
  return request({
    url: '/yun/updateWithdrawAddress?'+data,
    method: 'post',
  })
}
// 修改支付密码
export function changePayPasswordByCode(data) {
  data = qs.stringify(data)
  return request({
    url: '/yun/changePayPasswordByCode?'+data,
    method: 'post',
  })
}
// 获取用户名
export function getCustomerPhone(data) {
  return request({
    url: '/yun/getCustomerPhone',
    method: 'get',
	data
  })
}
// 获取新闻
export function getNews(data) {
  return request({
    url: '/getNews',
    method: 'get',
	data
  })
}
// 获取新闻详情
export function getNewsContent(data) {
  return request({
    url: '/getNewsContent',
    method: 'get',
	data
  })
}
// 获取邀请码
export function getCustomerCode(data) {
  return request({
    url: '/yun/getCustomerCode',
    method: 'get',
	data
  })
}
// 收益记录
export function settleLogList(data) {
  return request({
    url: '/yun/settleLogList',
    method: 'get',
	data
  })
}
// 收益记录详情
export function settleLogById(data) {
  return request({
    url: '/yun/settleLogById',
    method: 'get',
	data
  })
}
// 分润收益
export function collectInfo2(data) {
  return request({
    url: '/yun/collectInfo2',
    method: 'get',
	data
  })
}
// 分润收益记录
export function orderProfitList(data) {
  return request({
    url: '/yun/orderProfitList',
    method: 'get',
	data
  })
}
// 分润收益记录详情
export function orderProfitById(data) {
  return request({
    url: '/yun/orderProfitById',
    method: 'get',
	data
  })
}
// 累计业绩
export function lowerLevelPerformance(data) {
  return request({
    url: '/yun/lowerLevelPerformance',
    method: 'get',
	data
  })
}