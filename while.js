<!DOCTYPE html>
<html>
<body>
<p>点击下面的按钮，只要小于5就一直循环代码块</p>
<button onclick="myFunction()">点击有惊喜</button>
<p id="demo"></p>

<script>
function myFunction()
{
	var x = "", i = 0;
	while(i < 5)
	{
		x = x + "the number is "+ i + "<br>";
		i++;
	}
	document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
