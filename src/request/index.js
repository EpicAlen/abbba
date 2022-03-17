import axios from 'axios'
import store from '@/store/index';

//创建axios的一个实例
var service = axios.create({
  baseURL: 'http://api.cecpx.cn:8081/',
  // baseURL:'http://api.cecpx.cn:8097/',
  //   timeout: 6000,
})

/****实现防重提交****/
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  
}
/*---实现防重提交---*/

var loading = null;
//请求拦截器
service.interceptors.request.use(
  config => {
    /****实现防重提交****/
    if (config.waitCallBack || config.waitCallBack == null) {
      removePending(config); //在一个请求发送前执行一下取消操作
      config.cancelToken = new cancelToken((c) => {
        //请求标识：请求地址&请求方式拼接的字符串，
        pending.push({ u: config.url + '&' + config.method, f: c });
      });
    }

    /*---实现防重提交---*/
    if (config.loadding) {
      loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }

    if (config.token) {
      let loginInfo = SystemData.GetLoginInfo()
      config.headers['Authorization'] = 'Bearer ' + loginInfo.Token;//加请求头
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
);

//响应拦截器
service.interceptors.response.use(
  response => {
    if (response.config.waitCallBack || response.config.waitCallBack == null) {
      removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    }
    if (!SystemFunc.IsEmpty(loading)) {
      loading.close();
    }
    // console.log(response)
    if (response.status == 401) {
      store.commit('Muta_SetLoginInfo', []); //更新本地缓存
      MessageBox.alert(
        "您登录已失效", "提示",
        {
          confirmButtonText: '确定',
          type: "error",
          callback: action => {
            window.location.href = '/login';
          }
        },
      );
      return false;
    }
    return response.data;
  },
  error => {
    if (!SystemFunc.IsEmpty(loading)) {
      loading.close();
    }
    if (!SystemFunc.IsEmpty(error.response)) {
      let errorHid = `
							api error:
							api:${error.response.config.url},
							method:${error.response.config.method},
							error code:${error.response.status},
							error text:${error.response.statusText}`;
      console.log(errorHid);
      //新添加判断是否登录信息失效
      if (error.response.status == 401) {
        window.localStorage.MyLoginDesigner = "";
        store.commit('Muta_SetLoginInfo', []); //更新本地缓存
        window.location.href = '/login';
        return false;
      }

    }

    //Message({showClose: true,message: '请求失败',type: 'error'});
    return Promise.reject(error)
  }
);

export default service;
