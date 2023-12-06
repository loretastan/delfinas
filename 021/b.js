console.log('Welcome to buttons!');

const buttons = document.querySelector('button');

buttons.addEventListener('click', _ => {
    console.log('You clicked me!');
});

buttons.addEventListener('click', _ => {
    console.log('No, you clicked me!');
});

buttons.addEventListener('mouseover', _ => {
    console.log('Stop toucing me!');
});

buttons.addEventListener('mouseout', _ => {
    console.log('I said stop toucing me!');
});

document.querySelectorAll('.container button')
.forEach(button => {
    button.addEventListener('click', _ => {
        const text = button.innerText;
        console.log(`You clicked ${text}!`);
    });
});

const h1 = document.querySelector('h1');
const what = document.querySelector('.click-me');

what.addEventListener('Click', _ => {
    console.log(h1.innerText);
});

const input = document.querySelector('input');
const submit = document.querySelector('button.submit');

submit.addEventListener('click', _ => {
    console.log(input.value);
    input.value = '';
});

const google = document.querySelector('a');

google.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.href);
    console.log('You clicked the link!');
});

document.querySelector('.parent')
.addEventListener('click', _ => {
    console.log('parent clicked');
});

document.querySelector('.child')
.addEventListener('click', e => {
    e.stopPropagation();
    console.log('child clicked');
});