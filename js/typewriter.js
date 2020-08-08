// Typewriter Effect
const TypeWriter = function(textElement, words, waitTime = 3000){
    this.textElement = textElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;

    const fullText = this.words[current];

    if(this.isDeleting){
        this.text = fullText.substring(0, this.text.length - 1);
    }else{
        this.text = fullText.substring(0, this.text.length + 1);
    }

    this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

    let typeSpeed = 200;

    if(this.isDeleting){
        typeSpeed /= 4;
    }

    if(!this.isDeleting && this.text === fullText){
        typeSpeed = this.waitTime;

        this.isDeleting = true;
    }else if(this.isDeleting && this.text === ''){
        this.isDeleting = false;

        this.wordIndex++;

        typeSpeed = 500;

        document.querySelector('.text').style.display = 'none';
    }

    setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const textElement = document.querySelector('.text-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    new TypeWriter(textElement, words, wait);
}