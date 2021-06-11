
        //숫자를 입력받아서 그 숫자까지 출력하는 프로그램
        var n = 1;//초기값 1을 설정
        var inputNum = prompt("값을 입력하세요", "1");
        if(inputNum !== null)
            while(true){
            document.write(n +"<br>");
            n += 1;
            if(n > inputNum){
                 break;
            }
            else{
            document.write("입력이 취소되었습니다.");       
        }}    