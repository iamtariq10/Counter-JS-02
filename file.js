let incButton=document.getElementById('incButton')
let decButton=document.getElementById('decButton')
let resetButton=document.getElementById('resetButton')
let counterValue=document.getElementById('counterValue')

incButton.addEventListener('click',function(){
         counterValue.textContent++
         counterValue.style.color='green'
         

})


decButton.addEventListener('click',function(){
    if(counterValue.textContent>0){
    counterValue.textContent--
}
    counterValue.style.color='red'
    
})



resetButton.addEventListener('click',function(){
    counterValue.textContent=0
    counterValue.style.color='white'
})

