window.addEventListener("load", function(){
   const tabItems = document.querySelectorAll(".tab-item");
   const tabList = document.querySelector(".tab-list");
   const tab= document.querySelector(".tab");
   const tabOffSetLeft = tab.offsetLeft;

   const tabNext = document.querySelector(".tab-next");
   const tabPre = document.querySelector(".tab-prev");

   
   [...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
   function handleTabClick(e){
      [...tabItems].forEach(item => item.classList.remove("active"))
      e.target.classList.add("active");

      let leftSpacing = e.target.offsetLeft ;
      if(e.target >= tabOffSetLeft){
         leftSpacing = e.target.offsetLeft - tabOffSetLeft;
      }
      // console.log(leftSpacing);
      tabList.scroll(leftSpacing - e.target.offsetWidth, 0);
   }

   // chuc nang scroll con lan chuot
   tabList.addEventListener("wheel", function(e){
      const delta = e.deltaY; //deltaY scroll dương khi con lăn scroll lên và âm khi ngược lại
      tabList.scrollLeft += delta;
   })

   //chuc nang bam vao icon
   tabNext.addEventListener("click", function(e){

   })
});