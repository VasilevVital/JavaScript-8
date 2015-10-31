<!DOCTYPE html>
<html>
<body>
<p>点击下面的按钮，将代码块循环五次：</p>
<button onclick="myFunction()">点击有惊喜</button>
<p id="demo"></p>

<script>
function myFunction()
{
	var x = "";
	for(var i = 0; i < 5; i++)
		x = x + "The number is " + i + "<br>";
	document.getElementById("demo").innerHTML = x;
}
</script>
</body>
</html>

