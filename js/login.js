// // DOM
const card = document.querySelector("#card");
const nameSignUp = document.querySelector("input#nameSignUp");
const passSignUp = document.querySelector("input#passSignUp");
const nameSignIn = document.querySelector("input#nameSignIn");
const passSignIn = document.querySelector("input#passSignIn");
const bols = document.querySelectorAll(".bol-single");
const buttonNext = document.querySelector(".bols i.next");
const buttonPrev = document.querySelector(".bols i.prev");
const slideBoxMen = document.querySelector(".bols #man");
const slideBoxWoman = document.querySelector(".bols #woman");
const imgUser = document.querySelector(".img-user");
const buttonSingUp = document.querySelector("button#flipFront");
const buttonLogin = document.querySelector("button#loginUser");
const buttonLink = document.querySelector("button a");

// // vars
var currentSlide = 1;
const isValueNameUp = nameSignUp.value.trim() === "";
const isValuePassUp = passSignUp.value.trim() === "";
// // functions
//responsavel pela verificação dos inputs do cadastro para saber se eles estão com alguma coisa escrita
const verificInputSignUp = () => {
  if (isValueNameUp) {
    nameSignUp.style.border = "2px solid #f50303";
  }
  if (isValuePassUp) {
    passSignUp.style.border = "2px solid #f50303";
  }
};
//responsavel pela verificação dos inputs para saber se eles estão com alguma coisa escrita, se caso ele tiveram o cartão vai virar para o login
const flipSignIn = () => {
  if (nameSignUp.value.trim() === "" || passSignUp.value.trim() === "") {
    nameSignUp.style.border = "2px solid #f50303";
    passSignUp.style.border = "2px solid #f50303";
  } else {
    localStorage.nameUser = nameSignUp.value.trim();
    localStorage.passUser = passSignUp.value.trim();
    nameSignUp.style.border = "2px solid #00f804";
    passSignUp.style.border = "2px solid #00f804";
    card.style.transform = "rotateY(360deg)";
  }
};
//responsavel pela verificação dos inputs do login para saber se eles estão com alguma coisa escrita
const verificInputSignIn = () => {
  if (nameSignIn.value.trim() === "") {
    nameSignIn.style.border = "2px solid #f50303";
  }
  if (passSignIn.value.trim() === "") {
    passSignIn.style.border = "2px solid #f50303";
  }
};
//responsavel pela verificação dos inputs do login para saber se eles estão de acordo com os dados enviados pelo usuario
const verificLogin = () => {
  if (
    nameSignIn.value.trim() === localStorage.nameUser &&
    passSignIn.value.trim() === localStorage.passUser
  ) {
    buttonLink.href = `https://joao-code-web.github.io/projetosemnome/home.html`;
  } else {
    buttonLink.href = `#`;
  }
};
//responsavel por colocar a foto salva pelo usuario
const autoPhoto = () => {
  if (localStorage.userImg == undefined) {
    imgUser.innerHTML = `<img src="./img/usersImg/user.png" alt="person picture">`;
  } else {
    imgUser.innerHTML = localStorage.userImg;
  }
};
//responsavel por fazer as fotos ir para frente
const nextSlide = () => {
  currentSlide++;
  if (currentSlide > 3) {
    currentSlide = 1;
    slideBoxMen.innerHTML = `<img src="./img/usersImg/homen.png" alt="person picture">`;
    slideBoxWoman.innerHTML = `<img src="./img/usersImg/mulher.png" alt="person picture">`;
  } else {
    slideBoxMen.innerHTML = `<img src="./img/usersImg/homen${currentSlide}.png" alt="person picture">`;
    slideBoxWoman.innerHTML = `<img src="./img/usersImg/mulher${currentSlide}.png" alt="person picture">`;
  }
};
//responsavel por fazer as fotos ir para tras
const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = 3;
    slideBoxMen.innerHTML = `<img src="./img/usersImg/homen3.png" alt="person picture">`;
    slideBoxWoman.innerHTML = `<img src="./img/usersImg/mulher3.png" alt="person picture">`;
  } else {
    slideBoxMen.innerHTML = `<img src="./img/usersImg/homen${currentSlide}.png" alt="person picture">`;
    slideBoxWoman.innerHTML = `<img src="./img/usersImg/mulher${currentSlide}.png" alt="person picture">`;
  }
};
//responsavel por a foto no login e guarda a foto quando o usuario escolher
bols.forEach((e) => {
  e.addEventListener("click", () => {
    imgUser.innerHTML = `${e.innerHTML}`;
    localStorage.userImg = e.innerHTML;
  });
});

buttonNext.addEventListener("click", () => {
  nextSlide();
});

buttonPrev.addEventListener("click", () => {
  prevSlide();
});

buttonSingUp.addEventListener("click", (e) => {
  verificInputSignUp();
  flipSignIn();
  e.preventDefault();
});

buttonLink.addEventListener("click", () => {
  verificInputSignIn();
  verificLogin();
});
//responsavel por fazer aparecer o cadastro
const flipBack = () => {
  card.style.transform = "rotateY(180deg)";
};
//responsavel por fazer aparecer o login
const flipFront = () => {
  card.style.transform = "rotateY(360deg)";
};

autoPhoto();
