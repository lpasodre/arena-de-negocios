window.ARENA_QUESTOES = [
  {
    "id": "MKT_001",
    "area": "Marketing",
    "nivel": 1,
    "titulo": "A onda do momento",
    "situacao": "Um produto parecido com o seu viralizou nas redes sociais. Você pode lançar rapidamente uma versão própria enquanto o assunto está em alta ou esperar para entender melhor o público.",
    "alternativas": [
      {
        "texto": "Lançar uma versão simples agora, aproveitando o momento.",
        "custo": {
          "tipo": "fixo",
          "valor": 22
        },
        "requisitos": {
          "caixaMinimo": 22
        },
        "efeitos": {
          "caixa": -22,
          "reputacao": 0,
          "capacidade": -3,
          "crescimento": 12,
          "risco": 10
        },
        "perfil": {
          "planejamento": 1,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 1,
          "riscos": 1
        },
        "feedback": "Você entrou rápido na tendência. A empresa ganhou possibilidade de crescimento, mas assumiu mais risco e pressão operacional."
      },
      {
        "texto": "Investir R$ 8 em uma pesquisa rápida antes de decidir.",
        "custo": {
          "tipo": "fixo",
          "valor": 8
        },
        "requisitos": {
          "caixaMinimo": 8
        },
        "efeitos": {
          "caixa": -8,
          "reputacao": 1,
          "capacidade": 0,
          "crescimento": 5,
          "risco": -5
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 4
        },
        "feedback": "Você comprou informação antes de agir. Reduziu a exposição ao risco, mas pode ter perdido parte do impulso inicial da tendência."
      }
    ],
    "conceito": "Pesquisa de mercado e timing",
    "tags": [
      "marketing",
      "oportunidade",
      "timing"
    ]
  },
  {
    "id": "MKT_002",
    "area": "Marketing",
    "nivel": 2,
    "titulo": "Preço de lançamento",
    "situacao": "Sua empresa vai lançar um produto novo. Concorrentes cobram entre R$ 40 e R$ 60. Você precisa escolher como entrar no mercado.",
    "alternativas": [
      {
        "texto": "Entrar com preço mais baixo para conquistar clientes rapidamente.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 10,
          "reputacao": -2,
          "capacidade": -4,
          "crescimento": 10,
          "risco": 5
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "O preço agressivo trouxe volume e crescimento, mas pressionou sua operação e pode dificultar um reposicionamento futuro."
      },
      {
        "texto": "Entrar com preço premium e investir R$ 12 na apresentação da marca.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 8,
          "capacidade": 0,
          "crescimento": 5,
          "risco": 4
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 2,
          "oportunidades": 3,
          "relacionamento": 5,
          "riscos": 3
        },
        "feedback": "Você apostou em posicionamento e percepção de valor. O crescimento foi mais lento e exigiu investimento inicial."
      }
    ],
    "conceito": "Estratégia de preços e posicionamento",
    "tags": [
      "marketing",
      "preço",
      "posicionamento"
    ]
  },
  {
    "id": "MKT_003",
    "area": "Marketing",
    "nivel": 3,
    "titulo": "Feira regional",
    "situacao": "Uma feira regional acontece neste fim de semana. O estande custa R$ 28. O evento tem grande público, mas você não sabe quantos visitantes são realmente seus potenciais clientes.",
    "alternativas": [
      {
        "texto": "Reservar o estande e aproveitar a visibilidade.",
        "custo": {
          "tipo": "fixo",
          "valor": 28
        },
        "requisitos": {
          "caixaMinimo": 28
        },
        "efeitos": {
          "caixa": -28,
          "reputacao": 7,
          "capacidade": -2,
          "crescimento": 9,
          "risco": 6
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 1,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 2
        },
        "feedback": "A empresa ganhou exposição e oportunidades de contato, mas comprometeu caixa sem garantia de conversão."
      },
      {
        "texto": "Usar R$ 10 em anúncios digitais direcionados ao público local.",
        "custo": {
          "tipo": "fixo",
          "valor": 10
        },
        "requisitos": {
          "caixaMinimo": 10
        },
        "efeitos": {
          "caixa": -10,
          "reputacao": 2,
          "capacidade": 0,
          "crescimento": 6,
          "risco": 1
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 4
        },
        "feedback": "Você preferiu alcance mais controlado e mensurável, mas abriu mão da presença física e do networking do evento."
      }
    ],
    "conceito": "Canais de divulgação e retorno sobre investimento",
    "tags": [
      "marketing",
      "evento",
      "divulgação"
    ]
  },
  {
    "id": "PES_001",
    "area": "Gestão de Pessoas",
    "nivel": 1,
    "titulo": "Talento disputado",
    "situacao": "Um funcionário muito produtivo recebeu proposta de outra empresa. Ele aceita ficar se houver uma melhoria nas condições atuais.",
    "alternativas": [
      {
        "texto": "Conceder aumento imediato de R$ 18.",
        "custo": {
          "tipo": "fixo",
          "valor": 18
        },
        "requisitos": {
          "caixaMinimo": 18
        },
        "efeitos": {
          "caixa": -18,
          "reputacao": 7,
          "capacidade": 5,
          "crescimento": 2,
          "risco": -2
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 1,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 3
        },
        "feedback": "Você protegeu um talento importante e a capacidade da empresa, mas aumentou o custo fixo da operação."
      },
      {
        "texto": "Oferecer bônus futuro condicionado ao resultado do trimestre.",
        "custo": {
          "tipo": "fixo",
          "valor": 5
        },
        "requisitos": {
          "caixaMinimo": 5
        },
        "efeitos": {
          "caixa": -5,
          "reputacao": 3,
          "capacidade": 3,
          "crescimento": 4,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você vinculou a recompensa ao desempenho. Preservou caixa agora, mas manteve alguma incerteza sobre a permanência do profissional."
      },
      {
        "texto": "Oferecer flexibilidade de horário e plano de desenvolvimento.",
        "custo": {
          "tipo": "fixo",
          "valor": 3
        },
        "requisitos": {
          "caixaMinimo": 3
        },
        "efeitos": {
          "caixa": -3,
          "reputacao": 5,
          "capacidade": 1,
          "crescimento": 3,
          "risco": 2
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 3
        },
        "feedback": "Você apostou em benefícios não financeiros. A solução custa pouco, mas pode não ser suficiente se o principal motivo do funcionário for remuneração."
      }
    ],
    "conceito": "Retenção, recompensas e proposta de valor ao empregado",
    "tags": [
      "pessoas",
      "retenção",
      "remuneração"
    ]
  },
  {
    "id": "PES_002",
    "area": "Gestão de Pessoas",
    "nivel": 2,
    "titulo": "Equipe sobrecarregada",
    "situacao": "A demanda aumentou por três semanas. A equipe atual consegue entregar mais, mas já demonstra cansaço.",
    "alternativas": [
      {
        "texto": "Pagar R$ 16 em horas extras para aproveitar a demanda.",
        "custo": {
          "tipo": "fixo",
          "valor": 16
        },
        "requisitos": {
          "caixaMinimo": 16
        },
        "efeitos": {
          "caixa": 4,
          "reputacao": -3,
          "capacidade": 8,
          "crescimento": 7,
          "risco": 6
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 4,
          "oportunidades": 5,
          "relacionamento": 1,
          "riscos": 2
        },
        "feedback": "Você capturou receita e aumentou as entregas, mas elevou desgaste e risco de queda de desempenho da equipe."
      },
      {
        "texto": "Contratar apoio temporário por R$ 24.",
        "custo": {
          "tipo": "fixo",
          "valor": 24
        },
        "requisitos": {
          "caixaMinimo": 24
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 4,
          "capacidade": 10,
          "crescimento": 6,
          "risco": 1
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 2,
          "oportunidades": 4,
          "relacionamento": 4,
          "riscos": 4
        },
        "feedback": "Você distribuiu melhor a carga de trabalho e ampliou a capacidade, mas aceitou um custo maior para um pico que pode ser temporário."
      }
    ],
    "conceito": "Dimensionamento de equipe e capacidade",
    "tags": [
      "pessoas",
      "capacidade",
      "sobrecarga"
    ]
  },
  {
    "id": "PES_003",
    "area": "Gestão de Pessoas",
    "nivel": 3,
    "titulo": "Treinamento ou contratação",
    "situacao": "Sua empresa precisa dominar uma nova ferramenta. Você pode desenvolver alguém da equipe ou contratar alguém que já domine a tecnologia.",
    "alternativas": [
      {
        "texto": "Treinar a equipe por R$ 14. O ganho será mais gradual.",
        "custo": {
          "tipo": "fixo",
          "valor": 14
        },
        "requisitos": {
          "caixaMinimo": 14
        },
        "efeitos": {
          "caixa": -14,
          "reputacao": 5,
          "capacidade": 5,
          "crescimento": 6,
          "risco": -2
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 3,
          "relacionamento": 5,
          "riscos": 4
        },
        "feedback": "Você desenvolveu competências internas e reduziu dependência futura, mas aceitou aprender em ritmo mais lento."
      },
      {
        "texto": "Contratar especialista por R$ 26 para começar imediatamente.",
        "custo": {
          "tipo": "fixo",
          "valor": 26
        },
        "requisitos": {
          "caixaMinimo": 26
        },
        "efeitos": {
          "caixa": -26,
          "reputacao": 1,
          "capacidade": 11,
          "crescimento": 9,
          "risco": 3
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 1,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você comprou velocidade e conhecimento pronto, mas comprometeu mais caixa e criou um custo maior."
      }
    ],
    "conceito": "Desenvolvimento de competências e contratação",
    "tags": [
      "pessoas",
      "treinamento",
      "competências"
    ]
  },
  {
    "id": "OPE_001",
    "area": "Produção e Operações",
    "nivel": 1,
    "titulo": "Máquina parada",
    "situacao": "A principal máquina quebrou e existem pedidos no valor de R$ 70 para entregar nesta semana.",
    "alternativas": [
      {
        "texto": "Fazer o conserto emergencial por R$ 30.",
        "custo": {
          "tipo": "fixo",
          "valor": 30
        },
        "requisitos": {
          "caixaMinimo": 30
        },
        "efeitos": {
          "caixa": 10,
          "reputacao": 5,
          "capacidade": 7,
          "crescimento": 3,
          "risco": -4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 3,
          "oportunidades": 3,
          "relacionamento": 4,
          "riscos": 4
        },
        "feedback": "O reparo consumiu caixa, mas permitiu concluir os pedidos e recuperar a capacidade da operação."
      },
      {
        "texto": "Terceirizar parte da produção por R$ 20.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": 5,
          "reputacao": 3,
          "capacidade": 4,
          "crescimento": 2,
          "risco": 4
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você manteve as entregas com menor desembolso, mas passou a depender temporariamente de um parceiro externo."
      },
      {
        "texto": "Negociar novo prazo com os clientes.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": -7,
          "capacidade": 0,
          "crescimento": -2,
          "risco": 1
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 1,
          "riscos": 4
        },
        "feedback": "Você preservou o caixa e ganhou tempo, mas parte da confiança dos clientes foi comprometida."
      }
    ],
    "conceito": "Continuidade operacional e restrição de recursos",
    "tags": [
      "operações",
      "máquina",
      "caixa"
    ]
  },
  {
    "id": "OPE_002",
    "area": "Produção e Operações",
    "nivel": 2,
    "titulo": "Dobrar a produção",
    "situacao": "Uma rede regional quer comprar o dobro do seu volume atual durante dois meses. A oportunidade exige resposta imediata.",
    "alternativas": [
      {
        "texto": "Aceitar e investir R$ 28 para ampliar temporariamente a estrutura.",
        "custo": {
          "tipo": "fixo",
          "valor": 28
        },
        "requisitos": {
          "caixaMinimo": 28,
          "capacidadeMinima": 45
        },
        "efeitos": {
          "caixa": 2,
          "reputacao": 5,
          "capacidade": 12,
          "crescimento": 14,
          "risco": 8
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 3,
          "riscos": 2
        },
        "feedback": "Você capturou a oportunidade e ampliou a operação, mas passou a trabalhar com margem menor para imprevistos."
      },
      {
        "texto": "Aceitar apenas metade do volume adicional.",
        "custo": {
          "tipo": "fixo",
          "valor": 10
        },
        "requisitos": {
          "caixaMinimo": 10
        },
        "efeitos": {
          "caixa": 5,
          "reputacao": 3,
          "capacidade": 5,
          "crescimento": 8,
          "risco": 2
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 4,
          "riscos": 4
        },
        "feedback": "Você cresceu de forma mais controlada, embora tenha deixado parte do contrato na mesa."
      }
    ],
    "conceito": "Capacidade produtiva e crescimento",
    "tags": [
      "operações",
      "contrato",
      "capacidade"
    ]
  },
  {
    "id": "OPE_003",
    "area": "Produção e Operações",
    "nivel": 3,
    "titulo": "Automatizar agora?",
    "situacao": "Uma máquina nova custa R$ 35 e reduziria tempo de produção. A atual ainda funciona, mas limita o crescimento.",
    "alternativas": [
      {
        "texto": "Comprar a máquina agora por R$ 35.",
        "custo": {
          "tipo": "fixo",
          "valor": 35
        },
        "requisitos": {
          "caixaMinimo": 35
        },
        "efeitos": {
          "caixa": -35,
          "reputacao": 1,
          "capacidade": 14,
          "crescimento": 12,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 1,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você sacrificou liquidez para ampliar capacidade e crescimento futuro."
      },
      {
        "texto": "Adiar a compra e preservar caixa para emergências.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": -2,
          "crescimento": -3,
          "risco": -5
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você preservou segurança financeira, mas continuou com um gargalo que pode limitar novas oportunidades."
      }
    ],
    "conceito": "Investimento em capacidade e liquidez",
    "tags": [
      "operações",
      "automação",
      "investimento"
    ]
  },
  {
    "id": "FIN_001",
    "area": "Finanças",
    "nivel": 1,
    "titulo": "Clientes pagam depois",
    "situacao": "As vendas cresceram, mas muitos clientes pagarão apenas no próximo mês. Nesta semana há R$ 32 em compromissos importantes.",
    "alternativas": [
      {
        "texto": "Antecipar recebíveis. A operação custa R$ 6 em taxas.",
        "custo": {
          "tipo": "fixo",
          "valor": 6
        },
        "requisitos": {
          "caixaMinimo": 6
        },
        "efeitos": {
          "caixa": 20,
          "reputacao": 0,
          "capacidade": 0,
          "crescimento": 2,
          "risco": -3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 4
        },
        "feedback": "Você trouxe dinheiro futuro para o presente e ganhou liquidez, mas abriu mão de parte do resultado em taxas."
      },
      {
        "texto": "Negociar prazo maior com fornecedores.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 8,
          "reputacao": -2,
          "capacidade": 0,
          "crescimento": 0,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você preservou o caixa sem pagar taxas, mas transferiu pressão para a relação com fornecedores."
      }
    ],
    "conceito": "Fluxo de caixa e capital de giro",
    "tags": [
      "finanças",
      "capital-de-giro",
      "fornecedores"
    ]
  },
  {
    "id": "FIN_002",
    "area": "Finanças",
    "nivel": 2,
    "titulo": "Dinheiro sobrando",
    "situacao": "Depois de um bom mês, sua empresa tem uma folga de caixa. Há uma dívida pequena e também uma oportunidade de expansão.",
    "alternativas": [
      {
        "texto": "Usar R$ 20 para reduzir a dívida.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": -20,
          "reputacao": 2,
          "capacidade": 0,
          "crescimento": 1,
          "risco": -10
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você reduziu risco e fortaleceu a segurança financeira, mas deixou menos recursos disponíveis para crescer agora."
      },
      {
        "texto": "Investir R$ 20 em uma pequena expansão.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": -20,
          "reputacao": 1,
          "capacidade": 5,
          "crescimento": 10,
          "risco": 7
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você priorizou crescimento e potencial de retorno, mantendo a dívida e aumentando a exposição financeira."
      }
    ],
    "conceito": "Alocação de recursos, dívida e investimento",
    "tags": [
      "finanças",
      "dívida",
      "investimento"
    ]
  },
  {
    "id": "FIN_003",
    "area": "Finanças",
    "nivel": 3,
    "titulo": "Queda inesperada",
    "situacao": "As vendas caíram por dois meses e o caixa está apertado. Você precisa preservar a operação até a demanda reagir.",
    "alternativas": [
      {
        "texto": "Contratar crédito de R$ 30; o custo futuro aumenta o risco financeiro.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 30,
          "reputacao": 1,
          "capacidade": 3,
          "crescimento": 2,
          "risco": 12
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 2,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "O crédito deu fôlego imediato e preservou a operação, mas criou um compromisso financeiro futuro."
      },
      {
        "texto": "Reduzir despesas e adiar investimentos programados.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 12,
          "reputacao": -2,
          "capacidade": -4,
          "crescimento": -5,
          "risco": -5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você protegeu o caixa sem criar dívida, mas desacelerou a capacidade e o crescimento da empresa."
      }
    ],
    "conceito": "Liquidez, crédito e ajuste de despesas",
    "tags": [
      "finanças",
      "crédito",
      "crise"
    ]
  },
  {
    "id": "CON_001",
    "area": "Contabilidade",
    "nivel": 1,
    "titulo": "Estoque não confere",
    "situacao": "O estoque físico não bate com o sistema. A diferença é pequena, mas o relatório precisa ser entregue amanhã.",
    "alternativas": [
      {
        "texto": "Fazer uma conferência completa por R$ 10 e atrasar parte da rotina.",
        "custo": {
          "tipo": "fixo",
          "valor": 10
        },
        "requisitos": {
          "caixaMinimo": 10
        },
        "efeitos": {
          "caixa": -10,
          "reputacao": 5,
          "capacidade": -2,
          "crescimento": 0,
          "risco": -8
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 1,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você investiu tempo e recursos em informação mais confiável, mas prejudicou parte da rotina imediata."
      },
      {
        "texto": "Fazer uma conferência por amostragem e corrigir apenas divergências mais relevantes.",
        "custo": {
          "tipo": "fixo",
          "valor": 4
        },
        "requisitos": {
          "caixaMinimo": 4
        },
        "efeitos": {
          "caixa": -4,
          "reputacao": 2,
          "capacidade": 0,
          "crescimento": 1,
          "risco": 2
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você buscou equilíbrio entre prazo e confiabilidade, mantendo algum risco residual de divergências."
      }
    ],
    "conceito": "Controle de estoque e qualidade da informação",
    "tags": [
      "contabilidade",
      "estoque",
      "controle"
    ]
  },
  {
    "id": "CON_002",
    "area": "Contabilidade",
    "nivel": 2,
    "titulo": "Expansão ou cautela",
    "situacao": "Um ponto comercial disputado ficou disponível por poucos dias. Sua empresa pode abrir uma segunda unidade, mas a projeção de vendas ainda é incerta.",
    "alternativas": [
      {
        "texto": "Assumir o ponto agora por R$ 32 e aproveitar o momento.",
        "custo": {
          "tipo": "fixo",
          "valor": 32
        },
        "requisitos": {
          "caixaMinimo": 32,
          "crescimentoMinimo": 30
        },
        "efeitos": {
          "caixa": -32,
          "reputacao": 3,
          "capacidade": 8,
          "crescimento": 15,
          "risco": 13
        },
        "perfil": {
          "planejamento": 1,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você priorizou velocidade e oportunidade. O potencial de crescimento aumentou, junto com a exposição financeira."
      },
      {
        "texto": "Gastar R$ 9 em análise de viabilidade, sabendo que o ponto pode ser ocupado por outro negócio.",
        "custo": {
          "tipo": "fixo",
          "valor": 9
        },
        "requisitos": {
          "caixaMinimo": 9
        },
        "efeitos": {
          "caixa": -9,
          "reputacao": 1,
          "capacidade": 0,
          "crescimento": 4,
          "risco": -7
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você reduziu incerteza e protegeu recursos, mas assumiu o custo de eventualmente perder uma oportunidade rara."
      }
    ],
    "conceito": "Análise de viabilidade e decisão de investimento",
    "tags": [
      "contabilidade",
      "viabilidade",
      "expansão"
    ]
  },
  {
    "id": "CON_003",
    "area": "Contabilidade",
    "nivel": 3,
    "titulo": "Fechamento apertado",
    "situacao": "O fechamento do mês está atrasado. Parte dos documentos ainda precisa ser conferida e a gestão quer números rapidamente.",
    "alternativas": [
      {
        "texto": "Entregar um relatório preliminar agora e marcar claramente o que ainda será validado.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 2,
          "capacidade": 2,
          "crescimento": 1,
          "risco": 4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 3,
          "oportunidades": 3,
          "relacionamento": 4,
          "riscos": 3
        },
        "feedback": "Você entregou informação útil rapidamente e deixou as limitações transparentes, mas ainda trabalhou com números provisórios."
      },
      {
        "texto": "Adiar a entrega para conferir tudo antes.",
        "custo": {
          "tipo": "fixo",
          "valor": 5
        },
        "requisitos": {
          "caixaMinimo": 5
        },
        "efeitos": {
          "caixa": -5,
          "reputacao": 4,
          "capacidade": -2,
          "crescimento": 0,
          "risco": -6
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 1,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você priorizou confiabilidade, mas retardou informações que poderiam apoiar decisões imediatas da gestão."
      }
    ],
    "conceito": "Tempestividade e confiabilidade da informação contábil",
    "tags": [
      "contabilidade",
      "relatório",
      "informação"
    ]
  },
  {
    "id": "TRI_001",
    "area": "Tributação",
    "nivel": 1,
    "titulo": "Caixa versus vencimento",
    "situacao": "Uma obrigação tributária de R$ 24 vence hoje. Seu caixa também precisa cobrir despesas operacionais importantes nesta semana.",
    "alternativas": [
      {
        "texto": "Pagar os R$ 24 agora e reduzir a folga financeira.",
        "custo": {
          "tipo": "fixo",
          "valor": 24
        },
        "requisitos": {
          "caixaMinimo": 24
        },
        "efeitos": {
          "caixa": -24,
          "reputacao": 2,
          "capacidade": -2,
          "crescimento": -1,
          "risco": -9
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 1,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você reduziu o risco fiscal, mas deixou menos caixa disponível para as necessidades da operação."
      },
      {
        "texto": "Preservar o caixa hoje e assumir custo adicional de R$ 5 para regularizar depois.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": -1,
          "capacidade": 2,
          "crescimento": 1,
          "risco": 8
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você priorizou a continuidade da operação, mas assumiu encargos e maior exposição fiscal no curto prazo."
      }
    ],
    "conceito": "Gestão de caixa e obrigações tributárias",
    "tags": [
      "tributação",
      "caixa",
      "prazo"
    ]
  },
  {
    "id": "TRI_002",
    "area": "Tributação",
    "nivel": 2,
    "titulo": "Crescimento e enquadramento",
    "situacao": "O faturamento da empresa cresceu e ela está perto de mudar de faixa tributária. Há uma grande venda em negociação para este mês.",
    "alternativas": [
      {
        "texto": "Fechar a venda agora e iniciar imediatamente a adaptação tributária e contábil.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": 8,
          "reputacao": 4,
          "capacidade": 1,
          "crescimento": 12,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 3
        },
        "feedback": "Você aproveitou a venda e aceitou o custo de adaptar a empresa a uma nova realidade tributária."
      },
      {
        "texto": "Negociar a entrega para o próximo período e usar R$ 5 para revisar o planejamento antes.",
        "custo": {
          "tipo": "fixo",
          "valor": 5
        },
        "requisitos": {
          "caixaMinimo": 5
        },
        "efeitos": {
          "caixa": -5,
          "reputacao": -1,
          "capacidade": 0,
          "crescimento": 4,
          "risco": -6
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você ganhou tempo para planejar, mas corre o risco comercial de esfriar a negociação."
      }
    ],
    "conceito": "Planejamento tributário e crescimento empresarial",
    "tags": [
      "tributação",
      "planejamento",
      "crescimento"
    ]
  },
  {
    "id": "TRI_003",
    "area": "Tributação",
    "nivel": 3,
    "titulo": "Benefício com prazo curto",
    "situacao": "Existe um incentivo fiscal para compra de um equipamento, mas o prazo termina hoje. A compra exige R$ 30 e reduzirá bastante seu caixa.",
    "alternativas": [
      {
        "texto": "Comprar agora por R$ 30 e aproveitar o benefício.",
        "custo": {
          "tipo": "fixo",
          "valor": 30
        },
        "requisitos": {
          "caixaMinimo": 30
        },
        "efeitos": {
          "caixa": -30,
          "reputacao": 1,
          "capacidade": 10,
          "crescimento": 9,
          "risco": 7
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você aproveitou o incentivo e fortaleceu a estrutura, mas perdeu liquidez para lidar com imprevistos."
      },
      {
        "texto": "Abrir mão do benefício e manter o caixa disponível.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 0,
          "crescimento": -2,
          "risco": -5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você preservou segurança financeira, mas deixou passar uma oportunidade que poderia reduzir o custo do investimento."
      }
    ],
    "conceito": "Incentivos fiscais, investimento e liquidez",
    "tags": [
      "tributação",
      "incentivo",
      "investimento"
    ]
  },
  {
    "id": "MKT_004",
    "area": "Marketing",
    "nivel": 1,
    "titulo": "Campanha relâmpago",
    "situacao": "Uma data comemorativa começa amanhã. Você ainda não preparou campanha e precisa decidir como usar o orçamento disponível.",
    "alternativas": [
      {
        "texto": "Investir R$ 18 em uma campanha rápida, com mensagem simples e ampla.",
        "custo": {
          "tipo": "fixo",
          "valor": 18
        },
        "requisitos": {
          "caixaMinimo": 18
        },
        "efeitos": {
          "caixa": -18,
          "reputacao": 1,
          "capacidade": -1,
          "crescimento": 8,
          "risco": 5
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você ganhou velocidade e alcance, mas trabalhou com menos tempo para segmentar e testar a mensagem."
      },
      {
        "texto": "Investir R$ 9 em uma ação menor para clientes que já conhecem a marca.",
        "custo": {
          "tipo": "fixo",
          "valor": 9
        },
        "requisitos": {
          "caixaMinimo": 9
        },
        "efeitos": {
          "caixa": -9,
          "reputacao": 5,
          "capacidade": 0,
          "crescimento": 4,
          "risco": -2
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 4
        },
        "feedback": "Você priorizou um público mais conhecido e reduziu o risco, mas abriu mão de parte do alcance."
      }
    ],
    "conceito": "Segmentação e orçamento promocional",
    "tags": [
      "marketing",
      "campanha",
      "segmentação"
    ]
  },
  {
    "id": "MKT_005",
    "area": "Marketing",
    "nivel": 2,
    "titulo": "Cliente famoso",
    "situacao": "Uma pessoa conhecida na cidade quer divulgar sua marca em troca de produtos e R$ 15. Ela tem grande alcance, mas pouca afinidade com seu público atual.",
    "alternativas": [
      {
        "texto": "Aceitar a parceria para aumentar rapidamente a exposição.",
        "custo": {
          "tipo": "fixo",
          "valor": 15
        },
        "requisitos": {
          "caixaMinimo": 15
        },
        "efeitos": {
          "caixa": -15,
          "reputacao": 2,
          "capacidade": -1,
          "crescimento": 9,
          "risco": 7
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 3,
          "riscos": 2
        },
        "feedback": "Você comprou alcance e visibilidade, mas assumiu risco de falar com um público pouco aderente."
      },
      {
        "texto": "Usar R$ 8 em microinfluenciadores menores, porém mais próximos do seu público.",
        "custo": {
          "tipo": "fixo",
          "valor": 8
        },
        "requisitos": {
          "caixaMinimo": 8
        },
        "efeitos": {
          "caixa": -8,
          "reputacao": 5,
          "capacidade": 0,
          "crescimento": 6,
          "risco": 1
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 5,
          "riscos": 4
        },
        "feedback": "Você ganhou menos alcance bruto, mas aumentou a aderência da comunicação."
      }
    ],
    "conceito": "Influência, alcance e aderência de público",
    "tags": [
      "marketing",
      "influenciadores",
      "público"
    ]
  },
  {
    "id": "MKT_006",
    "area": "Marketing",
    "nivel": 2,
    "titulo": "Produto encalhado",
    "situacao": "Um produto tem boa qualidade, mas as vendas estão abaixo do esperado e ocupa espaço importante no estoque.",
    "alternativas": [
      {
        "texto": "Dar desconto de 25% para acelerar as vendas.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 14,
          "reputacao": -3,
          "capacidade": 3,
          "crescimento": 5,
          "risco": 1
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 4,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você liberou estoque e gerou caixa, mas reduziu margem e percepção de valor."
      },
      {
        "texto": "Investir R$ 12 em nova apresentação e divulgação, mantendo o preço.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 6,
          "capacidade": 0,
          "crescimento": 6,
          "risco": 5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 2,
          "oportunidades": 4,
          "relacionamento": 4,
          "riscos": 2
        },
        "feedback": "Você protegeu o preço e reposicionou o produto, mas assumiu custo sem garantia de conversão."
      }
    ],
    "conceito": "Promoção, estoque e posicionamento",
    "tags": [
      "marketing",
      "estoque",
      "promoção"
    ]
  },
  {
    "id": "MKT_007",
    "area": "Marketing",
    "nivel": 3,
    "titulo": "Concorrente agressivo",
    "situacao": "Um concorrente reduziu muito os preços por 30 dias. Seus clientes começaram a comparar as ofertas.",
    "alternativas": [
      {
        "texto": "Acompanhar parcialmente a redução de preço durante o período.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 7,
          "reputacao": -1,
          "capacidade": -3,
          "crescimento": 7,
          "risco": 4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 3,
          "oportunidades": 4,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você defendeu volume e presença no mercado, mas pressionou margem e operação."
      },
      {
        "texto": "Manter o preço e investir R$ 14 em diferenciação e atendimento.",
        "custo": {
          "tipo": "fixo",
          "valor": 14
        },
        "requisitos": {
          "caixaMinimo": 14
        },
        "efeitos": {
          "caixa": -14,
          "reputacao": 8,
          "capacidade": -1,
          "crescimento": 4,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 2,
          "oportunidades": 3,
          "relacionamento": 5,
          "riscos": 3
        },
        "feedback": "Você protegeu posicionamento e relacionamento, mas aceitou vender menos no curto prazo."
      }
    ],
    "conceito": "Concorrência e diferenciação",
    "tags": [
      "marketing",
      "concorrência",
      "preço"
    ]
  },
  {
    "id": "MKT_008",
    "area": "Marketing",
    "nivel": 3,
    "titulo": "Novo público",
    "situacao": "Uma escola quer comprar seus produtos em volume, mas exige embalagem e comunicação diferentes das usadas hoje.",
    "alternativas": [
      {
        "texto": "Adaptar a oferta por R$ 20 para atender esse novo público.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": -20,
          "reputacao": 4,
          "capacidade": -4,
          "crescimento": 12,
          "risco": 6
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 2
        },
        "feedback": "Você abriu um novo mercado, mas aumentou complexidade e pressão sobre a operação."
      },
      {
        "texto": "Manter o foco no público atual e preservar a estrutura existente.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 2,
          "capacidade": 2,
          "crescimento": -2,
          "risco": -5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você preservou foco e capacidade, mas deixou uma oportunidade de expansão passar."
      }
    ],
    "conceito": "Segmentação e expansão de mercado",
    "tags": [
      "marketing",
      "novo mercado",
      "segmentação"
    ]
  },
  {
    "id": "PES_004",
    "area": "Gestão de Pessoas",
    "nivel": 1,
    "titulo": "Horário flexível",
    "situacao": "Uma pessoa da equipe pede horário flexível por dois meses. Ela entrega bem, mas sua função exige contato frequente com colegas.",
    "alternativas": [
      {
        "texto": "Conceder flexibilidade e reorganizar as rotinas.",
        "custo": {
          "tipo": "fixo",
          "valor": 3
        },
        "requisitos": {
          "caixaMinimo": 3
        },
        "efeitos": {
          "caixa": -3,
          "reputacao": 6,
          "capacidade": -2,
          "crescimento": 1,
          "risco": 2
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 3
        },
        "feedback": "Você fortaleceu confiança e retenção, mas criou necessidade de coordenação adicional."
      },
      {
        "texto": "Manter o horário atual e oferecer ajuda em outra forma.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": -1,
          "capacidade": 2,
          "crescimento": 1,
          "risco": -2
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 4
        },
        "feedback": "Você preservou previsibilidade operacional, mas corre o risco de reduzir motivação."
      }
    ],
    "conceito": "Flexibilidade, clima e organização do trabalho",
    "tags": [
      "pessoas",
      "flexibilidade",
      "clima"
    ]
  },
  {
    "id": "PES_005",
    "area": "Gestão de Pessoas",
    "nivel": 2,
    "titulo": "Líder técnico",
    "situacao": "Seu melhor técnico foi promovido a líder, mas a equipe começou a reclamar da forma como ele distribui tarefas.",
    "alternativas": [
      {
        "texto": "Investir R$ 12 em desenvolvimento de liderança e acompanhar por um mês.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 6,
          "capacidade": 3,
          "crescimento": 3,
          "risco": -5
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 5
        },
        "feedback": "Você tratou a causa e preservou o potencial do líder, mas consumiu tempo e recursos."
      },
      {
        "texto": "Retirar a liderança e colocá-lo novamente apenas na função técnica.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 1,
          "capacidade": 5,
          "crescimento": -1,
          "risco": 1
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você recuperou eficiência técnica rapidamente, mas abriu mão de desenvolver uma liderança interna."
      }
    ],
    "conceito": "Desenvolvimento de liderança",
    "tags": [
      "pessoas",
      "liderança",
      "desenvolvimento"
    ]
  },
  {
    "id": "PES_006",
    "area": "Gestão de Pessoas",
    "nivel": 2,
    "titulo": "Meta difícil",
    "situacao": "A empresa precisa aumentar vendas neste mês. A equipe comercial acredita que a meta proposta é muito alta.",
    "alternativas": [
      {
        "texto": "Manter a meta e oferecer bônus de R$ 14 se ela for atingida.",
        "custo": {
          "tipo": "fixo",
          "valor": 14
        },
        "requisitos": {
          "caixaMinimo": 14
        },
        "efeitos": {
          "caixa": -6,
          "reputacao": 0,
          "capacidade": -2,
          "crescimento": 9,
          "risco": 7
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você preservou ambição e potencial de resultado, mas aumentou pressão sobre a equipe."
      },
      {
        "texto": "Reduzir a meta e concentrar o esforço em clientes com maior chance de compra.",
        "custo": {
          "tipo": "fixo",
          "valor": 5
        },
        "requisitos": {
          "caixaMinimo": 5
        },
        "efeitos": {
          "caixa": -5,
          "reputacao": 4,
          "capacidade": 2,
          "crescimento": 5,
          "risco": -3
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você tornou a meta mais realista e focada, mas abriu mão de parte do crescimento possível."
      }
    ],
    "conceito": "Metas, incentivos e desempenho",
    "tags": [
      "pessoas",
      "metas",
      "incentivos"
    ]
  },
  {
    "id": "PES_007",
    "area": "Gestão de Pessoas",
    "nivel": 3,
    "titulo": "Conflito entre setores",
    "situacao": "Vendas promete prazos curtos para fechar negócios, enquanto a produção diz que não consegue cumprir todos eles.",
    "alternativas": [
      {
        "texto": "Dar autonomia a Vendas para fechar oportunidades e ajustar a produção depois.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 9,
          "reputacao": -5,
          "capacidade": -6,
          "crescimento": 10,
          "risco": 10
        },
        "perfil": {
          "planejamento": 1,
          "financeiro": 4,
          "oportunidades": 5,
          "relacionamento": 1,
          "riscos": 1
        },
        "feedback": "Você aumentou as vendas rapidamente, mas elevou conflito, risco de atraso e desgaste interno."
      },
      {
        "texto": "Criar uma regra conjunta de prazo e limitar algumas vendas.",
        "custo": {
          "tipo": "fixo",
          "valor": 6
        },
        "requisitos": {
          "caixaMinimo": 6
        },
        "efeitos": {
          "caixa": -6,
          "reputacao": 5,
          "capacidade": 5,
          "crescimento": 4,
          "risco": -5
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 5
        },
        "feedback": "Você alinhou as áreas e reduziu promessas inviáveis, mas perdeu velocidade comercial."
      }
    ],
    "conceito": "Integração entre áreas e metas conflitantes",
    "tags": [
      "pessoas",
      "conflito",
      "integração"
    ]
  },
  {
    "id": "PES_008",
    "area": "Gestão de Pessoas",
    "nivel": 3,
    "titulo": "Profissional-chave",
    "situacao": "Uma funcionária conhece um processo que ninguém mais domina. Treinar outra pessoa custa R$ 16 e reduzirá temporariamente a produtividade.",
    "alternativas": [
      {
        "texto": "Treinar uma segunda pessoa agora.",
        "custo": {
          "tipo": "fixo",
          "valor": 16
        },
        "requisitos": {
          "caixaMinimo": 16
        },
        "efeitos": {
          "caixa": -16,
          "reputacao": 4,
          "capacidade": 2,
          "crescimento": 2,
          "risco": -10
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 2,
          "oportunidades": 2,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você reduziu dependência e risco operacional, mas aceitou custo e perda de produtividade no curto prazo."
      },
      {
        "texto": "Manter a estrutura atual enquanto o desempenho está bom.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 4,
          "crescimento": 3,
          "risco": 9
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você preservou resultado imediato, mas aumentou a dependência de uma única pessoa."
      }
    ],
    "conceito": "Sucessão e gestão do conhecimento",
    "tags": [
      "pessoas",
      "sucessão",
      "risco"
    ]
  },
  {
    "id": "OPE_004",
    "area": "Produção e Operações",
    "nivel": 1,
    "titulo": "Fornecedor mais barato",
    "situacao": "Um novo fornecedor oferece matéria-prima 15% mais barata, mas ainda não tem histórico com sua empresa.",
    "alternativas": [
      {
        "texto": "Comprar um lote maior para aproveitar o preço.",
        "custo": {
          "tipo": "fixo",
          "valor": 18
        },
        "requisitos": {
          "caixaMinimo": 18
        },
        "efeitos": {
          "caixa": -18,
          "reputacao": 0,
          "capacidade": 5,
          "crescimento": 5,
          "risco": 8
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 5,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você reduziu custo potencial e garantiu estoque, mas assumiu risco de qualidade e entrega."
      },
      {
        "texto": "Comprar um lote pequeno de teste por R$ 7 antes de ampliar.",
        "custo": {
          "tipo": "fixo",
          "valor": 7
        },
        "requisitos": {
          "caixaMinimo": 7
        },
        "efeitos": {
          "caixa": -7,
          "reputacao": 1,
          "capacidade": 1,
          "crescimento": 2,
          "risco": -4
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você reduziu a incerteza com um teste, mas aproveitou menos a condição comercial inicial."
      }
    ],
    "conceito": "Compras, fornecedores e qualidade",
    "tags": [
      "operações",
      "fornecedor",
      "qualidade"
    ]
  },
  {
    "id": "OPE_005",
    "area": "Produção e Operações",
    "nivel": 2,
    "titulo": "Fila de pedidos",
    "situacao": "Os pedidos aumentaram e o prazo médio de entrega começou a subir.",
    "alternativas": [
      {
        "texto": "Aceitar todos os pedidos e trabalhar no limite da capacidade.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 14,
          "reputacao": -5,
          "capacidade": -7,
          "crescimento": 10,
          "risco": 9
        },
        "perfil": {
          "planejamento": 1,
          "financeiro": 5,
          "oportunidades": 5,
          "relacionamento": 1,
          "riscos": 1
        },
        "feedback": "Você capturou receita, mas aumentou atrasos e desgaste da operação."
      },
      {
        "texto": "Limitar novos pedidos e investir R$ 10 para reorganizar o fluxo.",
        "custo": {
          "tipo": "fixo",
          "valor": 10
        },
        "requisitos": {
          "caixaMinimo": 10
        },
        "efeitos": {
          "caixa": -10,
          "reputacao": 5,
          "capacidade": 8,
          "crescimento": 3,
          "risco": -5
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 2,
          "relacionamento": 5,
          "riscos": 5
        },
        "feedback": "Você protegeu a qualidade e melhorou o fluxo, mas desacelerou as vendas no curto prazo."
      }
    ],
    "conceito": "Gestão da capacidade e filas",
    "tags": [
      "operações",
      "capacidade",
      "prazo"
    ]
  },
  {
    "id": "OPE_006",
    "area": "Produção e Operações",
    "nivel": 2,
    "titulo": "Estoque de segurança",
    "situacao": "Um item essencial costuma atrasar. Manter estoque extra custa R$ 16 e ocupa espaço.",
    "alternativas": [
      {
        "texto": "Criar estoque de segurança por R$ 16.",
        "custo": {
          "tipo": "fixo",
          "valor": 16
        },
        "requisitos": {
          "caixaMinimo": 16
        },
        "efeitos": {
          "caixa": -16,
          "reputacao": 3,
          "capacidade": 5,
          "crescimento": 2,
          "risco": -8
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 2,
          "oportunidades": 2,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você comprou segurança operacional, mas imobilizou dinheiro e espaço."
      },
      {
        "texto": "Comprar apenas quando necessário e preservar caixa.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 1,
          "crescimento": 2,
          "risco": 8
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você manteve liquidez e flexibilidade, mas ficou mais exposto a atrasos do fornecedor."
      }
    ],
    "conceito": "Estoque de segurança e capital empatado",
    "tags": [
      "operações",
      "estoque",
      "risco"
    ]
  },
  {
    "id": "OPE_007",
    "area": "Produção e Operações",
    "nivel": 3,
    "titulo": "Qualidade ou velocidade",
    "situacao": "Um grande pedido chegou com prazo apertado. Uma inspeção completa custa R$ 8 e pode atrasar parte da entrega.",
    "alternativas": [
      {
        "texto": "Fazer inspeção completa antes de enviar.",
        "custo": {
          "tipo": "fixo",
          "valor": 8
        },
        "requisitos": {
          "caixaMinimo": 8
        },
        "efeitos": {
          "caixa": -8,
          "reputacao": 7,
          "capacidade": -3,
          "crescimento": 2,
          "risco": -7
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 1,
          "relacionamento": 5,
          "riscos": 5
        },
        "feedback": "Você protegeu a qualidade e reduziu risco de retrabalho, mas sacrificou velocidade."
      },
      {
        "texto": "Fazer inspeção por amostragem para cumprir o prazo.",
        "custo": {
          "tipo": "fixo",
          "valor": 3
        },
        "requisitos": {
          "caixaMinimo": 3
        },
        "efeitos": {
          "caixa": -3,
          "reputacao": 2,
          "capacidade": 4,
          "crescimento": 5,
          "risco": 4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 4,
          "oportunidades": 4,
          "relacionamento": 3,
          "riscos": 3
        },
        "feedback": "Você ganhou velocidade e reduziu custo, mantendo algum risco de falhas não detectadas."
      }
    ],
    "conceito": "Controle de qualidade e prazo",
    "tags": [
      "operações",
      "qualidade",
      "prazo"
    ]
  },
  {
    "id": "OPE_008",
    "area": "Produção e Operações",
    "nivel": 3,
    "titulo": "Espaço no limite",
    "situacao": "Seu espaço atual está quase cheio. Alugar outro custa R$ 25 por período, mas permitiria aceitar mais pedidos.",
    "alternativas": [
      {
        "texto": "Alugar o espaço e ampliar a operação.",
        "custo": {
          "tipo": "fixo",
          "valor": 25
        },
        "requisitos": {
          "caixaMinimo": 25
        },
        "efeitos": {
          "caixa": -25,
          "reputacao": 2,
          "capacidade": 12,
          "crescimento": 11,
          "risco": 6
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 3,
          "riscos": 2
        },
        "feedback": "Você criou capacidade para crescer, mas assumiu um custo fixo maior."
      },
      {
        "texto": "Reorganizar o espaço atual por R$ 9 e crescer mais devagar.",
        "custo": {
          "tipo": "fixo",
          "valor": 9
        },
        "requisitos": {
          "caixaMinimo": 9
        },
        "efeitos": {
          "caixa": -9,
          "reputacao": 1,
          "capacidade": 6,
          "crescimento": 5,
          "risco": -2
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 4
        },
        "feedback": "Você ganhou eficiência com menor custo, mas manteve um limite mais próximo para novas vendas."
      }
    ],
    "conceito": "Layout, capacidade e custo fixo",
    "tags": [
      "operações",
      "espaço",
      "capacidade"
    ]
  },
  {
    "id": "FIN_004",
    "area": "Finanças",
    "nivel": 1,
    "titulo": "Pagamento à vista",
    "situacao": "Um fornecedor oferece 8% de desconto para pagamento à vista. Pagar agora custa R$ 24 e reduz sua reserva.",
    "alternativas": [
      {
        "texto": "Pagar à vista e aproveitar o desconto.",
        "custo": {
          "tipo": "fixo",
          "valor": 24
        },
        "requisitos": {
          "caixaMinimo": 24
        },
        "efeitos": {
          "caixa": -24,
          "reputacao": 2,
          "capacidade": 1,
          "crescimento": 1,
          "risco": 4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 2
        },
        "feedback": "Você economizou na compra, mas reduziu sua liquidez para emergências."
      },
      {
        "texto": "Pagar no prazo normal e manter a reserva disponível.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 1,
          "capacidade": 0,
          "crescimento": 0,
          "risco": -4
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 1,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você preservou caixa e flexibilidade, mas abriu mão de uma economia certa."
      }
    ],
    "conceito": "Desconto financeiro e liquidez",
    "tags": [
      "finanças",
      "desconto",
      "liquidez"
    ]
  },
  {
    "id": "FIN_005",
    "area": "Finanças",
    "nivel": 2,
    "titulo": "Cliente grande a prazo",
    "situacao": "Um cliente confiável quer fazer um pedido grande, mas só pode pagar em 45 dias.",
    "alternativas": [
      {
        "texto": "Aceitar o pedido e financiar o intervalo com seu próprio caixa.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": -8,
          "reputacao": 5,
          "capacidade": -3,
          "crescimento": 12,
          "risco": 8
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 5,
          "riscos": 2
        },
        "feedback": "Você fortaleceu relacionamento e crescimento, mas comprometeu capital de giro."
      },
      {
        "texto": "Aceitar apenas metade do pedido para reduzir a pressão financeira.",
        "custo": {
          "tipo": "fixo",
          "valor": 8
        },
        "requisitos": {
          "caixaMinimo": 8
        },
        "efeitos": {
          "caixa": -2,
          "reputacao": 2,
          "capacidade": 1,
          "crescimento": 6,
          "risco": 2
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você preservou equilíbrio financeiro, mas capturou apenas parte da oportunidade."
      }
    ],
    "conceito": "Prazo de recebimento e capital de giro",
    "tags": [
      "finanças",
      "clientes",
      "prazo"
    ]
  },
  {
    "id": "FIN_006",
    "area": "Finanças",
    "nivel": 2,
    "titulo": "Reserva ou divulgação",
    "situacao": "Você tem R$ 30 separados como reserva. Uma campanha promissora surgiu de última hora e custa R$ 20.",
    "alternativas": [
      {
        "texto": "Usar parte da reserva para financiar a campanha.",
        "custo": {
          "tipo": "fixo",
          "valor": 20
        },
        "requisitos": {
          "caixaMinimo": 20
        },
        "efeitos": {
          "caixa": -20,
          "reputacao": 4,
          "capacidade": 0,
          "crescimento": 10,
          "risco": 8
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 1
        },
        "feedback": "Você transformou reserva em oportunidade de crescimento, mas reduziu proteção contra imprevistos."
      },
      {
        "texto": "Manter a reserva intacta e perder a campanha.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 0,
          "crescimento": -2,
          "risco": -7
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você preservou segurança financeira, mas deixou uma oportunidade de divulgação passar."
      }
    ],
    "conceito": "Reserva financeira e custo de oportunidade",
    "tags": [
      "finanças",
      "reserva",
      "oportunidade"
    ]
  },
  {
    "id": "FIN_007",
    "area": "Finanças",
    "nivel": 3,
    "titulo": "Parcelar equipamento",
    "situacao": "Um equipamento de R$ 36 pode ser pago à vista ou em parcelas que somam R$ 44.",
    "alternativas": [
      {
        "texto": "Pagar R$ 36 à vista.",
        "custo": {
          "tipo": "fixo",
          "valor": 36
        },
        "requisitos": {
          "caixaMinimo": 36
        },
        "efeitos": {
          "caixa": -36,
          "reputacao": 1,
          "capacidade": 10,
          "crescimento": 7,
          "risco": 7
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você reduziu o custo total, mas sacrificou bastante liquidez imediatamente."
      },
      {
        "texto": "Pagar R$ 12 agora e assumir parcelas futuras.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 1,
          "capacidade": 10,
          "crescimento": 7,
          "risco": 10
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 3,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você preservou caixa hoje, mas elevou o custo e criou compromissos futuros."
      }
    ],
    "conceito": "Valor do dinheiro, parcelamento e liquidez",
    "tags": [
      "finanças",
      "parcelamento",
      "investimento"
    ]
  },
  {
    "id": "FIN_008",
    "area": "Finanças",
    "nivel": 3,
    "titulo": "Sócio investidor",
    "situacao": "Um investidor oferece R$ 40 para acelerar o crescimento em troca de participação nas decisões.",
    "alternativas": [
      {
        "texto": "Aceitar o investimento e dividir parte do controle.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 40,
          "reputacao": 3,
          "capacidade": 6,
          "crescimento": 14,
          "risco": 5
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 4,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 3
        },
        "feedback": "Você ganhou capital e capacidade de crescimento, mas reduziu autonomia sobre decisões futuras."
      },
      {
        "texto": "Recusar e crescer apenas com recursos próprios.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 1,
          "capacidade": 1,
          "crescimento": 2,
          "risco": -5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você preservou controle e risco menor, mas manteve um ritmo de crescimento mais limitado."
      }
    ],
    "conceito": "Fontes de financiamento e controle",
    "tags": [
      "finanças",
      "investidor",
      "capital"
    ]
  },
  {
    "id": "CON_004",
    "area": "Contabilidade",
    "nivel": 1,
    "titulo": "Relatório para decidir",
    "situacao": "Você precisa decidir se aumenta o estoque. As vendas cresceram, mas os registros de alguns produtos estão desatualizados.",
    "alternativas": [
      {
        "texto": "Investir R$ 8 para atualizar os registros antes da compra.",
        "custo": {
          "tipo": "fixo",
          "valor": 8
        },
        "requisitos": {
          "caixaMinimo": 8
        },
        "efeitos": {
          "caixa": -8,
          "reputacao": 2,
          "capacidade": 1,
          "crescimento": 2,
          "risco": -6
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 2,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você melhorou a qualidade da informação antes de comprometer recursos, mas perdeu velocidade."
      },
      {
        "texto": "Comprar apenas os itens com maior giro usando os dados disponíveis.",
        "custo": {
          "tipo": "fixo",
          "valor": 12
        },
        "requisitos": {
          "caixaMinimo": 12
        },
        "efeitos": {
          "caixa": -12,
          "reputacao": 1,
          "capacidade": 4,
          "crescimento": 5,
          "risco": 4
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 4,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você agiu com informação incompleta, mas limitou a exposição ao focar nos itens mais conhecidos."
      }
    ],
    "conceito": "Informação contábil para decisão",
    "tags": [
      "contabilidade",
      "informação",
      "estoque"
    ]
  },
  {
    "id": "CON_005",
    "area": "Contabilidade",
    "nivel": 2,
    "titulo": "Custo real do produto",
    "situacao": "Um produto vende bem, mas você ainda não sabe com precisão quanto cada unidade realmente custa.",
    "alternativas": [
      {
        "texto": "Investir R$ 10 para calcular custos antes de ampliar a produção.",
        "custo": {
          "tipo": "fixo",
          "valor": 10
        },
        "requisitos": {
          "caixaMinimo": 10
        },
        "efeitos": {
          "caixa": -10,
          "reputacao": 1,
          "capacidade": 0,
          "crescimento": 3,
          "risco": -7
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você ganhou base mais segura para decidir preço e volume, mas adiou a expansão."
      },
      {
        "texto": "Aumentar a produção agora enquanto a demanda está alta.",
        "custo": {
          "tipo": "fixo",
          "valor": 16
        },
        "requisitos": {
          "caixaMinimo": 16
        },
        "efeitos": {
          "caixa": -16,
          "reputacao": 2,
          "capacidade": 6,
          "crescimento": 11,
          "risco": 9
        },
        "perfil": {
          "planejamento": 1,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 2,
          "riscos": 1
        },
        "feedback": "Você aproveitou a demanda, mas pode descobrir depois que a margem era menor do que parecia."
      }
    ],
    "conceito": "Custos e margem de contribuição",
    "tags": [
      "contabilidade",
      "custos",
      "margem"
    ]
  },
  {
    "id": "CON_006",
    "area": "Contabilidade",
    "nivel": 2,
    "titulo": "Sistema novo",
    "situacao": "Um sistema integrado custa R$ 22 e reduziria retrabalho entre vendas, estoque e financeiro.",
    "alternativas": [
      {
        "texto": "Implantar o sistema agora.",
        "custo": {
          "tipo": "fixo",
          "valor": 22
        },
        "requisitos": {
          "caixaMinimo": 22
        },
        "efeitos": {
          "caixa": -22,
          "reputacao": 3,
          "capacidade": 8,
          "crescimento": 6,
          "risco": -3
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 2,
          "oportunidades": 4,
          "relacionamento": 3,
          "riscos": 4
        },
        "feedback": "Você investiu em integração e eficiência, mas comprometeu caixa e enfrentará adaptação inicial."
      },
      {
        "texto": "Manter planilhas atuais e investir R$ 6 em padronização dos controles.",
        "custo": {
          "tipo": "fixo",
          "valor": 6
        },
        "requisitos": {
          "caixaMinimo": 6
        },
        "efeitos": {
          "caixa": -6,
          "reputacao": 1,
          "capacidade": 3,
          "crescimento": 2,
          "risco": 1
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você melhorou os controles com baixo custo, mas manteve limites de integração e escala."
      }
    ],
    "conceito": "Sistemas de informação e controles internos",
    "tags": [
      "contabilidade",
      "sistema",
      "controle"
    ]
  },
  {
    "id": "CON_007",
    "area": "Contabilidade",
    "nivel": 3,
    "titulo": "Lucro ou caixa?",
    "situacao": "O relatório mostra lucro, mas o caixa está baixo porque muitos clientes ainda não pagaram.",
    "alternativas": [
      {
        "texto": "Reduzir novos gastos até os recebimentos entrarem.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 5,
          "reputacao": -1,
          "capacidade": -2,
          "crescimento": -3,
          "risco": -6
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você priorizou liquidez e segurança, mas desacelerou a operação mesmo com resultado contábil positivo."
      },
      {
        "texto": "Manter os investimentos previstos confiando nos recebimentos futuros.",
        "custo": {
          "tipo": "fixo",
          "valor": 14
        },
        "requisitos": {
          "caixaMinimo": 14
        },
        "efeitos": {
          "caixa": -14,
          "reputacao": 2,
          "capacidade": 4,
          "crescimento": 8,
          "risco": 9
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 3,
          "riscos": 1
        },
        "feedback": "Você manteve o ritmo de crescimento, mas aumentou a vulnerabilidade caso os recebimentos atrasem."
      }
    ],
    "conceito": "Diferença entre lucro e caixa",
    "tags": [
      "contabilidade",
      "lucro",
      "caixa"
    ]
  },
  {
    "id": "CON_008",
    "area": "Contabilidade",
    "nivel": 3,
    "titulo": "Dados para o banco",
    "situacao": "O banco pede informações detalhadas para analisar um crédito. Preparar tudo custa R$ 7 em tempo e apoio profissional.",
    "alternativas": [
      {
        "texto": "Preparar informações completas para tentar uma condição melhor.",
        "custo": {
          "tipo": "fixo",
          "valor": 7
        },
        "requisitos": {
          "caixaMinimo": 7
        },
        "efeitos": {
          "caixa": -7,
          "reputacao": 5,
          "capacidade": 0,
          "crescimento": 3,
          "risco": -4
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 3,
          "relacionamento": 4,
          "riscos": 5
        },
        "feedback": "Você investiu em transparência e aumentou a chance de melhores condições, mas consumiu recursos."
      },
      {
        "texto": "Enviar apenas os dados básicos e aceitar uma análise mais rápida.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 0,
          "crescimento": 2,
          "risco": 4
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 3,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você economizou tempo, mas pode receber limite menor ou condições menos favoráveis."
      }
    ],
    "conceito": "Informação contábil e acesso a crédito",
    "tags": [
      "contabilidade",
      "crédito",
      "transparência"
    ]
  },
  {
    "id": "TRI_004",
    "area": "Tributação",
    "nivel": 1,
    "titulo": "Comprar agora ou depois",
    "situacao": "Uma compra importante terá imposto maior no próximo mês, mas antecipá-la agora custa R$ 26 e reduz seu caixa.",
    "alternativas": [
      {
        "texto": "Antecipar a compra por R$ 26.",
        "custo": {
          "tipo": "fixo",
          "valor": 26
        },
        "requisitos": {
          "caixaMinimo": 26
        },
        "efeitos": {
          "caixa": -26,
          "reputacao": 0,
          "capacidade": 5,
          "crescimento": 4,
          "risco": 5
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 4,
          "oportunidades": 4,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você evitou um custo tributário futuro e garantiu o item, mas reduziu sua liquidez atual."
      },
      {
        "texto": "Comprar depois e preservar caixa agora.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 0,
          "crescimento": 0,
          "risco": -3
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 4,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você manteve liquidez, mas aceitou um custo maior no futuro."
      }
    ],
    "conceito": "Tributos, timing e fluxo de caixa",
    "tags": [
      "tributação",
      "compra",
      "caixa"
    ]
  },
  {
    "id": "TRI_005",
    "area": "Tributação",
    "nivel": 2,
    "titulo": "Crédito tributário",
    "situacao": "Um fornecedor mais caro permite aproveitar um benefício tributário; outro é mais barato, mas não oferece essa vantagem.",
    "alternativas": [
      {
        "texto": "Comprar do fornecedor mais caro por R$ 22 e aproveitar o benefício.",
        "custo": {
          "tipo": "fixo",
          "valor": 22
        },
        "requisitos": {
          "caixaMinimo": 22
        },
        "efeitos": {
          "caixa": -18,
          "reputacao": 2,
          "capacidade": 3,
          "crescimento": 3,
          "risco": -4
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 3,
          "relacionamento": 3,
          "riscos": 5
        },
        "feedback": "Você olhou além do preço de compra e considerou o efeito tributário, mas desembolsou mais agora."
      },
      {
        "texto": "Comprar do fornecedor mais barato por R$ 16 e preservar caixa.",
        "custo": {
          "tipo": "fixo",
          "valor": 16
        },
        "requisitos": {
          "caixaMinimo": 16
        },
        "efeitos": {
          "caixa": -16,
          "reputacao": 1,
          "capacidade": 3,
          "crescimento": 2,
          "risco": 2
        },
        "perfil": {
          "planejamento": 3,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 3
        },
        "feedback": "Você reduziu o desembolso imediato, mas abriu mão de um benefício que poderia melhorar o custo total."
      }
    ],
    "conceito": "Custo total e efeitos tributários",
    "tags": [
      "tributação",
      "fornecedor",
      "crédito"
    ]
  },
  {
    "id": "TRI_006",
    "area": "Tributação",
    "nivel": 2,
    "titulo": "Regime de tributação",
    "situacao": "A empresa cresceu e dois regimes tributários possíveis têm vantagens diferentes dependendo da margem e das despesas.",
    "alternativas": [
      {
        "texto": "Investir R$ 9 em uma simulação antes da escolha.",
        "custo": {
          "tipo": "fixo",
          "valor": 9
        },
        "requisitos": {
          "caixaMinimo": 9
        },
        "efeitos": {
          "caixa": -9,
          "reputacao": 2,
          "capacidade": 0,
          "crescimento": 3,
          "risco": -8
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 5,
          "oportunidades": 2,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você gastou para reduzir incerteza e alinhar o regime ao perfil real da empresa."
      },
      {
        "texto": "Manter o regime atual por mais um período para evitar custo de mudança.",
        "custo": {
          "tipo": "fixo",
          "valor": 0
        },
        "requisitos": {},
        "efeitos": {
          "caixa": 0,
          "reputacao": 0,
          "capacidade": 1,
          "crescimento": 1,
          "risco": 5
        },
        "perfil": {
          "planejamento": 2,
          "financeiro": 4,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 2
        },
        "feedback": "Você evitou custo e mudança imediata, mas pode continuar em uma estrutura menos eficiente."
      }
    ],
    "conceito": "Regimes tributários e planejamento",
    "tags": [
      "tributação",
      "regime",
      "planejamento"
    ]
  },
  {
    "id": "TRI_007",
    "area": "Tributação",
    "nivel": 3,
    "titulo": "Venda para outro estado",
    "situacao": "Um cliente de outro estado oferece um pedido grande. A operação tem custos tributários e logísticos que sua equipe ainda não domina totalmente.",
    "alternativas": [
      {
        "texto": "Aceitar e contratar apoio especializado por R$ 14.",
        "custo": {
          "tipo": "fixo",
          "valor": 14
        },
        "requisitos": {
          "caixaMinimo": 14
        },
        "efeitos": {
          "caixa": 2,
          "reputacao": 5,
          "capacidade": -2,
          "crescimento": 12,
          "risco": 3
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 3,
          "oportunidades": 5,
          "relacionamento": 4,
          "riscos": 4
        },
        "feedback": "Você aproveitou a oportunidade com suporte técnico, mas reduziu margem e aumentou complexidade."
      },
      {
        "texto": "Recusar por enquanto e preparar a empresa para vender fora do estado depois.",
        "custo": {
          "tipo": "fixo",
          "valor": 6
        },
        "requisitos": {
          "caixaMinimo": 6
        },
        "efeitos": {
          "caixa": -6,
          "reputacao": 1,
          "capacidade": 3,
          "crescimento": 2,
          "risco": -6
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 4,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você evitou um risco que ainda não dominava, mas deixou receita e aprendizado para depois."
      }
    ],
    "conceito": "Tributação interestadual e expansão",
    "tags": [
      "tributação",
      "expansão",
      "complexidade"
    ]
  },
  {
    "id": "TRI_008",
    "area": "Tributação",
    "nivel": 3,
    "titulo": "Prazo fiscal ou venda",
    "situacao": "No último dia de uma obrigação fiscal, surge uma oportunidade comercial que exige atenção total da pequena equipe.",
    "alternativas": [
      {
        "texto": "Priorizar a obrigação e responder ao cliente algumas horas depois.",
        "custo": {
          "tipo": "fixo",
          "valor": 4
        },
        "requisitos": {
          "caixaMinimo": 4
        },
        "efeitos": {
          "caixa": -4,
          "reputacao": -1,
          "capacidade": -1,
          "crescimento": 1,
          "risco": -8
        },
        "perfil": {
          "planejamento": 5,
          "financeiro": 3,
          "oportunidades": 1,
          "relacionamento": 2,
          "riscos": 5
        },
        "feedback": "Você protegeu a conformidade e reduziu risco, mas pode perder velocidade comercial."
      },
      {
        "texto": "Priorizar o cliente e contratar apoio emergencial por R$ 11 para cumprir a obrigação.",
        "custo": {
          "tipo": "fixo",
          "valor": 11
        },
        "requisitos": {
          "caixaMinimo": 11
        },
        "efeitos": {
          "caixa": -11,
          "reputacao": 5,
          "capacidade": 1,
          "crescimento": 6,
          "risco": 1
        },
        "perfil": {
          "planejamento": 4,
          "financeiro": 2,
          "oportunidades": 5,
          "relacionamento": 5,
          "riscos": 4
        },
        "feedback": "Você tentou preservar os dois objetivos, mas pagou mais por uma solução emergencial."
      }
    ],
    "conceito": "Prioridades, conformidade e custo de urgência",
    "tags": [
      "tributação",
      "prazo",
      "prioridade"
    ]
  }
];
