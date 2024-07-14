socket = io()

const title = document.getElementById('title')
const description = document.getElementById('description')
const code = document.getElementById('code')
const price = document.getElementById('price')
const stock = document.getElementById('stock')
const category = document.getElementById('category')
const submit = document.getElementById('submit')



submit.addEventListener('click', () => {
    if (title.value || description.value || code.value || price.value || stock.value || category.value) {
        product = {
            id: -1,
            title: title.value,
            description: description.value,
            code: code.value,
            price: price.value,
            status: true,
            stock: stock.value,
            category: category.value,
            thumbnails: []
        }
        socket.emit('postProduct', product)
        title.value = ''
        description.value = ''
        code.value = ''
        price.value = ''
        stock.value = ''
        category.value = ''
    } else {
        window.alert('Faltan datos')
    }
})