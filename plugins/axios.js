export default function ({ $axios, store }) {
    $axios.interceptors.response.use(
        function (response) { return response; },
        function (error) {
            if (error.response.status === 422) {
                if (error.response) {
                    if (error.response.data.data.errors instanceof Object) {
                        store.dispatch('validation/setErrors', error.response.data.data.errors)
                    }
                }
            }
            return Promise.reject(error);
        });
    $axios.onRequest(() => {
        store.dispatch('validation/clearErrors')
    })
}
