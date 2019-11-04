export default ({ app }, inject) => {
    inject('formatDate', (date) => {
        return app.$moment(date).format("DD/MM/YYYY HH:mm:ss")
    })
}