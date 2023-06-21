$(function(){



  $('.project-item').each(function(index,el){
    gsap.from(el,{
      scrollTrigger:{
        trigger:el,
        start:"0% 80%",
        end:"100% 50%",
        // markers:true,
      },
      opacity:0,
      yPercent:20
    })
  })


//   mainSlide = new Swiper('.intro-slide',{
//     touchRatio:0,
//     autoplay : {
//       delay : 1000,   // 시간 설정
//       loop:true,
//     },
// })

// introShow = gsap.timeline({})

// introShow
// .to('.header',{
//   yPercent:0,
// })
// .from('.header',{
//   yPercent:20,
//   opacity: 0
// })


// tl1 =gsap.timeline({
//   scrollTrigger:{
//     trigger:".sc-projects",
//     start:"0% 80%",
//     end:"100% 50%",
//     // markers:true,
//     toggleActions:"play pause resume reset" 
//   },
// })

// tl1
// .addLabel('a')
// .from('.sc-projects .project-item',{ yPercent:30,opacity:0 },'a')











})//지우지마세요