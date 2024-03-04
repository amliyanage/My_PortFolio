const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');

btn.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    if(body.classList.contains('darkMode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    else{
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
});

const settings = document.querySelector('.settingBtn');
const settingForm = document.querySelector('.settings');

settings.addEventListener('click', () =>{
    event.preventDefault();
    settingForm.classList.toggle('clicked');
});