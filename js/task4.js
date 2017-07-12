/*实现一个类似棋盘的格子空间，每个格子用两个数字可以定位，一个红正方形的DOM在这个空间内，正方形中的蓝色边表示这是他的正面，有一个input输入框
在输入框中允许输入如下指令，按下按钮后，使得正方形做相应动作

    GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
    TUN LEF：向左转（逆时针旋转90度）
    TUN RIG：向右转（顺时针旋转90度）
    TUN BAC：向右转（旋转180度）

移动不能超出格子空间 */
//获取文本框以及按钮
	var text = document.getElementById('text');
	var button=document.getElementById('do');
	//获取需要操作的正方形
	var block = document.getElementById('block');
	//定义一组方向
	var directions = ['top','right','down','left'];
	//初始化时方向为top
	var direction = directions[0];
	//初始化数字和角度
	var num = 0;
    var deg = 0;
    //点击执行按钮
	button.onclick = function () {
        //获取文本框的值
		var text_value = text.value;
        //获取正方形的left值和top值
		var l = block.offsetLeft;
		var t = block.offsetTop;
		var r = block.offsetRight;
		var b = block.offsetBottom;
        //判断方向和角度
		if (text_value.toUpperCase() == 'TUN LEF') {
			//每次点击角度-90
            deg = deg-90;
			block.style.transform = 'rotate(deg+'deg')';
			//每次点击时num-1，并通过判断来调整num的值
			num--;
			if (num<0) {
				num = 3;
			}
		}
		if (text_value.toUpperCase() == 'TUN RIG') {
			deg = deg+90;
			block.style.transform = 'rotate(deg+'deg')';
			num++;
			if (num > 3) {
				num = 0;
			}
		}
		if (text_value.toUpperCase() == 'TUN BAC') {
			deg = deg+180;
			block.style.transform = 'rotate(deg+'deg')';
			num += 2;
			if ((num>3)&&(num%2===0)) {
				num = 0;
			}else if ((num>3)&&(num%2!==0)) {
				num = 1;
			}
		}
		//获取到direction的值
		direction = directions[num];
		if (text_value.toUpperCase() == 'GO') {
			//前进时判断direction
			if (direction == 'top') {
				if (t == 0) {
					alert('请调整方向');
				}else{
					block.style.top = t-40+'px';
				}
			}else if (direction == 'left') {
				if (l == 0) {
					alert('请调整方向');
				}else{
					block.style.left = l-55+'px';
				}
			}else if (direction == 'right') {
				if (r == 0) {
					alert('请调整方向');
				}else{
					block.style.left = l+55+'px';
				}
			}else if (direction == 'down') {
				if (b == 0) {
					alert('请调整方向');
				}else{
					block.style.top = t+40+'px';
				}
			}
		}
	}