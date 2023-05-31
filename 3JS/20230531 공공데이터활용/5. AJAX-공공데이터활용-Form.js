window.onload = function (){

    
        // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
        if ("geolocation" in navigator) {
            /* 위치정보 사용 가능 */
    
            // 현재위치 요청
            // getCurrentPosition(성공콜백, 오류콜백)
            navigator.geolocation.getCurrentPosition(function(position){
              doSomething(position.coords.latitude, position.coords.longitude);
            });
          } else {
            /* 위치정보 사용 불가능 */
            alert('geolocation 지원 불가! - 현재위치를 알수 없습니다.');
          }

    let btn = document.querySelector('#btnCampInfo');

    // let 키워드로 선언하면 자동완성 됨
    btn.addEventListener('click', function(e){
        // 기본이벤트 제거
        e.preventDefault();


        // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기
        // name으로 접근하거나, id를 접근하거나..
        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';

        // key/value pairs 반환
        for(let pair of formData.entries()){
            // console.log('pair[0] : ', pair[0]);
            // console.log('pair[1] : ', pair[1]);
            
            parms += `${pair[0]}=${pair[1]}&`;
        }

        url += parms;
        console.log('url', url);

        // ES6에서
        // url요청 결과를 받아 옵니다
        fetch(url)
        // 요청결과가 성공이라면
        // 화살표함수에서 한줄인경우 return문과 {} 생략이 가능
        // res.json() : javascirpt object로 반환
        // fetch의 결과가 .then에 들어오는것이고
        // printCampInfo 함수로 화면에 출력하는것
        .then(res => res.json())
        .then((json)=>{
            console.log('json : ', json);
            // json 객체로 부터 꺼내오는것!
            // 캠핑장 리스트를 매개변수로 넣어줍니다.
            printCampInfo(json.response.body.items.item);
        })
        // .catch((err) => console.log(err));
        // 실수 많이하는것 .xml 로 해놓고... 오류타령함;; json으로 변환해야되는데..
    });
}

// 현재 위치를 받아서 mapX, mapY에 출력
function doSomething(latitude, longitude){
    console.log('latitude', latitude); // 경도
    console.log('longitude', longitude); // 위도
    // resDiv.innerHTML = `경도 : ${latitude}, 위도 : ${longitude}`;

    let mapX = document.querySelector('input[name=mapX]');
    let mapY = document.querySelector('input[name=mapY]');
    mapX.value = longitude;
    mapY.value = latitude;
  }


// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력 합니다.
function printCampInfo(itemArr){

    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector('#result');

    // div 초기화
    // 기존에 있던 데이터들이 남아있기때문에 박스를 새로 지워주는것
    resDiv.innerHTML += '';
    
    resDiv.innerHTML += '<ul>';

    for(item of itemArr){
        resDiv.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                <p>${item.intro}</p>    
            </li>
        `;
    }
}

// xhr 객체를 사용하고 위에는 fetch를 사용하여서
// 캠핑장 정보 출력 수정전
// // JSON OBJ 가져와서 화면에 뿌려주는!!
// itemArr를 매개변수로 받아올꺼에요!!
// let itemArr = jsObj.response.body.items.item;
                
// let resDiv = document.querySelector('#result');
// resDiv.innerHTML += '<ul>';

// for(item of itemArr){
//     resDiv.innerHTML += `
//         <li>
//             <h1>${item.facltNm}</h1>
//             <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
//             <p>${item.intro}</p>    
//         </li>
//     `;
// }

// resDiv.innerHTML += '</ul>';
// }