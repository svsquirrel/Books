
let myLibrary = [];
const inputTitle = document.querySelector('#title');
const inputAuthor = document.getElementById('author');
const inputGenre = document.getElementById('genre');
const inputRead = document.getElementById('read');
const display   =  document.getElementById('displaycrap')
const form = document.getElementById ('popupForm');
const enters = document.getElementById('enter');
    enters.addEventListener('click', () => {
        addBooks()
     });

document.addEventListener('DOMContentLoaded', function() {
    var pageLibrary = JSON.parse(localStorage.getItem('myLibrary'));
         if (pageLibrary == null) {
             alert ("add some books!");
         };
    alert(pageLibrary.length);
    }, false);

 var Books = function (title, author, genre, read){
        this.title = title,
        this.author = author,
        this.genre = genre,
        this.read = read
};

//function getBooks() {
    //get the library array from localstorage
//    
//}

function addBooks(){
   // get the new book, add to myLibrary and send to localstorage
  
   /* var title = inputTitle.value;
    var author = inputAuthor.value;
    var genre = inputGenre.value;
    var read = inputRead.value;
    var entry = {
        'title': title,
        'author': author,
        'genre': genre,
        'read': read,
       };
   // localStorage.setItem('entry', JSON.stringify(entry));
  *///  existingLibrary.push(entry);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
 };

 function openForm() {
    form.style.display = 'block';
}

function closeForm() {
   form.style.display = 'none';
}

 


/*
 var theHobbit = new Books('the Hobbit', 'J.R.R. Tolkein', 'Fantasy', 'no');
var emma = new Books('Emma', 'JaneEyre', 'Fiction', 'no'); 
myLibrary.push(emma, theHobbit);
function addEntry() {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entryTitle = document.getElementById("entryTitle").value;
    var entryText = document.getElementById("entryText").value;
    var entry = {
        "title": entryTitle,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};


  
  // const author= inputAuthor.target.value;
  // const genre = inputGenre.target.value;
  // const read = inputRead.target.value;

  
function openForm() {
    form.style.display = 'block';

}

function closeForm() {
   form.style.display = 'none';
}

function editRead() {

}

function getBookImage() {

}


   


   //use capital letter if it's a function constructor

make the form:
https://www.w3docs.com/tools/code-editor/12095

local storage:
https://www.youtube.com/watch?v=k8yJCeuP6I8

var bookProto = {
    output: function (){
        sentence = this.title +' by ' +this.author +', '+this.pages + ' pages '+', '+ this.read;
        return sentence 
    }
}

var theHobbit = Object.create(bookProto, 
   {
       title : { value: 'The Hobbit' },
       author: { value: 'J.R.R. Tolkien'},
       pages:  { value: '295'},
       read:  {  value: 'not read yet'}
   } );



var Books = function (title, author, genre, read){
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.read = read
};

Books.prototype.output = 
    function() {
        sentence = this.title +' by ' +this.author +', '+this.pages + ' pages '+', '+ this.read;
        return sentence
    };

var theHobbit = new Books('the Hobbit', 'J.R.R. Tolkein', '295', 'not read yet');
      
console.log(theHobbit.output());
*/

//object.create  Just another way of books.prototype.output but making the prototype the output function
//not the Books constructor. Will get same data on console.log