// pages/chp/chp.js
const { default: hasSensitiveWords } = require("../../util/getTotal")
const db = wx.cloud.database()
const $ = db.command.aggregate
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  qk:function(){
    this.setData({
      inputValue:''
    })
  },
  bindFormSubmit(e){
    if(e.detail.value.textarea!=null&&""!=e.detail.value.textarea)
    {
      var con=e.detail.value.textarea
      if(hasSensitiveWords(con)==false)
      {
        // wx.cloud.init()
        // wx.cloud.callFunction({
        //   name:'msgSC',
        //   data:{
        //     text:con
        //   }
        // }).then(res=>{
        //   if(res.result.code=="200"){
            db.collection("greet").add({
          data:{
            con:e.detail.value.textarea
          }
        }).then(res=>{
          wx.showToast({
            title: '已添入福库',
            icon: 'success',
            duration: 2000
          })
          this.qk()
          })
          // else
          // {
          //   wx.showToast({
          //     title: '包含敏感词哦',
          //     icon: 'error',
          //     duration: 2000
          //   })
          // }
        
      }
      else
      {
        wx.showToast({
          title: '包含敏感词哦',
          icon: 'error',
          duration: 2000
        })
        this.qk()
      }
   }
   else
   {
    wx.showToast({
      title: '内容不能为空',
      icon: 'error',
      duration: 2000
    })
   }
  }
})