const art = document.querySelectorAll('.artGroup article'),
      artG = document.querySelectorAll('.artGroup'),
      btPrev = document.querySelector('.btnPrev'),
      btNext = document.querySelector('.btnNext');
      
      let bnr= artG[3];
      const bnrArt = bnr.children;
      
      btPrev.addEventListener('click',prev);
      btNext.addEventListener('click',next);
      
      art.forEach((articles)=>{
          articles.addEventListener('click',show);
        });
        
        
        function show(){
            art.forEach((articles)=>{
                articles.classList.remove('back');
            });
            this.classList.add('back');
        }
        function prev(){
           bnr.animate({
                marginLeft:'0%'
            },{
                duration:1000,
                easing:'ease',
                complete: [
                    bnr.style.marginLeft = "-100%",
                    bnr.insertBefore(bnrArt[2],bnrArt[0])
                ]
            });
        }
        
        function next(){0
            bnr.style.marginLeft = "-200%";
            bnr.appendChild(bnrArt[0]);
            bnr.style.marginLeft = "-100%";
        }




