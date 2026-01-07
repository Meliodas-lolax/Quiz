/* ================================
   📚 BANCO DE PERGUNTAS (30)
================================ */

const questions = [
  // 🩺 SAÚDE
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

  // 🎓 EDUCAÇÃO
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

  // 📜 HISTÓRIA
  { c:"História", q:"Em que ano terminou a Segunda Guerra Mundial?", a:["1943","1944","1945","1946"], r:2 },
  { c:"História", q:"Quem proclamou a independência do Brasil?", a:["Dom Pedro I","Dom Pedro II","Tiradentes","Getúlio Vargas"], r:0 },
  { c:"História", q:"Onde surgiu a civilização egípcia?", a:["Mesopotâmia","Rio Nilo","Europa","Ásia"], r:1 },
  { c:"História", q:"Quem foi o primeiro presidente do Brasil?", a:["Getúlio Vargas","Deodoro da Fonseca","Juscelino Kubitschek","Dom Pedro II"], r:1 },
  { c:"História", q:"Em que ano aconteceu a Revolução Francesa?", a:["1789","1776","1804","1812"], r:0 },
  { c:"História", q:"Quem descobriu o Brasil?", a:["Pedro Álvares Cabral","Cristóvão Colombo","Vasco da Gama","Fernão de Magalhães"], r:0 },
  { c:"História", q:"O que foi o Renascimento?", a:["Movimento artístico e cultural","Guerra mundial","Exploração marítima","Tratado político"], r:0 },
  { c:"História", q:"Quem foi Napoleão Bonaparte?", a:["Imperador francês","Rei inglês","Presidente americano","General romano"], r:0 },
  { c:"História", q:"Em que período ocorreu a Idade Média?", a:["476-1453","1492-1600","1600-1750","1800-1900"], r:0 },
  { c:"História", q:"O que foi a Revolução Industrial?", a:["Mudança na produção com máquinas","Guerra civil","Movimento literário","Expansão colonial"], r:0 },
  { c:"História", q:"Quem foi Tiradentes?", a:["Líder da Inconfidência Mineira","Imperador brasileiro","Explorador português","General francês"], r:0 },
  { c:"História", q:"Qual país lançou a bomba atômica em Hiroshima?", a:["Alemanha","Japão","Estados Unidos","União Soviética"], r:2 },
  { c:"História", q:"O que foi a Guerra Fria?", a:["Conflito ideológico entre EUA e URSS","Primeira guerra mundial","Guerra civil americana","Revolução Francesa"], r:0 },
  { c:"História", q:"Quem foi Dom Pedro II?", a:["Imperador do Brasil","Presidente do Brasil","Rei de Portugal","General francês"], r:0 },
  { c:"História", q:"Em que ano caiu o Muro de Berlim?", a:["1987","1989","1991","1993"], r:1 },
  { c:"História", q:"O que foi o Tratado de Tordesilhas?", a:["Divisão de terras entre Portugal e Espanha","Acordo comercial na Europa","Revolução inglesa","Aliança militar"], r:0 },
  { c:"História", q:"Quem foi Cleópatra?", a:["Rainha do Egito","Imperatriz romana","Filha de Napoleão","General grego"], r:0 },
  { c:"História", q:"Qual era a função das Cruzadas?", a:["Expedições religiosas na Idade Média","Conquista da América","Revolução política","Tratado diplomático"], r:0 },
  { c:"História", q:"Quem foi Mahatma Gandhi?", a:["Líder da independência da Índia","Presidente americano","Imperador japonês","General francês"], r:0 },
  { c:"História", q:"O que foi a Guerra de Tróia?", a:["Conflito lendário entre gregos e troianos","Revolução industrial","Conquista da América","Expedição marítima"], r:0 },
  { c:"História", q:"Em que ano ocorreu a Independência dos EUA?", a:["1776","1492","1804","1865"], r:0 },
  { c:"História", q:"Quem foi Júlio César?", a:["Imperador romano","General francês","Rei inglês","Filósofo grego"], r:0 },
  { c:"História", q:"O que foi a Revolução Russa?", a:["Queda do czar e ascensão do comunismo","Revolução industrial","Guerra mundial","Expansão colonial"], r:0 },
  { c:"História", q:"Quem descobriu a América?", a:["Cristóvão Colombo","Pedro Álvares Cabral","Vasco da Gama","Magalhães"], r:0 },
  { c:"História", q:"O que foi a Reforma Protestante?", a:["Movimento religioso liderado por Martinho Lutero","Invenção da imprensa","Revolução francesa","Descoberta do Brasil"], r:0 },
  { c:"História", q:"Em que ano foi a Proclamação da República no Brasil?", a:["1889","1822","1888","1891"], r:0 },
  { c:"História", q:"Quem foi Napoleão Bonaparte?", a:["Imperador francês","Rei inglês","General romano","Presidente americano"], r:0 },
  { c:"História", q:"O que foi o Iluminismo?", a:["Movimento cultural e filosófico","Guerra civil","Expedição marítima","Revolução industrial"], r:0 },
  { c:"História", q:"Quem foi Karl Marx?", a:["Filósofo e economista alemão","Imperador francês","General romano","Rei inglês"], r:0 },
  { c:"História", q:"Qual foi o primeiro país a abolir a escravidão?", a:["Brasil","Estados Unidos","Haiti","Inglaterra"], r:2 }
);

  // 💻 TECNOLOGIA
