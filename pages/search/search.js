var common = require('../../utils/utils.js')
Page({
  data: {
    inputVal:'',
    movies:[],
    hidden:true,
    modalHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindKeyInput:function(e){
    this.setData({inputVal:e.detail.value});
  },
  search:function(){
    var page = this;
    if(this.data.inputVal==""){
      this.setData({modalHidden:false});
      return ;
    }
    this.setData({hidden:false});
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/search?q='+page.data.inputVal,
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        var subjects = res.data.subjects;
        common.processSubjects(subjects);
        page.setData({movies:subjects,hidden:true});
      }
    })
  },
  hideModal:function(){
    this.setData({modalHidden:true});
  },
  detail:function(e){
    getApp().detail(e);
  }
})