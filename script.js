const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const j=document.getElementById('J');
const logo=document.getElementById('logo');
const ja =document.getElementById('j');
const jb =document.getElementById('k');
const card_data = document.getElementById('card-data');
const card_article = document.getElementById('card-article');

const move = 10;
let x=0;
let y=0;

i2.addEventListener('mouseover', event=>{
    i1.style.marginLeft="37%";
    i3.style.marginLeft="49%";
    i1.style.transition="0.5s"
    i3.style.transition="0.5s"
    j.style.letterSpacing=".15em"
    j.style.transition="0.10s"
});
i2.addEventListener('mouseout', event=>{
    i1.style.marginLeft="43%";
    i3.style.marginLeft="43%";
    j.style.letterSpacing=".10em"
    j.style.transition="0.10s"
    i1.style.transition="0.5s"
    i3.style.transition="0.5s"
});

