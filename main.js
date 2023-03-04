const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "main.json")
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        const wrapper = document.querySelector('.wrapper')

        data.forEach((item) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'user')
            div.innerHTML = `
                <img src="image/amogus.jpg" alt=""
                <h2 class="text">Name: ${item.name}</h2>
                <span>Age:${item.age}</span>
            `
            wrapper.append(div)
        })
    })
})

