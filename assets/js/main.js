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

function addChangelog (el) {
  window.HW_config = {
    selector: '.link-index',
    account: 'xGn9Ay'
  }

  var script = document.createElement('script')
  script.async = true
  script.src = 'https://cdn.headwayapp.co/widget.js'
  el.appendChild(script)
}

function addExternalLinks (elements) {
  elements.forEach(function (link) {
    link.setAttribute('target', '_blank')
  })
}

ready(function () {
  addChangelog(document.querySelector('head'))
  addExternalLinks(document.querySelectorAll('.markdown-body a'))
})
