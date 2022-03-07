let myLibrary = [];
let bookshelf = document.querySelector(".bookshelf")

function Book(title, author, pages, genre, read, review) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
    this.review = review;
}

function shelf(book){
    myLibrary.push(book);

    let bookCard = document.createElement('div');
    bookCard.classList.add("card");
    bookCard.id = book.title

    let title = document.createElement("span");
    title.classList.add("title")
    title.innerText = `${book.title}`

    let author = document.createElement("span");
    author.classList.add("author")
    author.innerText = `${book.author}`

    let pages = document.createElement("span");
    pages.classList.add("pages")
    pages.innerText = `${book.pages}`

    let genre = document.createElement("span");
    genre.classList.add("genre")
    genre.innerText = `${book.genre}`

    let read = document.createElement("span");
    read.classList.add("read")
    read.innerText = `${book.read}`

    let review = document.createElement("p");
    review.classList.add("review")
    review.innerText = `${book.review}`

    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    let removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid");
    removeIcon.classList.add("fa-xmark");

    removeButton.addEventListener("click",function(){
        let k = myLibrary.length

        for(let i=0 ;i<k;i++){
            
            if(myLibrary[i].title == book.title){
                myLibrary.splice(i,1)
            }
        }
        this.parentNode.remove()
    })
    

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(genre)
    bookCard.appendChild(read)
    bookCard.appendChild(review)
    bookCard.appendChild(removeButton)
    removeButton.appendChild(removeIcon)
    bookshelf.appendChild(bookCard)

}




function updateShelf(library){
    library.forEach(book, shelf(book))
}


let wayOfKings = new Book("Way of Kings", "Brandon Sanderson", 1008, "Fantasy", "Yes", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi ratione accusantium odit impedit eveniet est facilis repellendus velit deleniti quo optio unde in laboriosam corrupti voluptatem, rerum sed esse eius voluptas, facere et molestias. Reiciendis rem, voluptatum harum est, architecto ducimus, facilis magni dolores ipsam labore consequatur rerum nemo!")
shelf(wayOfKings)

let test = new Book("Huck Finn", "Mark Twain", 300, "Historical Fiction", "Yes", "this book boring af yo")
shelf(test)


let addButt = document.querySelector("add")
addButt.addEventListener("click", function(){

})



