const todosProjetos = [
    {
        titulo: "Podoguia",
        descricao: "Plataforma completa de guia de serviços de podologia. O sistema permite o cadastro de podologos.",
        link: "https://github.com/RosieGt/podoguia2",
        tech: "HTML, CSS, JS, Python, Django, SQLite"
    },
    {
        titulo: "Projeto Pizzas",
        descricao: "Interface de seleção e compra de pizzas com carrinho dinâmico.",
        link: "https://github.com/RosieGt/projetopizzas2",
        tech: "HTML, CSS, JS"
    },
    {
        titulo: "Automação Acadêmico",
        descricao: "Sistemas para automação de atividades na secretaria escolar.",
        link: "https://github.com/RosieGt/secprocess",
        tech: "HTML, CSS, JS, Python, Django, SQLite"
    },
     {
        titulo: "Leitor de QR Code",
        descricao: "Aplicação web desenvolvida para leitura rápida de códigos QR utilizando a câmera do dispositivo.",
        link: "https://github.com/RosieGt/leitorcod",
        tech: "HTML5, CSS3, JavaScript e biblioteca de escaneamento"
    },
    {
        titulo: "Gerenciamento de Biblioteca",
        descricao: "Desenvolvimento de uma aplicação para controle de acervo e empréstimos de livros.",
        link: "https://github.com/RosieGt/leitorcod",
        tech: "HTML, CSS, JS, Python, Django, SQLite"
    },
    {
        titulo: "Iprocenter",
        descricao: "Assistência técnica de celulares e venda de produtos.",
        link: " https://rosiegt.github.io/iprocenter/",
        imagem: "img/ipro.jpg",
        tipo: "site"
    },
    {
        titulo: "Projeto Pizzas",
        descricao: "Interface de seleção e compra de pizzas com carrinho dinâmico.",
        link: "https://rosiegt.github.io/projetopizzas2/",
        imagem: "img/pizza.jpg",
        tipo: "site"
    },
];

const containerSites = document.getElementById('container-sites');
const containerRepos = document.getElementById('container-repos');

todosProjetos.forEach(projeto => {
    if (projeto.tipo === "site") {
       
        containerSites.innerHTML += `
            <div class="projeto-card">
                <img src="${projeto.imagem}" alt="Capa ${projeto.titulo}" class="capa-projeto">
                <div class="projeto-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}" target="_blank" class="botao">Ver Site</a>
                </div>
            </div>`;
    } else {
        
        containerRepos.innerHTML += `
            <div class="projeto-card repo-card">
                <div class="projeto-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}" target="_blank" class="link-github">Ver no GitHub</a>
                </div>
            </div>`;
    }
});
