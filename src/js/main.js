window.twttr = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {}
  if (d.getElementById(id)) return t
  js = d.createElement(s)
  js.id = id
  js.src = 'https://platform.twitter.com/widgets.js'
  fjs.parentNode.insertBefore(js, fjs)

  t._e = []
  t.ready = function (f) {
    t._e.push(f)
  }
  return
}(document, 'script', 'twitter-wjs'))

window.$docsify = {
  alias: {
    '/changelog': 'https://raw.githubusercontent.com/Kikobeats/js-mythbusters/master/CHANGELOG.md'
  },
  name: 'JS MythBusters',
  subMaxLevel: 2,
  executeScript: true,
  loadSidebar: true,
  auto2top: true,
  coverpage: true,
  plugins: [
    function (hook, vm) {
      hook.beforeEach(function (markdown) {
        var url = 'https://github.com/Kikobeats/js-mythbusters/edit/master/docs' + vm.router.getFile()
        var editButton = '<a class="edit-button" href="' + url + '" target="_blank">edit this file</a>\n'
        var metaContainer = '<div class="meta-container">' + editButton + '</div>\n'
        return metaContainer + markdown
      })
    }
  ]
}

window.HW_config = {
  selector: '.sidebar>h1',
  account: 'xGn9Ay'
}

navigator.serviceWorker && navigator.serviceWorker.register('sw.js')
