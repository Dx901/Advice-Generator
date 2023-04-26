const adviceId = document.querySelector('a#dviceId')
const adviceText = document.querySelector('#advicetext')
const btn = document.querySelector('#btn')

fetch('https://api.adviceslip.com/advice').then(res => 
        { 
            // return res.json()
            console.log(res.json())
        })