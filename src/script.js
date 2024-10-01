const message=document.getElementById('message');
console.log(message);
const button=document.getElementById('copy');
console.log(button)
button.addEventListener('click',()=>{
    message.style.display='block';
    console.log('clicked');
})