// pages/dmcon/dmcon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array:[3,4,5,6,7,8,9,10,15,20],
    index1:0,
    array1:[1,2,3,4,5,6,7,8,9,10,15,20],
    index2:0,
    array2:[50,70,90,110,130,150]
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
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindSPickerChange:function(e){
    this.setData({
      index1: e.detail.value
    })
  },
  bindZPickerChange:function(e){
    this.setData({
      index2: e.detail.value
    })
  },
  formSubmit(e){
    var con=e.detail.value.con
    var time=this.data.array[this.data.index]
    var ss=this.data.array1[this.data.index1]
    var zt=this.data.array2[this.data.index2]
    if(con=="")
    {
      wx.showToast({
        title: '输入内容为空',
        icon: 'error',
        duration: 2000
      })
    }
    else
    {
      wx.navigateTo({
        url: `../dm/dm?con=${con}&time=${time}&ss=${ss}&zt=${zt}`,
      })
     }
  }
})