const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');
const circles = document.querySelector('.circles');
const aboutpic = document.querySelector('.about div img');


const settings = document.querySelector('.settingBtn');
const settingForm = document.querySelector('.settings');

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
        settings.src = "img/icons/Setting(light).gif";
        aboutpic.src="img/Home-img/aboutpic-dark.png";
        icon.classList.add('fa-moon');
    }
    else{
        icon.classList.remove('fa-moon');
        settings.src = "img/icons/Setting.gif";
        aboutpic.src="img/Home-img/aboutpic.png";
        icon.classList.add('fa-sun');
    }
});

settings.addEventListener('click', () =>{
    event.preventDefault();
    settingForm.classList.toggle('clicked');
});

const connectResume1 = document.querySelector('.Resume >:nth-child(2) img');
const connectResume2 = document.querySelector('.Resume >:nth-child(3) img');
const connectResume3 = document.querySelector('.Resume >:nth-child(4) img');
function changeColor(color){

    console.log('api');
    switch(color){
        case 'purple' :
            document.documentElement.style.setProperty('--purple', '#7B1DF3');
            connectResume1.src="img/connect-purple.png";
            connectResume2.src="img/connect-purple.png";
            connectResume3.src="img/connetOtherSide-purple.png";
            break;

        case 'yellow' :
            document.documentElement.style.setProperty('--purple', '#C9F31D');
            connectResume1.src="img/connect.png";
            connectResume2.src="img/connect.png";
            connectResume3.src="img/connetOtherSide.png";
            break;
        
        case 'green' :
            document.documentElement.style.setProperty('--purple', '#05FF00');
            break;

        case 'blue' :
            document.documentElement.style.setProperty('--purple', '#0094FF');
            break;
    }
}


const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  bgAnimation.appendChild(colorBox);
}