// 페이지가 로드(이벤트 발생)이후 함수를 실행
window.onload = function(){

    // 버튼이 클릭되면 함수를 실행
    btn1.addEventListener('click', ()=>{

        // 요소노드 생성
            let elementNode = document.createElement('h3');
        // 텍스트노드 생성
            let textNode = document.createTextNode('안녕안녕안녕세번했다');
        // 연결 (자식요소로 등록)
            // 부모자식관계를 만들어준다.
            // 만들어놓은 요소에 자식요소로 등록해주는것
            // 연결을 해야 화면에 나와요!!
            // 부모요소의 맨 마지막 요소로 추가가 됨!! insertBefore()를 사용하면 요소 앞에
            // 맨마지막에 추가하게되는 appendChild !! 입니다 !! 순서를 알아두세요 !!
            elementNode.appendChild(textNode);

            //화면에 연결
            elementNode.appendChild(textNode);
            area1.appendChild(elementNode);

            area1.innerHTML += '<h3>innerHTML로도 가능하네!!</h3>';
            console.log('area1.innerHTML : ', area1.innerHTML);

    });

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정 하는 방법!
    btn2.addEventListener('click', function(){

        // img 요소 노드 생성
        let elementNodeImg = document.createElement('img');
        // 속성 설정 하는 방법
        elementNodeImg.src= 'images/morning.jpg';
        elementNodeImg.setAttribute('width','350px');
        elementNodeImg.setAttribute('height','300px');

        // 연결(자식요소로 추가)
        area2.appendChild(elementNodeImg);
        area2.innerHTML += '<img src="images/morning.jpg" width="250px" height="200px">';
        
    });

    // 부모요소로부터 자식요소를 찾아가는거에요!!
    btn3.addEventListener('click', function(e){
        
        area3.remove();

        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);

        // 나의 상위 요소를 반환합니다. body.
        console.log(target.parentNode);
        
        // 상위 요소의 자식 노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);

    });

    btn4.addEventListener('click', function(e){
        // p 요소를 생성
        let pNode = document.createElement('p');
        // text Node 생성
        let textNode = document.createTextNode('금요일 좋아 금요일 좋아 세상에서 제일 멋찌지');
        // 연결
        pNode.appendChild(textNode);

        // 부모요소 선택(body 선택)
        let body = document.querySelector('body');
        // 노드 선택(삽입하고 싶은 위치의 요소를 선택) (h1 선택)
        let h1 = document.querySelector('h1');

        

        // insertBefore(추가할요소, 추가할위치의 요소)
        // 맨 마지막만 실행됨.
        // body.insertBefore(pNode, h1);

        body.insertBefore(pNode, btn2);

        // body.appendChild(pNode);
    });
    


}