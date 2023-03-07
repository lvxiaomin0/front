import axios from "axios";
import Qs from "qs";
import { SnackbarProgrammatic as Snackbar } from 'buefy'




//全局默认配置
axios.defaults.baseURL = "http://42.192.90.40:8081";

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


// //post传数据用data，get传参数用params
// export const adminLogin = (username, password) => {
//     return axios.post("/loginbackstage", Qs.stringify({ username, password }));
// };

// export const userLogin = (email, password) => {
//     return axios.post(
//         "http://localhost:8081/userlogin",
//         Qs.stringify({ email, password })
//     );
// };

// export const getAllArticle = (page) => {
//     return axios.post("/pagearticle", Qs.stringify({ page }));
// };

// export const getAllArticleType = () => {
//     return axios.post("/getallarticletype");
// };

// export const getArticleByTypeId = typeId => {
//     return axios.post("/getarticlebytypeid", Qs.stringify({ typeId }));
// };

// export const getHotArticleType = () => {
//     return axios.post("/gethotarticletype");
// };

// export const getPageMain = pageNum => {
//     return axios({
//         url: "/getpagearticle",
//         params: {
//             page: pageNum
//         }
//     })
// };
// export const getnew = () => {
//     return axios("/getnew")
// };

// export const gethotuser = () => {
//     return axios("/hotuser")
// };
// export const register = (userName, userPassword, userShow, userEmail, userPhone, userSex) => {

//     return axios.post("/user/register", Qs.stringify({ userName, userPassword, userShow, userEmail, userPhone, userSex }).toString())

// };
// export const getcomment = (artId) => {
//     return axios.post("/getComment", Qs.stringify({ artId }))
// };
// export const newcomment = (comArtId, text, comUserId) => {
//     return axios.post("/postcomment", Qs.stringify({ comArtId, text, comUserId }))
// };
// export const newpost = (userId, title, text, select) => {
//     return axios.post("/newpost", Qs.stringify({ userId, title, text, select }))
// }

// export const findartbyuserid = (userId) => {
//     return axios.post("/findartbyuserid", Qs.stringify({ userId }))
// }

// export const getuserlist = () => {
//     return axios.post("/getuserlist")
// }


