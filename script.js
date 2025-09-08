// Optional JavaScript for form handling or interactivity

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message! (This is a mock form.)');
  this.reset(); // clear form
});
