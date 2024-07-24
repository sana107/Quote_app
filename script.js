let button=document.querySelector('button')
let h1=document.querySelector('h1')
let p=document.querySelector('p')
let body=document.querySelector('body')


const fetchquote=async() => {
    const res= await fetch("https://quotable.io/random")
    const quote=await res.json();
    h1.innerText=quote.content;
    p.innerText=quote.author;
};


//when dpcument loads
fetchquote();


//when click
button.addEventListener('click', fetchquote);

//evey 10 seconds
setInterval(() =>{
    fetchquote();

},50000);