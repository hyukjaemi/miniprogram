var common = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/img/001.jpg',
      '../../assets/img/002.jpg',
      '../../assets/img/003.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies:[],
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie()
  },
  loadMovie:function(){
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header:{
        'Content-Type':"json"
      },
      success:function(res){
        var subjects = res.data.subjects;
        common.processSubjects(subjects);
        page.setData({movies:subjects,hidden:true});

      }
    })
  },
  detail: function (e) {
    getApp().detail(e);
  }
})