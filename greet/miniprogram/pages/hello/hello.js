// pages/hello/hello.js
const { default: texts } = require("../../util/example")
const db = wx.cloud.database()
const $ = db.command.aggregate
Page({

  /**
   * 页面的初始数据
   */
  data: {
    greet:null,
    one:null,
    list:null,
    text:'',
    canAdd:true,
    canRemove:false,
    sum:null
  },
  extraLine:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRandom()
    // const todo=db.collection('todos').where({
    //   _id:'1'
    // }).get().then(res=>{
    // })
  },
  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
  },
  remove() {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
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
  addLine:function(){
    const db = wx.cloud.database()
    db.collection('todos').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        description: "learn cloud database",
        due: new Date("2018-09-01"),
        tags: [
          "cloud",
          "database"
        ],
        // 为待办事项添加一个地理位置（113°E，23°N）
        location: new db.Geo.Point(113, 23),
        done: false
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },
  getSum(){
    db.collection("todos").count().then(res=>{
      this.setData({
        sum: res.total
      })
      console.log(res)
    })
  },
  getRandom(){
    db.collection("greet").aggregate().sample({
      size:1
    }).project({
      con:1,
    }).end().then(res=>{
      this.setData({
         greet:res.list[0]
       })
    })
  }

})