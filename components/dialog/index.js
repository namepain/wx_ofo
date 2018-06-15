// components/dialog/index.js
Component({
  options: {

  },
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    cancelText: {
      type: String,
      value: '取消'
    }
  },
  data: {
    isShow: false
  },
  methods: {
    show() {
      this.setData({
        isShow: true
      })
    },
    hide() {
      this.setData({
        isShow: false
      })
    },
    _confirm() {
      this.triggerEvent("confirmEvent");
      this.hide()
    },
    _cancel() {
      this.triggerEvent("cancelEvent")
      this.hide()
    }
  }
})