// script.js
document.addEventListener('DOMContentLoaded', function () {
  const bookContainer = document.getElementById('bookContainer');
  const addBookBtn = document.getElementById('addBookBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');
  const bookForm = document.getElementById('bookForm');

  addBookBtn.addEventListener('click', function () {
      modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  bookForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const image = document.getElementById('image').value;
      const description = document.getElementById('description').value;

      if (!title || !author || !image) {
          alert('Please fill in all required fields.');
          return;
      }

      addBookToCatalog(title, author, image, description);

      // Clear form fields
      bookForm.reset();
      modal.style.display = 'none';
  });

  function addBookToCatalog(title, author, image, description) {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      const bookImage = document.createElement('img');
      bookImage.src = image;

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = title;

      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Author: ${author}`;

      const bookDescription = document.createElement('p');
      bookDescription.textContent = description;

      bookDiv.appendChild(bookImage);
      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookDescription);

      bookContainer.appendChild(bookDiv);
  }
});
