const messageArea = document.getElementById('m-area');
const inputMessage = document.getElementById('message');
const button = document.getElementById('send');



function sendMessage(){
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = inputMessage.value;

    messageArea.appendChild(userMessage);
    inputMessage.value = '';
    inputMessage.focus();
    messageArea.scrollTo(0, messageArea.scrollHeight);
}

button.onclick = sendMessage;

inputMessage.addEventListener('keyup', (key)=>{
    if(key.code === "Enter"){
        sendMessage();
    }
});

function typeMessage(text){
    const message = document.createElement("div");
    message.className = "computer-message";


    const typingEffect = document.createElement("div");
    typingEffect.className = "dot-flashing";

    message.appendChild(typingEffect);
    messageArea.appendChild(message);

    setTimeout(()=>{
        message.removeChild(message.lastElementChild);
        message.innerHTML = `${text}`
    }, 3000)

    
}

function welcomeMessage(){
    const firstMessage = document.getElementById('intro');
    setTimeout(()=>{
        firstMessage.removeChild(firstMessage.lastElementChild);
        firstMessage.innerHTML = 'Hello, my name is Meexy!';
        typeMessage('What zodiac are you interested in?');
    }, 3000);

    
}
console.log(messageArea.scrollHeight)
console.log(button);
welcomeMessage();
