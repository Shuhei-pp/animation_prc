function boxclick(){
    var element = document.getElementById("anime_test");
    console.log(element);
    var l1 = element.style.left;
    console.log(l1);
    var l2 =parseInt(l1);
    console.log(l2);
    l2 += 2;
    console.log(l2);
    l2 = l2 +"px";
    console.log(l2);
    element.style.left = l2;
}

function stickclick(){
    var interval = window.setInterval(
        function(){
            var stick = document.getElementById("anime1");
            var long = parseInt(stick.style.width);
            long = long + 1;
            var deflong = long+"px";
            stick.style.width = deflong;
            if(long>=400){
                clearInterval(interval);
                interval2();
            }
            console.log(deflong);
        },5
    );
}

function interval2(){
    var interval = window.setInterval(
        function(){
            var stick = document.getElementById("anime2");
            var long = parseInt(stick.style.height);
            long++;
            var deflong = long+"px";   
            stick.style.height = deflong;   
            if(long>400){
                clearInterval(interval);
                interval3();
            }
            console.log(deflong);
        },5
    );
}

function interval3(){
    var interval = window.setInterval(
        function(){
            var stick = document.getElementById("anime3");
            var long = parseInt(stick.style.width);
            var left = parseInt(stick.style.left);
            long++;
            left--;
            var deflong = long+"px";
            var defleft = left+"px";
            stick.style.width =deflong;
            stick.style.left=defleft;
            if(long>400){
                clearInterval(interval);
            }
            console.log(deflong);
            console.log(defleft);
        },5
    );
}

function number(){
    var i = document.getElementById("number").innerHTML;
    console.log (i);
    i++;
    document.getElementById("number").innerHTML = i;
}