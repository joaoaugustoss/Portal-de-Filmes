const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const LANG = '&language=pt-BR'
const API_KEY = 'fd227b6852c79391fbab4fb2197f9bb2';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes10(){
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + API_KEY + LANG, true);
    xhr.onload = exibeFilmes10;
    xhr.send();
}

function carregaFilmes5(){
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + API_KEY + LANG, true);
    xhr.onload = exibeFilmes5;
    xhr.send();
}

function carregaCarrosel(){
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + API_KEY + LANG, true);
    xhr.onload = exibeCarrosel;
    xhr.send();
}

function carregaSerie5(){
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/tv/popular' + '?api_key=' + API_KEY + LANG, true);
    xhr.onload = exibeSerie5;
    xhr.send();
}

function carregaSerie10(){
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/tv/popular' + '?api_key=' + API_KEY + LANG, true);
    xhr.onload = exibeSerie10;
    xhr.send();
}

function pesquisaFilmes () {
    xhr = new XMLHttpRequest ();

    query = document.getElementById('txtPesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + API_KEY + '&query=' + query + LANG, true);
    xhr.onload = exibePesquisa;
    xhr.send();
}

function exibePesquisa(){

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for(let i = 0; i < data.results.length; i++){
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="cards col-md-3">
            <div class="row">
                <img src="${imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nomeFilme}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="https://www.themoviedb.org/movie/${data.results[i].id}?language=pt-BR" target="blank" class="btn btn-primary">Abrir Filme</a>
                </div>
            </div>
        </div>`
    }
    document.getElementById('main').innerHTML = textoHTML;
}

function exibeSerie10(){

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for(let i = 0; i < 15; i++){
        let nomeFilme = data.results[i].name;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="api col-md-3">
        <div class="row">
            <span class="cartaz"><img src="${imagem}" alt="Cartaz"></span>
            <span class="titulo"><p><a href="https://www.themoviedb.org/tv/${data.results[i].id}?language=pt-BR" target="blank">${nomeFilme}</a></p></span>
        </div>
      </div>`
    }
    document.getElementById('tela').innerHTML = textoHTML;
}

function exibeSerie5(){

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for(let i = 0; i < 5; i++){
        let nomeFilme = data.results[i].name;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="api serie${i} col-md-3">
        <div class="row">
            <span class="cartaz"><img src="${imagem}" alt="Cartaz"></span>
            <span class="titulo"><p><a href="https://www.themoviedb.org/tv/${data.results[i].id}?language=pt-BR" target="blank">${nomeFilme}</a></p></span>
        </div>
      </div>`
    }
    document.getElementById('tela').innerHTML = textoHTML;
}

function exibeFilmes10(){

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for(let i = 0; i < 15; i++){
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="api col-md-3">
        <div class="row">
            <span class="cartaz"><img src="${imagem}" alt="Cartaz"></span>
            <span class="titulo"><p><a href="https://www.themoviedb.org/movie/${data.results[i].id}?language=pt-BR" target="blank">${nomeFilme}</a></p></span>
        </div>
      </div>`
    }
    document.getElementById('telinha').innerHTML = textoHTML;
}

function exibeFilmes5(){

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for(let i = 0; i < 5; i++){
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="api filme${i} col-md-3">
        <div class="row">
            <span class="cartaz"><img src="${imagem}" alt="Cartaz"></span>
            <span class="titulo"><p><a href="https://www.themoviedb.org/movie/${data.results[i].id}?language=pt-BR" target="blank">${nomeFilme}</a></p></span>
        </div>
      </div>`
    }
    document.getElementById('telinha').innerHTML = textoHTML;
}


document.addEventListener("load", carregaSerie5());
