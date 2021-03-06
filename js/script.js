// load API after click
const loadBooks = () => {
    const inputField = document.getElementById('inputField');
    const defaultMes = document.getElementById('defaultMes')
    defaultMes.classList.add('d-none')
    const inputValue = inputField.value;
    inputField.value = '';
    const emptyString = document.getElementById('emptyString')
    if (inputValue === '') {
        emptyString.classList.remove('d-none')
        resultCount.classList.add('d-none')
        showBooks.classList.add('d-none')
    }
    else {
        fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
            .then(res => res.json())
            .then(data => displayBooks(data.docs))
        emptyString.classList.add('d-none')

    }
}
// display Books after search
const displayBooks = books => {
    const resultCount = document.getElementById('resultCount')
    const showBooks = document.getElementById('showBooks')
    resultCount.textContent = '';
    showBooks.textContent = '';
    resultCount.classList.remove('d-none')
    showBooks.classList.remove('d-none')
    // If the search results match or do not match
    if (books.length === 0) {
        const div = document.createElement('div')
        div.innerHTML = `
            <h2 class="text-primary text-end">no result found</h2>
        `;
        resultCount.appendChild(div)
    } else {
        const div = document.createElement('div')
        div.innerHTML = `
            <h2 class="text-primary text-end">Search result found ${books.length}</h2>
        `;
        resultCount.appendChild(div)
    }
    // showing books after search result
    books?.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title fw-bold">Title: ${book.title}</h4>
                    <h5>Author: ${book.author_name?.[0]}</h5>
                    <h5>First publish: ${book.first_publish_year}</h5>
                    <h5>Publisher: ${book.publisher?.[0]}</h5>
                </div>
            </div>
        `;
        showBooks.appendChild(div)
    })
}

