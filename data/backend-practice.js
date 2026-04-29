const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
     const response =  xhr.response;
});
xhr.open('GET', 'https://supersimplebackend.dev/');
xhr.send();