/* ------------------ TECNOLOGIA 💻 – 30 PERGUNTAS ------------------ */
questions.push(
  { c:"Tecnologia", q:"O que significa HTML?", a:["HyperText Markup Language","HighText Machine Language","HyperLink Tool","Home Tool"], r:0 },
  { c:"Tecnologia", q:"Qual empresa desenvolveu o Android?", a:["Apple","Google","Microsoft","IBM"], r:1 },
  { c:"Tecnologia", q:"Qual dispositivo armazena dados permanentemente?", a:["RAM","HD","CPU","Cache"], r:1 },
  { c:"Tecnologia", q:"O que significa CPU?", a:["Central Processing Unit","Computer Power Unit","Central Performance Unit","Core Processing Utility"], r:0 },
  { c:"Tecnologia", q:"Qual é a principal função do sistema operacional?", a:["Executar aplicativos","Proteger contra vírus","Montar hardware","Armazenar dados"], r:0 },
  { c:"Tecnologia", q:"O que significa URL?", a:["Uniform Resource Locator","Universal Resource Link","Unique Reference Link","Uniform Reference Locator"], r:0 },
  { c:"Tecnologia", q:"Qual é a função da memória RAM?", a:["Armazenamento temporário","Armazenamento permanente","Processar gráficos","Proteger dados"], r:0 },
  { c:"Tecnologia", q:"O que é um firewall?", a:["Proteção de rede","Computador portátil","Software de edição","Aplicativo de música"], r:0 },
  { c:"Tecnologia", q:"Qual é a função do navegador web?", a:["Acessar páginas da internet","Armazenar arquivos","Proteger sistema","Editar imagens"], r:0 },
  { c:"Tecnologia", q:"O que significa IoT?", a:["Internet of Things","Interface of Technology","Input of Tools","Information on Time"], r:0 },
  { c:"Tecnologia", q:"Qual linguagem é usada para estilizar páginas web?", a:["HTML","CSS","Python","Java"], r:1 },
  { c:"Tecnologia", q:"O que significa AI?", a:["Artificial Intelligence","Advanced Internet","Automated Integration","Applied Innovation"], r:0 },
  { c:"Tecnologia", q:"Qual é a função de um servidor?", a:["Armazenar e fornecer dados","Acessar internet","Proteger rede","Editar arquivos"], r:0 },
  { c:"Tecnologia", q:"O que é uma URL segura?", a:["Começa com https","Começa com http","Termina com .com","Termina com .org"], r:0 },
  { c:"Tecnologia", q:"Qual é a função de um roteador?", a:["Distribuir conexão de internet","Processar dados","Armazenar arquivos","Editar imagens"], r:0 },
  { c:"Tecnologia", q:"O que é cloud computing?", a:["Computação na nuvem","Computação local","Programa de edição","Sistema operacional"], r:0 },
  { c:"Tecnologia", q:"Qual linguagem é usada para programação web dinâmica?", a:["HTML","CSS","JavaScript","Photoshop"], r:2 },
  { c:"Tecnologia", q:"O que significa VPN?", a:["Virtual Private Network","Virtual Public Network","Verified Private Node","Virtual Personal Network"], r:0 },
  { c:"Tecnologia", q:"Qual é o objetivo de um backup?", a:["Salvar cópia de segurança dos dados","Editar fotos","Aumentar velocidade do computador","Proteger contra vírus"], r:0 },
  { c:"Tecnologia", q:"O que é phishing?", a:["Golpe eletrônico","Sistema de backup","Dispositivo de rede","Aplicativo educativo"], r:0 },
  { c:"Tecnologia", q:"O que é malware?", a:["Software malicioso","Aplicativo de música","Sistema operacional","Programa de edição"], r:0 },
  { c:"Tecnologia", q:"Qual é a função de um banco de dados?", a:["Armazenar informações","Processar imagens","Editar vídeos","Proteger rede"], r:0 },
  { c:"Tecnologia", q:"O que é open source?", a:["Código aberto","Programa pago","Software offline","Sistema fechado"], r:0 },
  { c:"Tecnologia", q:"Qual dispositivo converte energia digital em visual?", a:["Monitor","Teclado","Roteador","Impressora"], r:0 },
  { c:"Tecnologia", q:"O que significa API?", a:["Application Programming Interface","Automatic Protocol Integration","Advanced Programming Input","Application Performance Index"], r:0 },
  { c:"Tecnologia", q:"Qual é a função do cache do navegador?", a:["Acelerar carregamento de páginas","Proteger dados","Processar gráficos","Armazenar arquivos grandes"], r:0 },
  { c:"Tecnologia", q:"O que é criptomoeda?", a:["Moeda digital","Dinheiro físico","Programa de software","Rede social"], r:0 },
  { c:"Tecnologia", q:"O que significa HTTPS?", a:["HyperText Transfer Protocol Secure","High Transfer Protocol System","HyperText Transmission Public Secure","Host Transfer Protocol Secure"], r:0 },
  { c:"Tecnologia", q:"Qual empresa criou o Windows?", a:["Microsoft","Apple","Google","IBM"], r:0 },
  { c:"Tecnologia", q:"Qual é a função de um antivírus?", a:["Detectar e remover malwares","Editar imagens","Acelerar computador","Gerar música"], r:0 }
);

  // 🔬 CIÊNCIA
  { c:"Ciência", q:"Qual planeta é conhecido como planeta vermelho?", a:["Vênus","Marte","Júpiter","Saturno"], r:1 },
  { c:"Ciência", q:"Qual gás é essencial para a respiração?", a:["Oxigênio","Hidrogênio","Nitrogênio","Gás Carbônico"], r:0 },
  { c:"Ciência", q:"Qual é o maior órgão do corpo humano?", a:["Coração","Pulmão","Pele","Fígado"], r:2 },
  { c:"Ciência", q:"O que é fotossíntese?", a:["Processo de conversão de luz em energia pelas plantas","Respiração humana","Digestão de alimentos","Movimento das marés"], r:0 },
  { c:"Ciência", q:"Qual é a unidade básica da vida?", a:["Célula","Molécula","Átomo","Órgão"], r:0 },
  { c:"Ciência", q:"O que é DNA?", a:["Material genético","Proteína muscular","Hormônio","Elemento químico"], r:0 },
  { c:"Ciência", q:"Quem propôs a Teoria da Relatividade?", a:["Isaac Newton","Albert Einstein","Galileu Galilei","Charles Darwin"], r:1 },
  { c:"Ciência", q:"Qual é a função dos glóbulos brancos?", a:["Combater infecções","Transportar oxigênio","Produzir hormônios","Filtrar sangue"], r:0 },
  { c:"Ciência", q:"O que é um ecossistema?", a:["Conjunto de seres vivos e ambiente","Tipo de célula","Planeta","Molécula de DNA"], r:0 },
  { c:"Ciência", q:"Qual é o elemento químico mais abundante no corpo humano?", a:["Carbono","Oxigênio","Hidrogênio","Nitrogênio"], r:1 },
  { c:"Ciência", q:"Quem descobriu a gravidade?", a:["Albert Einstein","Isaac Newton","Galileu Galilei","Marie Curie"], r:1 },
  { c:"Ciência", q:"O que é a Lei da Conservação da Energia?", a:["Energia não pode ser criada nem destruída","Energia só é gerada pelo sol","Energia desaparece com calor","Energia é infinita"], r:0 },
  { c:"Ciência", q:"Qual planeta é o maior do sistema solar?", a:["Terra","Marte","Júpiter","Saturno"], r:2 },
  { c:"Ciência", q:"O que é átomo?", a:["Menor unidade de um elemento químico","Molécula de DNA","Célula humana","Sistema planetário"], r:0 },
  { c:"Ciência", q:"Qual cientista é conhecido pela teoria da evolução?", a:["Albert Einstein","Isaac Newton","Charles Darwin","Galileu Galilei"], r:2 },
  { c:"Ciência", q:"O que é força gravitacional?", a:["Força que atrai objetos para o centro da Terra","Força elétrica","Força magnética","Força de atrito"], r:0 },
  { c:"Ciência", q:"Qual é a função dos rins?", a:["Filtrar sangue","Produzir energia","Controlar respiração","Regular visão"], r:0 },
  { c:"Ciência", q:"O que é energia cinética?", a:["Energia do movimento","Energia armazenada","Energia elétrica","Energia solar"], r:0 },
  { c:"Ciência", q:"Qual a função dos pulmões?", a:["Respirar oxigênio","Filtrar sangue","Produzir hormônios","Armazenar nutrientes"], r:0 },
  { c:"Ciência", q:"O que é uma estrela?", a:["Corpo celeste que emite luz própria","Planeta","Lua","Cometa"], r:0 },
  { c:"Ciência", q:"Qual é o maior planeta terrestre?", a:["Terra","Marte","Júpiter","Vênus"], r:0 },
  { c:"Ciência", q:"O que é eletricidade?", a:["Movimento de elétrons","Força gravitacional","Energia solar","Luz"], r:0 },
  { c:"Ciência", q:"Quem descobriu a penicilina?", a:["Alexander Fleming","Marie Curie","Isaac Newton","Albert Einstein"], r:0 },
  { c:"Ciência", q:"O que é o efeito estufa?", a:["Aquecimento da Terra por gases","Resfriamento global","Movimento das marés","Onda sonora"], r:0 },
  { c:"Ciência", q:"Qual é a camada mais externa da Terra?", a:["Manto","Crosta","Núcleo","Litosfera"], r:1 },
  { c:"Ciência", q:"O que é um átomo neutro?", a:["Mesmo número de prótons e elétrons","Sem elétrons","Sem prótons","Somente nêutrons"], r:0 },
  { c:"Ciência", q:"Qual elemento químico tem símbolo Fe?", a:["Ferro","Fósforo","Flúor","Frâncio"], r:0 },
  { c:"Ciência", q:"O que é pressão atmosférica?", a:["Peso do ar sobre a superfície","Temperatura","Força magnética","Movimento da água"], r:0 },
  { c:"Ciência", q:"O que é energia potencial?", a:["Energia armazenada","Energia do movimento","Energia elétrica","Energia térmica"], r:0 },
  { c:"Ciência", q:"O que é um cometa?", a:["Corpo celeste com gelo e poeira","Planeta","Lua","Estrela"], r:0 }
);

  // 🌍 GEOGRAFIA
  { c:"Geografia", q:"Qual é o maior oceano do planeta?", a:["Atlântico","Índico","Pacífico","Ártico"], r:2 },
  { c:"Geografia", q:"Qual país possui a maior população?", a:["Índia","China","EUA","Rússia"], r:1 },
  { c:"Geografia", q:"Qual continente tem mais países?", a:["Europa","África","Ásia","América"], r:1 },
  { c:"Geografia", q:"Qual é a capital do Brasil?", a:["São Paulo","Brasília","Rio de Janeiro","Salvador"], r:1 },
  { c:"Geografia", q:"Qual rio é considerado o mais longo do mundo?", a:["Nilo","Amazônas","Mississippi","Yangtzé"], r:0 },
  { c:"Geografia", q:"Qual país tem a maior área territorial?", a:["Rússia","Canadá","China","Estados Unidos"], r:0 },
  { c:"Geografia", q:"Qual é o menor país do mundo?", a:["Vaticano","Mônaco","Nauru","San Marino"], r:0 },
  { c:"Geografia", q:"Qual montanha é a mais alta do mundo?", a:["Everest","K2","Kangchenjunga","Makalu"], r:0 },
  { c:"Geografia", q:"Qual é o deserto mais seco do mundo?", a:["Sahara","Atacama","Gobi","Kalahari"], r:1 },
  { c:"Geografia", q:"Em qual continente fica a Austrália?", a:["Ásia","Oceania","Europa","América"], r:1 },
  { c:"Geografia", q:"Qual é a capital da França?", a:["Londres","Paris","Berlim","Madri"], r:1 },
  { c:"Geografia", q:"Qual é o maior país da América do Sul?", a:["Argentina","Brasil","Chile","Peru"], r:1 },
  { c:"Geografia", q:"Qual é a capital do Japão?", a:["Tóquio","Pequim","Seul","Bangkok"], r:0 },
  { c:"Geografia", q:"Qual é o rio mais extenso da América do Sul?", a:["Amazonas","São Francisco","Paraná","Tocantins"], r:0 },
  { c:"Geografia", q:"Qual é a capital da Alemanha?", a:["Munique","Berlim","Hamburgo","Frankfurt"], r:1 },
  { c:"Geografia", q:"Qual país é famoso pelos fjords?", a:["Noruega","Suécia","Finlândia","Dinamarca"], r:0 },
  { c:"Geografia", q:"Qual é a capital da Itália?", a:["Roma","Milão","Veneza","Florença"], r:0 },
  { c:"Geografia", q:"Qual é a capital do Canadá?", a:["Toronto","Ottawa","Vancouver","Montreal"], r:1 },
  { c:"Geografia", q:"Qual é o maior lago do mundo?", a:["Lago Vitória","Lago Superior","Lago Michigan","Mar Cáspio"], r:3 },
  { c:"Geografia", q:"Qual país é conhecido como Terra do Sol Nascente?", a:["China","Japão","Coreia do Sul","Tailândia"], r:1 },
  { c:"Geografia", q:"Qual é o ponto mais alto da África?", a:["Kilimanjaro","Atlas","Ruwenzori","Montes Drakensberg"], r:0 },
  { c:"Geografia", q:"Qual é a capital da Argentina?", a:["Buenos Aires","Rosário","Mendoza","Córdoba"], r:0 },
  { c:"Geografia", q:"Qual país possui o maior número de ilhas?", a:["Indonésia","Filipinas","Noruega","Canadá"], r:0 },
  { c:"Geografia", q:"Qual é a capital da Rússia?", a:["Moscou","São Petersburgo","Kiev","Minsk"], r:0 },
  { c:"Geografia", q:"Qual é o deserto mais frio do mundo?", a:["Sahara","Gobi","Antártico","Karakum"], r:2 },
  { c:"Geografia", q:"Qual é o maior arquipélago do mundo?", a:["Maldivas","Indonésia","Filipinas","Japão"], r:1 },
  { c:"Geografia", q:"Qual é a capital da China?", a:["Pequim","Xangai","Hong Kong","Shenzhen"], r:0 },
  { c:"Geografia", q:"Qual é o rio mais longo da Europa?", a:["Danúbio","Volga","Reno","Tâmisa"], r:1 },
  { c:"Geografia", q:"Qual país possui a maior quantidade de vulcões ativos?", a:["Indonésia","Japão","Itália","Estados Unidos"], r:0 },
  { c:"Geografia", q:"Qual é a capital da Austrália?", a:["Sydney","Melbourne","Canberra","Brisbane"], r:2 }
);

  // ⚽ ESPORTES
  { c:"Esportes", q:"Quantos jogadores há em um time de futebol?", a:["9","10","11","12"], r:2 },
  { c:"Esportes", q:"Quem é conhecido como 'O Rei do Futebol'?", a:["Pelé","Maradona","Messi","Cristiano Ronaldo"], r:0 },
  { c:"Esportes", q:"Qual país sediou a Copa do Mundo de 2018?", a:["Rússia","Brasil","Alemanha","França"], r:0 },
  { c:"Esportes", q:"Qual esporte usa tacos e bolas brancas e pretas?", a:["Golfe","Snooker","Críquete","Tênis"], r:1 },
  { c:"Esportes", q:"Quantos sets existem em uma partida de tênis masculina de Grand Slam?", a:["3","5","7","1"], r:1 },
  { c:"Esportes", q:"Em qual esporte se disputa a NBA?", a:["Futebol","Basquete","Vôlei","Beisebol"], r:1 },
  { c:"Esportes", q:"Qual país venceu a primeira Copa do Mundo de futebol?", a:["Uruguai","Brasil","Alemanha","Itália"], r:0 },
  { c:"Esportes", q:"Qual é a distância oficial da maratona?", a:["42 km","40 km","50 km","45 km"], r:0 },
  { c:"Esportes", q:"Quem é considerado o maior nadador de todos os tempos?", a:["Michael Phelps","Ian Thorpe","Ryan Lochte","Mark Spitz"], r:0 },
  { c:"Esportes", q:"Qual esporte é conhecido como 'o esporte da realeza'?", a:["Polo","Tênis","Futebol","Golfe"], r:0 },
  { c:"Esportes", q:"Quantos jogadores há em um time de basquete?", a:["5","6","7","11"], r:0 },
  { c:"Esportes", q:"Qual país ganhou mais medalhas de ouro na história das Olimpíadas?", a:["EUA","Rússia","China","Alemanha"], r:0 },
  { c:"Esportes", q:"Quem venceu a Copa do Mundo de 2002?", a:["Brasil","Alemanha","Argentina","Itália"], r:0 },
  { c:"Esportes", q:"Em qual esporte é usado o termo 'hole in one'?", a:["Golfe","Basquete","Tênis","Beisebol"], r:0 },
  { c:"Esportes", q:"Qual é a duração de uma partida de futebol?", a:["90 minutos","80 minutos","100 minutos","60 minutos"], r:0 },
  { c:"Esportes", q:"Quem é o maior artilheiro da história da Champions League?", a:["Cristiano Ronaldo","Messi","Neymar","Lewandowski"], r:0 },
  { c:"Esportes", q:"Quantos pontos vale uma cesta de 3 pontos no basquete?", a:["2","3","1","4"], r:1 },
  { c:"Esportes", q:"Em qual país nasceu o futebol?", a:["Brasil","Inglaterra","Espanha","Itália"], r:1 },
  { c:"Esportes", q:"Qual país é famoso por vencer a Copa do Mundo de Rugby?", a:["Nova Zelândia","Inglaterra","França","Austrália"], r:0 },
  { c:"Esportes", q:"Quem detém o recorde mundial dos 100 metros rasos?", a:["Usain Bolt","Carl Lewis","Tyson Gay","Justin Gatlin"], r:0 },
  { c:"Esportes", q:"Quantos jogadores há em um time de vôlei?", a:["5","6","7","11"], r:1 },
  { c:"Esportes", q:"Em qual esporte se disputa a Copa Davis?", a:["Tênis","Golfe","Futebol","Basquete"], r:0 },
  { c:"Esportes", q:"Qual país sediou os Jogos Olímpicos de 2016?", a:["Brasil","China","Reino Unido","Japão"], r:0 },
  { c:"Esportes", q:"Quem é considerado o maior jogador de basquete de todos os tempos?", a:["Michael Jordan","LeBron James","Kobe Bryant","Magic Johnson"], r:0 },
  { c:"Esportes", q:"Qual esporte usa bolas de 45 mm e tacos?", a:["Tênis de mesa","Tênis","Críquete","Golfe"], r:0 },
  { c:"Esportes", q:"Em qual país foi inventado o beisebol?", a:["Estados Unidos","Japão","Brasil","Canadá"], r:0 },
  { c:"Esportes", q:"Quem venceu a Copa do Mundo de 2014?", a:["Alemanha","Brasil","Argentina","Espanha"], r:0 },
  { c:"Esportes", q:"Qual esporte é praticado nos Jogos Pan-americanos?", a:["Diversos esportes","Apenas futebol","Apenas basquete","Apenas natação"], r:0 },
  { c:"Esportes", q:"Qual país ganhou mais medalhas na história das Olimpíadas de inverno?", a:["Noruega","Canadá","Rússia","Suíça"], r:0 },
  { c:"Esportes", q:"Quem é considerado o maior goleiro da história do futebol?", a:["Lev Yashin","Manuel Neuer","Gianluigi Buffon","Peter Schmeichel"], r:0 }
);

  // 🎭 CULTURA
{ c:"Cultura/Geral", q:"Quem pintou a Mona Lisa?", a:["Vincent van Gogh","Leonardo da Vinci","Pablo Picasso","Michelangelo"], r:1 },
  { c:"Cultura/Geral", q:"Qual país criou a pizza?", a:["França","Itália","Espanha","Grécia"], r:1 },
  { c:"Cultura/Geral", q:"Qual é o idioma mais falado no mundo?", a:["Inglês","Chinês mandarim","Espanhol","Hindi"], r:1 },
  { c:"Cultura/Geral", q:"Quem escreveu 'Dom Quixote'?", a:["Miguel de Cervantes","William Shakespeare","Victor Hugo","Tolstói"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o país da ópera?", a:["Itália","França","Alemanha","Áustria"], r:0 },
  { c:"Cultura/Geral", q:"Quem é o autor de 'Harry Potter'?", a:["J.K. Rowling","Stephen King","J.R.R. Tolkien","George R.R. Martin"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o maior teatro do mundo?", a:["La Scala","Teatro Amazonas","Bolshoi","Sydney Opera House"], r:3 },
  { c:"Cultura/Geral", q:"Qual é o livro mais vendido da história?", a:["Bíblia","Dom Quixote","O Pequeno Príncipe","Harry Potter"], r:0 },
  { c:"Cultura/Geral", q:"Quem escreveu 'Romeu e Julieta'?", a:["Miguel de Cervantes","William Shakespeare","Homer","Goethe"], r:1 },
  { c:"Cultura/Geral", q:"Qual é o estilo musical de Beethoven?", a:["Barroco","Clássico","Romântico","Jazz"], r:1 },
  { c:"Cultura/Geral", q:"Qual é a capital cultural da França?", a:["Lyon","Paris","Marselha","Nice"], r:1 },
  { c:"Cultura/Geral", q:"Quem é considerado o pai do cinema?", a:["Charles Chaplin","Georges Méliès","Orson Welles","Alfred Hitchcock"], r:1 },
  { c:"Cultura/Geral", q:"Qual é a dança típica da Argentina?", a:["Samba","Tango","Flamenco","Salsa"], r:1 },
  { c:"Cultura/Geral", q:"Quem pintou 'O Grito'?", a:["Edvard Munch","Pablo Picasso","Salvador Dalí","Van Gogh"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o símbolo do feminismo?", a:["Punho cerrado","Coração","Estrela","Cruz"], r:0 },
  { c:"Cultura/Geral", q:"Qual é a maior biblioteca do mundo?", a:["Biblioteca do Congresso","Biblioteca Nacional da França","Biblioteca Britânica","Biblioteca do Vaticano"], r:0 },
  { c:"Cultura/Geral", q:"Quem compôs a 9ª Sinfonia?", a:["Mozart","Beethoven","Bach","Chopin"], r:1 },
  { c:"Cultura/Geral", q:"Qual é o maior museu do mundo?", a:["Louvre","British Museum","Metropolitan Museum","Hermitage"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o país do flamenco?", a:["Itália","Espanha","Portugal","França"], r:1 },
  { c:"Cultura/Geral", q:"Quem escreveu 'O Pequeno Príncipe'?", a:["J.K. Rowling","Antoine de Saint-Exupéry","Victor Hugo","Paulo Coelho"], r:1 },
  { c:"Cultura/Geral", q:"Qual é a arte de dobrar papel?", a:["Origami","Caligrafia","Escultura","Pintura"], r:0 },
  { c:"Cultura/Geral", q:"Quem pintou 'Guernica'?", a:["Pablo Picasso","Salvador Dalí","Van Gogh","Monet"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o maior festival de cinema do mundo?", a:["Festival de Cannes","Oscar","Venice Film Festival","Berlin Film Festival"], r:0 },
  { c:"Cultura/Geral", q:"Quem escreveu 'A Divina Comédia'?", a:["Dante Alighieri","Goethe","Shakespeare","Homero"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o país da capoeira?", a:["Brasil","Portugal","Angola","Cuba"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o estilo de pintura de Salvador Dalí?", a:["Surrealismo","Expressionismo","Impressionismo","Cubismo"], r:0 },
  { c:"Cultura/Geral", q:"Quem compôs 'As Quatro Estações'?", a:["Vivaldi","Bach","Mozart","Beethoven"], r:0 },
  { c:"Cultura/Geral", q:"Qual é o maior teatro do mundo em capacidade?", a:["Bolshoi","Teatro Amazonas","Sydney Opera House","Metropolitan Opera"], r:3 },
  { c:"Cultura/Geral", q:"Quem escreveu 'Os Miseráveis'?", a:["Victor Hugo","Dante Alighieri","Shakespeare","Goethe"], r:0 },
  { c:"Cultura/Geral", q:"Qual país é famoso pelo carnaval de rua?", a:["Brasil","Itália","Espanha","Estados Unidos"], r:0 }
);

/* ================================
   🎮 CONTROLE DO QUIZ
================================ */

let filtered = [];
let current = 0;
let score = 0;
let timeLeft = 15;
let timer;

/* ▶️ INICIAR CATEGORIA */
function startCategory(cat){
  filtered = questions.filter(q => q.c === cat);
  current = 0;
  score = 0;
  document.getElementById("categoryTitle").innerText = cat;
  showScreen("quiz");
  loadQuestion();
}

/* ❓ CARREGAR PERGUNTA */
function loadQuestion(){
  if(current >= filtered.length){
    showScreen("result");
    document.getElementById("scoreText").innerText =
      `🎉 Você acertou ${score} de ${filtered.length} perguntas!`;
    return;
  }

  timeLeft = 15;
  document.getElementById("timer").innerText = "⏱️ " + timeLeft;
  document.getElementById("question").innerText = filtered[current].q;

  const nivel = Math.ceil((current + 1) / (filtered.length / 4));
  document.getElementById("level").innerText = `🏆 Nível ${nivel}`;

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

/* ⏱️ CONTAGEM REGRESSIVA */
function countdown(){
  timeLeft--;
  document.getElementById("timer").innerText = "⏱️ " + timeLeft;
  if(timeLeft <= 0){
    clearInterval(timer);
    current++;
    loadQuestion();
  }
}

/* ✅❌ RESPOSTA */
function answer(button, index){
  clearInterval(timer);
  const correta = filtered[current].r;

  if(index === correta){
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

/* 🔁 TROCA DE TELAS */
function showScreen(id){
  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ⬅️ VOLTAR */
function goHome(){
  clearInterval(timer);
  showScreen("home");
}

/* 📢 ANÚNCIO APÓS 2 MINUTOS */
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
