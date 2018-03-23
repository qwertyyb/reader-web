import axios from 'axios'

const proxyRoot = 'https://bird.ioliu.cn/v1?url='

const get = (url) => axios.get(proxyRoot + url).then(res => res.data)

export function getList(timestamp, type = 2) {
    return get(`http://news-at.zhihu.com/api/3/section/${type}/before/${timestamp}`)
}
export function getDetail(id) {
    return get(`http://news-at.zhihu.com/api/4/news/${id}`)
}