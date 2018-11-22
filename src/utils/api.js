import axios from 'axios'
import　fetchJsonp from 'fetch-jsonp'

const proxyRoot = 'https://proxy.qwertyyb.cn/news-at.zhihu.com'

const get = (url) => axios.get(proxyRoot + url).then(res => res.data)
const post = (url, data, config) => axios.post(url, data, config).then(res => res.data)

export function getList(timestamp, type = 2) {
    return get(`/api/3/section/${type}/before/${timestamp}`)
}
export function getDetail(id) {
    return get(`/api/4/news/${id}`)
}
export function updateSubscription(subscription) {
    return fetchJsonp(`https://script.google.com/macros/s/AKfycbyLOnPvw4ZrjkJO62cXLZM7VT73kuIAaopFoYOOzKuqUoFPvTw7/exec?subscription=${JSON.stringify(subscription)}`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
    })
}