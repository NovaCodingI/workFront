// 버튼에 onclick 이벤트를 입력 후
// 함수를 실행시키기 위해서 버튼을 클릭 합니다!!
function typeTest(){
    // 화면 출력
    // document.write('typeTest');
    // 알림창
    // alert('typeTest');
    console.log('typeTest');

    // 변수를 선언시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은따옴표, 큰따옴표로 묶은 데이터
    // 변수는 중복선언 불가능
    let name = '문인수';
    // let name = "문인수";
    let name1 = ""; // 빈문자열
    let name2 = "문인수";

    // 논리값 : true, false
    let check = false;

    // 박스 선택
    let area1 = document.getElementById('area1');
    // 박스에 값을 입력
    area1.innerHTML = '<h4>안녕하세요</h4>';
    // Template literals 템플릿리터럴
    // "",'' 대신 ``(백팃)을 사용하여 변수를 함께 출력
    area1.innerHTML += `name : ${name}, type : ${typeof(name)} <br><br>`;
    area1.innerHTML += `name1 : ${name1}, type : ${typeof(name1)} <br><br>`;
    area1.innerHTML += `name2 : ${name2}, type : ${typeof(name2)} <br><br>`;
    // area1.innerHTML += 'name : ' + name + ', type : ' + typeof(name) + '<br>';
    area1.innerHTML += `age : ${age}, height : ${height} <br>`
    area1.innerHTML += `check : ${check}, type : ${typeof(check)} <br><br>`;

}

