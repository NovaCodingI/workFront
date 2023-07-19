window.addEventListener('load', function(){
    btn1.addEventListener('click', function(){
      // 리터럴을 이용한 정규 표현식 객체 생성
      // 패턴 양쪽에 /를 입력(시작기호, 종료기호)
      let regExp2 = /script/;
      
      // 생성자 함수를 이용한 정규 표현식
      // 생성자의 매개값으로 패턴문자열을 지정
      let regExp1 = new RegExp('script');

      let str1 = 'javascript jqueryscript ajax';
      let str2 = 'java jquery ajax';


      console.log(regExp1
                    , typeof(regExp1)
                    , regExp1 instanceof RegExp);

      console.log(regExp2
                    , typeof(regExp2)
                    , regExp2 instanceof RegExp);


    /*
        RegExp 객체에서 제공하는 메서드
        객체.test(문자열)
        : 문자열에 정규식 패턴을 만족하는 값이 있으면 true
            , 없으면 false를 리턴한다.

        객체.exec(문자열)
        : 문자열에 정규식 패턴을 만족하는 값이 있으면
            처음 매치된 문자열을 리턴한다.


    */

    console.log('regExp1', regExp1);
    console.log('str1', str1);
    console.log('str2', str2);
    area1.innerHTML = '<h3>정규표현식 객체 생성</h3>';
        // RegExp 객체에서 제공하는 메서드 사용
        // regExp1 생성자 함수 (new RegExp('패턴'))
        // regExp2 리터럴을 이용한 정규 표현식 (/패턴/) 패턴문자열
        // script
    area1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)} <br>`;
    area1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)} <br>`;

    area1.innerHTML += `regExp2.exec(str1) : ${regExp2.exec(str1)} <br>`;
    area1.innerHTML += `regExp2.exec(str2) : ${regExp2.exec(str2)} <br>`;

    /*
        String 객체에서 정규 표현식 객체를 이용하는 메서드
        문자열.match(정규식)
        : 문자열에서 정규식 패턴의 값과 일치하는 값을
            리턴한다.
        문자열.replace(정규식, 바꿀값)
        : 문자열에서 정규식 패턴의 값과 일치하는 부분을
            바꿀값으로 변경한다.
        문자열.search(정규식)
        : 문자열에서 정규식 패턴의 값과 일치하는 부분의
            시작 인덱스를 리턴한다.
        문자열.split(정규식)
        : 문자열에서 정규식 패턴의 값과 일치하는 값을
            구분자로 하여 배열을 생성하여 리턴한다.

    */

    // String 객체에서 정규 표현식을 사용하는 메서드
    area1.innerHTML += 'str1.match(regExp1) : ' + str1.match(regExp1) + '<br>';
    area1.innerHTML += 'str1.replace(regExp1, "스크립트") : ' + str1.replace(regExp1, "스크립트") + '<br>';
    area1.innerHTML += 'str1.search(regExp1) : ' + str1.search(regExp1) + '<br>';
    area1.innerHTML += 'str1.split(regExp1) : ' + str1.split(regExp1) + '<br>';

    })

    btn2.addEventListener('click', function(){
        let str = 'JavaScript jQuery Ajax';
        let str1 = 'JavaScript'
                 'jQuery'
                 'Ajax';
        area2.innerHTML = '<h3>플래그문자</h3>';

        // area2.innerHTML += str.replace(패턴, 변경할문자열);
        // replace() 메서드에서 '$&'는 패턴을 만족하는 문자열을 가리킨다.
        // 어떤 플래그가 먼저오든 상관없이 같이 사용할수있다.
        area2.innerHTML += '/a/ : ' + str.replace(/a/, '($&)') + '<br>';
        area2.innerHTML += '/a/i : ' + str.replace(/a/i, '($&)') + '<br>';
        area2.innerHTML += '/a/g : ' + str.replace(/a/g, '($&)') + '<br>';
        area2.innerHTML += '/a/m : ' + str.replace(/a/m, '($&)') + '<br>';
        area2.innerHTML += '/a/gi : ' + str.replace(/a/gi, '($&)') + '<br>';
        area2.innerHTML += '/a/ig : ' + str.replace(/a/ig, '($&)') + '<br>';

    })

    btn3.addEventListener('click', function(){
        let str = 'a aa aaa aaaa';
        area3.innerHTML = '<h3>메타문자</h3>';
        /*
            반복검색
            {n, m}
                앞선 패턴이 최소 n번 최대 m번 반복되는 문자열을 의미한다.
            +
                앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.
            ?
                앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다.
        */

        area3.innerHTML += '<br>/a{1,2}/g : ' + str.replace(/a{1,2}/g, '($&)');
        // {3,3}
        area3.innerHTML += '<br>/a{3}/g : ' + str.replace(/a{3}/g, '{$&}');
        // 앞선 패턴이 최소 2번 이상 반복되는 문자열
        area3.innerHTML += '<br>/a{2,}/g : ' + str.replace(/a{2,}/g, '[$&]');
        // {1,}
        area3.innerHTML += '<br>/a+/g : ' + str.replace(/a+/g, '($&)');
        // {0,1}
        area3.innerHTML += '<br>/a?/g : ' + str.replace(/a?/g, '($&)')+ '<br>';

        let str1 = 'Javascript\nJquery\nSheelscript\nAjax';

        /*
            문자열의 앞, 뒤 구분
                ^는 문자열의 시작을 의미한다.
                $는 문자열의 마지막을 의미한다.
        */
       area3.innerHTML += '/^j/ig : ' + str1.replace(/^j/ig, '($&)') + '<br>';
       area3.innerHTML += '/^j/igm : ' + str1.replace(/^j/igm, '($&)') + '<br>';
       area3.innerHTML += '/ipt$/igm : ' + str1.replace(/ipt$/igm, '($&)') + '<br>';

     /*
        OR 검색
        [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.  [] 또는 박스!
        [a-z]
        [A-Z]
        [0-9]
        [a-zA-Z0-9] : []안에서 -는 범위 지정을 의미, 영어 소, 대문자와 숫자를 의미하는것
        [a-zA-Z0-9 -] 영어 소, 대문자와 숫자, 공백을 의미하는것
        [^a] : [] 안에서 ^는 not의 의미를 지님
     */

        str2 = '123 Javascript Jquery Ajax';
        area3.innerHTML += '/[aj]/ig : ' + str2.replace(/[aj]/ig, '($&)') + '<br>';
        area3.innerHTML += '/[a-j]/ig : ' + str2.replace(/[a-j]/ig, '($&)') + '<br>';
        area3.innerHTML += '/[^aj]/ig : ' + str2.replace(/[^aj]/ig, '($&)') + '<br>';
        area3.innerHTML += '/[a-z]/g : ' + str2.replace(/[a-z]/g, '($&)') + '<br>';
        area3.innerHTML += '/[A-Z]/g : ' + str2.replace(/[A-Z]/g, '($&)') + '<br>';
        area3.innerHTML += '/[0-9]/g : ' + str2.replace(/[0-9]/g, '($&)') + '<br>';
        
        
    /*
        임의의 문자열 검색
        . : 임의의 문자 한개를 의미
    */
            area3.innerHTML += '<h4>임의의 문자열검색</h4>';
            area3.innerHTML += '/...../g : ' + str2.replace(/...../g, '($&)') + '<br>';


    /*
        \d : 숫자를 의미한다. [0-9]
        \D : 숫자가 아닌 문자를 의미한다. [^0-9]
        \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다. [a-zA-Z0-9_]
        \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다. [^a-zA-Z0-9_]
        \s : 공백 문자를 의미한다. (띄어쓰기, 탭, 줄바꿈) [ \n\t]
        \S : 공백 문자가 아닌 문자를 의미한다. [^ \n\t]


        -----
        나는 빡빡이다 x 3
        1234567
        010.222.3333
        010-222-3333
        010 222 3333
        (02) 111 2222
        -----
        
        /\d{3}[ .-]\d{3}[ .-]\d{4}/g
        010.222.3333
        010-222-3333
        010 222 3333

        /\(?\d{2,3}\)?[ .-]\d{3}[ .-]\d{4}/g
        010.222.3333
        010-222-3333
        010 222 3333
        (02) 111 2222

    */

    })


    

})  