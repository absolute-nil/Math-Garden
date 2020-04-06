window.answer;
window.score=0;
window.backgroundImages = [];
const nextQuestion = ()=>{
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

const checkAnswer = ()=>{
    const prediction = predictImage();
    // console.log(prediction)
    // console.log(answer)
    if(prediction===answer){
        score++;
        backgroundImages.push(`url('images/background${score}.svg')`)
        document.body.style.backgroundImage = backgroundImages;
        if(score==6){
            alert('Congratulations! your math garden is in full bloom. Want to start again?!')
            score=0;
            backgroundImages=[];
            document.body.style.backgroundImage = backgroundImages;
            return;
        }
    }else{
        if(score!=0){
            score--;
        }
        alert('Oops! Wrong Answer. Check your calculations and try writing neater next time!')
        setTimeout(()=>{
            backgroundImages.pop()
            document.body.style.backgroundImage = backgroundImages;
        },1000)
    }
}