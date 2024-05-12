const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const j=document.getElementById('J');
const ja =document.getElementById('j');
const jb =document.getElementById('k');
const contact = document.getElementById('contact');
const card_data = document.getElementById('card-data');
const card_article = document.getElementById('card-article');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const body = document.getElementById('body');
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');
const project = document.getElementById('project');
const skills1 = document.getElementById('skills1');
const dab1 = document.getElementById('dab1');
const dab2= document.getElementById('dab2');
const dab3 = document.getElementById('dab3');
const logo = document.getElementById('logo');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const pp1 = document.getElementById('pp1');
const pp2 = document.getElementById('pp2');

const cdi1 = document.getElementById('cdi1');
const cdi2 = document.getElementById('cdi2');
const cdi3 = document.getElementById('cdi3');
const cdi4 = document.getElementById('cdi4');
const cdi5 = document.getElementById('cdi5');
const cdi6 = document.getElementById('cdi6');

const ddoc1 = document.getElementById('ddoc1');
const ddoc2 = document.getElementById('ddoc2');
const oc1 = document.getElementById('oc1');
const oc2 = document.getElementById('oc2');

const cd1 = document.getElementById('cd1');
const cd2 = document.getElementById('cd2');
const cd3 = document.getElementById('cd3');
const cd4 = document.getElementById('cd4');
const cd5 = document.getElementById('cd5');
const cd6 = document.getElementById('cd6');

const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l5 = document.getElementById('l5');
const l6 = document.getElementById('l6');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');
const a8 = document.getElementById('a8');

const ll1 = document.getElementById('ll1');
const ll2 = document.getElementById('ll2');

const doc1 = document.getElementById('doc1');
const doc2 = document.getElementById('doc2');

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

/** dark mode & light mode */
button1.addEventListener('click',event =>{
    button2.style.display="block";
    button1.style.display="none";

    button2.style.background="black";
    button2.style.color="white";


    j.style.color="white"
    home.style.backgroundColor="black";
    dab1.style.color="white";
    dab2.style.color="white";
    dab3.style.color="white";
    logo.style.color="white";
    a1.style.color="white";
    a2.style.color="white";
    a3.style.color="white";
    a4.style.color="white";
    a5.style.color="white";
    a6.style.color="white";
    a7.style.color="white";
    a8.style.color="white";

    contact.style.color="white";

    ll1.style.display="none";
    ll2.style.display="inline";

    doc1.style.display="none";
    doc2.style.display="inline-block";


    l1.style.color="white";
    l2.style.color="white";
    l3.style.color="white";
    l4.style.color="white";
    l5.style.color="white";
    l6.style.color="white";

    cdi1.style.display="inline";
    cdi2.style.display="inline";
    cdi3.style.display="inline";
    cdi4.style.display="inline";
    cdi5.style.display="inline";
    cdi6.style.display="inline";

    ddoc1.style.display="none";
    oc1.style.display="inline-block";
    ddoc2.style.display="none";
    oc2.style.display="inline-block";

    cd1.style.display="none";
    cd2.style.display="none";
    cd3.style.display="none";
    cd4.style.display="none";
    cd5.style.display="none";
    cd6.style.display="none";

    projects.style.color="white";
    skills1.style.color="white";
    about.style.backgroundColor="black";
    skills.style.backgroundColor="black";
    project.style.backgroundColor="black";
    contacts.style.backgroundColor="black";
    body.style.backgroundColor="black";
});
button2.addEventListener('click',event =>{
    button1.style.display="block";
    button2.style.display="none";

    button1.style.background="white";
    button1.style.color="black";

    j.style.color="black"
    home.style.backgroundColor="white";
    dab1.style.color="black";
    dab2.style.color="black";
    dab3.style.color="black";
    logo.style.color="black"
    a1.style.color="black";
    a2.style.color="black";
    a3.style.color="black";
    a4.style.color="black";
    a5.style.color="black";
    a6.style.color="black";
    a7.style.color="black";
    a8.style.color="black";

    contact.style.color="black";

    ll1.style.display="inline";
    ll2.style.display="none";

    doc1.style.display="inline-block";
    doc2.style.display="none";

    ddoc1.style.display="inline-block";
    oc1.style.display="none";
    ddoc2.style.display="inline-block";
    oc2.style.display="none";


    l1.style.color="black";
    l2.style.color="black";
    l3.style.color="black";
    l4.style.color="black";
    l5.style.color="black";
    l6.style.color="black";

    cdi1.style.display="none";
    cdi2.style.display="none";
    cdi3.style.display="none";
    cdi4.style.display="none";
    cdi5.style.display="none";
    cdi6.style.display="none";

    cd1.style.display="inline";
    cd2.style.display="inline";
    cd3.style.display="inline";
    cd4.style.display="inline";
    cd5.style.display="inline";
    cd6.style.display="inline";


    projects.style.color="black";
    skills1.style.color="black";
    about.style.backgroundColor="white";
    skills.style.backgroundColor="white";
    project.style.backgroundColor="white";
    contacts.style.backgroundColor="white";
    body.style.backgroundColor="white";
});