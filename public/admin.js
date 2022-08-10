// Your Code Here
async function main(){
let response = await fetch ('http://localhost:3001/listBooks', {
    method: "GET",
    headers: null,
    body: null
});

let books = await response.json();
console.log('The Annals of Arathra')
}

async function main(){
    
    let response = await fetch('http://localhost:9001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": 3,
            "title": "Ledgends of Arathrae"
        }),
    });
    let updatedBook = await response.json();
    console.log(updatedBook)
}
