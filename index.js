var count = document.getElementById('count');
var setCount = count.innerHTML;
console.log(setCount);
var backimg = document.getElementById('back-img');
console.log(backimg.src);

setInterval(function(){
setCount = setCount > 0 ? setCount -1 : 0;
count.innerHTML = setCount;



var backImgPath = setCount === 0 ? 'bg1.jpg' : 'bg2.jpg'

backimg.src = backImgPath;

},1000);