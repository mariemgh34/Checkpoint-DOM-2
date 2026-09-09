document.addEventListener('DOMContentLoaded',function(){
    let backColor = document.querySelector('.container')
    let changeBtn = document.getElementById('change-color-btn')
    console.log(backColor,changeBtn)

    function randomColor(){
        var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        var color = "#"
        for (let i = 0; i < 6; i++) {
            var  color = color +hexadecimal[Math.floor(Math.random() * hexadecimal.length)] 

        
    } 
        return color 
}

    changeBtn.addEventListener("click",function(){
    let color = randomColor()
    console.log(color)
    backColor.style.backgroundColor=color
})





})



