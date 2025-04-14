const chave = '87049f01ed713c1a9ab738e22a86583d';

async function filmesporGenero(Id){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${chave}&with_genres=${Id}&sort_by=popularity.desc`);
        const dados = await response.json();

        if(dados.results.length === 0){
            console.log("Nenhum filme encontrado");
            return
            
        }
        
        
        const melhores = dados.results[0];
        console.log(`Sugestão de filme: ${melhores.title}`);
        console.log(`Sinopse ${melhores.overview}`);
        console.log(`Avaliação: ${melhores.vote_avagre}/10`);
        console.log(`Outras Sugestão de filme:`);
        
        
        for(let i=1; i<=5; i++){
            const filme = dados.results[i];
            console.log(`${i}. ${filme.title} - Avaliação: ${filme.vote_average}/10`);
            
        }
        
        outroGenero()
        
    }catch(error){ console.error('deu ruim', error); }
    
}


function outroGenero(){
    const generos = prompt("Escolha um gênero de filme(1. Ação, 2. Comédia, 3. Terror. 4. Drama, 5. Romance");


    switch(generos){
        case '1': filmesporGenero(28); break;
        case '2': filmesporGenero(35); break;
        case '3': filmesporGenero(27); break;
        case '4': filmesporGenero(18); break;
        case '5': filmesporGenero(10749); break;

        default:
            outroGenero()
            console.log("Genero não entrado");
            break;
            
    }
}

outroGenero()
