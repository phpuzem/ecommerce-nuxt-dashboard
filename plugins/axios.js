export default function ({ $axios, redirect }) {
    $axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response) {
            if (error.response.data.data.errors instanceof Object) {
                Object.entries(error.response.data.data.errors).forEach(([key, value]) => {

                    for (let index = 0; index < value.length; index++) {
                        console.log(value[index]) // Vuex-> Notification
                    }
                })
            }
        }
        return Promise.reject(error);
    });
}