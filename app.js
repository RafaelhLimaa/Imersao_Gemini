function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
      // Se estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Nenhum resultado foi encontrado. Nenhuma palavra foi digitada.</p>";
      return; // Interrompe a função
    }
    
    // Função para retirar acentuação das palavras no banco de dados para facilitar comparação
    function removerAcentos(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Converte todos os dados do objeto para minúsculas e sem acentuação para facilitar a comparação
      let estado = removerAcentos(dado.estado).toLowerCase();
      let cidade = removerAcentos(dado.cidade).toLowerCase();
      let atracao = removerAcentos(dado.atracao).toLowerCase();
      let informacoes = removerAcentos(dado.informacoes).toLowerCase();
  
      // Verifica se a palavra pesquisada está contida em algum dos campos
      if (informacoes.includes(campoPesquisa) || cidade.includes(campoPesquisa) || atracao.includes(campoPesquisa) || estado.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para exibir o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              ${dado.estado} - ${dado.cidade}
              <p>${dado.atracao}</p>
            </h2>
            <p class="descricao-meta">${dado.informacoes}</p>
          </div>
        `;
      }
    }
    if (!resultados){ // Verifica se nenhum resultado foi encontrado até o momento
        resultados = "<p>Nenhum resultado foi encontrado na sua busca. Digite uma palavra válida.</p>";
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }
