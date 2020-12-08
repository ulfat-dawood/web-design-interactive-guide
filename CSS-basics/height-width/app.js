const long = document.querySelector('button#long-text');
const short = document.querySelector('button#short-text');
const empty = document.querySelector('button#no-text');
const text = document.querySelector('#min-height div');

long.addEventListener("click", ()=>{
    text.innerHTML="Box height will grow. Empty the box, and it still retains min-height."; 
}) 

short.addEventListener("click", ()=>{
    text.innerHTML="This is short text."; 
}) 

empty.addEventListener("click", ()=>{
    text.innerHTML=""; 
}) 


const maxLong = document.querySelector('button#max-long-text');
const maxShort = document.querySelector('button#max-short-text');
const maxEmpty = document.querySelector('button#max-no-text');
const maxText = document.querySelector('#max-height div');

maxLong.addEventListener("click", ()=>{
    maxText.innerHTML="Box height can't grow more than 300px. Empty the box, and it will collaps to fit the buttons only."; 
}) 

maxShort.addEventListener("click", ()=>{
    maxText.innerHTML="This is short text."; 
}) 

maxEmpty.addEventListener("click", ()=>{
    maxText.innerHTML=""; 
}) 

