
function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";
    
    // Para cada dado dentro da lista de dados
    for(let dado of dadosPR){
    
        resultados += `
        <div class="item-resultado">
            <h2>
               <a href="#" target="_blank">${dado.Estado} - ${dado.Cidade}</a>
               <p><a href="#" target="_blank">${dado.Atracao}</a></p>
            </h2>
            <p class="descricao-meta">${dado.Informações}</p>
        </div>
        `
    }
    
    section.innerHTML = resultados;
}

