import axios from "axios";
import Qs from "qs";
import { SnackbarProgrammatic as Snackbar } from 'buefy'




//全局默认配置
axios.defaults.baseURL = "http://localhost:8081";

// axios.interceptors.request.use(
//     config => {
//         console.log(config);
//         return config;
//     },
//     err => {
//         console.log(err);
//     }
// );
// 设置请求传递数据的格式 json
axios.defaults.headers['Content-Type'] = 'application/json'

// // 请求拦截
// // axios.defaults.withCredentials = true //请求发送cookie

// //
// axios.defaults.timeout = 10000;


// axios.interceptors.response.use(res => {
//     return res;
// }, () => {
//     Snackbar.open({
//         message: '服务器被吃了',
//         type: 'is-warning',
//         position: 'is-top',
//         actionText: 'Retry',
//         indefinite: true,
//         onAction: () => {
//             this.$buefy.toast.open({
//                 message: 'Action pressed',
//                 queue: false
//             })
//         }
//     })
// })

// /**
//  * 文件上传
//  * @param {*} data 
//  * @returns 
//  */
// export const uploadImage = (data) => {
//     return axios({
//         method: "post",
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//         url: "",
//         data: data
//     })
// }

// /** 
//  * post请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// export function post(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url,{
//             params: params
//         })
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     });
// }
// /**
//  * get请求
//  * @param {*} url [请求的url地址]
//  * @param {*} params [请求时携带的参数] 
//  * @returns 
//  */

// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params: params
//         }).then(res => {
//             resolve(res.data);
//         }).catch(err => {
//             reject(err.data)
//         })
//     });
// }



