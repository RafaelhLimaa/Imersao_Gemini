  let dados = [
    {
      estado: "Paraná",
      cidade: "Foz do Iguaçu",
      atracao: "Cataratas do Iguaçu",
      informacoes: "As Cataratas do Iguaçu são uma das maiores e mais belas do mundo, com quedas d'água impressionantes que se estendem por vários quilômetros. Um espetáculo da natureza que encanta a todos."
    },
    {
      estado: "Paraná",
      cidade: "Curitiba",
      atracao: "Jardim Botânico",
      informacoes: "O Jardim Botânico de Curitiba é um dos mais bonitos do Brasil, com uma estufa de vidro inspirada no Palácio de Cristal de Londres e diversas espécies de plantas. Um lugar perfeito para um passeio relaxante."
    },
    {
      estado: "Paraná",
      cidade: "Ponta Grossa",
      atracao: "Parque Estadual de Vila Velha",
      informacoes: "O Parque Estadual de Vila Velha é conhecido por suas formações rochosas esculpidas pela natureza ao longo de milhões de anos. Um lugar ideal para trilhas e contato com a natureza."
    },
    {
      estado: "Paraná",
      cidade: "Morretes",
      atracao: "Serra Verde Express",
      informacoes: "O trem turístico Serra Verde Express oferece uma viagem inesquecível pela Serra do Mar, com paisagens exuberantes e a oportunidade de conhecer a história da ferrovia."
    },
    {
      estado: "Paraná",
      cidade: "Ilha do Mel",
      atracao: "Praias e trilhas",
      informacoes: "A Ilha do Mel é um paraíso ecológico com praias desertas, trilhas e uma natureza exuberante. Um lugar perfeito para quem busca tranquilidade e contato com a natureza."
    },
    //Dados de Santa Catarina
    {
      estado: "Santa Catarina",
      cidade: "Florianópolis",
      atracao: "Praia de Jurerê Internacional",
      informacoes: "Conhecida por suas águas cristalinas e agitação, a Praia de Jurerê Internacional é um dos cartões postais de Florianópolis. Oferece diversas opções de bares, restaurantes e atividades aquáticas."
    },
    {
      estado: "Santa Catarina",
      cidade: "Balneário Camboriú",
      atracao: "Pontal Norte",
      informacoes: "O Pontal Norte é um dos pontos mais altos de Balneário Camboriú, oferecendo uma vista panorâmica da cidade e do mar. É ideal para quem busca momentos de tranquilidade e apreciar a natureza."
    },
    {
      estado: "Santa Catarina",
      cidade: "Bombinhas",
      atracao: "Litoral Norte",
      informacoes: "O Litoral Norte de Bombinhas é famoso por suas águas cristalinas e paisagens exuberantes. É um paraíso para os amantes do mergulho e do snorkeling."
    },
    {
      estado: "Santa Catarina",
      cidade: "Blumenau",
      atracao: "Oktoberfest",
      informacoes: "A Oktoberfest de Blumenau é uma das maiores festas de cerveja do mundo, celebrando a cultura alemã. A cidade se transforma em um grande palco de música, dança e gastronomia."
    },
    {
      estado: "Santa Catarina",
      cidade: "Garopaba",
      atracao: "Praia do Rosa",
      informacoes: "A Praia do Rosa é um dos destinos mais procurados pelos surfistas. Além das ondas perfeitas, a praia oferece trilhas, lagoas e uma atmosfera mais tranquila."
    },
    //Dados do Rio Grande do Sul
    {
      estado: "Rio Grande do Sul",
      cidade: "Gramado",
      atracao: "Lago Negro",
      informacoes: "Um dos cartões postais de Gramado, o Lago Negro é um lugar ideal para relaxar e apreciar a natureza. Possui um lindo paisagismo, trilhas para caminhadas e pedalinhos."
    },
    {
      estado: "Rio Grande do Sul",
      cidade: "Cambará do Sul",
      atracao: "Cânion Itaimbezinho",
      informacoes: "Um dos cânions mais impressionantes do Brasil, o Itaimbezinho oferece paisagens deslumbrantes e diversas trilhas para aventureiros."
    },
    {
      estado: "Rio Grande do Sul",
      cidade: "Torres",
      atracao: "Parque da Guarita",
      informacoes: "Localizado em Torres, o Parque da Guarita é um dos maiores parques urbanos do Brasil. Possui uma extensa área verde, trilhas, dunas e um farol histórico."
    },
    {
      estado: "Rio Grande do Sul",
      cidade: "Bento Gonçalves",
      atracao: "Vale dos Vinhedos",
      informacoes: "O Vale dos Vinhedos é uma região famosa por suas vinícolas, onde você pode degustar vinhos, conhecer o processo de produção e saborear a culinária local."
    },
    {
      estado: "Rio Grande do Sul",
      cidade: "Porto Alegre",
      atracao: "Usina do Gasômetro",
      informacoes: "Um dos ícones de Porto Alegre, a Usina do Gasômetro é um antigo prédio industrial que hoje abriga um centro cultural e oferece uma vista panorâmica da cidade."
    },
    //Dados de São Paulo
    {
      estado: "São Paulo",
      cidade: "São Paulo",
      atracao: "Avenida Paulista",
      informacoes: "Um dos ícones da cidade, a Avenida Paulista concentra diversos museus, lojas, restaurantes e prédios históricos. É um ponto de encontro para diversas manifestações culturais e artísticas."
    },
    {
      estado: "São Paulo",
      cidade: "Campos do Jordão",
      atracao: "Vila Capivari",
      informacoes: "Conhecida como a Suíça brasileira, Campos do Jordão é um destino famoso por suas paisagens montanhosas e clima ameno. A Vila Capivari é o centro turístico da cidade, com lojas, restaurantes e atrações para todas as idades."
    },
    {
      estado: "São Paulo",
      cidade: "Olímpia",
      atracao: "Thermas dos Laranjais",
      informacoes: "Um dos maiores parques aquáticos da América Latina, o Thermas dos Laranjais oferece diversas piscinas com águas quentes, toboáguas e outras atrações para toda a família."
    },
    {
      estado: "São Paulo",
      cidade: "Santos",
      atracao: "Orquidário Municipal de Santos",
      informacoes: "Um dos maiores orquidários da América Latina, o Orquidário Municipal de Santos abriga uma grande variedade de orquídeas, além de um belo jardim japonês."
    },
    {
      estado: "São Paulo",
      cidade: "São Paulo",
      atracao: "Parque Ibirapuera",
      informacoes: "Um dos maiores parques urbanos da América Latina, o Ibirapuera oferece diversas opções de lazer, como museus, monumentos, lagos, áreas verdes e ciclovias."
    },
    //Dados de Minas Gerais
    {
      estado: "Minas Gerais",
      cidade: "Ouro Preto",
      atracao: "Centro Histórico",
      informacoes: "Ouro Preto é um Patrimônio Mundial da UNESCO, conhecido por sua rica arquitetura colonial. O centro histórico preserva igrejas, museus e casarões do século XVIII, transportando os visitantes para o passado."
    },
    {
      estado: "Minas Gerais",
      cidade: "Tiradentes",
      atracao: "Rua do Direita",
      informacoes: "A Rua do Direita é um dos principais cartões postais de Tiradentes. Com suas casas coloridas e lojas de artesanato, a rua é um convite para um passeio tranquilo e agradável."
    },
    {
      estado: "Minas Gerais",
      cidade: "Diamantina",
      atracao: "Centro Histórico",
      informacoes: "Diamantina, outra cidade histórica de Minas Gerais, possui um rico patrimônio arquitetônico e cultural. O centro histórico abriga diversas igrejas, museus e casarões coloniais."
    },
    {
      estado: "Minas Gerais",
      cidade: "Mariana",
      atracao: "Basílica de Nossa Senhora da Conceição",
      informacoes: "A Basílica de Nossa Senhora da Conceição é um dos maiores monumentos religiosos de Minas Gerais. Sua arquitetura barroca é um marco da fé e da história da cidade."
    },
    {
      estado: "Minas Gerais",
      cidade: "São Tomé das Letras",
      atracao: "Pedra da Gávea",
      informacoes: "São Tomé das Letras é um destino místico, conhecido por suas paisagens exuberantes e formações rochosas. A Pedra da Gávea é um dos principais pontos turísticos, oferecendo uma vista panorâmica da cidade."
    },
    //Dados do Rio de Janeiro
    {
      estado: "Rio de Janeiro",
      cidade: "Rio de Janeiro",
      atracao: "Cristo Redentor",
      informacoes: "Uma das Sete Maravilhas do Mundo Moderno, o Cristo Redentor é um ícone mundial e oferece uma vista panorâmica da cidade. Um passeio imperdível para qualquer visitante."
    },
    {
      estado: "Rio de Janeiro",
      cidade: "Rio de Janeiro",
      atracao: "Pão de Açúcar",
      informacoes: "Outro cartão postal carioca, o Pão de Açúcar oferece um passeio de bondinho com vistas espetaculares da cidade, das praias e da baía de Guanabara."
    },
    {
      estado: "Rio de Janeiro",
      cidade: "Rio de Janeiro",
      atracao: "Copacabana",
      informacoes: "A praia de Copacabana é um dos símbolos do Rio de Janeiro. Com sua orla vibrante, é ideal para um passeio, um mergulho ou simplesmente para apreciar a vista."
    },
    {
      estado: "Rio de Janeiro",
      cidade: "Petrópolis",
      atracao: "Palácio de Cristal",
      informacoes: "Localizada na região serrana, Petrópolis é conhecida como a Cidade Imperial. O Palácio de Cristal é um dos principais pontos turísticos, um belo exemplo da arquitetura do século XIX."
    },
    {
      estado: "Rio de Janeiro",
      cidade: "Paraty",
      atracao: "Centro Histórico",
      informacoes: "Paraty é uma cidade histórica com ruas de pedras, casarões coloniais e um centro histórico preservado. É um destino ideal para quem busca tranquilidade e contato com a natureza."
    },
    // Dados do Espírito Santo
    {
      estado: "Espírito Santo",
      cidade: "Vitória",
      atracao: "Convento da Penha",
      informacoes: "Um dos principais pontos turísticos do estado, o Convento da Penha oferece uma vista panorâmica da cidade e da Baía de Vitória. Possui um rico acervo histórico e religioso."
    },
    {
      estado: "Espírito Santo",
      cidade: "Guarapari",
      atracao: "Praias de Guarapari",
      informacoes: "Conhecida por suas areias monazíticas, Guarapari oferece diversas praias com águas quentes e paisagens exuberantes. A Praia do Morro é uma das mais famosas."
    },
    {
      estado: "Espírito Santo",
      cidade: "Domingos Martins",
      atracao: "Parque Estadual da Pedra Azul",
      informacoes: "Um dos mais belos parques estaduais do Brasil, a Pedra Azul oferece trilhas, cachoeiras e paisagens montanhosas de tirar o fôlego."
    },
    {
      estado: "Espírito Santo",
      cidade: "Vila Velha",
      atracao: "Praia da Costa",
      informacoes: "A Praia da Costa é um dos principais destinos turísticos de Vila Velha, com uma orla moderna, diversos restaurantes e opções de lazer."
    },
    {
      estado: "Espírito Santo",
      cidade: "Marataízes",
      atracao: "Falésias de Marataízes",
      informacoes: "As falésias de Marataízes são um espetáculo da natureza, com suas formações rochosas e paisagens paradisíacas. Ideal para quem busca tranquilidade e contato com a natureza."
    },
    //Dados do Mato Grosso do Sul
    {
      estado: "Mato Grosso do Sul",
      cidade: "Bonito",
      atracao: "Gruta do Lago Azul",
      informacoes: "Considerada um dos cartões postais de Bonito, a Gruta do Lago Azul é famosa por suas águas cristalinas e formações rochosas únicas. Um dos principais destinos para mergulho e flutuação."
    },
    {
      estado: "Mato Grosso do Sul",
      cidade: "Bonito",
      atracao: "Rio da Prata",
      informacoes: "O Rio da Prata é conhecido por suas águas cristalinas e fauna diversificada. É um local perfeito para a prática de snorkeling e observação de peixes."
    },
    {
      estado: "Mato Grosso do Sul",
      cidade: "Corumbá",
      atracao: "Pantanal",
      informacoes: "Corumbá é a porta de entrada para o Pantanal, a maior planície alagada do mundo. É possível realizar diversos passeios para observar a fauna e flora local, como jacarés, capivaras e diversas aves."
    },
    {
      estado: "Mato Grosso do Sul",
      cidade: "Bodoquena",
      atracao: "Parque Nacional da Serra da Bodoquena",
      informacoes: "O parque abriga diversas cachoeiras, grutas e trilhas, sendo um paraíso para os amantes da natureza. A Cachoeira da Boca da Onça é um dos destaques."
    },
    {
      estado: "Mato Grosso do Sul",
      cidade: "Campo Grande",
      atracao: "Parque das Nações Indígenas",
      informacoes: "Localizado em Campo Grande, o parque é um espaço cultural e de lazer, com museus, áreas verdes e diversas atividades. É um ótimo lugar para conhecer a cultura indígena."
    },
    //Dados do Mato Grosso
    {
      estado: "Mato Grosso",
      cidade: "Cuiabá",
      atracao: "Parque das Águas Quentes",
      informacoes: "Localizado em Cuiabá, o parque oferece diversas piscinas de águas quentes naturais, ideais para relaxar e aproveitar a natureza."
    },
    {
      estado: "Mato Grosso",
      cidade: "Chapada dos Guimarães",
      atracao: "Parque Nacional da Chapada dos Guimarães",
      informacoes: "Um dos principais destinos turísticos do estado, o parque oferece diversas trilhas, cachoeiras e mirantes com vistas panorâmicas da chapada."
    },
    {
      estado: "Mato Grosso",
      cidade: "Nobres",
      atracao: "Aquário Encantado",
      informacoes: "O Aquário Encantado é um dos maiores aquários de água doce da América Latina, com diversas espécies de peixes e plantas aquáticas."
    },
    {
      estado: "Mato Grosso",
      cidade: "Cáceres",
      atracao: "Pantanal",
      informacoes: "Cáceres é uma das principais portas de entrada para o Pantanal mato-grossense, onde é possível realizar safáris fotográficos e observar a rica fauna e flora."
    },
    {
      estado: "Mato Grosso",
      cidade: "Vila Bela da Santíssima Trindade",
      atracao: "Centro Histórico",
      informacoes: "Vila Bela é uma das cidades mais antigas de Mato Grosso, com um rico patrimônio histórico e arquitetônico. O centro histórico preserva casarões coloniais e igrejas."
    },
    //Dados da Bahia
    {
      estado: "Bahia",
      cidade: "Salvador",
      atracao: "Pelourinho",
      informacoes: "O Pelourinho é um dos centros históricos mais importantes do Brasil, com construções coloniais, igrejas barrocas e uma rica vida cultural. É Patrimônio Mundial da UNESCO."
    },
    {
      estado: "Bahia",
      cidade: "Salvador",
      atracao: "Farol da Barra",
      informacoes: "Um dos cartões postais de Salvador, o Farol da Barra oferece uma vista panorâmica da cidade e da Baía de Todos os Santos. É um ponto de encontro para moradores e turistas."
    },
    {
      estado: "Bahia",
      cidade: "Chapada Diamantina",
      atracao: "Cachoeira da Fumaça",
      informacoes: "Uma das maiores cachoeiras do Brasil, a Cachoeira da Fumaça é um dos principais atrativos da Chapada Diamantina, oferecendo paisagens exuberantes e trilhas desafiadoras."
    },
    {
      estado: "Bahia",
      cidade: "Morro de São Paulo",
      atracao: "Praias",
      informacoes: "Morro de São Paulo é um arquipélago com diversas praias paradisíacas, ideais para quem busca sol, mar e tranquilidade. A Segunda Praia é uma das mais populares."
    },
    {
      estado: "Bahia",
      cidade: "Ilhéus",
      atracao: "Chocolate",
      informacoes: "Ilhéus é conhecida como a capital nacional do cacau. É possível visitar fazendas de cacau e conhecer o processo de produção do chocolate."
    },
    //Dados de Goiás
    {
      estado: "Goiás",
      cidade: "Pirenópolis",
      atracao: "Centro Histórico",
      informacoes: "Pirenópolis é uma cidade histórica com arquitetura colonial bem preservada, ruas de pedra e diversas igrejas. Um dos principais destinos para quem busca história e cultura em Goiás."
    },
    {
      estado: "Goiás",
      cidade: "Caldas Novas",
      atracao: "Águas Termais",
      informacoes: "Caldas Novas é famosa por suas águas termais e parques aquáticos, sendo um destino perfeito para quem busca relaxamento e diversão."
    },
    {
      estado: "Goiás",
      cidade: "Chapada dos Veadeiros",
      atracao: "Parque Nacional da Chapada dos Veadeiros",
      informacoes: "A Chapada dos Veadeiros é um dos destinos mais exuberantes do Brasil, com cachoeiras, trilhas, cânions e uma rica biodiversidade. Ideal para quem busca aventura e contato com a natureza."
    },
    {
      estado: "Goiás",
      cidade: "Goiânia",
      atracao: "Parque Vaca Brava",
      informacoes: "O Parque Vaca Brava é um dos principais parques de Goiânia, com um lago artificial, áreas verdes e diversas opções de lazer. Perfeito para um passeio em família."
    },
    {
      estado: "Goiás",
      cidade: "São Domingos",
      atracao: "Parque Estadual Terra Ronca",
      informacoes: "O parque abriga o maior conjunto de cavernas da América Latina, sendo um destino imperdível para os amantes da espeleologia."
    },
    //Dados de Tocantins
    {
      estado: "Tocantins",
      cidade: "Jalapão",
      atracao: "Fervedouros",
      informacoes: "Os fervedouros são uma das principais atrações do Jalapão. São nascentes de rios subterrâneos que formam piscinas naturais com água cristalina e muita diversão."
    },
    {
      estado: "Tocantins",
      cidade: "Jalapão",
      atracao: "Dunas",
      informacoes: "As dunas do Jalapão oferecem paisagens desérticas únicas, perfeitas para trilhas e para apreciar o pôr do sol. Uma experiência inesquecível."
    },
    {
      estado: "Tocantins",
      cidade: "Palmas",
      atracao: "Parque Cesamar",
      informacoes: "O Parque Cesamar é um dos principais parques de Palmas, com lago, áreas verdes e diversas opções de lazer. Ideal para um passeio em família."
    },
    {
      estado: "Tocantins",
      cidade: "Taquaruçu",
      atracao: "Cachoeira da Roncadeira",
      informacoes: "A Cachoeira da Roncadeira é uma das mais famosas do Tocantins, com uma queda d'água imponente e piscinas naturais para um refrescante mergulho."
    },
    {
      estado: "Tocantins",
      cidade: "Ponte Alta do Tocantins",
      atracao: "Serra do Lajeado",
      informacoes: "A Serra do Lajeado oferece paisagens montanhosas exuberantes, trilhas e cachoeiras. Um paraíso para os amantes da natureza."
    },
    //Dados de Sergipe
    {
      estado: "Sergipe",
      cidade: "Aracaju",
      atracao: "Orla de Atalaia",
      informacoes: "A Orla de Atalaia é um dos cartões postais de Aracaju, com uma extensa faixa de areia, coqueiros e diversas opções de lazer, como ciclovia, bares e restaurantes."
    },
    {
      estado: "Sergipe",
      cidade: "São Cristóvão",
      atracao: "Centro Histórico",
      informacoes: "São Cristóvão é uma cidade histórica com um rico patrimônio arquitetônico, com igrejas, casarões coloniais e museus. Um dos principais destinos para quem busca história e cultura em Sergipe."
    },
    {
      estado: "Sergipe",
      cidade: "Canindé de São Francisco",
      atracao: "Cânion do Xingó",
      informacoes: "O Cânion do Xingó é uma das maiores atrações naturais de Sergipe, com águas cristalinas, paredões rochosos e diversas atividades como mergulho e passeio de barco."
    },
    {
      estado: "Sergipe",
      cidade: "Estância",
      atracao: "Praia do Saco",
      informacoes: "A Praia do Saco é famosa por suas dunas e lagoas, sendo um destino perfeito para quem busca tranquilidade e contato com a natureza. É possível realizar passeios de buggy e conhecer a famosa Mangue Seco."
    },
    {
      estado: "Sergipe",
      cidade: "Aracaju",
      atracao: "Crôa do Goré",
      informacoes: "A Crôa do Goré é uma ilha fluvial com paisagens exuberantes, ideal para um dia de descanso e contato com a natureza. É possível realizar passeios de barco e trilhas ecológicas."
    },
    //Dados de Alagoas
    {
      estado: "Alagoas",
      cidade: "Maceió",
      atracao: "Praia de Pajuçara",
      informacoes: "A Praia de Pajuçara é um dos cartões postais de Maceió, com águas cristalinas, coqueiros e diversas opções de lazer. É ponto de partida para os passeios de jangada às piscinas naturais."
    },
    {
      estado: "Alagoas",
      cidade: "Maragogi",
      atracao: "Piscinas Naturais",
      informacoes: "As piscinas naturais de Maragogi são um verdadeiro paraíso, com águas calmas e transparentes, perfeitas para mergulho e snorkeling. Um passeio imperdível."
    },
    {
      estado: "Alagoas",
      cidade: "São Miguel dos Milagres",
      atracao: "Praias",
      informacoes: "São Miguel dos Milagres é um vilarejo charmoso com diversas praias paradisíacas, como a Praia do Gunga, famosa por suas falésias e coqueirais."
    },
    {
      estado: "Alagoas",
      cidade: "Maceió",
      atracao: "Centro Histórico",
      informacoes: "O Centro Histórico de Maceió abriga construções coloniais, museus e igrejas, contando um pouco da história da cidade. Um passeio cultural imperdível."
    },
    {
      estado: "Alagoas",
      cidade: "Paripueira",
      atracao: "Foz do Rio São Francisco",
      informacoes: "A foz do Rio São Francisco é um dos maiores rios da América do Sul e oferece paisagens exuberantes, com manguezais, dunas e praias. Um passeio de barco é uma experiência única."
    },
    //Dados de Pernambuco
    {
      estado: "Pernambuco",
      cidade: "Recife",
      atracao: "Recife Antigo",
      informacoes: "O Recife Antigo é um dos centros históricos mais importantes do Brasil, com construções coloniais, igrejas barrocas e uma rica vida cultural. É Patrimônio Mundial da UNESCO."
    },
    {
      estado: "Pernambuco",
      cidade: "Olinda",
      atracao: "Centro Histórico",
      informacoes: "Olinda é uma cidade histórica com um centro histórico preservado, com igrejas, conventos e casas coloniais. É Patrimônio Mundial da UNESCO e famosa por seu Carnaval."
    },
    {
      estado: "Pernambuco",
      cidade: "Porto de Galinhas",
      atracao: "Piscinas Naturais",
      informacoes: "Porto de Galinhas é famosa por suas piscinas naturais, formadas por recifes de corais, que proporcionam um banho tranquilo e contato com a natureza."
    },
    {
      estado: "Pernambuco",
      cidade: "Fernando de Noronha",
      atracao: "Praias",
      informacoes: "Fernando de Noronha é um arquipélago com praias paradisíacas, como a Baía do Sancho, considerada uma das mais bonitas do mundo. É um destino ideal para mergulho e ecoturismo."
    },
    {
      estado: "Pernambuco",
      cidade: "Caruaru",
      atracao: "Feira de Caruaru",
      informacoes: "A Feira de Caruaru é uma das maiores feiras populares do Brasil, com artesanato, comidas típicas e muita animação. É um ótimo lugar para conhecer a cultura local."
    },
    //Dados da Paraíba
    {
      estado: "Paraíba",
      cidade: "João Pessoa",
      atracao: "Centro Histórico",
      informacoes: "O Centro Histórico de João Pessoa é um dos mais importantes do Nordeste, com construções coloniais, igrejas barrocas e museus. Um passeio pela história da Paraíba."
    },
    {
      estado: "Paraíba",
      cidade: "João Pessoa",
      atracao: "Farol do Cabo Branco",
      informacoes: "O Farol do Cabo Branco é o ponto mais oriental das Américas e oferece uma vista panorâmica da cidade. Um lugar perfeito para apreciar o pôr do sol."
    },
    {
      estado: "Paraíba",
      cidade: "Conde",
      atracao: "Praia do Coqueirinho",
      informacoes: "A Praia do Coqueirinho é uma das mais belas da Paraíba, com piscinas naturais, falésias e coqueirais. Um paraíso para quem busca tranquilidade."
    },
    {
      estado: "Paraíba",
      cidade: "Cabaceiras",
      atracao: "Lajedo do Pai Mateus",
      informacoes: "O Lajedo do Pai Mateus é uma formação rochosa com piscinas naturais esculpidas pela natureza. Um lugar mágico para explorar e se conectar com a natureza."
    },
    {
      estado: "Paraíba",
      cidade: "Campina Grande",
      atracao: "Parque do Povo",
      informacoes: "O Parque do Povo é um dos maiores parques da América Latina e abriga o maior Maior São João do mundo. Um lugar para se divertir e conhecer a cultura local."
    },
    //Dados do Rio Grande do Norte
    {
      estado: "Rio Grande do Norte",
      cidade: "Natal",
      atracao: "Praia de Ponta Negra",
      informacoes: "A Praia de Ponta Negra é um dos cartões postais de Natal, com uma extensa faixa de areia, coqueiros e o famoso Morro do Careca ao fundo. Um lugar perfeito para relaxar e praticar esportes aquáticos."
    },
    {
      estado: "Rio Grande do Norte",
      cidade: "Pipa",
      atracao: "Praias e Falésias",
      informacoes: "Pipa é um destino paradisíaco, com praias de águas cristalinas, falésias coloridas e uma vida noturna agitada. Um lugar ideal para surfistas e amantes da natureza."
    },
    {
      estado: "Rio Grande do Norte",
      cidade: "Genipabu",
      atracao: "Dunas",
      informacoes: "As dunas de Genipabu são um dos principais atrativos do Rio Grande do Norte. É possível realizar passeios de buggy, sandboard e apreciar a paisagem desértica."
    },
    {
      estado: "Rio Grande do Norte",
      cidade: "Maracajaú",
      atracao: "Parrachos",
      informacoes: "Os parrachos de Maracajaú são piscinas naturais formadas por recifes de corais. Um lugar ideal para mergulhar e observar a vida marinha."
    },
    {
      estado: "Rio Grande do Norte",
      cidade: "Natal",
      atracao: "Forte dos Reis Magos",
      informacoes: "O Forte dos Reis Magos é uma construção histórica do século XVI, com vista para o mar. Um lugar para conhecer um pouco da história da cidade."
    },
    //Dados do Ceará
    {
      estado: "Ceará",
      cidade: "Fortaleza",
      atracao: "Praia do Futuro",
      informacoes: "A Praia do Futuro é um dos cartões postais de Fortaleza, com uma extensa faixa de areia, coqueiros e diversas opções de lazer, como jangadas e bares."
    },
    {
      estado: "Ceará",
      cidade: "Jericoacoara",
      atracao: "Pedra Furada",
      informacoes: "A Pedra Furada é um dos ícones de Jericoacoara, um arco natural de pedra com vista para o mar. Um lugar perfeito para apreciar o pôr do sol."
    },
    {
      estado: "Ceará",
      cidade: "Canoa Quebrada",
      atracao: "Dunas e Falésias",
      informacoes: "Canoa Quebrada é famosa por suas dunas coloridas e falésias esculpidas pelo vento. É um lugar ideal para praticar esportes radicais como sandboard e buggy."
    },
    {
      estado: "Ceará",
      cidade: "Cumbuco",
      atracao: "Lagoa do Cauípe",
      informacoes: "A Lagoa do Cauípe é um paraíso ecológico, com águas cristalinas e dunas. Um lugar perfeito para relaxar e praticar kitesurf."
    },
    {
      estado: "Ceará",
      cidade: "Fortaleza",
      atracao: "Beach Park",
      informacoes: "O Beach Park é um dos maiores parques aquáticos da América Latina, com diversas atrações para todas as idades. Diversão garantida para toda a família."
    },
    //Dados do Piauí
    {
      estado: "Piauí",
      cidade: "São Raimundo Nonato",
      atracao: "Parque Nacional da Serra da Capivara",
      informacoes: "O Parque Nacional da Serra da Capivara é um dos maiores sítios arqueológicos a céu aberto do mundo, com milhares de pinturas rupestres. Um tesouro da pré-história brasileira."
    },
    {
      estado: "Piauí",
      cidade: "Parnaíba",
      atracao: "Delta do Parnaíba",
      informacoes: "O Delta do Parnaíba é um dos maiores deltas do mundo, com paisagens exuberantes, manguezais, ilhas e dunas. Um paraíso para os amantes da natureza."
    },
    {
      estado: "Piauí",
      cidade: "Cajueiro da Praia",
      atracao: "Barra Grande",
      informacoes: "Barra Grande é um paraíso para os amantes do kitesurf e windsurf, com ventos fortes e águas mornas. Um destino ideal para esportes aquáticos."
    },
    {
      estado: "Piauí",
      cidade: "Gilbués",
      atracao: "Parque Nacional Serra das Confusões",
      informacoes: "O Parque Nacional Serra das Confusões é um dos maiores parques nacionais do Brasil, com paisagens exuberantes, cânions e cavernas. Um lugar para se conectar com a natureza."
    },
    {
      estado: "Piauí",
      cidade: "Teresina",
      atracao: "Ponte Estaiada",
      informacoes: "A Ponte Estaiada é um dos cartões postais de Teresina, com uma vista panorâmica da cidade. Um local ideal para fotos e para apreciar a arquitetura moderna."
    },
    //Dados do Maranhão
    {
      estado: "Maranhão",
      cidade: "São Luís",
      atracao: "Centro Histórico",
      informacoes: "O Centro Histórico de São Luís é um patrimônio mundial da UNESCO, com casarões coloniais, igrejas barrocas e uma rica cultura. Um mergulho na história do Maranhão."
    },
    {
      estado: "Maranhão",
      cidade: "Barreirinhas",
      atracao: "Parque Nacional dos Lençóis Maranhenses",
      informacoes: "Os Lençóis Maranhenses são um dos maiores atrativos do Brasil, com dunas de areia branca e lagoas cristalinas que se formam na época das chuvas. Uma paisagem única."
    },
    {
      estado: "Maranhão",
      cidade: "Alcântara",
      atracao: "Centro Histórico e Base de Lançamento de Foguetes",
      informacoes: "Alcântara possui um centro histórico preservado com construções coloniais e uma base de lançamento de foguetes, um dos maiores do mundo. Uma mistura de história e tecnologia."
    },
    {
      estado: "Maranhão",
      cidade: "Delta do Parnaíba",
      atracao: "Manguezais e Ilhas",
      informacoes: "O Delta do Parnaíba é um dos maiores deltas do mundo, com uma rica biodiversidade, manguezais, ilhas e paisagens exuberantes. Um paraíso para os amantes da natureza."
    },
    {
      estado: "Maranhão",
      cidade: "Chapada das Mesas",
      atracao: "Cachoeiras e Cânions",
      informacoes: "A Chapada das Mesas é um paraíso para os aventureiros, com cachoeiras, cânions e trilhas. Um lugar perfeito para quem busca contato com a natureza."
    },
    //Dados do Pará
    {
      estado: "Pará",
      cidade: "Belém",
      atracao: "Mercado Ver-o-Peso",
      informacoes: "O Mercado Ver-o-Peso é um dos maiores mercados da América Latina, com uma variedade de produtos regionais, temperos, frutas e peixes frescos. Um verdadeiro caldeirão cultural."
    },
    {
      estado: "Pará",
      cidade: "Alter do Chão",
      atracao: "Praia de Alter do Chão",
      informacoes: "Considerada o Caribe Brasileiro, a Praia de Alter do Chão é famosa por suas águas cristalinas e areia branca. Um paraíso para quem busca relaxar e aproveitar a natureza."
    },
    {
      estado: "Pará",
      cidade: "Santarém",
      atracao: "Encontro das Águas",
      informacoes: "O encontro dos rios Amazonas e Tapajós é um espetáculo natural único, com a formação de um rio de duas cores. Uma experiência inesquecível."
    },
    {
      estado: "Pará",
      cidade: "Marabá",
      atracao: "Serra Pelada",
      informacoes: "A Serra Pelada é um dos maiores garimpos a céu aberto do mundo, com uma história rica e complexa. Um lugar para quem busca conhecer a história do ouro no Brasil."
    },
    {
      estado: "Pará",
      cidade: "Belém",
      atracao: "Estação das Docas",
      informacoes: "A Estação das Docas é um complexo cultural e de lazer, com restaurantes, bares, lojas e um píer com vista para o rio Guamá. Um lugar perfeito para curtir a noite."
    },
    //Dados de Rondônia
    {
      estado: "Rondônia",
      cidade: "Porto Velho",
      atracao: "Estrada de Ferro Madeira-Mamoré",
      informacoes: "A Estrada de Ferro Madeira-Mamoré é um marco histórico da construção civil brasileira, com uma história fascinante e paisagens exuberantes. Um passeio de trem por essa ferrovia é uma experiência única."
    },
    {
      estado: "Rondônia",
      cidade: "Porto Velho",
      atracao: "As Três Caixas d'Água",
      informacoes: "Um dos cartões postais de Porto Velho, as Três Caixas d'Água oferecem uma vista panorâmica da cidade e são um símbolo da arquitetura local."
    },
    {
      estado: "Rondônia",
      cidade: "Ji-Paraná",
      atracao: "Parque dos Pioneiros",
      informacoes: "O Parque dos Pioneiros é um espaço verde ideal para quem busca contato com a natureza, com trilhas, áreas de lazer e um lago artificial."
    },
    {
      estado: "Rondônia",
      cidade: "Guajará-Mirim",
      atracao: "Rio Guaporé",
      informacoes: "O Rio Guaporé é um dos mais belos rios da região, com águas cristalinas e uma rica biodiversidade. Ideal para atividades aquáticas e contato com a natureza."
    },
    {
      estado: "Rondônia",
      cidade: "Cacoal",
      atracao: "Pedrona da Linha 10",
      informacoes: "A Pedrona da Linha 10 é um ponto turístico bastante popular em Cacoal, oferecendo uma vista panorâmica da cidade e da região."
    },
    //Dados do Acre
    {
      estado: "Acre",
      cidade: "Rio Branco",
      atracao: "Parque Nacional da Serra do Divisor",
      informacoes: "O Parque Nacional da Serra do Divisor é um paraíso da biodiversidade, com montanhas, cachoeiras e uma rica fauna e flora. Um destino perfeito para os amantes da natureza e ecoturismo."
    },
    {
      estado: "Acre",
      cidade: "Xapuri",
      atracao: "Casa de Chico Mendes",
      informacoes: "A casa onde Chico Mendes viveu é um memorial importante para entender a luta pela preservação da Amazônia e a história do sindicalista."
    },
    {
      estado: "Acre",
      cidade: "Rio Branco",
      atracao: "Palácio Rio Branco",
      informacoes: "O Palácio Rio Branco é um marco arquitetônico da cidade, com um estilo neoclássico e um jardim exuberante. Atualmente, abriga o Museu da Borracha."
    },
    {
      estado: "Acre",
      cidade: "Cruzeiro do Sul",
      atracao: "Catedral Nossa Senhora da Glória",
      informacoes: "A Catedral Nossa Senhora da Glória é um dos principais monumentos religiosos do Acre, com uma arquitetura imponente e um rico acervo artístico."
    },
    {
      estado: "Acre",
      cidade: "Rio Branco",
      atracao: "Novo Mercado Velho",
      informacoes: "O Novo Mercado Velho é um centro de compras e gastronomia, onde você pode encontrar produtos típicos da região, como frutas exóticas e artesanato."
    },
    //Dados do Amazonas
    {
      estado: "Amazonas",
      cidade: "Manaus",
      atracao: "Teatro Amazonas",
      informacoes: "O Teatro Amazonas é um dos símbolos da cidade de Manaus e um dos mais belos teatros do mundo, com arquitetura inspirada na Europa. Um marco da época do ciclo da borracha."
    },
    {
      estado: "Amazonas",
      cidade: "Manaus",
      atracao: "Encontro das Águas",
      informacoes: "O encontro dos rios Negro e Solimões é um fenômeno natural único, onde as águas de cores diferentes se misturam sem se homogeneizar."
    },
    {
      estado: "Amazonas",
      cidade: "Presidente Figueiredo",
      atracao: "Cachoeiras",
      informacoes: "Presidente Figueiredo é conhecida como a 'Suíça Amazônica' por suas diversas cachoeiras, como a Cachoeira de Iracema e a Cachoeira do Urubuí."
    },
    {
      estado: "Amazonas",
      cidade: "Novo Airão",
      atracao: "Arquipélago de Anavilhanas",
      informacoes: "O Arquipélago de Anavilhanas é um dos maiores arquipélagos fluviais do mundo, com mais de 400 ilhas. Um paraíso para os amantes da natureza."
    },
    {
      estado: "Amazonas",
      cidade: "Manaus",
      atracao: "Bosque da Ciência",
      informacoes: "O Bosque da Ciência é um espaço dedicado à educação ambiental, com trilhas, viveiros e um aquário. Um lugar perfeito para aprender sobre a biodiversidade amazônica."
    },
    //Dados de Roraima
    {
      estado: "Roraima",
      cidade: "Boa Vista",
      atracao: "Monte Roraima",
      informacoes: "O Monte Roraima é um dos picos mais altos da América do Sul e uma das montanhas mais antigas do mundo. Sua forma tabular e a rica biodiversidade o tornam um destino imperdível para os amantes da natureza e da aventura."
    },
    {
      estado: "Roraima",
      cidade: "Boa Vista",
      atracao: "Lago do Robertinho",
      informacoes: "O Lago do Robertinho é um dos principais pontos turísticos de Boa Vista, com águas cristalinas e uma beleza natural exuberante. Ideal para um dia de lazer e relaxamento."
    },
    {
      estado: "Roraima",
      cidade: "Boa Vista",
      atracao: "Parque Nacional do Monte Roraima",
      informacoes: "O Parque Nacional do Monte Roraima abriga uma rica biodiversidade e paisagens únicas. É um paraíso para os amantes do ecoturismo e da aventura."
    },
    {
      estado: "Roraima",
      cidade: "Boa Vista",
      atracao: "Orla Taumanan",
      informacoes: "A Orla Taumanan é um dos principais pontos de encontro dos moradores e turistas de Boa Vista, com uma vista privilegiada do Rio Branco e diversas opções de lazer."
    },
    {
      estado: "Roraima",
      cidade: "Boa Vista",
      atracao: "Serra do Tepequém",
      informacoes: "A Serra do Tepequém é um dos pontos mais altos do estado, com paisagens exuberantes e trilhas para quem busca aventura e contato com a natureza."
    },
    //Dados do Amapá
    {
      estado: "Amapá",
      cidade: "Macapá",
      atracao: "Fortaleza de São José de Macapá",
      informacoes: "Construída no século XVIII, a Fortaleza de São José é um importante marco histórico e um dos principais pontos turísticos do Amapá. Oferece uma vista panorâmica da cidade e do rio Amazonas."
    },
    {
      estado: "Amapá",
      cidade: "Macapá",
      atracao: "Marco Zero",
      informacoes: "O Marco Zero marca a linha do Equador e é um ponto de referência importante. É um local ideal para fotos e para entender a localização geográfica do estado."
    },
    {
      estado: "Amapá",
      cidade: "Oiapoque",
      atracao: "Foz do Rio Oiapoque",
      informacoes: "A foz do Rio Oiapoque marca a fronteira com a Guiana Francesa e oferece paisagens exuberantes. É um ponto de encontro de culturas e um ótimo lugar para observar a natureza."
    },
    {
      estado: "Amapá",
      cidade: "Macapá",
      atracao: "Museu Sacaca",
      informacoes: "O Museu Sacaca abriga um rico acervo sobre a história e a cultura do Amapá, com destaque para a arte indígena e a produção artesanal."
    },
    {
      estado: "Amapá",
      cidade: "Macapá",
      atracao: "Praia de Fazendinha",
      informacoes: "A Praia de Fazendinha é uma das praias mais populares de Macapá, com águas calmas e um ambiente tranquilo. Ideal para relaxar e aproveitar o sol."
    },
    //Dados do Distrito Federal
    {
      estado: "Distrito Federal",
      cidade: "Brasília",
      atracao: "Praça dos Três Poderes",
      informacoes: "Coração político do Brasil, a Praça dos Três Poderes concentra o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal, símbolos da democracia brasileira."
    },
    {
      estado: "Distrito Federal",
      cidade: "Brasília",
      atracao: "Catedral Metropolitana",
      informacoes: "Uma obra arquitetônica única, a Catedral Metropolitana de Brasília impressiona por sua estrutura hiperbólica e vitrais coloridos."
    },
    {
      estado: "Distrito Federal",
      cidade: "Brasília",
      atracao: "Lago Paranoá",
      informacoes: "Um dos maiores lagos artificiais da América Latina, o Lago Paranoá oferece diversas opções de lazer, como passeios de barco, pesca e esportes náuticos."
    },
    {
      estado: "Distrito Federal",
      cidade: "Brasília",
      atracao: "Memorial JK",
      informacoes: "Homenagem ao presidente Juscelino Kubitschek, o Memorial JK conta a história da construção de Brasília e abriga um museu e um jardim. "
    },
    {
      estado: "Distrito Federal",
      cidade: "Brasília",
      atracao: "Parque Nacional de Brasília",
      informacoes: "Uma área de preservação ambiental que oferece trilhas, cachoeiras e a oportunidade de entrar em contato com a natureza."
    }
  ];