function typeTest2(){
    console.log('typeTest2');

    // 배열 선언
    let hobbies = ['축구', '농구', '야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = ('객체 테스트') + '<br><br>';
    area2.innerHTML += `hobbies : ${hobbies}, type : ${typeof (hobbies)} <br><br>`;

    // 변수에 함수를 저장할 수도 있고 매개변수로 함수를 넘겨 줄수도 있습니다

    // let testFunc = function(num1, num2){
    // 함수 선언 : 익명의 함수를 변수에 저장
    // 매개변수의 갯수가 일치하지 않은 경우, undefined로 초기화 되어 입력되므로 오류가 발생 ====>> 초기값지정
    // 초기값 지정으로 undefined 를 0으로 지정
    let testFunc = function(num1=0, num2=0){
        console.log('num1 : ', num1);
        console.log('num2 : ', num2);
        return num1 + num2;
    }

    // 함수를 실행 : 변수이름(매개변수)
    console.log('testFunc', testFunc(10, 20));

    console.log('testFunc', testFunc());
    // 매개변수의 갯수가 일치하지 않아도 실행
    console.log('testFunc', testFunc(10));

    area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof(testFunc)} <br><br>`;

    // 객체타입
    let user = {
        /*
            속성 : 값,
            속성 : 값,
            ...
        */
        name: '문인수',
        age: 20,
        height: 184.5,
        id : 'test',
        hobbies : ['축구', '농구', '야구']

    };

    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.height);
    console.log(user.id);
    console.log(user.hobbies);
    console.log(user[hobbies]); // undefined ??
    // console.log(user[height]); // undefined 오류

    area2.innerHTML += `user : ${user}, type : ${typeof(user)}<br><br>`;
    area2.innerHTML += `null type : ${typeof(null)}<br><br>`;
    area2.innerHTML += `undefined type : ${typeof(undefined)}<br><br>`;

}
/*
    2. 데이터 형변환
    1) 문자열과 숫자의 '+' 연산
     문자형과 + 연산시 문자열로 변경
     그외의 연산 시 숫자타입인 경우 숫자로 변환 하여 연산처리
*/
function plusTest(){
    let test1 = 7 + 7; // 14
    let test2 = '7' + 7; // 77
    let test3 = 7 + '7'; // 77
    let test4 = 7 + 7 + '7'; // 147
    let test5 = 7 + '7' + 7; // 777
    let test6 = '7' + (7+7); // 714
    
    let test7 = 7 * '7'; // 49
    let test8 = '7' - 3; // 4
    let test9 = '4' / 2; // 2
    let test10 = 4 % '2'; // 0
    let test11 = '3' * '7'; // 21
    let test12 = '3' * 'a'; // NaN

    let area3 = document.getElementById('area3');

    area3.innerHTML = `test1 : ${test1} <br>`;
    area3.innerHTML += `test2 : ${test2} <br>`;
    area3.innerHTML += `test3 : ${test3} <br>`;
    area3.innerHTML += `test4 : ${test4} <br>`;
    area3.innerHTML += `test5 : ${test5} <br>`;
    area3.innerHTML += `test6 : ${test6} <br>`;
    area3.innerHTML += `test7 : ${test7} <br>`;
    area3.innerHTML += `test8 : ${test8} <br>`;
    area3.innerHTML += `test9 : ${test9} <br>`;
    area3.innerHTML += `test10 : ${test10} <br>`;
    area3.innerHTML += `test11 : ${test11} <br>`;
    area3.innerHTML += `test12 : ${test12} <br>`;

}


function castingTest(){
    // let area4 = doucment.getElementById('area4'); 에러 왜 나지?
    let area4 = document.getElementById('area4');

    area4.innerHTML = `${2 + '3'}<br>`; // 23
    area4.innerHTML += `${2 + Number('3')} <br>`; // 5
    area4.innerHTML += `${String(2) + Number('3')} <br>`; // 23
    area4.innerHTML += `${2 + parseInt('3')} <br>`; // 5
    area4.innerHTML += `${2 + parseFloat('3')} <br>`; // 5

    // 16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `${parseInt('ff', 16 )}`;

}

function opTest(){

    let area5 = document.getElementById('area5');

    area5.innerHTML = '"==" 연산자 테스트<br>';
    area5.innerHTML += `7 == 7 : ${7 == 7} <br>`;
    area5.innerHTML += `7 == '7' : ${7 == '7'} <br>`;
    area5.innerHTML += `7 != '7' : ${7 != '7'} <br>`;
    area5.innerHTML += `'7' != '7' : ${'7' != '7'} <br>`;

    area5.innerHTML += '<br>"===" 연산자 테스트<br>';
    area5.innerHTML += `7 === 7 : ${7 === 7} <br>`;
    area5.innerHTML += `7 === '7' : ${7 === '7'} <br>`;
    area5.innerHTML += `7 !== '7' : ${7 !== '7'} <br>`;
    area5.innerHTML += `'7' !== '7' : ${'7' !== '7'} <br>`;

}

function forTest(){

    // 1~10까지 수를 담고 있는 배열 array
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let array = [10, 9, 8, 7, 6, 5];

    for(let i=0; i < array.length; i++){
        console.log(array[i]);
    }

    console.log('for ===========================');

    // for(변수 in 객체){}
    // 반복문 - 갹채 키와 값 가져오기
    // 반복 변수에 array의 index를 순서대로 담아서 반복시킨다.
    // 객체명.속성명, 객체명[속성명]

    for(let i in array){
        console.log(array[i]);
    }
    let student = {
        name : '고경희'
        , age : 20
        , class : '1'
    };

    // 객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key,student[key]);
        // 속성의 이름을 아는게 아니잖아요.. undefined;
        // 객체명.속성명 -> 속성명을 알고 있을때 사용
        // 속성명이 key인 요소를 찾는데 없으니까 undefined 반환
        // console.log(key,student.key); // ERR
    }


    console.log('for in=========================');


    // 배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num);
    });

    console.log('forEach =======================');

    let i = 0;
    while(true){
        i++;
        // 짝수이면 출력
        if(i % 2 == 0){
            continue;
        }
        console.log(i);
        if(i > 5){
            break;
        }
    }
    console.log('while =======================');

    // ES6 부터 추가 된 for 문
    for (let iterator of array){
        console.log(iterator);
    }

}

