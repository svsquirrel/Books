
let myLibrary = [];
let book;
const form = document.getElementById ('popupForm');
const suggestedLibrary = [
    {title: 'Murder on the Orient Express', author: 'Agatha Christie', genre: 'Mystery', read: 'Yes'},
    {title: 'Learning Javascript', author: 'Ethan Brown', genre: 'non-fiction', read: 'No'}
];
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
   if(!localStorage.myLibrary){
       return
   }else {
   let tempLibrary = localStorage.getItem('myLibrary')
   tempLibrary = JSON.parse(tempLibrary);
   myLibrary = tempLibrary;
   }
}

const enters = document.getElementById('enter');
      enters.addEventListener('click' , () => {
                 getBookFromForm()
})  

function getBookFromForm() {
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;
    let read = document.getElementById('read').checked;
    let book = new Books(title, author, genre, read);
    myLibrary.push(book);
    setLibrary();
   
 };  
 
document.addEventListener('DOMContentLoaded', () => {
     getFixedLibrary(), getLibrary()
});  
 
 function getFixedLibrary (){
    var sugFirst = document.getElementById('sugfirst');
    var sugSecond = document.getElementById('sugsecond')
   // sugFirst.textContent  = suggestedLibrary[0];
    bookOne = Object.values(suggestedLibrary[0]);
    bookTwo = Object.values(suggestedLibrary[1]);
    sugFirst.innerHTML = bookOne.join('<br>');
    sugSecond.innerHTML = bookTwo.join('<br>');
}

function displayLibrary() {
   // var displayBooks = JSON.parse(localStorage.getItem('myLibrary'))

}
function openForm() {
    form.style.display = 'block';
}

function closeForm() {
   form.style.display = 'none';
}
 
 
 

 https://stackoverflow.com/questions/63310980/how-to-display-my-array-of-objects-into-my-html-pages-table-individually-by
