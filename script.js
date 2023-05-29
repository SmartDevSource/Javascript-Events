/////////////////////////////////// 1.CLICKS COUNTING ///////////////////////////////////
let clicks_counter = 0;

document.getElementsByTagName('footer')[0].addEventListener("click", function()
{
  clicks_counter++;
  console.log("click n "+clicks_counter);
});

/////////////////////////////////// 2.BURGER-BAR ///////////////////////////////////
document.querySelector('button.navbar-toggler').addEventListener("click", function()
{
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

/////////////////////////////////// 3.FIRST CARD DEFINITIVE COLOR CHANGE ///////////////////////////////////
let firstCard = document.querySelectorAll('div.card.mb-4.box-shadow')[0];
let firstCardEditButton = firstCard.querySelector('button.btn.btn-sm.btn-outline-secondary');

firstCardEditButton.addEventListener("click", function()
{
  firstCardEditButton.style.color = "red";
});


/////////////////////////////////// 4.SECOND CARD TOGGLE COLOR ///////////////////////////////////
let secondCard = document.querySelectorAll('div.card.mb-4.box-shadow')[1];
let secondCardEditButton = secondCard.querySelector('button.btn.btn-sm.btn-outline-secondary');

let baseColor = getComputedStyle(secondCardEditButton).color;
let targetColor = "#00FF00";
let colorToggler = false;

secondCardEditButton.addEventListener("click", function()
{
  if (!colorToggler)
  {
    secondCardEditButton.style.color = targetColor;
    colorToggler = true;
  } else if (colorToggler)
  {
    secondCardEditButton.style.color = baseColor;
    colorToggler = false;
  }
});

/////////////////////////////////// 5.LINK REL CDN REVERSIBLE REMOVE ///////////////////////////////////
let navbar = document.querySelector('.navbar');

navbar.addEventListener("dblclick", function()
{
  if (document.querySelector("link").disabled == true)
  {
    document.querySelector("link").disabled = false;
  } else if (document.querySelector("link").disabled == false)
  {
    document.querySelector("link").disabled = true;
  }
});

/////////////////////////////////// 6.REVERSIBLE CARD SCALING ON VIEW MOUSEPOINTING ///////////////////////////////////
cards = document.querySelectorAll(".col-md-4");

for (let i = 0 ; i < cards.length ; i++)
{
  let buttonView = cards[i].querySelectorAll("button")[0];
  let textCard = cards[i].querySelector(".card-text");
  let imgCard = cards[i].querySelector(".card-img-top");

  buttonView.addEventListener("mouseover", scaleCard);

  function scaleCard()
  {
    textCard.classList.toggle("collapse");
    if (imgCard.style.width != "20%")
    {
      imgCard.style.width = "20%";
    } else if (imgCard.style.width == "20%")
    {
      imgCard.style.width = "";
    }
  }
}

/////////////////////////////////// 7.SHUFFLE CARDS LAST TO FIRST ///////////////////////////////////
cards = document.querySelectorAll("div.card.mb-4.box-shadow");
container = document.querySelector(".album .container .row");

headerRightButton = document.querySelector("section.jumbotron.text-center").querySelector(".btn.btn-secondary.my-2");
headerRightButton.addEventListener("click", function()
{
  let lastCard = container.lastElementChild;
  container.insertBefore(lastCard, container.firstElementChild);
});

/////////////////////////////////// 8.SHUFFLE CARDS FIRST TO LAST ///////////////////////////////////
headerLeftButton = document.querySelector("section.jumbotron.text-center").querySelector(".btn.btn-primary.my-2");
headerLeftButton.href = "#";
headerLeftButton.addEventListener("click", function()
{
  let firstCard = container.firstElementChild;
  container.insertBefore(firstCard, container.lastElementChild.nextSibling);
});

/////////////////////////////////// 9.KEYBOARDS EVENTS ///////////////////////////////////
navbar = document.querySelector(".navbar.navbar-dark.bg-dark.box-shadow");
navbarLogo = navbar.querySelector("strong");

main = document.querySelector("main");

navbarLogo.addEventListener("mouseenter", function() { eventsListener(true); });
navbarLogo.addEventListener("mouseleave", function() { eventsListener(false); });

function eventsListener(isHover) {
  if (isHover) {
    document.addEventListener('keydown', inputListener);
  } else {
    document.removeEventListener('keydown', inputListener);
  }
}

function inputListener(e) {
  switch (e.key) {
    case 'a': case 'A':
      main.setAttribute("class", "");
      main.classList.add("col-4");
      break;
    case 'y': case 'Y':
      main.setAttribute("class", "");
      main.classList.add("offset-md-4", "col-4");
      break;
    case 'p': case 'P':
      main.setAttribute("class", "");
      main.classList.add("offset-md-8");
      break;
    case 'b':  case 'B':
      main.setAttribute("class", "");
      break;
  }
}