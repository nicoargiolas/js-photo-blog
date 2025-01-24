// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
// Note
// Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :faccia_leggermente_sorridente:
// Font utilizzati:
// titoli:  ‘Edu Tas Beginner’, sans-serif;
// date: ‘Sometype Mono’, ‘monospace’;
// (Dovreste sapere a questo punto cosa e come prendere da GFonts…)

// Collegamento a elementi del DOM
const postsHTML = document.querySelector('.posts-container');

axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        const posts = response.data;
        console.table(posts);
        let counter = posts.length;
        for (let i = 0; i < counter; i++) {
            postsHTML.innerHTML += `
            <div class="post">
                <img src="./img/pin.svg" alt="" class="pin">
                <div class="img-box">
                    <img src="${posts[i].url}" alt="Immagine di ${posts[i].title}">
                </div>
                <div class="text-box">
                    <p class="data"> ${posts[i].date}</p>
                    <p class="titolo"> ${posts[i].title.toUpperCase()} </p>
                </div>
            </div>`
        }
    })
    .catch(error => {
        console.error(error);
    });

