/* ================================

   📚 BANCO DE PERGUNTAS

================================ */

const questions = [

  /* ================= SAÚDE ================= */

{ c:"Saúde", q:"Qual vitamina é produzida com exposição ao sol?", a:["Vitamina A","Vitamina B","Vitamina C","Vitamina D"], r:3 },

{ c:"Saúde", q:"Qual órgão bombeia o sangue para o corpo?", a:["Pulmão","Coração","Rim","Fígado"], r:1 },

{ c:"Saúde", q:"Qual nutriente é essencial para a construção muscular?", a:["Proteína","Carboidrato","Gordura","Vitamina C"], r:0 },

{ c:"Saúde", q:"Beber água diariamente ajuda principalmente em quê?", a:["Digestão","Memória","Visão","Audição"], r:0 },

{ c:"Saúde", q:"O que ajuda a prevenir cáries?", a:["Vitamina C","Flúor","Ferro","Vitamina A"], r:1 },

{ c:"Saúde", q:"Qual é a principal função dos glóbulos vermelhos?", a:["Combater vírus","Transportar oxigênio","Filtrar sangue","Produzir insulina"], r:1 },

{ c:"Saúde", q:"Qual órgão filtra resíduos do sangue?", a:["Fígado","Rim","Baço","Pâncreas"], r:1 },

{ c:"Saúde", q:"O que aumenta o risco de hipertensão?", a:["Exercício","Sal em excesso","Dormir bem","Hidratação"], r:1 },

{ c:"Saúde", q:"Qual vitamina é importante para a visão?", a:["Vitamina A","Vitamina B","Vitamina C","Vitamina D"], r:0 },

{ c:"Saúde", q:"Qual mineral fortalece ossos e dentes?", a:["Cálcio","Potássio","Ferro","Magnésio"], r:0 },

{ c:"Saúde", q:"O que é hipertensão arterial?", a:["Pressão baixa","Pressão alta","Batimento irregular","Colesterol alto"], r:1 },

{ c:"Saúde", q:"Qual hábito previne doenças cardíacas?", a:["Fumar","Praticar exercícios","Comer muito sal","Dormir pouco"], r:1 },

{ c:"Saúde", q:"O que é diabetes?", a:["Excesso de açúcar no sangue","Deficiência de vitamina D","Falta de água no corpo","Infecção viral"], r:0 },

{ c:"Saúde", q:"Qual alimento é rico em ferro?", a:["Espinafre","Maçã","Arroz branco","Batata"], r:0 },

{ c:"Saúde", q:"Qual é a função da insulina?", a:["Regular glicose no sangue","Produzir energia","Transportar oxigênio","Fortalecer ossos"], r:0 },

{ c:"Saúde", q:"Qual doença é causada pelo vírus HIV?", a:["Gripe","AIDS","Diabetes","Tuberculose"], r:1 },

{ c:"Saúde", q:"O que caracteriza uma alimentação balanceada?", a:["Somente proteínas","Variedade de nutrientes","Apenas frutas","Apenas carboidratos"], r:1 },

{ c:"Saúde", q:"Qual é a principal causa de obesidade?", a:["Exercício excessivo","Alimentação desequilibrada","Sono de qualidade","Hidratação"], r:1 },

{ c:"Saúde", q:"Qual exame verifica a saúde do coração?", a:["Raio-X","Eletrocardiograma","Tomografia","Endoscopia"], r:1 },

{ c:"Saúde", q:"Qual hábito melhora o sistema imunológico?", a:["Fumar","Dormir bem","Sedentarismo","Comer fast-food"], r:1 },
  
  /* ================= EDUCAÇÃO ================= */

{ c:"Educação", q:"Quem escreveu 'Pedagogia do Oprimido'?", a:["Piaget","Paulo Freire","Vygotsky","Sócrates"], r:1 },

{ c:"Educação", q:"O que significa EAD?", a:["Ensino a Distância","Educação Avançada","Estudo Digital","Ensino Direto"], r:0 },

{ c:"Educação", q:"Qual é o primeiro nível da educação formal?", a:["Ensino Médio","Ensino Fundamental","Educação Infantil","Ensino Superior"], r:2 },

{ c:"Educação", q:"O que é alfabetização?", a:["Ensinar leitura e escrita","Ensinar matemática","Ensinar ciência","Ensinar música"], r:0 },

{ c:"Educação", q:"Quem foi Jean Piaget?", a:["Filósofo","Psicólogo","Historiador","Professor de matemática"], r:1 },

{ c:"Educação", q:"O que é metodologia ativa?", a:["Ensino passivo","Aprendizagem centrada no aluno","Aulas expositivas","Estudo em casa"], r:1 },

{ c:"Educação", q:"Qual é o objetivo da educação inclusiva?", a:["Separar alunos por nível","Garantir acesso a todos","Focar apenas nos melhores","Reduzir a carga horária"], r:1 },

{ c:"Educação", q:"O que é avaliação formativa?", a:["Avaliação contínua para aprendizado","Prova final","Exame único","Somente nota"], r:0 },

{ c:"Educação", q:"Quem desenvolveu a Teoria Sociocultural?", a:["Vygotsky","Freire","Montessori","Piaget"], r:0 },

{ c:"Educação", q:"Qual é a principal função da educação infantil?", a:["Ensinar cálculo avançado","Desenvolver habilidades básicas e sociais","Ensinar literatura clássica","Treinar esportes"], r:1 },

{ c:"Educação", q:"O que é aprendizagem baseada em projetos?", a:["Estudo teórico","Aprender resolvendo problemas reais","Revisão de provas","Aulas online"], r:1 },

{ c:"Educação", q:"Qual é a lei que regula a educação no Brasil?", a:["Lei de Diretrizes e Bases","Código Civil","Constituição Federal","Lei do Trabalho"], r:0 },

{ c:"Educação", q:"O que é ensino híbrido?", a:["Apenas online","Combinação de presencial e online","Apenas presencial","Ensino em grupos"], r:1 },

{ c:"Educação", q:"O que significa BNCC?", a:["Base Nacional Comum Curricular","Base Nacional de Ciências","Boletim Nacional de Cultura","Banco Nacional de Conhecimento"], r:0 },

{ c:"Educação", q:"Qual filósofo defendeu o empirismo na educação?", a:["Locke","Kant","Freire","Montessori"], r:0 },

{ c:"Educação", q:"O que é didática?", a:["Arte de ensinar","Prática esportiva","Ensino de música","Avaliação escolar"], r:0 },

{ c:"Educação", q:"O que caracteriza o ensino personalizado?", a:["Todos recebem o mesmo conteúdo","Adaptação do ensino às necessidades do aluno","Somente provas","Aulas padronizadas"], r:1 },

{ c:"Educação", q:"O que é educação a distância?", a:["Estudo remoto usando tecnologia","Aulas presenciais","Exames online apenas","Treinamento de professores"], r:0 },

{ c:"Educação", q:"Quem foi Maria Montessori?", a:["Educadora italiana","Filósofa francesa","Cientista americana","Política brasileira"], r:0 },

{ c:"Educação", q:"Qual é o principal objetivo da educação básica?", a:["Formação integral do indivíduo","Apenas aprender matemática","Preparação para concursos","Ensino técnico"], r:0 },

 /* ================= HISTÓRIA ================= */

{ c:"História", q:"Em que ano terminou a Segunda Guerra Mundial?", a:["1943","1944","1945","1946"], r:2 },

{ c:"História", q:"Quem proclamou a independência do Brasil?", a:["Dom Pedro I","Dom Pedro II","Tiradentes","Getúlio Vargas"], r:0 },

{ c:"História", q:"Em que ano ocorreu a Revolução Francesa?", a:["1789","1776","1804","1812"], r:0 },

{ c:"História", q:"Quem foi Tiradentes?", a:["Líder da Inconfidência Mineira","Imperador","Explorador","General"], r:0 },

{ c:"História", q:"Em que ano caiu o Muro de Berlim?", a:["1987","1989","1991","1993"], r:1 },

{ c:"História", q:"Quem foi o primeiro presidente do Brasil?", a:["Deodoro da Fonseca","Getúlio Vargas","Juscelino Kubitschek","Washington Luís"], r:0 },

{ c:"História", q:"O que marcou o fim do período medieval?", a:["Descobrimentos marítimos","Revolução Industrial","Segunda Guerra Mundial","Revolução Francesa"], r:0 },

{ c:"História", q:"Quem foi Napoleão Bonaparte?", a:["Imperador da França","Rei da Espanha","Presidente dos EUA","General do Egito"], r:0 },

{ c:"História", q:"Qual era o objetivo das Cruzadas?", a:["Expandir comércio","Recuperar a Terra Santa","Explorar o Brasil","Fundar universidades"], r:1 },

{ c:"História", q:"Quando ocorreu a Proclamação da República no Brasil?", a:["1889","1822","1808","1891"], r:0 },

{ c:"História", q:"Quem foi Cleopatra?", a:["Rainha do Egito","Imperatriz da China","Rei da França","Filósofa grega"], r:0 },

{ c:"História", q:"O que foi a Guerra Fria?", a:["Conflito ideológico entre EUA e URSS","Guerra civil na França","Expedição marítima portuguesa","Revolta camponesa"], r:0 },

{ c:"História", q:"Quem assinou a independência dos EUA?", a:["Thomas Jefferson","George Washington","Abraham Lincoln","Benjamin Franklin"], r:0 },

{ c:"História", q:"Quando ocorreu a Revolução Russa?", a:["1917","1905","1922","1939"], r:0 },

{ c:"História", q:"Quem foi Alexandre, o Grande?", a:["Conquistador da Macedônia","Filósofo grego","Imperador romano","Rei do Egito"], r:0 },

{ c:"História", q:"O que foi a Inconfidência Mineira?", a:["Movimento de independência no Brasil colonial","Guerra civil na Europa","Revolução industrial","Descobrimento da América"], r:0 },

{ c:"História", q:"Quem foi Carlos Magno?", a:["Rei dos Francos","Imperador do Egito","Faraó","General romano"], r:0 },

{ c:"História", q:"Quando começou a Revolução Industrial?", a:["Século XVIII","Século XVII","Século XIX","Século XVI"], r:0 },

{ c:"História", q:"Quem foi Simón Bolívar?", a:["Libertador da América do Sul","Presidente do México","Imperador do Japão","Filósofo francês"], r:0 },

{ c:"História", q:"Qual era a principal função do Coliseu romano?", a:["Espetáculos e lutas de gladiadores","Escola","Mercado","Palácio real"], r:0 },
  
 /* ================= TECNOLOGIA ================= */

{ c:"Tecnologia", q:"O que significa HTML?", a:["HyperText Markup Language","HighText Machine Language","HyperLink Tool","Home Tool"], r:0 },

{ c:"Tecnologia", q:"Qual empresa desenvolveu o Android?", a:["Apple","Google","Microsoft","IBM"], r:1 },

{ c:"Tecnologia", q:"Qual linguagem é usada para estilizar páginas web?", a:["HTML","CSS","Python","Java"], r:1 },

{ c:"Tecnologia", q:"O que significa CPU?", a:["Central Processing Unit","Computer Power Unit","Central Performance Unit","Core Utility"], r:0 },

{ c:"Tecnologia", q:"Qual linguagem torna páginas web interativas?", a:["HTML","CSS","JavaScript","PHP"], r:2 },

{ c:"Tecnologia", q:"O que é um algoritmo?", a:["Sequência de instruções","Hardware","Programa de computador","Banco de dados"], r:0 },

{ c:"Tecnologia", q:"O que significa URL?", a:["Uniform Resource Locator","Universal Reference Link","User Resource Link","Unique Resource Locator"], r:0 },

{ c:"Tecnologia", q:"Qual é o sistema operacional da Apple?", a:["Android","iOS","Windows","Linux"], r:1 },

{ c:"Tecnologia", q:"O que é cloud computing?", a:["Computação na nuvem","Software offline","Hardware físico","Rede social"], r:0 },

{ c:"Tecnologia", q:"Qual empresa criou o Windows?", a:["Apple","Google","Microsoft","IBM"], r:2 },

{ c:"Tecnologia", q:"O que é inteligência artificial?", a:["Programas que simulam inteligência humana","Máquinas físicas","Conexão à internet","Redes sociais"], r:0 },

{ c:"Tecnologia", q:"O que é um banco de dados?", a:["Coleção organizada de informações","Computador portátil","Programa de edição de imagens","Linguagem de programação"], r:0 },

{ c:"Tecnologia", q:"O que significa Wi-Fi?", a:["Wireless Fidelity","Wide Fidelity","Wireless File","Wide File"], r:0 },

{ c:"Tecnologia", q:"Qual linguagem é usada para criar aplicativos Android?", a:["Swift","Kotlin","C++","Ruby"], r:1 },

{ c:"Tecnologia", q:"O que é um firewall?", a:["Sistema de segurança de rede","Computador pessoal","Programa de desenho","Servidor de e-mail"], r:0 },

{ c:"Tecnologia", q:"O que é open source?", a:["Código aberto para uso e modificação","Software pago","Hardware especializado","Aplicativo móvel"], r:0 },

{ c:"Tecnologia", q:"O que é IoT (Internet das Coisas)?", a:["Objetos conectados à internet","Programa de computador","Rede social","Servidor web"], r:0 },

{ c:"Tecnologia", q:"Qual é o principal objetivo da criptografia?", a:["Proteger informações","Criar vírus","Aumentar velocidade da internet","Armazenar arquivos"], r:0 },

{ c:"Tecnologia", q:"O que é realidade aumentada?", a:["Sobreposição digital no mundo real","Jogo online","Software de escritório","Computação em nuvem"], r:0 },

{ c:"Tecnologia", q:"O que é Big Data?", a:["Grandes volumes de dados","Computador gigante","Software de edição","Rede social"], r:0 },
  
/* ================= CIÊNCIA ================= */

{ c:"Ciência", q:"Qual planeta é conhecido como planeta vermelho?", a:["Vênus","Marte","Júpiter","Saturno"], r:1 },

{ c:"Ciência", q:"Qual é a unidade básica da vida?", a:["Célula","Molécula","Átomo","Órgão"], r:0 },

{ c:"Ciência", q:"Quem propôs a Teoria da Relatividade?", a:["Newton","Einstein","Galileu","Darwin"], r:1 },

{ c:"Ciência", q:"O que é fotossíntese?", a:["Processo das plantas","Respiração","Digestão","Evaporação"], r:0 },

{ c:"Ciência", q:"Quem descobriu a penicilina?", a:["Alexander Fleming","Marie Curie","Newton","Einstein"], r:0 },

{ c:"Ciência", q:"Qual é o estado da matéria do gelo?", a:["Sólido","Líquido","Gasoso","Plasma"], r:0 },

{ c:"Ciência", q:"O que é um ecossistema?", a:["Conjunto de seres vivos e ambiente","Apenas animais","Apenas plantas","Um laboratório"], r:0 },

{ c:"Ciência", q:"Qual elemento químico tem símbolo O?", a:["Ouro","Oxigênio","Ozônio","Ósmio"], r:1 },

{ c:"Ciência", q:"Qual é o planeta mais próximo do Sol?", a:["Mercúrio","Vênus","Terra","Marte"], r:0 },

{ c:"Ciência", q:"O que é a teoria da evolução?", a:["Mudanças genéticas ao longo do tempo","Movimento da Terra","Comportamento dos planetas","Mudança de estações"], r:0 },

{ c:"Ciência", q:"Qual gás é essencial para a respiração?", a:["Nitrogênio","Oxigênio","Hidrogênio","Carbono"], r:1 },

{ c:"Ciência", q:"Quem formulou as leis da gravidade?", a:["Newton","Einstein","Galileu","Aristóteles"], r:0 },

{ c:"Ciência", q:"Qual é a função dos rins?", a:["Filtrar o sangue","Produzir insulina","Controlar a respiração","Armazenar energia"], r:0 },

{ c:"Ciência", q:"O que é um fóssil?", a:["Restos de organismos antigos","Planta viva","Mineral raro","Animal atual"], r:0 },

{ c:"Ciência", q:"Qual é a camada mais externa da Terra?", a:["Crosta","Manto","Núcleo","Litosfera"], r:0 },

{ c:"Ciência", q:"O que é um átomo?", a:["Menor unidade da matéria","Célula","Molécula","Elemento químico"], r:0 },

{ c:"Ciência", q:"Qual órgão produz a bile?", a:["Fígado","Rim","Pâncreas","Coração"], r:0 },

{ c:"Ciência", q:"O que é densidade?", a:["Massa por volume","Energia por massa","Velocidade por tempo","Força por área"], r:0 },

{ c:"Ciência", q:"Qual fenômeno explica o arco-íris?", a:["Refração da luz","Reflexão do som","Difusão térmica","Gravidade"], r:0 },

{ c:"Ciência", q:"O que é DNA?", a:["Material genético","Célula","Proteína","Hormônio"], r:0 },

  /* ================= GEOGRAFIA ================= */

{ c:"Geografia", q:"Qual é o maior oceano do planeta?", a:["Atlântico","Índico","Pacífico","Ártico"], r:2 },

{ c:"Geografia", q:"Qual é a capital do Brasil?", a:["São Paulo","Brasília","Rio de Janeiro","Salvador"], r:1 },

{ c:"Geografia", q:"Qual país tem a maior área territorial?", a:["Rússia","Canadá","China","EUA"], r:0 },

{ c:"Geografia", q:"Qual é o deserto mais seco do mundo?", a:["Sahara","Atacama","Gobi","Kalahari"], r:1 },

{ c:"Geografia", q:"Qual é o rio mais longo do mundo?", a:["Nilo","Amazonas","Yangtzé","Mississippi"], r:0 },

{ c:"Geografia", q:"Qual continente tem o maior número de países?", a:["África","América","Ásia","Europa"], r:0 },

{ c:"Geografia", q:"Qual é a montanha mais alta do mundo?", a:["Everest","K2","Kilimanjaro","Mont Blanc"], r:0 },

{ c:"Geografia", q:"Qual é a capital da França?", a:["Paris","Lyon","Marselha","Nice"], r:0 },

{ c:"Geografia", q:"Qual país é conhecido como 'Terra do Sol Nascente'?", a:["Japão","China","Coreia do Sul","Tailândia"], r:0 },

{ c:"Geografia", q:"Qual é o maior lago do mundo?", a:["Lago Superior","Lago Vitória","Lago Baikal","Lago Michigan"], r:0 },

{ c:"Geografia", q:"Qual país tem mais habitantes?", a:["China","Índia","EUA","Rússia"], r:0 },

{ c:"Geografia", q:"Qual é a capital da Austrália?", a:["Sydney","Canberra","Melbourne","Brisbane"], r:1 },

{ c:"Geografia", q:"Qual é o menor país do mundo?", a:["Vaticano","Mônaco","San Marino","Liechtenstein"], r:0 },

{ c:"Geografia", q:"Qual é o rio que atravessa o Egito?", a:["Nilo","Congo","Senegal","Zambeze"], r:0 },

{ c:"Geografia", q:"Qual é a capital do Canadá?", a:["Toronto","Vancouver","Ottawa","Montreal"], r:2 },

{ c:"Geografia", q:"Qual país tem formato de bota?", a:["Itália","Espanha","Grécia","Portugal"], r:0 },

{ c:"Geografia", q:"Qual é a capital da Rússia?", a:["Moscou","São Petersburgo","Kazan","Novosibirsk"], r:0 },

{ c:"Geografia", q:"Qual é o deserto mais frio do mundo?", a:["Antártico","Gobi","Sahara","Kalahari"], r:0 },

{ c:"Geografia", q:"Qual país é conhecido por seus fiordes?", a:["Noruega","Islândia","Suíça","Canadá"], r:0 },

{ c:"Geografia", q:"Qual é a capital do Japão?", a:["Tóquio","Osaka","Kyoto","Hiroshima"], r:0 },

 /* ================= ESPORTES ================= */

{ c:"Esportes", q:"Quantos jogadores há em um time de futebol?", a:["9","10","11","12"], r:2 },

{ c:"Esportes", q:"Quem é conhecido como o Rei do Futebol?", a:["Pelé","Messi","Maradona","CR7"], r:0 },

{ c:"Esportes", q:"Qual país sediou a Copa do Mundo de 2018?", a:["Rússia","Brasil","Alemanha","França"], r:0 },

{ c:"Esportes", q:"Em qual esporte se disputa a NBA?", a:["Futebol","Basquete","Vôlei","Tênis"], r:1 },

{ c:"Esportes", q:"Qual a distância oficial da maratona?", a:["42 km","40 km","45 km","50 km"], r:0 },

{ c:"Esportes", q:"Quem ganhou mais medalhas olímpicas da história?", a:["Michael Phelps","Usain Bolt","Simone Biles","Carl Lewis"], r:0 },

{ c:"Esportes", q:"Qual esporte usa raquete e peteca?", a:["Tênis","Badminton","Squash","Pingue-pongue"], r:1 },

{ c:"Esportes", q:"Qual país é famoso pelo críquete?", a:["Índia","Brasil","EUA","Japão"], r:0 },

{ c:"Esportes", q:"Quantos pontos vale um touchdown no futebol americano?", a:["3","6","7","1"], r:1 },

{ c:"Esportes", q:"Qual é a principal competição de futebol da Europa?", a:["UEFA Champions League","Copa América","Copa do Mundo","Premier League"], r:0 },

{ c:"Esportes", q:"Qual atleta é conhecido como 'Lightning Bolt'?", a:["Usain Bolt","Carl Lewis","Michael Johnson","Jesse Owens"], r:0 },

{ c:"Esportes", q:"Em qual país nasceram os Jogos Olímpicos?", a:["Grécia","Itália","França","EUA"], r:0 },

{ c:"Esportes", q:"Quantos sets são necessários para vencer uma partida de tênis masculino em Grand Slam?", a:["2","3","5","4"], r:2 },

{ c:"Esportes", q:"Qual país ganhou a Copa do Mundo de 2014?", a:["Brasil","Alemanha","Argentina","Espanha"], r:1 },

{ c:"Esportes", q:"Qual esporte é conhecido como 'o rei dos esportes'?","a":["Futebol","Basquete","Vôlei","Tênis"], r:0 },

{ c:"Esportes", q:"O que é um hole-in-one no golfe?", a:["Acertar o buraco em uma tacada","Vencer o torneio","Errou o buraco","Fazer par"], r:0 },

{ c:"Esportes", q:"Qual país venceu mais Copas do Mundo?", a:["Brasil","Alemanha","Itália","Argentina"], r:0 },

{ c:"Esportes", q:"Qual é o principal torneio de tênis da Inglaterra?", a:["Wimbledon","Roland Garros","US Open","Australian Open"], r:0 },

{ c:"Esportes", q:"Qual esporte utiliza quadra, bola e cesta?", a:["Basquete","Vôlei","Handebol","Futebol"], r:0 },

{ c:"Esportes", q:"Qual é a distância da prova de 100 metros rasos?", a:["100 metros","200 metros","400 metros","50 metros"], r:0 },

/* ================= CULTURA ================= */

{ c:"Cultura/Geral", q:"Quem pintou a Mona Lisa?", a:["Van Gogh","Leonardo da Vinci","Picasso","Michelangelo"], r:1 },

{ c:"Cultura/Geral", q:"Qual país criou a pizza?", a:["França","Itália","Espanha","Grécia"], r:1 },

{ c:"Cultura/Geral", q:"Quem escreveu 'Dom Quixote'?", a:["Cervantes","Shakespeare","Victor Hugo","Tolstói"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a arte de dobrar papel?", a:["Origami","Escultura","Pintura","Caligrafia"], r:0 },

{ c:"Cultura/Geral", q:"Quem escreveu 'O Pequeno Príncipe'?", a:["Saint-Exupéry","Rowling","Coelho","Hugo"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a principal dança típica da Argentina?", a:["Samba","Tango","Flamenco","Merengue"], r:1 },

{ c:"Cultura/Geral", q:"Quem compôs a 9ª Sinfonia?", a:["Mozart","Beethoven","Bach","Chopin"], r:1 },

{ c:"Cultura/Geral", q:"Qual é o maior festival de cinema do mundo?", a:["Cannes","Sundance","Berlim","Veneza"], r:0 },

{ c:"Cultura/Geral", q:"Quem escreveu 'Hamlet'?", a:["Shakespeare","Cervantes","Tolstói","Hugo"], r:0 },

{ c:"Cultura/Geral", q:"Qual cultura criou os hieróglifos?", a:["Egípcia","Grega","Romana","Chinesa"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a capital cultural da França?", a:["Lyon","Marselha","Paris","Nice"], r:2 },

{ c:"Cultura/Geral", q:"Quem pintou 'A Noite Estrelada'?", a:["Van Gogh","Picasso","Da Vinci","Monet"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a obra mais famosa de Leonardo da Vinci?", a:["Mona Lisa","Guernica","O Grito","A Última Ceia"], r:0 },

{ c:"Cultura/Geral", q:"Quem é o autor de 'Harry Potter'?", a:["J.K. Rowling","Paulo Coelho","Stephen King","Suzanne Collins"], r:0 },

{ c:"Cultura/Geral", q:"Qual civilização construiu Machu Picchu?", a:["Inca","Maia","Asteca","Egípcia"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a principal arte japonesa de combate?", a:["Karate","Judo","Sumô","Aikido"], r:1 },

{ c:"Cultura/Geral", q:"Quem pintou 'Guernica'?", a:["Picasso","Van Gogh","Da Vinci","Monet"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a famosa ópera de Giuseppe Verdi?", a:["La Traviata","Carmen","O Barbeiro de Sevilha","A Flauta Mágica"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a cidade considerada berço do Renascimento?", a:["Florença","Roma","Paris","Veneza"], r:0 },

{ c:"Cultura/Geral", q:"Qual é a principal obra literária de Tolstói?", a:["Guerra e Paz","Crime e Castigo","Dom Quixote","O Pequeno Príncipe"], r:0 },
  
];

/* ================================

   🎮 CONTROLE DO QUIZ

================================ */

let filtered = [];

let current = 0;

let score = 0;

let timeLeft = 15;

let timer;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startCategory(cat){
  filtered = questions.filter(q => q.c === cat);
  filtered = shuffleArray(filtered); // <-- embaralha perguntas
  current = 0;
  score = 0;
  document.getElementById("categoryTitle").innerText = cat;
  showScreen("quiz");
  loadQuestion();
}

function loadQuestion(){

  if(current >= filtered.length){

    showScreen("result");

    document.getElementById("scoreText").innerText =

      `Você acertou ${score} de ${filtered.length} perguntas`;

    return;

  }

  timeLeft = 15;

  document.getElementById("timer").innerText = timeLeft;

  document.getElementById("question").innerText = filtered[current].q;

  const nivel = Math.ceil((current + 1) / (filtered.length / 4));

  document.getElementById("level").innerText = `Nível ${nivel}`;

  document.getElementById("progressBar").style.width =

    ((current / filtered.length) * 100) + "%";

  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  filtered[current].a.forEach((txt, i) => {

    const btn = document.createElement("button");

    btn.innerText = txt;

    btn.onclick = () => answer(btn, i);

    answersDiv.appendChild(btn);

  });

  timer = setInterval(countdown, 1000);

}

function countdown(){

  timeLeft--;

  document.getElementById("timer").innerText = timeLeft;

  if(timeLeft <= 0){

    clearInterval(timer);

    current++;

    loadQuestion();

  }

}

function answer(button, index){

  clearInterval(timer);

  if(index === filtered[current].r){

    score++;

    button.classList.add("correct");

  } else {

    button.classList.add("wrong");

  }

  setTimeout(() => {

    current++;

    loadQuestion();

  }, 600);

}

function showScreen(id){

  document.querySelectorAll(".screen")

    .forEach(s => s.classList.remove("active"));

  document.getElementById(id).classList.add("active");

}

function goHome(){

  clearInterval(timer);

  showScreen("home");

}

/* =========================
   MODO INFINITO
========================= */

function shuffleArray(array) {
  // Embaralha o array de perguntas
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startInfinite() {
  filtered = shuffleArray([...questions]); // Embaralha todas as perguntas
  current = 0;
  score = 0;
  document.getElementById("categoryTitle").innerText = "Modo Infinito";
  showScreen("quiz");
  loadInfiniteQuestion();
}

function loadInfiniteQuestion() {
  if(current >= filtered.length){
    filtered = shuffleArray([...questions]); // Reembaralha quando acabar
    current = 0;
  }

  timeLeft = 15;
  document.getElementById("timer").innerText = timeLeft;
  document.getElementById("question").innerText = filtered[current].q;

  const nivel = Math.ceil((current + 1) / (filtered.length / 4));
  document.getElementById("level").innerText = `Nível ${nivel}`;

  document.getElementById("progressBar").style.width =
    ((current / filtered.length) * 100) + "%";

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  filtered[current].a.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.innerText = txt;
    btn.onclick = () => answerInfinite(btn, i);
    answersDiv.appendChild(btn);
  });

  clearInterval(timer); // Evita que vários timers rodem ao mesmo tempo
  timer = setInterval(countdownInfinite, 1000);
}

function answerInfinite(button, index){
  clearInterval(timer);
  if(index === filtered[current].r){
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }
  setTimeout(() => {
    current++;
    loadInfiniteQuestion(); // Próxima pergunta sem limite
  }, 600);
}

function countdownInfinite(){
  timeLeft--;
  document.getElementById("timer").innerText = timeLeft;
  if(timeLeft <= 0){
    clearInterval(timer);
    current++;
    loadInfiniteQuestion();
  }
}

/* ================================

   📢 ANÚNCIO AUTOMÁTICO

================================ */

setTimeout(() => {

  let t = 15;

  const modal = document.getElementById("adModal");

  const span = document.getElementById("adTime");

  modal.style.display = "flex";

  const adTimer = setInterval(() => {

    t--;

    span.innerText = t;

    if(t <= 0){

      clearInterval(adTimer);

      modal.style.display = "none";

    }

  }, 1000);

}, 120000);