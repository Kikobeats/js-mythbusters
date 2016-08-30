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
})
