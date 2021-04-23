const   art = document.querySelectorAll('.artGroup article'),
        artG = document.querySelectorAll('.artGroup'),
        btPrev = document.querySelector('.btnPrev'),
        btNext = document.querySelector('.btnNext'),
        hourEle = document.querySelectorAll('.ulGroup ul li'),
        mainBG = document.querySelector('.mnWrap')
        date = new Date();

let bnr = artG[3];
let cnt=0;
const bnrArt = bnr.children;

    //메인 배너 
    mainBG.addEventListener('click',fadeInOut);
    function fadeInOut(){
        mainBG.animate({
            backgroundImage :[
                url("../image/products_main.jpg"),
                url("../image/products_main_i2.jpg")
            ]
        },{
            duration: 5000,
            fill: 'forwards'
        });
    }

    //배너 전처리
    bnr.style.marginLeft = '-100%';
    bnr.insertBefore(bnrArt[2], bnrArt[0]);

    //시간세팅
    function worldTime(tzOffset) { // 24시간제
        let tz = date.getTime() + (date.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
        date.setTime(tz);
       
        let s =
          trim(date.getHours(), 2) + ':' +
          trim(date.getMinutes(), 2)  
        return s;
      }
       
      function trim(n, digits) {
        let zero = '';
        n = n.toString();
        if (n.length < digits) {
          for (i = 0; i < digits - n.length; i++)
            zero += '0';
        }
        return zero + n;
      }

    //이벤트 선언
    art.forEach((articles) => {
        articles.addEventListener('mousemove', show);
        articles.addEventListener('mouseleave',hide);
    });
    btPrev.addEventListener('click', prev);
    btNext.addEventListener('click', next);
    //함수
    function show() {
        art.forEach((articles) => {
            articles.classList.remove('back');
        });
        this.classList.add('back');
    }

    function hide() {
        art.forEach((articles) => {
            articles.classList.remove('back');
        });
    }

    function prev() {
        bnr.animate({
            marginLeft: [
                '-200%',
                '-100%'
            ]
        }, {
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        });
        bnr.insertBefore(bnrArt[2], bnrArt[0]);
 
    }
    
    function next() {
        bnr.animate({
            marginLeft: [
                '-0%',
                '-100%'
            ]
        }, {
            duration: 1000,
            easing: 'ease',
            fill: 'forwards'
        });
        bnr.appendChild(bnrArt[0]);
    }
