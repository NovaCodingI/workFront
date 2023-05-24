/*
    1. 화면이 모두 로드 된 이후 실행
        window.onload = function(){...};

    2. 버튼을 선택, div 선택
        document.getElemenById('id')

    3. 로또 번호 생성
        임의의 번호 생성
        parseInt(Math.random()*6)
    
    4. 버튼을 클릭하면 div에 생성된 번호를 출력
        div.innerHTML = '';
        div.innerHTML = `<div class='ball'>${num}</div>`
*/

// 순서가 중요함 로드 되기전.. 버튼을...
// 화면에 요소가 다 올라와있는지 확인하는것이 중요 undefined
// let btn1 = document.getElementById('btn1');


// 1. 화면이 모두 로드 된 이후 실행
window.onload = function(){

    console.log('화면이 모두 로딩 되었습니다.');

    // document.querySelector 은 id(#) 과 class(.)을 구분하여 앞에 작성
    // let lottoDiv = document.querySelector('div[class=ball]');
    // div에서 클래스에서 ball인...
    // 2. 버튼을 선택, div 선택
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');

    
    // 사용자의 행동 이벤트 -  onclick

    // 3. 버튼이 클릭되면 로또번호를 화면에 출력
    btn1.onclick = function(){
        
        let nums = [3, 5, 7, 9, 12, 15];
        console.log('===================');
        // div 초기화
        lottoDiv.innerHTML = '';
        
        for(let num in nums){
            num = parseInt(Math.random()*46)
            lottoDiv.innerHTML += `<div class="ball">${num}</div>`;
        }
        
        // 색상 변경 // ball 요소를 전체 선택하고싶어서 SelectorAll
        let ballList = document.querySelectorAll('div[class=ball]');
        // for(let i in ballList){ // 속성의 오브젝트도 배열에 포함되어?? 7까지 입력되어 에러남
        for(let i=0;i<ballList.length;i++){
            console.log('i : ' + i);
            // getColor();
            let color = getColor();
            // document.querySelectorAll('div[class=ball]')[i].style.backgroundColor = color;
            ballList[i].style.backgroundColor = color;
            ballList[i].style.borderColor = color;
        }
        // lottoDiv.innerHTML = '<div class="ball">' + {num} + '</div>';
    }

};

// 함수 호이스팅 // 메모리에 담는다 어 함수네?
function getColor(){
    let r,g,b;

    r = parseInt(Math.random()*256);
    g = parseInt(Math.random()*256);
    b = parseInt(Math.random()*256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

    


    // var r = parseInt(Math.random()*46);
    // var g = parseInt(Math.random()*46);
    // var b = parseInt(Math.random()*46);
    // document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;










