window.onload = function (){
    
    /*
        <p>Java</p>
        <p>Oracle</p>

        <p>JSP/Servlet</p>
        <p>SPRING</p>
    */
    btn1.addEventListener('click', function(){
        let javaNode = document.createElement('p');
        // javaNode.innerHTML = 'Java'
        let javaTextNode = document.createTextNode('Java');

        // DOM은 부모자식간에 계층구조를 가지고있습니다.

        // 텍스트 노드를 자식노드로 등록
        javaNode.appendChild(javaTextNode);

        // 부모요소 선택
        let body = document.querySelector('body');
        // 삽입할 위치의 요소 선택, 첫번째 p 요소가 반환됌
        // let p = document.querySelector('p');
        let p1 = document.querySelectorAll('p')[0];
        let p2 = document.querySelectorAll('p')[0];
        let p3 = document.querySelectorAll('p')[3];
        let p4 = document.querySelectorAll('p')[3];

        // 요소를 선택한요소의 앞에 삽입
        body.insertBefore(javaNode, p1);

        let oracleNode = document.createElement('p');
        let oracleTextNode = document.createTextNode('Oracle');
        oracleNode.appendChild(oracleTextNode);
        body.insertBefore(oracleNode, p2);

        let jspNode = document.createElement('p');
        let jspTextNode = document.createTextNode('Jsp/servlet');
        jspNode.appendChild(jspTextNode);
        // body.appendChild(jspNode);
        body.insertBefore(jspNode, p3);
        
        let springNode = document.createElement('p');
        let springTextNode = document.createTextNode('Spring');
        springNode.appendChild(springTextNode);
        // body.appendChild(springNode);
        body.insertBefore(springNode, p4);

    });
}

// 참고하기.. 배열로.. querySelectorAll 은 배열로.. 아마도..
// document.querySelectorAll('p')
// p2 = document.querySelectorAll('p')[1]