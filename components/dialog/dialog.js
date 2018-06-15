function getPageCtx() {
  const pages = getCurrentPages();
  return pages[pages.length - 1]
}

function getDialog(el) {
  return getPageCtx().selectComponent(el)
}

module.exports = function (options = { el: '#__dialog' }) {
  return {
    show() {
      getDialog(options.el).show()
    },
    hide() {
      getDialog(options.el).hide()
    }
  }
};