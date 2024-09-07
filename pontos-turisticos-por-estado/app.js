function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Nenhum resultado foi encontrado. Nenhuma palavra foi digitada.</p>";
      return; // Interrompe a função
    }
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Converte todos os dados do objeto para minúsculas para facilitar a comparação
      let estado = dado.estado.toLowerCase();
      let cidade = dado.cidade.toLowerCase();
      let atracao = dado.atracao.toLowerCase();
      let informacoes = dado.informacoes.toLowerCase();
  
      // Verifica se a palavra pesquisada está contida em algum dos campos
      if (estado.includes(campoPesquisa) || cidade.includes(campoPesquisa) || atracao.includes(campoPesquisa) || informacoes.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para exibir o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.estado} - ${dado.cidade}</a>
              <p><a href="#" target="_blank">${dado.atracao}</a></p>
            </h2>
            <p class="descricao-meta">${dado.informacoes}</p>
          </div>
        `;
      } else if (!resultados) { // Verifica se nenhum resultado foi encontrado até o momento
        resultados = "<p>Nenhum resultado foi encontrado na sua busca. Digite uma palavra válida.</p>";
      }
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }