let server_url=process.env.NODE_ENV === 'development' ? 'http://192.168.1.73:8998' : 'http://120.76.102.16:9000' ; //环境配置
// let server_url=process.env.NODE_ENV === 'development' ? 'http://192.168.1.25:8998' : 'http://8.129.83.148:9000' ; //环境配置
import tip from'./tip.js'
function service(options = {}) {
    options.url = `${server_url}${options.url}`;
    //配置请求头
    let token = uni.getStorageSync('token');
	if (token!='') {
		options.header = {
			'token': `${token}`
		};
	}
    return new Promise((resolved, rejected) => {
                //成功
        options.success = (res) => {
            if (Number(res.data.code) == 200) {  //请求成功
                resolved(res.data);
			} else if (Number(res.data.code) == 401) {
				tip.error('token过期，请重新登录')
				uni.removeStorageSync('token');
				uni.reLaunch({url:'/pages/login/login'});
			} else {
				tip.error(res.data.msg)
                rejected(res.data.msg);//错误
            }
        }
              //错误
        options.fail = (err) => {
            rejected(err); //错误
        }
        uni.request(options);
    });
}
export default service;