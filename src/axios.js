import axios from "axios";
axios.defaults.baseURL = 'http://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
    console.log(config);
    config.params = {
        ...config.params,
        appkey:"zhangyuyang_1602507100391"
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axios;