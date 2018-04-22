import NativeShare from 'nativeshare'

export default class share extends NativeShare {
  call(options) {
    try {
      super.call(options)
    } catch(err) {
      if(navigator.share) {
        navigator.share({
          title: options.title,
          text: options.desc,
          url: options.link
        })
      }
    }
  }
}