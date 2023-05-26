window.onload = () =>{
    
    // window.open() , 예전에 팝업창 쓸땐 많이 썼는데 요즘엔 많이 안쓰는 추세
    btn1.addEventListener('click', function(){
        // window.open(); // 새탭
        // window.open('http://www.naver.com'); // 새탭에 열리고 URL로 이동
        // window.open('http://www.naver.com', 'wow'); // open(url, 창이름)
        // open(url, 창이름, '속성')
        window.open('7. BOM.html', 'BOM', 'width=500, height=500');
        // console.log('window.open(); : ', window.open());
    });

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', ()=>{

        let timerId = 0;

        // 새창띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료 됩니다.');

        // setTimeout(콜백함수, 시간)
        // 일정시간 경과 후 콜백 함수를 한번 실행
        // window.setTimeout(close, 3000); 자신의 창이 꺼짐

        // 취소하기 위해 변수에 담아줍니다.
        timerId = window.setTimeout(()=>{
            newWindow.close();   
        },3000);

        // 타이머 id를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다.
        clearTimeout(timerId);

        // window.setTimeout(()=>{
        //     newWindow.close();   
        // },3000);

    });

    // 밖에 선언해야.. 함수에 함수는 안된다 Stop을 하기위한 변수
    let timerId = 0;
    btnStart.addEventListener('click', ()=>{
        
        // 일정시간마다 콜백함수를 반복 실행
        // window.setInterval(함수, 시간)
        // 반환된 숫자값을 이용해 종료 시켜 줄 수 있다
        timerId = window.setInterval(()=>{

            // 현재 날짜, 시간 정보를 담은 객체
            let date = new Date();

            // getTime(); 1970년 기준으로 밀리세컨트로 date 표현
            // area1.innerHTML = date.toTimeString();
            // 변수로 가져올꺼기 때문에 $로 가져올게요
            area1.innerHTML = `${date.getHours()} : ${date.getMinutes()} :`
                        + `<span id='second'> ${date.getSeconds()} </span>`;

        }, 1000);

        console.log('timerId', timerId);

    });

    // 여러개 실행후 하나만 취소하면 시간은 계속 흘러간다
    btnStop.addEventListener('click', ()=>{
        clearInterval(timerId);
    });


    // 콘솔창에 window 입력 후 확인, f가 붙어있으면 함수 안붙어있으면 속성
    btn3.addEventListener('click', ()=>{
        area3.innerHTML = '<h4> location 객체 </h4>';

        for(key in location){
            // console.log('key : ', key);
            // 객체[속성]
            // 객체.속성
            // console.log('value : ', location[key]);
            // ?? value 만 체크됨
            // console.log('value : ', location.key);

            area3.innerHTML +=
                `key : ${key}, value : ${location[key]}<br>`
        }

    });



}

