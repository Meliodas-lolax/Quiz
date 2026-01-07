/* ================================
   📚 BANCO DE PERGUNTAS
================================ */

const questions = [

/* ================= SAÚDE ================= */
{ c:"Saúde", q:"Qual vitamina é produzida com exposição ao sol?", a:["A","B","C","D"], r:3 },
{ c:"Saúde", q:"Qual órgão bombeia o sangue?", a:["Pulmão","Coração","Rim","Fígado"], r:1 },
{ c:"Saúde", q:"Qual nutriente ajuda no crescimento muscular?", a:["Proteína","Gordura","Sal","Açúcar"], r:0 },
{ c:"Saúde", q:"Beber água ajuda principalmente em quê?", a:["Digestão","Visão","Audição","Memória"], r:0 },
{ c:"Saúde", q:"O que ajuda a prevenir cáries?", a:["Vitamina C","Flúor","Ferro","Vitamina A"], r:1 },
{ c:"Saúde", q:"Qual é a principal função dos glóbulos vermelhos?", a:["Combater vírus","Transportar oxigênio","Filtrar sangue","Produzir insulina"], r:1 },
{ c:"Saúde", q:"Qual órgão filtra resíduos do sangue?", a:["Fígado","Rim","Baço","Pâncreas"], r:1 },
{ c:"Saúde", q:"O que aumenta o risco de hipertensão?", a:["Exercício","Sal em excesso","Dormir bem","Hidratação"], r:1 },
{ c:"Saúde", q:"Qual vitamina é importante para visão?", a:["Vitamina A","Vitamina B","Vitamina C","Vitamina D"], r:0 },
{ c:"Saúde", q:"Qual mineral fortalece ossos?", a:["Cálcio","Potássio","Ferro","Magnésio"], r:0 },
{ c:"Saúde", q:"Qual é a função do fígado?", a:["Produzir enzimas digestivas","Armazenar sangue","Produzir bile","Filtrar oxigênio"], r:2 },
{ c:"Saúde", q:"Qual tipo de gordura é considerada saudável?", a:["Saturada","Trans","Insaturada","Nenhuma"], r:2 },
{ c:"Saúde", q:"O que é hipertensão?", a:["Pressão baixa","Pressão alta","Batimentos irregulares","Colesterol elevado"], r:1 },
{ c:"Saúde", q:"Qual exame mede o nível de glicose no sangue?", a:["Hemograma","Eletrocardiograma","Glicemia","Pressão arterial"], r:2 },
{ c:"Saúde", q:"O que é um AVC?", a:["Ataque cardíaco","Acidente vascular cerebral","Inflamação renal","Infecção pulmonar"], r:1 },
{ c:"Saúde", q:"Qual a função dos rins?", a:["Produzir hormônios","Filtrar sangue","Regular ossos","Controlar temperatura"], r:1 },
{ c:"Saúde", q:"Qual doença é causada pela deficiência de vitamina C?", a:["Escorbuto","Raquitismo","Anemia","Cegueira"], r:0 },
{ c:"Saúde", q:"O que ajuda na digestão?", a:["Fibras","Gordura","Açúcar","Sal"], r:0 },
{ c:"Saúde", q:"Qual alimento é rico em ferro?", a:["Espinafre","Leite","Maçã","Batata"], r:0 },
{ c:"Saúde", q:"Qual é a principal função do sistema imunológico?", a:["Produzir energia","Defender o corpo contra infecções","Armazenar nutrientes","Regular hormônios"], r:1 },
{ c:"Saúde", q:"O que significa IMC?", a:["Índice de Massa Corporal","Índice Muscular Corporal","Informação de Medida Corporal","Intensidade Muscular Controlada"], r:0 },
{ c:"Saúde", q:"Qual órgão é afetado pela hepatite?", a:["Coração","Fígado","Rim","Pulmão"], r:1 },
{ c:"Saúde", q:"Qual é a função dos pulmões?", a:["Filtrar sangue","Respirar oxigênio","Produzir bile","Produzir insulina"], r:1 },
{ c:"Saúde", q:"O que é diabetes?", a:["Excesso de glicose no sangue","Pressão alta","Deficiência de vitaminas","Infecção viral"], r:0 },
{ c:"Saúde", q:"Qual é a principal causa de cáries?", a:["Falta de sono","Açúcar em excesso","Falta de vitamina D","Exercício físico"], r:1 },
{ c:"Saúde", q:"Qual vitamina ajuda na coagulação do sangue?", a:["Vitamina K","Vitamina C","Vitamina A","Vitamina D"], r:0 },
{ c:"Saúde", q:"Qual exame verifica pressão arterial?", a:["Eletrocardiograma","Esfigmomanômetro","Hemograma","Ressonância"], r:1 },
{ c:"Saúde", q:"O que é anemia?", a:["Falta de glóbulos vermelhos","Excesso de glicose","Pressão baixa","Inflamação renal"], r:0 },
{ c:"Saúde", q:"Qual mineral previne cãibras musculares?", a:["Cálcio","Magnésio","Ferro","Potássio"], r:3 },
{ c:"Saúde", q:"O que ajuda a reduzir colesterol ruim?", a:["Exercício","Gorduras trans","Açúcar","Fibras"], r:3 }
];

