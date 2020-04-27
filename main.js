const h2Name = document.querySelector('.name h2')
const h2Email = document.querySelector('.email h2')
const h2Password = document.querySelector('.password h2')

const h3Name = document.querySelector('.name h3')
const h3Email = document.querySelector('.email h3')
const h3Password = document.querySelector('.password h3')

const name = document.querySelector('.name input')
const email = document.querySelector('.email input')
const password = document.querySelector('.password input')

const confirmation = document.querySelector('.confirmation')
const header = document.querySelector('.header')
const msg = document.querySelector('.msg')

const btn = document.querySelector('button')

let userName = ""
let userEmail = ""
let userPassword = ""


name.addEventListener('input', () => {
    userName = name.value
})

email.addEventListener('input', () => {
    userEmail = email.value
})

password.addEventListener('input', () => {
    userPassword = password.value.length > 8 ? 'Strong Password' : 'Weak Password'
})

btn.addEventListener('click', () => {
    if(name.value !== "" && email.value == "" && btn.innerText == "Done") {
        h3Name.innerText = userName
        h3Name.classList.add('h3Animate')
        btn.innerText = "Next"
    }
    else if (name.value !== "" && email.value == "" && btn.innerText == "Next") {
        h2Name.classList.add('hideH2Text')
        h3Name.classList.add('h3Animate')
        h3Name.classList.add('hideH3Text')
        name.style.opacity = 0
        name.style.visibility = "hidden"
        h2Email.classList.add('showH2Text')
        email.style.opacity = 1
        email.style.visibility = "visible"
        btn.innerText = "Done"
    }
    else if (email.value !== "" && password.value == "" && btn.innerText == "Done") {
        h3Email.innerText = userEmail
        h3Email.classList.add('h3Animate')
        btn.innerText = "Next"
    }
    else if (email.value !== "" && password.value == "" && btn.innerText == "Next") {
        h2Email.classList.remove('showH2Text')
        h2Email.classList.add('hideH2Text')
        h3Email.classList.remove('h3Animate')
        h3Email.classList.add('hideH3Text')
        email.style.opacity = 0
        email.style.visibility = "hidden"
        h2Password.classList.add('showH2Text')
        password.style.opacity = 1
        password.style.visibility = "visible"
        btn.innerText = "Done"
    }
    else if (password.value !== "" && btn.innerText == "Done") {
        h3Password.innerText = userPassword
        h3Password.classList.add('h3Animate')
        btn.innerText = "Register"
    }
    else if (btn.innerText == "Register") {
        h2Password.classList.remove('showH2Text')
        h2Password.classList.add('hideH2Text')
        h3Password.classList.remove('h3Animate')
        h3Password.classList.add('hideH3Text')
        confirmation.style.opacity = 1
        confirmation.style.transition = "2s ease 1s"
        confirmation.style.visibility = "visible"
        header.innerText = `Dear ${userName}`
        msg.innerText = `You have successfully registered to \n our website with ${userEmail} Email \n and with ${userPassword}`
        password.style.opacity = 0
        password.style.visibility = "hidden"
        btn.innerText = "Return"
    }
    else if (btn.innerText == "Return") {
        location.reload()
    }
})

