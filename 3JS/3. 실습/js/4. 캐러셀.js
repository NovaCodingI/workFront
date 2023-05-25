window.onload = function(){

// container.style.backgroundImage = 'url(images/pic-1.jpg)'

// 이미지 배열 만들기
// var 와 const 차이 확인해보기!!
// const pics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg'
//             , 'pic-4.jpg', 'pic-5.jpg'];

// 전역 변수로 만들어줘서 자동으로 만들어주기
pics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg'
            , 'pic-4.jpg', 'pic-5.jpg'];


// 컨테이너 박스의 배경 화면
// 배열의 0번째 인덱스값을 넣어 봅시다
// 1. 컨테이너박스 선택
// id로 접근

// let index = 0;
// 전역 변수로 만들어줘서 자동으로 만들어주기
index = 0;

// 컨테이너 박스의 백그라운드 설정
// 배열의 0번째 이미지를 보여줌
container.style.backgroundImage = 'url(images/' + pics[index] +')';

// 왼쪽 버튼이 클릭 되었을때
// 0보다 작니?
left.addEventListener('click', function(){
    index--;
    if(index < 0){
        // 마지막 그림으로 이동
        index = pics.length-1
    }
    container.style.backgroundImage = 'url(images/' + pics[index] +')';
});

// 오른쪽 버튼이 클릭 되었을때
// 배열의 총길이보다 크거나 같니?
right.addEventListener('click', function(){
    index++;
    // 마지막인덱스인 경우 0으로 초기화
    if(index >= pics.length){
        index = 0;
    }
    container.style.backgroundImage = 'url(images/' + pics[index] +')';
});


}

// 자동으로 돌아가게 하기
var i = 0;
var interval = setInterval(function(){
    
    imgChange();
    
}, 2000);

function imgChange(){
    // 주의 : index, pics 를 함수 외부에서 참조 할 수 있도록 전역변수로 생성합니다!!
    i++;
    console.log('setInterval' + i);
    index++;
    // 마지막인덱스인 경우 0으로 초기화
    if(index >= pics.length){
        index = 0;
    }
    container.style.backgroundImage = 'url(images/' + pics[index] +')';
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열));
// var i = 0;
// var interval = setInterval(function(){
// // //setInterval(function(){
//     i++;
//     console.log('setInterval' + i);
// }, 1000);

// // interval 중지 . 콘솔창에 값을 직접 입력해주어야한다.
// function stop(){
//     console.log('setInterval 중지');
//     // 함수를 넣을순 없고 변수를 생성해 매개변수에 담아.
//     clearInterval(interval);
// }

// === 혼자해보기 === index++; -- 은 생각도 못했다;; 이 바보야;;
// let img1 = document.getElementById('container');
// img1.style.backgroundImage = 'url(images/pic-1.jpg)';
// 혼자해보기
// if(pics[index] > 0){
//     left.addEventListener('click', function(){
//         container.style.backgroundImage = 'url(images/' + pics[index-1] +')';
//     });
// } else if(pics[index] >= pics.length){
//     right.addEventListener('click', function(){
//         container.style.backgroundImage = 'url(images/' + pics[index+1] +')';
//     });
// }


