const generateBtn = document.querySelector('.generateBtn')
let numberBox = document.querySelectorAll('.numberBox')

generateBtn.addEventListener('click', function() {
    numberBox.forEach((x) => {
        x.innerText = ''
        let randomNum = generateRandomNum()
        x.append(randomNum)
    })
})

function generateRandomNum() {
    return Math.ceil(Math.random() * 9)
}