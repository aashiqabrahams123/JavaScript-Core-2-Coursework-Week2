function readingList(books) {
  // Write your code here...

  let content = document.getElementById('content');
  let h1 = document.createElement('h1');
  h1.innerHTML = `Booklist`;
  content.appendChild(h1);


  let unordered = document.createElement('ul');
  unordered.style.display = 'flex';
  unordered.style.flexWrap = 'wrap';
  unordered.style.padding = '30px';
  unordered.style.width = '100%';


  for (let i = 0; i < books.length; i ++) {
    let list = document.createElement('li');
    list.style.listStyleType = 'none';
    list.style.margin = '30px';
    list.style.width = '27%';

    if (books[i].alreadyRead === true) {
      list.style.backgroundColor = 'green';
    } else {
      list.style.backgroundColor = 'red';
    }

    let paragraph = document.createElement('p');
    paragraph.style.fontFamily = 'Arial';
    paragraph.style.fontSize = '15px';
    paragraph.innerHTML = `${books[i].title} - ${books[i].author}`;

    let image = document.createElement('img');
    image.style.width = '50%';
  
    image.src = books[i].imageCover;
    // image.appendChild(paragraph);
    list.appendChild(paragraph);
    list.appendChild(image);
    unordered.appendChild(list);
    h1.appendChild(unordered);
  }
}
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageCover: 'https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg'
    
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageCover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
    
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageCover: 'https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg'
    
  }
];

readingList(books);