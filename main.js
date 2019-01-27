// remove books
const list = document.querySelector('.shopping-list ul');
list.addEventListener('click', function (e) {
   if (e.target.className === 'delete') {
       const li = e.target.parentElement;
       list.removeChild(li);
   }
});
// add books
const addForm = document.forms['add-product'];
addForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const value = addForm.querySelector('input[type=text]').value;
   const li = document.createElement('li');
   const productName = document.createElement ('span');
   const deleteBtn = document.createElement ('span');
   deleteBtn.textContent = 'Usuń';
   productName.textContent = value;
   productName.classList.add('name');
   deleteBtn.classList.add('delete');
   li.appendChild(productName);
   li.appendChild(deleteBtn);
   list.appendChild(li);
});