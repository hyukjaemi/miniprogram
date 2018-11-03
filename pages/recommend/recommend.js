var common = require("../../utils/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie()
  },
  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        var subjects = res.data.subjects;
        common.processSubjects(subjects);
        page.setData({ movies: subjects, hidden: true });

      }
    })
  },
  detail: function (e) {
    getApp().detail(e);
  }
})