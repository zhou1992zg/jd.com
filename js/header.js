var Btn=document.getElementById("btn");
/**
 * 这是一个点击btn添加class="dp_n"(属性名，属性值)的函数
 * 无参数
 */
var Header_img=document.getElementById("header_img");
function closeImg(){
	Header_img.setAttribute("class","dp_n");
}



var show=document.getElementById("show");
function showImg(){
	show.setAttribute("class","mobile_show_box");
}
var show=document.getElementById("show");
function outImg(){
	show.setAttribute("class","mobile_show_box1");
}





/**
 * 这是个秒杀倒计时器
 * @param {string} hover 倒计时？小时
 * @param {string} minntes 倒计时多少分钟
 * @param {number=} seconds 倒计时多少秒
 * @return {Object} 返回值描述
 */

var Hover=document.getElementById('hover');
var Minntes=document.getElementById('minntes');
var Seconds=document.getElementById('seconds');
var Time_h=Number(10)*60*60;
var Time_m=Number(10)*60;
var Time_s=Number(10);
var Time_he=Time_h+Time_s+Time_m;
Time=setInterval(function (){
		if (0<Time_he) {
			Time_he=Time_he-1;
		}else {
			clearInterval(Time);
		}
		// return Time_he;
		var timer=Time_he
		var h=Math.floor(Time_he/(60*60));
		timer%=60*60;
		var m=Math.floor(timer/60);
		timer%=60;
		var s=Math.floor(timer);
		Hover.innerHTML=getTwo(h);
		Minntes.innerHTML=getTwo(m);
		Seconds.innerHTML=getTwo(s);
},1000);
function getTwo(num){
	if (num<10) num = '0'+num;
	return num;
}





/**
* 这是top悬停搜索框效果
*
 */
var dd=document.getElementById('dd');
var aa=document.getElementById('aa');
var bb=document.getElementById('bb');
	//滚动事件
	window.onscroll=function(){
		//alert(11);
		//scrollTop值 兼容处理
		var y=document.documentElement.scrollTop||window.pageYOffset;
		//判断y>=200
		if(y>=700){
			//dd 定位改变
			dd.style.position='fixed';
			dd.style.top=52+'px';
			dd.style.left=125+'px';
			dd.style.backgroundColor='#fff';
			dd.style.zIndex='99999999999';
			aa.style.top=60+'px';
			aa.style.left=320+'px';
			aa.style.width=1190+'px';
			dd.parentNode.style.width=100+'%';
			dd.parentNode.style.height=50+'px';
			dd.parentNode.style.borderBottom='2px solid red';
			dd.parentNode.style.position='fixed';
			dd.parentNode.style.backgroundColor='#fff';
			dd.parentNode.style.zIndex='99999999999';
		}else if(y<700){
			//回到原来的位置
			dd.style.position='static';
			dd.style.top=0+'px';
			dd.style.left=0+'px';
			dd.style.zIndex='0';
			aa.style.top=0+'px';
			aa.style.left=0+'px';
			dd.parentNode.style.width=0+'%';
			dd.parentNode.style.height=52+'px';
			dd.parentNode.style.borderBottom='0px solid red';
			dd.parentNode.style.position='static';
			dd.parentNode.style.zIndex='0';
		}
	}







