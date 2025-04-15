const github = document.getElementById('github');
const email = document.getElementById('email');
const code = document.getElementById('sourceCode');
const contact = document.getElementById('contact');
const file = document.getElementById('file');
const paste = document.getElementById('paste');
const tooltip = document.getElementById('tooltip');

github.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Github";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
github.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
github.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

email.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Email";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
email.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
email.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

code.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Codigo fonte";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
code.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
code.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

contact.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Numero de contato";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
contact.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
contact.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

file.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Encontrar arquivo";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
file.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
file.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

paste.addEventListener('mouseover', (e) => {
  tooltip.innerText = "Encontrar pasta";
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
paste.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = (e.pageY - 40) + 'px';
});
paste.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});