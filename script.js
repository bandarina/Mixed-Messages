const messageArea = document.getElementById('m-area');
const inputMessage = document.getElementById('message');
const button = document.getElementById('send');
const zodiacList = ['aries', 'taurus', 'gemini','cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
let apiResponse;


//API HEAD
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '055ee5461fmsha570dcbe255a451p18e947jsn0f288e7b12b3',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
};


function readAnswer(){
    zodiacList.forEach((element) =>{
        if(messageArea.lastElementChild.innerHTML.toLocaleLowerCase().includes(element)){
            fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${element}&day=today`, options)
	        .then(response => response.json())
	        .then(response => {
            typeMessage(response.description);
    })
	.catch(err => console.error(err));

        }
    })
}


function sendMessage(){
    if(!(inputMessage.value == "" || inputMessage.value == null)){
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.innerHTML = inputMessage.value;

        messageArea.appendChild(userMessage);
        inputMessage.value = '';
        inputMessage.focus();
        messageArea.scrollTo(0, messageArea.scrollHeight);
        readAnswer();
    }
    else{
        return;
    }
}


button.onclick = sendMessage;

inputMessage.addEventListener('keyup', (key)=>{
    if(key.code === "Enter" && !(inputMessage.value == "" || inputMessage.value == null)){
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
        messageArea.scrollTo(0, messageArea.scrollHeight);
    }, 3000)

    messageArea.scrollTo(0, messageArea.scrollHeight)
}

function welcomeMessage(){
    const firstMessage = document.getElementById('intro');
    setTimeout(()=>{
        firstMessage.removeChild(firstMessage.lastElementChild);
        firstMessage.innerHTML = 'Hello, my name is Meexy!';
        typeMessage('What zodiac are you interested in?');
        setTimeout(()=>{
            typeMessage('Type one of the following: aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces');
        },3000);
    }, 1000);
        

    
}



welcomeMessage();
