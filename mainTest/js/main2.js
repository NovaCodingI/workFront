window.onload = function() {
    var banners = ['banner1.png', 'banner2.png', 'banner3.png']
    
    let index = 0;

    bannerList.style.backgroundImage = 'url(image/' + banners[index] + ')';
    

    var interval = setInterval(function(){
        imgChange();
        if (index == 0){
            $('#bannerList').click(function(){
                $(location).attr('href', 'http://naver.com');
            })
        } else if (index == 1){
            $('#bannerList').click(function(){
                $(location).attr('href', 'http://google.com');
            })
        } else if (index == 2){
            $('#bannerList').click(function(){
                $(location).attr('href', 'http://daum.net');
            })
        }
    }, 3000)
    
    function imgChange(){
        index ++;
        if (index > banners.length - 1) {
            index = 0;
        }
        bannerList.style.backgroundImage = `url(image/${banners[index]})`;
        
    }

    let left = document.querySelector('#arrow-left');
    let right = document.querySelector('#arrow-right');

    left.addEventListener('click', function(){
        index--;
        if (index < 0) {
            index = banners.length - 1;
        }
        
        bannerList.addEventListener('click', function(){
            bannerList.style.backgroundImage = `url(image/${banners[index]})`;
            if (index == 0){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://naver.com');
                })
            } else if (index == 1){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://google.com');
                })
            } else if (index == 2){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://daum.net');
                })
            }
        })
    })

    right.addEventListener('click', function(){
        index ++;
        if (index > banners.length - 1) {
            index = 0;
        }
        
        bannerList.addEventListener('click', function(){
            bannerList.style.backgroundImage = `url(image/${banners[index]})`;
            if (index == 0){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://naver.com');
                })
            } else if (index == 1){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://google.com');
                })
            } else if (index == 2){
                $('#bannerList').click(function(){
                    $(location).attr('href', 'http://daum.net');
                })
            }
        })
    })

}
