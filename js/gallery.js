var num = 1;
    function nextGallery(){
        num += 1;
        if(num>7){
            num = 1;
        }
        document.getElementById('gallery').src = "../images/img" + num + ".jpg";
    } //지역변수 썼을 경우에 한장만 넘겨짐 , 
    function prevGallery(){
        num -= 1;
        if(num<1){
            num = 7;
        }
        document.getElementById('gallery').src = "../images/img" + num + ".jpg";
    }