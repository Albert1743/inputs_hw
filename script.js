const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('[data-open]')
const closeBtn = document.querySelector('[data-close]')

addBtn.onclick = () => {
    dialog.showModal()
}

closeBtn.onclick = () => {
    dialog.close()
}


form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false
    let user = {}
    const name = user['name']
    const language = user['language']

    
    fm.forEach((val, key) => {
        user[key] = val
        if (val.length === 0) {
            error = true
        }
    })
    
    if (error) {
        alert('Fill all fields')
        return
    }
    
    const textMod = document.querySelector('.block h1')
    textMod.innerHTML = `Hello <span>${name}</span> after 10 years you will be a <span>${language}</span> developer`
}


























// const form = document.forms.namedItem('login')

// form.onsubmit = (event) => {
//     event.preventDefault()
//     let fm = new FormData(form)
//     let error = false

//     let user = {}

//     fm.forEach((val, key) => {
//         user[key] = val
//         if (val.length === 0) {
//             error = true
//         }
//     })

//     if (error) {
//         alert('Fill all fields')
//         return
//     }

//     console.log(user);
// }



// let open_btn = document.querySelector('button')
// let close_btn = document.querySelector('[data-close]')
// let dialog = document.querySelector('dialog')

// open_btn.onclick = () => {
//     dialog.showModal()
// }

// close_btn.onclick = () => {
//     dialog.close()
// }

