import Vue from 'vue';
import axios from 'axios';


export default function ({
  redirect,
  store
}) {

  axios.interceptors.response.use((config) => {
    return config;
  }, function (error) {
    console.log({ error })
    if (error.response) {
      let status = error.response.status
      console.log(status)
      if (status == 403) {
        console.log("timeout here")
        // console.log($store)
        store.dispatch('timeout/timeoutAction')
      }
    }
    return Promise.reject(error);
  });

  Vue.use(axios, {
    url: "/"
  });


}
