const mobileid=document.getElementById('mobileid');
const closebar=document.getElementById('closebar');
const navbar=document.getElementById('navbar');
//if anyone click on the bar to activate it
if(mobileid){
    mobileid.addEventListener('click',() =>{
        navbar.classList.add('active');
    }
    )
}
if(closebar){
    closebar.addEventListener('click',() =>{
        navbar.classList.remove('active');
    }
    )
}