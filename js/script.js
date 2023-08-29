/* ------------------------------------------------------------ */
/* Netlify Form AJAX Submission */
/* ------------------------------------------------------------ */

const handleSubmit = (event) => {
   event.preventDefault();
 
   const myForm = event.target;
   const formData = new FormData(myForm);
   
   fetch("/", {
     method: "POST",
     headers: { "Content-Type": "application/x-www-form-urlencoded" },
     body: new URLSearchParams(formData).toString(),
   })
      .then(() => success())
      .catch((err) => error(err));
};
 
document
   .querySelector("#contact-form")
   .addEventListener("submit", handleSubmit); 

// success() function
const success = () => {

   const success = document.querySelector('.contact__success');

   success.innerHTML = `Thank you! I'll get in touch with you soon.`;
   success.style.display = 'block';
   
   formDefaultState();

   setTimeout(() => {

      success.style.display = 'none';
   
   }, 5000);

};

// error() function
const error = err => {

   const error = document.querySelector('.contact__error');

   error.innerHTML = `${err}`;
   error.style.display = 'block';
   
   formDefaultState();

   setTimeout(() => {
      
      error.style.display = 'none';

   }, 5000);

};