/* ================= EDUCAÇÃO ================= */
{ c:"Educação", q:"Quem escreveu 'Pedagogia do Oprimido'?", a:["Piaget","Paulo Freire","Vygotsky","Sócrates"], r:1 },
{ c:"Educação", q:"O que significa EAD?", a:["Ensino a Distância","Educação Avançada","Estudo Digital","Ensino Direto"], r:0 },
{ c:"Educação", q:"Qual é o primeiro nível da educação formal?", a:["Ensino Médio","Ensino Fundamental","Educação Infantil","Ensino Superior"], r:2 },
{ c:"Educação", q:"Qual a função principal da escola?", a:["Ensinar","Punir","Controlar","Avaliar"], r:0 },
{ c:"Educação", q:"Quem foi Piaget?", a:["Filósofo","Psicólogo","Historiador","Professor de matemática"], r:1 },
{ c:"Educação", q:"O que é alfabetização?", a:["Ensinar leitura e escrita","Ensinar matemática","Ensinar ciência","Ensinar música"], r:0 },
{ c:"Educação", q:"Qual é a principal função do currículo escolar?", a:["Avaliar professores","Orientar aprendizagem","Organizar festas","Medir habilidades físicas"], r:1 },
{ c:"Educação", q:"O que significa BNCC?", a:["Base Nacional Comum Curricular","Biblioteca Nacional de Cultura","Boletim Nacional de Ciências","Banco Nacional de Conhecimento"], r:0 },
{ c:"Educação", q:"Quem é considerado pai da pedagogia moderna?", a:["Montessori","Piaget","Freire","Vygotsky"], r:2 },
{ c:"Educação", q:"O que é ensino híbrido?", a:["Somente presencial","Somente online","Combinação de online e presencial","Ensino noturno"], r:2 },
{ c:"Educação", q:"Qual é a idade típica da alfabetização no Brasil?", a:["3-4 anos","5-7 anos","8-10 anos","11-12 anos"], r:1 },
{ c:"Educação", q:"O que avalia uma prova objetiva?", a:["Opiniões","Fatos e conhecimentos","Criatividade","Expressão artística"], r:1 },
{ c:"Educação", q:"O que significa educação inclusiva?", a:["Somente alunos especiais","Educação para todos, incluindo necessidades especiais","Somente escolas particulares","Educação avançada"], r:1 },
{ c:"Educação", q:"Qual método ensina através de experiências práticas?", a:["Expositivo","Montessori","Tradicional","Audiovisual"], r:1 },
{ c:"Educação", q:"Quem criou o método Montessori?", a:["Jean Piaget","Maria Montessori","Lev Vygotsky","Paulo Freire"], r:1 },
{ c:"Educação", q:"O que é ludicidade na educação?", a:["Uso de jogos e brincadeiras","Ensino rigoroso","Prova oral","Aulas gravadas"], r:0 },
{ c:"Educação", q:"Qual é o objetivo da avaliação formativa?", a:["Punir alunos","Acompanhar e melhorar aprendizagem","Classificar turmas","Medir salário de professores"], r:1 },
{ c:"Educação", q:"O que é EJA?", a:["Educação de Jovens e Adultos","Ensino de Jogos Avançados","Escola de Jovens Alunos","Educação Júnior Avançada"], r:0 },
{ c:"Educação", q:"Qual é a função da BNCC?", a:["Definir currículo nacional","Gerar provas estaduais","Registrar professores","Organizar festas escolares"], r:0 },
{ c:"Educação", q:"O que é aprendizagem significativa?", a:["Memorização mecânica","Ligação do novo conhecimento com o que já se sabe","Ensinar sem contexto","Exercícios repetitivos"], r:1 },
{ c:"Educação", q:"Quem foi Lev Vygotsky?", a:["Psicólogo russo","Professor brasileiro","Filósofo francês","Educador americano"], r:0 },
{ c:"Educação", q:"O que significa avaliação diagnóstica?", a:["Medir resultado final","Avaliar conhecimentos iniciais","Punir alunos","Somente provas de matemática"], r:1 },
{ c:"Educação", q:"O que é educação formal?", a:["Aprendizagem organizada em instituições","Aprendizagem em casa","Aprender sozinho","Treinamento físico"], r:0 },
{ c:"Educação", q:"Qual é o objetivo da educação ambiental?", a:["Ensinar matemática","Conscientizar sobre meio ambiente","Promover festas escolares","Criar ranking de notas"], r:1 },
{ c:"Educação", q:"O que significa interdisciplinaridade?", a:["Ensinar uma disciplina","Relacionar diferentes disciplinas","Somente biologia e química","Somente português e matemática"], r:1 },
{ c:"Educação", q:"O que é ensino remoto?", a:["Aulas presenciais","Aulas online","Aulas híbridas","Exercícios em papel"], r:1 },
{ c:"Educação", q:"O que é didática?", a:["Estudo de métodos de ensino","Esporte escolar","Prova objetiva","Ranking de notas"], r:0 },
{ c:"Educação", q:"Qual é a função do professor mediador?", a:["Dar notas","Facilitar a aprendizagem","Organizar provas","Controlar tempo"], r:1 },
{ c:"Educação", q:"O que é avaliação somativa?", a:["Acompanhamento diário","Avaliação final do aprendizado","Aula prática","Jogos educativos"], r:1 },
{ c:"Educação", q:"Qual é o foco da educação crítica?", a:["Aceitar informações","Analisar e refletir","Decorar conteúdos","Evitar tecnologia"], r:1 }
);

