function loadHTML(file, elementId) {
  fetch(`sections/${file}`)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading the file:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML('nav.html', 'nav-container');
  loadHTML('profile.html', 'profile-container');
  loadHTML('about.html', 'about-container');
  loadHTML('experience.html', 'experience-container');
  loadHTML('projects.html', 'projects-container');
  loadHTML('contact.html', 'contact-container');
  loadHTML('footer.html', 'footer-container');
});
