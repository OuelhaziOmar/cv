document.querySelector(".contactm").addEventListener('click', function() {
    document.querySelector(".containerbg").style.display = 'flex';
    console.log(document.querySelector(".contactm"));
})
document.querySelector(".close").addEventListener('click', function() {
    document.querySelector(".containerbg").style.display = 'none';
})



window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');

    nav.classList.toggle('navscroll', window.scrollY > 0);
    let list = document.getElementsByClassName('menu');
    for (var i = 0; i < list.length; i++) {

        list[i].classList.toggle('ascroll', window.scrollY > 0);
    }



})

let look = document.querySelector('.fa-rotate-360');


look.addEventListener('click', function() {
    if (look.classList.length == 3) {

        let Item = document.querySelector('.personal_Interests_Items');

        Item.style.visibility = "visible";
        Item.style.height = "300px";
        look.classList.toggle('fa-rotate-180');

    } else {
        let Item = document.querySelector('.personal_Interests_Items');

        Item.style.visibility = "collapse   ";
        Item.style.height = "0px";

        look.classList.toggle('fa-rotate-180');
    }
})