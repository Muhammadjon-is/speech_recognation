const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textAres = document.getElementById('text');
const readBtn  = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const data = [
   {
    image: "https://4dhealth.ca/wp-content/uploads/2021/04/happy.jpg",
    text: "I,m happy"
   },

   {
    image: "https://c8.alamy.com/comp/2CFPM00/angry-emoji-isolated-on-yellow-background-mad-emoticon-3d-rendering-2CFPM00.jpg",
    text: "I,m angry"
   },
   
   {
    image: "https://www.precisionchiro.co.nz/wp-content/uploads/2019/06/tired-2.jpg",
    text: "I'm tired"
   },

   {
    image: "https://ideahuntr.com/wp-content/uploads/2021/04/Three-Easy-Ways-To-Work-Hard.jpg",
    text: "I'm hard"
   },

   {
    image: "https://cdn.pixabay.com/photo/2019/06/23/20/09/thirsty-4294637_1280.png",
    text: "I'm thirsty"
   },

   {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/hunger-0-1492853761.jpg",
    text: "I'm hungry"
   },

   {
    image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555447751/shape/mentalfloss/istock_000038012212_small.jpg",
    text: "I'm scared"
   },

   {
    image: "https://i.pinimg.com/originals/ab/44/e7/ab44e7c898449d7f925f0c932f54e53a.jpg",
    text: "I want to go home"
   },

   {
    image: "https://as2.ftcdn.net/jpg/02/35/93/13/500_F_235931399_i3vE4rlvGxDxPl4NJ4MkrQZoxt7mtPzR.jpg",
    text: "I want to go to work"
   },

   {
    image: "https://image.freepik.com/free-vector/two-little-boys-play-football-happy-children-playing-soccer-park-isolated-white-v_83111-1583.jpg",
    text: "I want to  play football"
   },

   {
    image: "https://gray-wcax-prod.cdn.arcpublishing.com/resizer/jY-GxQIZ14QbKbkivCfS5L7ZbRM=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/XTGTFBHQTNKH5AV4EFDTLLSG6Q.jpg",
    text: "I want to go outside"
   },

];

data.forEach(createBox);

function createBox(item){
    const box = document.createElement('div');
    const {image,text} =item;
    box.classList.add('box');
    box.innerHTML = `<img src="${image}">
                      <p class="info">${text}</p>`

    box.addEventListener('click', ()=> {
        setTextMessage(text);
        speakText();
        box.classList.add('active');
        setTimeout(()=> box.classList.remove('active'),800);

    });
    main.appendChild(box);
}

const message  = new SpeechSynthesisUtterance();

let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach (voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voiceSelect.appendChild(option);
    });
}

function setTextMessage(text) {
    message.text = text;
}


function speakText() {
    speechSynthesis.speak(message);
}

function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value);
}
 speechSynthesis.addEventListener('voiceschanged',getVoices);
 toggleBtn.addEventListener('click',()=>  document.getElementById('text-box').classList.toggle('show'));

 closeBtn.addEventListener('click',()=>  document.getElementById('text-box').classList.remove('show'));

voiceSelect.addEventListener('change',setVoice);


readBtn.addEventListener('click', () => {
  setTextMessage(textAres.value);
 speakText();


});
getVoices();






