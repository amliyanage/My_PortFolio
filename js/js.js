const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');
const circles = document.querySelector('.circles');

let flag = false;

btn.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    document.body.classList.toggle('alt-colors');
    
    if(flag == false){
        circles.style.display = 'none';
        flag = true;
    }else{
        circles.style.display = 'block';
        flag = false;
    }

    if(body.classList.contains('darkMode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

const settings = document.querySelector('.settingBtn');
const settingForm = document.querySelector('.settings');

settings.addEventListener('click', () =>{
    event.preventDefault();
    settingForm.classList.toggle('clicked');
});

function changeColor(color){

    console.log('api');
    switch(color){
        case 'purple' :
            document.documentElement.style.setProperty('--purple', '#7B1DF3');
            break;

        case 'yellow' :
            document.documentElement.style.setProperty('--purple', '#C9F31D');
            break;
        
        case 'green' :
            document.documentElement.style.setProperty('--purple', '#05FF00');
            break;

        case 'blue' :
            document.documentElement.style.setProperty('--purple', '#0094FF');
            break;
    }
}
