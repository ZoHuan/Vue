/* 
    1.歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果
*/
var app = new Vue({
	el: "#player",
	data: {
		//查询关键字
		query: "",
		//歌曲数组
		musicList: [],
		//歌曲地址
		musicUrl: "",
		//歌曲封面
		musicCover: "",
		//歌曲评论
		hotComments: [],
		//动画播放状态
		isPlaying: false,
		//遮罩层的显示状态
		isShow: false,
		//MV地址
		mvUrl: "",
	},
	methods: {
		//歌曲搜索
		searchMusic: function () {
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
				function (response) {
					// console.log(response)
					that.musicList = response.data.result.songs;
					console.log(response.data.result.songs);
				},
				function (err) {}
			);
		},
		//歌曲播放
		playMusic: function (musicId) {
			var that = this;
			// console.log(musicId);
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
				function (response) {
					// console.log(response);
					// console.log(response.data.data[0].url);
					that.musicUrl = response.data.data[0].url;
				},
				function (err) {}
			);
			//歌曲详情获取
			axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
				function (response) {
					// console.log(response)
					// console.log(response.data.songs[0].al.picUrl);
					that.musicCover = response.data.songs[0].al.picUrl;
				},
				function (err) {}
			);
			//歌曲评论获取
			axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
				function (response) {
					// console.log(response);
					// console.log(response.data.hotComments)
					that.hotComments = response.data.hotComments;
				},
				function (err) {}
			);
		},
		//歌曲播放
		play: function () {
			// console.log("play");
			this.isPlaying = true;
		},
		//歌曲暂停
		pause: function () {
			// console.log("pause");
			this.isPlaying = false;
		},
		//播放MV
		playMv: function (mvid) {
			var that = this;
			axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
				function (response) {
					// console.log(response);
					// console.log(response.data.data.url);
					that.isShow = true;
					that.mvUrl = response.data.data.url;
				},
				function (err) {}
			);
		},
		//隐藏
		hide: function () {
			this.isShow = false;
		},
	},
});
