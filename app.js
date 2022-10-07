const title = document.querySelector('h1');
const content = document.querySelector('.hero p');
const heading = document.querySelector('#heading');
const figure = document.querySelector('figure');


window.addEventListener('load', () => {
    const titleText = splitText(title);
    const contentText = splitText(content);
    const headingText = heading.innerText.split('');

    manuplateHTML(titleText, title);
    manuplateHTML(contentText, content);
    manuplateHTML(headingText, heading);

    reveal();
});

function reveal() {

    const TLLOAD = gsap.timeline({
        default: {
            ease: "power2"
        }
    })

    TLLOAD
        .from("figure img", {
            opacity: "0",
            x: "50px",
            y: "50px",
            duration: 1
        })
        .from("figure", {
            x: "-50%",
            y: "-45%",
            transform: "rotate(60deg)",
            delay: 1,
            duration: 1,
        })
        .from(".hero", {
            "width": "100%",
            duration: .3,
        })
        .from("header span", {
            "x": "-10px",
            opacity: 0,
            duration: .6,
        })
        .from(".hero h1 span", {
            "top": "100%",
            stagger: '.2s',
            duration: .2,
        })
        .from(".hero p span", {
            "top": "100%",
            stagger: '.1s',
            duration: .3
        })
        .from(".hero .btn", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: .5
        })
        .from('#heading span', {
            "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            stagger: '.1s',
            duration: .9
        })
        .from("figure", {
            onComplete: function() {
                figure.classList.add('float')
              }
        })
}

function splitText(str) {
    return str.innerHTML.replace(/\n/g, "<br>")
        .split("<br>")
        .map(e => e.replace(/\<(.*)\>/g, '').trim())
        .filter(e => e)
}

function manuplateHTML(text, DOM) {
    DOM.innerText = null;
    text.map(element => {
        const div = document.createElement('div');
        const span = document.createElement('span');

        span.innerText = element;

        div.append(span);
        DOM.append(div);
    });

}