/* ================= HISTÓRIA ================= */
{ c:"História", q:"Em que ano terminou a Segunda Guerra Mundial?", a:["1943","1944","1945","1946"], r:2 },
{ c:"História", q:"Quem proclamou a independência do Brasil?", a:["Dom Pedro I","Dom Pedro II","Tiradentes","Getúlio Vargas"], r:0 },
{ c:"História", q:"Em que ano ocorreu a Revolução Francesa?", a:["1789","1776","1804","1812"], r:0 },
{ c:"História", q:"Quem foi Tiradentes?", a:["Líder da Inconfidência Mineira","Imperador","Explorador","General"], r:0 },
{ c:"História", q:"Em que ano caiu o Muro de Berlim?", a:["1987","1989","1991","1993"], r:1 },

/* ================= TECNOLOGIA ================= */
{ c:"Tecnologia", q:"O que significa HTML?", a:["HyperText Markup Language","HighText Machine Language","HyperLink Tool","Home Tool"], r:0 },
{ c:"Tecnologia", q:"Qual empresa desenvolveu o Android?", a:["Apple","Google","Microsoft","IBM"], r:1 },
{ c:"Tecnologia", q:"Qual linguagem é usada para estilizar páginas web?", a:["HTML","CSS","Python","Java"], r:1 },
{ c:"Tecnologia", q:"O que significa CPU?", a:["Central Processing Unit","Computer Power Unit","Central Performance Unit","Core Utility"], r:0 },
{ c:"Tecnologia", q:"Qual linguagem torna páginas web interativas?", a:["HTML","CSS","JavaScript","PHP"], r:2 },

