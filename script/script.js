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
const postsContainerHTML = document.querySelector('.posts-container');
const imgBoxHTML = document.querySelector('.large-img-box');

// Chiamata a API per ottenere l'array di oggetti per generare i post
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        // Salvo la risposta in una variabile
        let posts = response.data;
        console.table(posts);
        // Creo un ciclo per stampare i post in pagina utilizzando i riferimenti alle proprietà degli oggetti nell'array dato dall'API
        let counter = posts.length;
        for (let i = 0; i < counter; i++) {
            postsContainerHTML.innerHTML += `
            <div class="post">
                <img src="./img/pin.svg" alt="" class="pin">
                <div class="img-box">
                    <img src="${posts[i].url}" alt="Immagine di ${posts[i].title}">
                </div>
                <div class="text-box">
                    <p class="data"> ${posts[i].date}</p>
                    <p class="titolo"> ${posts[i].title.toUpperCase()} </p>
                </div>
            </div>`;
        }
    // Una volta scritti gli elementi in pagina prendo i post salvandoli in una NodeList
    const postHTML = document.querySelectorAll('.post');
        // Aggiungo un EventListener a tutti i post utilizzando un ciclo
        for (let i = 0; i < counter; i++) {
            postHTML[i].addEventListener("click", () => {
                // Al click su un post verrà mostrata in pagina l'immagine corrispondente ingrandita sempre usando i riferimenti alle proprietà degli oggetti
                imgBoxHTML.classList.remove("hide");
                imgBoxHTML.innerHTML = `
                <div class="close-btn"> CHIUDI </div>
                <img src="${posts[i].url}" alt="Immagine di ${posts[i].title}">`;
                // Creo un altro EventListener che mi permette con un altro click di nascondere l'immagine ingrandita e poter di nuovo scorrere tra i post
                const closeBtnHTML = document.querySelector('.close-btn');
                closeBtnHTML.addEventListener("click", () => {
                    imgBoxHTML.classList.add("hide");
                    imgBoxHTML.innerHTML = "";
                });
            });
        };
    })
    .catch(error => {
        console.error(error);
    });

