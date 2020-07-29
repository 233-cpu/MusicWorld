$(function(){
	$('#app').fullpage({
		sectionsColor:['red','green']
	})
})

var app = new Vue({
	el:'#app',
	data:{
		backgroundIndex:1,
		songName:'Keala Settle,Hugh Jackman,Zac Efron - The Greatest Show',
		songIndex:0,
		songNameList:[
			'Keala Settle,Hugh Jackman,Zac Efron - The Greatest Show',
			'Loren Allred - Never Enough',
			'动力火车 - 当'
		],
		songSrcList:[
			"src/audios/Keala%20Settle,Hugh%20Jackman,Zac%20Efron%20-%20The%20Greatest%20Show.mp3",
			"src/audios/Loren%20Allred%20-%20Never%20Enough.mp3",
			"src/audios/动力火车%20-%20当.mp3"
		],
		MVSrcList:[
			"src/videos/TheGreatestShow.mp4",
			"src/videos/NeverEnough.mp4",
			""
		]
	},
	methods:{
		changeBackground(){
			if(this.backgroundIndex<4){
				this.backgroundIndex++;
			}else{
				this.backgroundIndex = 1;
			}
			this.$refs.first.style.background = "url(src/images/bg" + this.backgroundIndex + ".jpg)";
			this.$refs.first.style.backgroundSize = "100% 100%";
		},
		nextSong(){
			if(this.songIndex<2){
				this.songIndex++;
			}else{
				this.songIndex = 0;
			}
			this.songName = this.songNameList[this.songIndex];
		},
		showMV(){
			if(this.$refs.MV.height == '0'){
				this.$refs.MV.height = "400";
			}else{
				this.$refs.MV.height = "0";
			}
		}
	}
});
