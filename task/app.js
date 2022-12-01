let isWhiteTheme = true;

let switchThemeElement = document.querySelector('#theme');
let userCommentImageElement = document.getElementById('user-picture');
let userCommentTextElement = document.getElementById('user-comment');

let forwardBtnElement = document.getElementById('btn-forward');
let backBtnElement = document.getElementById('btn-back');
let firstIndicator = document.getElementById('first-indicator');
let secondIndicator = document.getElementById('second-indicator');

firstIndicator.style.backgroundColor = "#EC4899";


switchThemeElement.addEventListener('click', () => {
    const bodyElement = document.querySelector('body');
    if (isWhiteTheme) {
        bodyElement.style.backgroundColor = '#201D34';
        bodyElement.style.color = 'white';
    } else {
        bodyElement.style.backgroundColor = 'white';
        bodyElement.style.color = '#201D34';
    }

    isWhiteTheme = !isWhiteTheme;
});


forwardBtnElement.addEventListener('click', () => {
    firstIndicator.style.backgroundColor= '#D1D5DB';
    secondIndicator.style.backgroundColor= '#D1D5DB';

    setTimeout(()=>{
        secondIndicator.style.backgroundColor = "#EC4899";
    },300);

    userCommentImageElement.src = "./public/images/user2.jpg";
    userCommentTextElement.textContent = "I've tried so many diets and meal plans, but they were useless. This Keto meal plan is so easy to follow. So far I've been on this program for one month, and I've lost 15 pounds. I can't wait to see my progress at the end. For anyone considering to start this meal plan, it's definitely worth a go!!"
});

backBtnElement.addEventListener('click', () => {
    firstIndicator.style.backgroundColor= '#D1D5DB';
    secondIndicator.style.backgroundColor= '#D1D5DB';

    setTimeout(()=>{
        firstIndicator.style.backgroundColor = "#EC4899";
    },300);
    
    userCommentImageElement.src = "./public/images/user1.jpg";
    userCommentTextElement.textContent = "The superb and fantastic meal plan at such a reasonable price! Honestly, I can not complain at all. Highly recommend it to anyone who is looking to gain muscles!"
});




