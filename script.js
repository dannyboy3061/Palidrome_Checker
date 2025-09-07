const beginButton = document.getElementById('begin-button');
const container = document.getElementById('container');
const mainWrapper = document.getElementById('main-wrapper');

beginButton.addEventListener('click', showChecker);

const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', displayResults);


function showChecker(){
    container.style.display = 'none';
    mainWrapper.style.display = 'flex';
}

textInput.addEventListener('keypress', (btn) => {
    if(btn.key === "Enter"){
        checkBtn.click();
    }
})

function isPalindrome(word){

    const cleanWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let newWord = cleanWord.split('').reverse().join('');
    

    if(newWord === cleanWord ){
        return `${word} is a palindrome`;
    } else{
        return `${word} is not a palindrome`;
    }
}

function displayResults(){
    const word = textInput.value;
     if(word === ""){
        alert("Please input a value");
        return;
    }else{
    const result = document.getElementById('result');
    result.innerText = isPalindrome(word);
    }

}