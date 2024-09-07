function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let resultados = "";
    let estado = "";
    let cidade = "";
    let atracao = "";
    let informacoes = "";

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Nenhuma palavra foi digitada.</p>"
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase(); 
    // Para cada dado dentro da lista de dados
    for(let dado of dados){
        estado = dado.estado.toLocaleLowerCase();
        cidade = dado.cidade.toLocaleLowerCase();
        atracao = dado.atracao.toLocaleLowerCase();
        informacoes = dado.informacoes.toLocaleLowerCase();
        if (estado.includes(campoPesquisa) || cidade.includes(campoPesquisa) || atracao.includes(campoPesquisa) || informacoes.includes(campoPesquisa)){
            //Cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
               <a href="#" target="_blank">${dado.estado} - ${dado.cidade}</a>
               <p><a href="#" target="_blank">${dado.atracao}</a></p>
            </h2>
            <p class="descricao-meta">${dado.informacoes}</p>
        </div>
        `
        }
        if(!resultados){
            resultados = "<p>Nenhum resultado foi encontrado na sua busca. Digite uma palavra válida.</p>"
        }
    }
    section.innerHTML = resultados;
}

