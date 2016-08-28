function ready (fn) {
  if (document.readyState === 'complete') {
    return fn()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn)
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'interactive') fn()
    })
  }
}

ready(function () {
  var links = document.querySelectorAll('.markdown-body a')
  links.forEach(function (link) {
    link.setAttribute('target', '_blank')
  })

  sendTipLink = document.querySelector('.link-send-tip')
  sendTipLink.setAttribute('target', '_blank')
  sendTipLink.setAttribute('href', 'https://github.com/Kikobeats/js-mythbusters/issues/new')
})
