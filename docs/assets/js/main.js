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

function addClass (el, className) {
  if (el.classList) el.classList.add(className)
  else el.className += ' ' + className
}

ready(function () {
  addClass(document.body, 'hack')
  addClass(document.body, 'dark')
})
