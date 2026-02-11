// Sample projects array
const projects = [
    { title: "Projeto 1", image: "./img/prj_1_fimind.png", link: "https://fimind.app" },
    { title: "Projeto 2", image: "./img/proj_2.png", link: "https://github.com/Felipedmgs/cloud_pass" },
    { title: "Projeto 3", image: "./img/proj_3.png", link: "https://github.com/Felipedmgs/monitoring_house" },
    { title: "Projeto 4", image: "./img/proj_4.png", link: "https://github.com/Felipedmgs/agenda_sph_react" }
];

// Function to render projects
// Função para renderizar os projetos
const gallery = document.querySelector('.gallery');
projects.forEach(({ title, image, link }) => {
    // Cria o elemento do projeto
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    // Cria o link
    const linkElem = document.createElement('a');
    linkElem.href = link;
    linkElem.target = "_blank"; // Abre o link em uma nova aba
    linkElem.title = title; // Adiciona uma dica ao passar o mouse

    // Adiciona a imagem ao link
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    linkElem.appendChild(img); // Insere a imagem no link

    // Adiciona o link ao div do projeto
    projectDiv.appendChild(linkElem);

    // Adiciona o projeto à galeria
    gallery.appendChild(projectDiv);
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".titulo-box .conteudo > div, .titulo-box");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("animate"); // Adiciona classe para ativar a animação
        }, index * 500); // Adiciona atraso sequencial
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const backgroundImg = document.querySelector(".background-img");

    // Aguarde um pequeno intervalo antes de ativar a animação
    setTimeout(() => {
        backgroundImg.classList.add("animate");
    }, 600); // Tempo em milissegundos
});