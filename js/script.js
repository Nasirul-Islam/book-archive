// load API
const loadBooks = () => {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    inputField.value = '';
    const emptyString = document.getElementById('emptyString')
    // console.log(inputValue);
    if (inputValue === '') {
        // console.log('hello')
        emptyString.classList.remove('d-none')
    }
    // else if (inputValue === 'null') {
    //     console.log('hello')
    // }
    else {
        fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
            .then(res => res.json())
            .then(data => displayBooks(data.docs))
        emptyString.classList.add('d-none')
    }
}

const displayBooks = books => {
    // console.log(books.length)
    const resultCount = document.getElementById('resultCount')
    resultCount.textContent = '';
    // If the search results do not match
    if (books.length === 0) {
        const div = document.createElement('div')
        div.innerHTML = `
            <h2 class="text-primary">Search doesn't match</h2>
        `;
        resultCount.appendChild(div)
    } else {
        const div = document.createElement('div')
        div.innerHTML = `
            <h2 class="text-primary">Search result found ${books.length}</h2>
        `;
        resultCount.appendChild(div)
    }
    // showing books  after search result
    const showBooks = document.getElementById('showBooks')
    showBooks.textContent = '';
    books?.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Name: ${book.title}</h4>
                    <h5>Author: ${book.author_name[0]}</h5>
                    <h5>First publish: ${book.first_publish_year}</h5>
                    <h5>Publisher: ${book.publisher[0]}</h5>
                </div>
            </div>
        `;
        showBooks.appendChild(div)
    })
}

