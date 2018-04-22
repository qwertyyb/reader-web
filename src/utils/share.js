import NativeShare from 'nativeshare'

export default class share extends NativeShare {
  call(command, options) {
    console.log(this)
    try {
      super.call(command, options)
    } catch(err) {
      if(navigator.share) {
        options = options || this._config
        navigator.share({
          title: options.title,
          text: options.desc,
          url: options.link
        })
        throw err
      }
    }
  }
}