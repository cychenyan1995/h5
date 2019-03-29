window.onload = function() {
    var images = document.getElementById('images');
    var pre = document.getElementsByClassName('pre');
    var next = document.getElementsByClassName('next');
    var btns = document.getElementById('button').getElementsByTagName('li');
    var currIndex = 0;
    var timer;

    btns[currIndex].className = "on";

    for(var k = 0; k < btns.length; k++){
        btns[k].onclick = (function(){
            stop();
            var index = btns[k].getAttribute('index');
            images.style.left = parseInt(index) * (-600) + 'px';
        })(k)
    }
    animation = function(val){
        var left = parseInt(images.style.left);
        left += val;
        if(left < 0 && left > -3000 ){
            images.style.left = left + 'px';
            if(val > 0){
                currIndex--;
            }else{
                currIndex++;
            }
        }else if(left === 0){
            left = -2400;
            images.style.left = left + 'px';
            currIndex = 3;
        }else if(left === -3000){
            left = -600;
            images.style.left = left + 'px';
            currIndex = 0;
        }
        for(var i = 0; i < btns.length ; i++){
            if(btns[i].className.indexOf('on') > -1){
                btns[i].className = "";
            }
            if(i === currIndex){
                btns[i].className = "on";
            }
        }
    }
    preClick = function(){
        animation(600);
    }
    nextClick = function(){
        animation(-600);
    }

    play = function(){
        timer = setInterval(
            nextClick,
            1000
        );
    }

    stop = function(){
        clearInterval(timer);
    }

    images.onmouseover = stop;
    images.onmouseout = play;

    pre[0].onmouseover = stop;
    next[0].onmouseover = stop;
    play();
    
}