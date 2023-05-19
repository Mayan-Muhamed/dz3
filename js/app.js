//tabs


const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
let tab = 0

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

const switchTab = () => {
    hideTabContent()
    showTabContent(tab)
    tab = (tab + 1) % tabs.length
}
const autoTab = setInterval(switchTab, 3000)

hideTabContent()
showTabContent(tab)
switchTab()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                clearInterval(autoTab)
                hideTabContent()
                showTabContent(i)
                tab = i
            }
        })
    }
}


//modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')


const openModalWindow = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModalWindow = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModalWindow()
closeModalBtn.onclick = () => closeModalWindow()
modal.onclick = (event) => event.target === modal && closeModalWindow()

const footerModal = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollY = window.scrollY

    if (scrollY === scrollHeight) {
        openModalWindow()
        window.removeEventListener('scroll', footerModal)
    }
}

window.addEventListener('scroll', footerModal)
footerModal()

setTimeout(()=> {
    openModalWindow()
},10000)



//removeEventListener
//document.scrollPage,x,y


