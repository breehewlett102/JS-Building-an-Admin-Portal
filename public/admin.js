const updateQuantity = async (el, id) => {
    let sibiling = el.previousSibiling;

    console.log(sibiling);
    let requestBody = {
        id, quantity: sibiling.value
    }

    let res = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id, quantity: sibiling.value
        })
    })

    console.log(res);
}

const main = async () => {
    let root = document.querySelector('#root');

    let res = await fetch ('http://localhost:3001/listBooks')
    let books = await res.json();
    console.log(books);

    books.forEach((book) => {

        let id = book.id;
        let title = book.title;
        let quantity = book.quantity;

        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'row');

        let bookSpan = document.createElement('span');
        bookSpan.innerHTML = title;
        bookSpan.setAttribute('class', 'col')

        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control col');
        input.id = 'input' + id;
        input.value = quantity;

        let submit = document.createElement('input');
        submit.setAttribute('type', 'number');
        submit.setAttribute('class', 'col btn btn primary')
        submit.value = 'Submit'

        submit.setAttribute('onClick', `updateQuantity(this, ${id})`);
        wrapper.append(bookSpan, input, submit);
        root.append(wrapper);
    })
}

main();