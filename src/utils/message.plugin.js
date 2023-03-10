export default {
  install (Vue, options) {
    Vue.config.globalProperties.$message = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html })
    }
    Vue.config.globalProperties.$error = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[ошибка]: ${html}` })
    }
  }
}
