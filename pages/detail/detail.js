var common = require('../../utils/utils.js')
Page({
  data: {
    movie:{},
    hidden: false
  },
  onLoad: function (options) {
    this.loadMovie(options.id);
  },
  loadMovie: function (movieId){
    var page = this;
    //var movieId = wx.getStorageSync("movieId");
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + movieId,
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        var subject = res.data;
        console.log(subject)
        common.processSubject(subject);
        page.setData({movie:subject,hidden:true});
      }
    })
  }
})