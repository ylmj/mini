// pages/dm/dm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:"我愿像落叶归根，落在你身边！",
    ani:null,
    sign:"运动",
    show:false,
    anitime:10,
    sstime:1,
    zzdx:50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      anitime:options.time,
      motto:options.con,
      sstime:options.ss,
      zzdx:options.zt
    })
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
    this.start()
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
  start:function(){
    var animation=wx.createAnimation({
      duration:7000,
      timingFunction:'ease',
      delay: 1000
    });
    animation.opacity(0.2).translate(0,460).step()
    this.setData({
      ani:animation.export()
    })
  },
  stop(){
    if(this.data.sign=="运动"){
      this.setData({
        sign:"暂停"
      })
      this.start()
    }
    else{
      this.setData({
        sign:"运动",
        ani:null
      })
    }
  },
  touchShow(){
    var that=this
    var sh=that.data.show;
    that.setData({
      show:!sh
    })
  }
})