/* ================= CIÊNCIA ================= */
{ c:"Ciência", q:"Qual planeta é conhecido como planeta vermelho?", a:["Vênus","Marte","Júpiter","Saturno"], r:1 },
{ c:"Ciência", q:"Qual é a unidade básica da vida?", a:["Célula","Molécula","Átomo","Órgão"], r:0 },
{ c:"Ciência", q:"Quem propôs a Teoria da Relatividade?", a:["Newton","Einstein","Galileu","Darwin"], r:1 },
{ c:"Ciência", q:"O que é fotossíntese?", a:["Processo das plantas","Respiração","Digestão","Evaporação"], r:0 },
{ c:"Ciência", q:"Quem descobriu a penicilina?", a:["Alexander Fleming","Marie Curie","Newton","Einstein"], r:0 },

/* ================= GEOGRAFIA ================= */
{ c:"Geografia", q:"Qual é o maior oceano do planeta?", a:["Atlântico","Índico","Pacífico","Ártico"], r:2 },
{ c:"Geografia", q:"Qual é a capital do Brasil?", a:["São Paulo","Brasília","Rio","Salvador"], r:1 },
{ c:"Geografia", q:"Qual país tem a maior área territorial?", a:["Rússia","Canadá","China","EUA"], r:0 },
{ c:"Geografia", q:"Qual é o deserto mais seco do mundo?", a:["Sahara","Atacama","Gobi","Kalahari"], r:1 },
{ c:"Geografia", q:"Qual é o rio mais longo do mundo?", a:["Nilo","Amazonas","Yangtzé","Mississippi"], r:0 },

/* ================= ESPORTES ================= */
{ c:"Esportes", q:"Quantos jogadores há em um time de futebol?", a:["9","10","11","12"], r:2 },
{ c:"Esportes", q:"Quem é o Rei do Futebol?", a:["Pelé","Messi","Maradona","CR7"], r:0 },
{ c:"Esportes", q:"Qual país sediou a Copa de 2018?", a:["Rússia","Brasil","Alemanha","França"], r:0 },
{ c:"Esportes", q:"Em qual esporte se disputa a NBA?", a:["Futebol","Basquete","Vôlei","Tênis"], r:1 },
{ c:"Esportes", q:"Qual a distância da maratona?", a:["42 km","40 km","45 km","50 km"], r:0 },

/* ================= CULTURA ================= */
{ c:"Cultura/Geral", q:"Quem pintou a Mona Lisa?", a:["Van Gogh","Leonardo da Vinci","Picasso","Michelangelo"], r:1 },
{ c:"Cultura/Geral", q:"Qual país criou a pizza?", a:["França","Itália","Espanha","Grécia"], r:1 },
{ c:"Cultura/Geral", q:"Quem escreveu 'Dom Quixote'?", a:["Cervantes","Shakespeare","Hugo","Tolstói"], r:0 },
{ c:"Cultura/Geral", q:"Qual é a arte de dobrar papel?", a:["Origami","Escultura","Pintura","Caligrafia"], r:0 },
{ c:"Cultura/Geral", q:"Quem escreveu 'O Pequeno Príncipe'?", a:["Saint-Exupéry","Rowling","Coelho","Hugo"], r:0 }

];

/* ================================
   🎮 CONTROLE DO QUIZ
================================ */

let filtered = [];
let current = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startCategory(cat){
  filtered = questions.filter(q => q.c === cat);
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
