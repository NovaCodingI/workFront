// window.onload = function(){
 
//     registration.addEventListener('click', function(event){
//         event.preventDefault(); // 폼의 기본 동작을 막음

//         let name = document.getElementById('username').value;
//         let major = document.getElementById('major').value;
    
      
    
//         let tbodyNode = document.querySelector('#attendant > tbody');
//         let trNode = document.createElement('tr');
//         let tdNameNode = document.createElement('td');
//         let tdmajorNode = document.createElement('td');

//         let nameTxt = document.createTextNode(name);
//         let majorTxt = document.createTextNode(major);
    
//         tdNameNode.appendChild(nameTxt);
//         tdmajorNode.appendChild(majorTxt);

//         trNode.appendChild(tdNameNode);
//         trNode.appendChild(tdmajorNode);
    
//         tbodyNode.appendChild(trNode);

//     });

// }

window.onload = function() {
    registration.addEventListener('click', function(event) {
      event.preventDefault(); // 폼의 기본 동작을 막음
  
      let name = document.getElementById('username').value;
      let major = document.getElementById('major').value;
  
      let tbodyNode = document.querySelector('#attendant > tbody');
  
      let trNode = tbodyNode.insertRow(); // 새로운 행을 추가합니다.
  
      let tdNameNode = trNode.insertCell(); // 이름을 표시할 셀을 추가합니다.
      tdNameNode.textContent = name;
  
      let tdmajorNode = trNode.insertCell(); // 전공을 표시할 셀을 추가합니다.
      tdmajorNode.textContent = major;
    });
  }
  


// tr안에 td를 자식으로 등록하는것
// 안에 들어있는 텍스트노드에 도큐먼트 value 값에 입력값을 받아옴
// tbody 안에 넣어줌

/* <table id="attendant">
      <thead>
        <tr>
          <th>이 름</th>
          <th>전 공</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td>고길동</td>
          <td>컴퓨터공학</td>
        </tr> -->
      </tbody> */