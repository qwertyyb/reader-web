import axios from 'axios'

const proxyRoot = 'https://proxy.qwertyyb.cn/news-at'

const get = (url) => axios.get(proxyRoot + url).then(res => res.data)

export function getList(timestamp, type = 2) {
    return get(`/api/3/section/${type}/before/${timestamp}`)
}
export function getDetail(id) {
    return get(`/api/4/news/${id}`)
}