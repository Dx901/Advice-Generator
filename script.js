const adviceId = document.querySelector('#adviceId')
const adviceText = document.querySelector('#advicetext')
const btn = document.querySelector('#btn')

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(res => 
        { 
            return res.json()
            // console.log(res.json())
        }).then(adviceData => {
            const adviceNum = adviceData.slip.id
            const advice = adviceData.slip.advice

            adviceId.textContent = adviceNum;
            adviceText.innerHTML = `<p>${advice}</p>`;

        }).catch(error => {
            console.log(error)
        })
}

btn.addEventListener('click', getAdvice)

window.onload = () => {
    getAdvice()
}

