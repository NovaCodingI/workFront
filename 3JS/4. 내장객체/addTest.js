window.onload = function (){

    // # container, order, orderInfo
    let container = document.querySelector('#container');
    let order = document.querySelector('#order');
    let orderInfo = document.querySelector('#orderInfo');

    order.addEventListener('click', function(){

        let p = document.createElement('p');
        // 가지고 있는 요소에 접근! .innerHTML
        let innerTxt = document.querySelector('#container > h2').innerHTML;
        let textNode = document.createTextNode(innerTxt);

        p.appendChild(textNode);
        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = 800;
        orderInfo.appendChild(p);



    });
    



}

// 흐음.... 혼자 못하겠네.. ㅎㅎ;
// let product = document.querySelector('#container > h2').innerHTML;
// let text = document.createTextNode(product);
// let container = document.createElement('#container');
// container.appendChild(text);
// orderInfo.appendChild(container);