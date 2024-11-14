// Sample projects array
const projects = [
    { title: "Projeto 1", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto1" },
    { title: "Projeto 2", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto2" },
    { title: "Projeto 3", image: "https://via.placeholder.com/150", link: "https://github.com/Felipedmgs/projeto3" }
];

// Function to render projects
const gallery = document.querySelector('.gallery');
projects.forEach(({ title, image, link }) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    const linkElem = document.createElement('a');
    linkElem.href = link;
    linkElem.target = "_blank";
    linkElem.textContent = title;

    projectDiv.appendChild(img);
    projectDiv.appendChild(linkElem);
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

