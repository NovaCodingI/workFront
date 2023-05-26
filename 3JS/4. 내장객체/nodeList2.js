window.onload = () =>{

    itmes = document.querySelector('#itmes');
    li = document.querySelector('li');

    let javaNode = document.createElement('li');
    let javaTextNode = document.createTextNode('Java');
    javaNode.appendChild(javaTextNode);
    items.insertBefore(javaNode, li);

    let oracleNode = document.createElement('li');
    let oracleTextNode = document.createTextNode('Oracle');
    oracleNode.appendChild(oracleTextNode);
    items.insertBefore(oracleNode, li);

    let jspNode = document.createElement('li');
    let jspTextNode = document.createTextNode('Jsp/Servlet');
    jspNode.appendChild(jspTextNode);
    items.appendChild(jspNode, li);

    let springNode = document.createElement('li');
    let springTextNode = document.createTextNode('Spring');
    springNode.appendChild(springTextNode);
    items.appendChild(springNode, li);

    // btn1.addEventListener('click', function(){
    
    //         let javaNode = document.createElement('li');
    //         let javaTextNode = document.createTextNode('Java');
    //         javaNode.appendChild(javaTextNode);
    
    //         let ul = document.getElementById('items');
    //         let li = document.querySelector('li');
    
    //         ul.insertBefore(javaNode, li);
    
    
    //         let oracleNode = document.createElement('li');
    //         let oracleTextNode = document.createTextNode('Oracle');
    //         oracleNode.appendChild(oracleTextNode);
    //         ul.insertBefore(oracleNode, li);
    
    //         let jspNode = document.createElement('li');
    //         let jspTextNode = document.createTextNode('Jsp/servlet');
    //         jspNode.appendChild(jspTextNode);
    //         ul.appendChild(jspNode);
            
    //         let springNode = document.createElement('li');
    //         let springTextNode = document.createTextNode('Spring');
    //         springNode.appendChild(springTextNode);
    //         ul.appendChild(springNode);
    
    //     });
    
};
