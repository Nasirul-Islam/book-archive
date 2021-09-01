// load API
const loadBooks = () => {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    inputField.value = '';
    // console.log(inputValue);
    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
}

const displayBooks = books => {
    // console.log(books)
    const showBooks = document.getElementById('showBooks')
    // showBooks.textContent='';
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Name: ${book.title}</h4>
                    <h5>Writer: ${book.author_name[0]}</h5>
                    <h5>First publish: ${book.first_publish_year}</h5>
                    <h5>Publisher: ${book.publisher[0]}</h5>
                </div>
            </div>
        `;
        showBooks.appendChild(div)
    })
}

/*
.title
.author_name[0]
.first_publish_year
.publisher[0]
<p class="card-text"></p>
.author_name[0]
.first_publish_year

.cover_i
 https://covers.openlibrary.org/b/id/{cover_i}-M.jpg

https://covers.openlibrary.org/b/id/{cover_i}-L.jpg







*/