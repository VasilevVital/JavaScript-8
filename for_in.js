<!DOCTYPE html>
<html>
<body>
<p>点击下面的按钮，循环遍历对象“person”的属性。</p>
<button onclick="myFunction()">点击有惊喜</button>
<p id="demo"></p>

<script>
function myFunction()
{
	var x;
	var txt = "";
	var person = {fname:"Bill", lname:"Gates", age:56};
	for(x in person)
	{
		txt = txt + person[x];
	}
document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>
