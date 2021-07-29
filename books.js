
let myLibrary = [];
var cardtitle = document.createElement('div');
var cardauthor = document.createElement('div');
var cardgenre = document.createElement('div');
var cardread = document.createElement('button');

const grid = document.getElementById('grid');
const form = document.getElementById ('popupForm');
const suggestedLibrary = [
    {title: 'Murder on the Orient Express', author: 'Agatha Christie', genre: 'Mystery'},
    {title: 'Clean Code', author: 'Robert Martin', genre: 'non-fiction'}
];
            
 document.addEventListener('DOMContentLoaded', () => {
   getFixedLibrary(), getLibrary(), makeDisplayGrid()
}) 

 class Books {
    constructor(title, author, genre, read){
        this.title = title,
        this.author = author,
        this.genre = genre,
        this.read = read
    }
} 

function setLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function getLibrary() {
    if  (!localStorage.myLibrary){
        makeDisplayGrid();
    }else{
        let tempLibrary  = localStorage.getItem('myLibrary')
        tempLibrary      = JSON.parse(tempLibrary);
        myLibrary        = tempLibrary;
   }
}

const enters = document.getElementById('enter');
      enters.addEventListener('click' , () => {
                 getBookFromForm()
})  

function getBookFromForm() {
//event.preventDefault();
 //   form.style.display = 'none';
    
    let title =  document.getElementById('title').value;
    let author=  document.getElementById('author').value;
    let genre =  document.getElementById('genre').value;
    let read =   document.getElementById('read').checked;
    let book =   new Books(title, author, genre, read);
    myLibrary.push(book);
    clearForm();
    setLibrary();
    getLibrary();
    makeDisplayGrid();
     
 };  

 function clearForm(){
    document.getElementById('title').value  = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value  = '';
    document.getElementById('read').checked = false;
 }
 
 function getFixedLibrary (){

    var sugFirst = document.getElementById('sugfirst');
    var sugSecond = document.getElementById('sugsecond')
    bookOne = Object.values(suggestedLibrary[0]);
    bookTwo = Object.values(suggestedLibrary[1]);
    sugFirst.innerHTML = bookOne.join('<br>');
    sugSecond.innerHTML = bookTwo.join('<br>');
}

function makeDisplayGrid() {
    const display = document.getElementById('grid');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
        for (i = 0; i<myLibrary.length; i++) {
            setLibraryData(myLibrary[i]);
        } 
    };

function setLibraryData(item) {
            let library  = document.getElementById('grid');
            let bookdiv   = document.createElement('div');

            var cardread =   document.createElement('div');
            var cardtitle =  document.createElement('div');
            var cardauthor = document.createElement('div');
            var cardgenre =  document.createElement('div');
            var delbutton =  document.createElement('button');
            
            title =  item.title;
            author = item.author;
            genre =  item.genre;
            read =   item.read;
        
            cardtitle.textContent =  title;
            cardauthor.textContent = 'by  ' + author;
            cardgenre.textContent =  genre;
            
           
            delbutton.classList='deletebookbutton';
            delbutton.innerHTML = 'delete';
            
            cardtitle.classList = 'title';
            cardauthor.classList= 'author';
            cardgenre.classList = 'genre';
            cardread.classList = 'pressifreadbutton';

            bookdiv.classList = 'book';

            bookdiv.id        =  myLibrary.indexOf(item);
                      
            bookdiv.appendChild(cardtitle);
            bookdiv.appendChild(cardauthor);
            bookdiv.appendChild(cardgenre);
            bookdiv.appendChild(delbutton);
            bookdiv.appendChild(cardread); 
            if (item.read ===true){
                cardread.classList.remove('pressifreadbutton');
                cardread.classList.add('readitsticker');
                p = document.createElement('p');
                p.textContent = 'Read!';
                p.classList = 'inside';
                cardread.appendChild(p);
            }
           
            library.appendChild(bookdiv);

            delbutton.addEventListener('click', () => {
                var num =  bookdiv.id 
                myLibrary.splice(num, 1)
                setLibrary();
                getLibrary();
                makeDisplayGrid();
            })
     };
   


function openForm() {
    form.style.display = 'block';
}

function closeForm() {
   form.style.display = 'none';
}
 /*
 
Also: need to
    
    3 if possible, make sure that new book isn't a duplicate of existing book
 https://www.youtube.com/watch?v=k8yJCeuP6I8 (local storage)
 https://www.youtube.com/watch?v=rVyTjFofok0 (local storage)
https://www.youtube.com/watch?v=jV8B24rSN5o (CSS GRID)
 //https://stackoverflow.com/questions/63310980/how-to-display-my-array-of-objects-into-my-html-pages-table-individually-by


 

 */