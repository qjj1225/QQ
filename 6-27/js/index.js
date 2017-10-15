var txt = document.getElementsByClassName('text')[0];
var btn = document.getElementsByClassName('btn')[0];
var tishi = document.querySelectorAll('.tishi')[0];

var arr = ['输入的内容不能为空','前后不能有空格 ','请输入数字','不能是小数','不能有0在前面 ','最少5位最多13位','恭喜通过']
//alert(tishi)

//需求：当在文本框输入的内容是否合法，1.合法点击btn可以保存 2.不合法点击btn时，p的提示信息出来
//1.先判断是否为空  2.前后不能有空格  3.请输入数字  4.不能有0在前面。。 5.不能是小数 6.最少5位最多13位 
 
for(var i=0; i<arr.length;i++) {
	arr[i]
}

btn.onclick = function (){
	var txtV = txt.value;
	if(txtV==""){//是否为空，空是空字符串
		tishi.innerHTML= arr[0];
	}else if(txtV.charAt(0)==" "){//第一个字节不能是空格
		tishi.innerHTML= arr[1];
	}else if(txtV[txtV.length-1]==" "){//最后一个字节不能是空格
		tishi.innerHTML= arr[1];
	}else if(isNaN(txtV) || isNaN(txtV.charAt(0))){//输入数字,第一位也是数字
		tishi.innerHTML= arr[2];
	}else if(txtV.charAt(0)== 0){//不能有0在前面
		tishi.innerHTML= arr[4];
	}else if(parseInt(txtV)!=parseFloat(txtV)){//不能是小数
		tishi.innerHTML= arr[3];
	}else if(txtV.length>13 && txtV.length<5){//最多13位并且最少5位
		tishi.innerHTML= arr[5];
	}else{
		tishi.innerHTML= arr[6];//以上条件都不满足，通过
	}
	
}

