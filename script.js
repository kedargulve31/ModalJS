var button = document.querySelector('.container button');
var icon = document.querySelector('.container i')
var fade = document.querySelector('.fade')
var msg = document.querySelector('.msg-hide')

button.addEventListener('click',()=>{
      if(button.innerHTML =='Turn On'){
           button.innerHTML='Turn Off'
           button.classList.remove('btn-turn-off')
           button.classList.add('btn-turn-on')
           icon.classList.remove('fa-regular')
           icon.classList.add('fa-solid')
           icon.classList.add('turn-on')
      }
      else{
            button.innerHTML='Turn On'
           button.classList.remove('btn-turn-on')
           button.classList.add('btn-turn-off')
           icon.classList.remove('fa-solid')
           icon.classList.add('fa-regular')
           icon.classList.add('turn-on')
      }
})


function openModal() {
      fade.classList.remove('fade-off')
      fade.classList.add('fade')          
}
function closeModal() {
      fade.classList.remove('fade')
      fade.classList.add('fade-off')          
}

function showMessage() {
 msg.classList.remove('msg-hide')
 msg.classList.add('msg-show')
 setTimeout(() => {
      msg.classList.remove('msg-hide')
      msg.classList.add('msg-show')
 }, 2000);

}
