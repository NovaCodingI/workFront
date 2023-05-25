window.onload = function(){

// Uncaught ReferenceError: test is not defined at
// 펑션안에 펑션 내부함수. 외부에서 호출안돼요! 호출 불가능!!
// 내부함수
// function test(){
//     console.log('hi');
// }
    // open, close 는 window객체의 내장 함수
    // 아이디로 참조 불가능
    // 직접 변수에 담아줘야 합니다.

    // #open : 모달창 보여주기
    // #close : 모달창 닫기
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    // 특수문자가 입력되서 아이디로 바로 접근 안됨
    let modal = document.getElementById('modal-box');

    // class에 가상 클래스 선택자를 활용하여보자! .active

    open.addEventListener('click', function(){
        // 모달창 열기
        // class속성 active 추가
        modal.classList.add('active');
    });

    close.addEventListener('click', function(){
        // 모달창 닫기
        // class속성 active 제거
        modal.classList.remove('active');

    });

}

// window에 이미 정의되어있는 키워드임!! window.open('','','') = open()
// window에 내장 객체입니다!!
// open() 창열기
// close() 창닫기
