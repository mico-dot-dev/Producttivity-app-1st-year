window.addEventListener('load' , () =>{

    const scrollDown = document.getElementById("scrollDown");

    scrollDown.addEventListener('click' , () =>{
      window.scrollBy(0 , 1200)
    });

    const scrollUp = document.getElementById("scrollUp")

    scrollUp.addEventListener('click' , () => {
      window.scrollBy(0 , -1200);
    })
});