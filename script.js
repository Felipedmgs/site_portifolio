// Sample projects array
const projects = [
    { title: "Projeto 1", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto1" },
    { title: "Projeto 2", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto2" },
    { title: "Projeto 3", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto3" },
    { title: "Projeto 3", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto3" }
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

