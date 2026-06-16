import type { StaticImageData } from 'next/image'
import cesarPhoto from '@/assets/lumebox/cesar_alcon.jpg'

export type Author = {
  name: string
  role: string
  photo: string | StaticImageData
}

export type Post = {
  slug: string
  title: string
  description: string
  publishedAt: string       // "YYYY-MM-DD"
  tags: string[]
  author: Author
  excerpt: string
  wordCount: number
  conclusions: string[]
  content: string           // raw HTML
  draft?: boolean
}

export const AUTHORS: Record<string, Author> = {
  cesar: {
    name: 'César Alcon',
    role: 'Fundador, LumeBox',
    photo: cesarPhoto,
  },
}

const ARTICLE_1_CONTENT = `
<p>Você não tem problema de marketing. Você tem problema de método.</p>

<p>Essa é a primeira coisa que digo quando uma empresa chega até nós. Geralmente o CEO está frustrado. Já trocou de agência duas vezes. Já investiu em tráfego pago, em redes sociais, em conteúdo. O dinheiro saiu. O resultado não apareceu na mesma proporção.</p>

<p>E a conclusão que ele tirou é a errada: que marketing não funciona para o negócio dele.</p>

<p class="callout">Marketing funciona. O que não funciona é marketing desconectado do funil de vendas.</p>

<h2>A pergunta que ninguém faz — e deveria</h2>

<p>Quando fazemos um diagnóstico, não começamos perguntando sobre redes sociais, verba de mídia ou identidade visual.</p>

<p>Começamos perguntando:</p>

<ul>
  <li>Quanto tempo leva para fechar um contrato, do primeiro contato até a assinatura?</li>
  <li>Quantos leads chegam por mês — e quantos viram reunião de diagnóstico?</li>
  <li>Das reuniões de diagnóstico, quantas viram proposta?</li>
  <li>Das propostas enviadas, quantas fecham?</li>
</ul>

<p>Na maioria das vezes, a resposta é silêncio.</p>

<p>A empresa não sabe. Investe em marketing há meses — às vezes anos — sem entender em qual etapa do funil o negócio está vazando.</p>

<p>E aí fica jogando verba em topo de funil — postagens, anúncios, conteúdo — enquanto o problema real está no meio: o lead chega, mas some antes de virar proposta.</p>

<h2>O erro de medir canal em vez de funil</h2>

<p>Tem um ponto que quase todo mundo erra no B2B de ciclo longo: a obsessão em medir resultado por canal.</p>

<p><em>"Esse cliente veio do Instagram."</em> <em>"Esse veio do Google."</em> <em>"Esse veio de indicação."</em></p>

<p>O problema é que no B2B de ciclo longo, o cliente raramente vem de um canal só. Ele viu um post seu há três meses. Depois recebeu indicação de um colega. Depois assistiu um vídeo seu. Depois pesquisou no Google. Depois entrou no site. Só então pediu contato.</p>

<p>Atribuir esse cliente a um canal único é mentira bonita.</p>

<p class="callout">A pergunta certa não é "de qual canal veio esse lead?". A pergunta certa é "em quanto tempo esse lead percorreu o funil inteiro — e onde travou?"</p>

<p>Quando você entende o ciclo de vendas real da sua empresa, o marketing deixa de ser um departamento de postagens e vira um acelerador de negócios.</p>

<h2>Marketing e comercial precisam sentar à mesma mesa</h2>

<p>Essa é uma das coisas que mais me incomoda quando entro em uma empresa nova.</p>

<p>Marketing faz as postagens. Comercial faz as reuniões. Os dois times não conversam.</p>

<p>O resultado é previsível: o marketing produz conteúdo desconectado da realidade da mesa de negociação. Fala de coisas que parecem relevantes, mas não são as dores que o comercial encontra todo dia.</p>

<p>O marketing precisa estar no dia a dia do comercial. Precisa saber:</p>

<ul>
  <li>Quais são as principais objeções que aparecem nas reuniões de vendas?</li>
  <li>O que os prospects perguntam que a apresentação comercial não responde?</li>
  <li>Qual é a linguagem que o cliente usa para descrever a própria dor?</li>
  <li>Por que os contratos que não fecham não fecharam?</li>
</ul>

<p>Essas respostas estão na cabeça do time comercial. E precisam virar conteúdo, ajuste de mensagem, melhoria na proposta.</p>

<p class="callout">Postagens bonitas nas redes sociais, desconectadas da realidade da negociação e das dores reais do cliente, não trazem resultado. Trazem curtida. E curtida não paga boleto.</p>

<h2>Por que trocar de agência não resolve</h2>

<p>Essa é a decisão mais comum — e quase sempre a errada.</p>

<p>A empresa fica frustrada com os resultados, culpa a agência e troca. Seis meses depois, está na mesma situação com uma agência diferente.</p>

<p>O problema não era a agência.</p>

<p>Era a ausência de uma estratégia clara antes de contratar qualquer agência. Agência executa. Estratégia direciona. Se você não tem estratégia, a melhor agência do mundo vai executar na direção errada — só com mais qualidade.</p>

<p class="callout">É como contratar o melhor motorista de Fórmula 1 para uma corrida sem saber em qual pista você está.</p>

<h2>O que fazer nos próximos 30 dias</h2>

<p>Não precisa de uma revolução. Precisa de clareza.</p>

<h3>Semana 1 — Mapeie o ciclo de vendas real</h3>
<p>Quanto tempo, em média, leva do primeiro contato até o contrato assinado? Semanas? Meses? Se não souber responder com um número, esse é o primeiro problema a resolver.</p>

<h3>Semana 2 — Meça as taxas de conversão por etapa</h3>
<p>Lead para reunião. Reunião para proposta. Proposta para contrato. Cada etapa tem uma taxa. Onde está a maior perda? É lá que o marketing precisa atuar.</p>

<h3>Semana 3 — Sente marketing e comercial juntos</h3>
<p>Peça ao time comercial para listar as cinco principais objeções que ouve nas reuniões. Essas objeções precisam virar pauta de conteúdo, ajuste de proposta, melhoria de mensagem.</p>

<h3>Semana 4 — Execute uma ação e meça</h3>
<p>Não tente resolver tudo ao mesmo tempo. Escolha o gargalo principal, execute uma ação específica e meça o resultado. Marketing que não é medido não é marketing — é aposta.</p>

<h2>A pergunta que muda tudo</h2>

<p>No final de todo diagnóstico que fazemos, existe uma pergunta que separa as empresas que crescem das que ficam no lugar:</p>

<p class="callout">Você consegue prever quanto vai faturar no próximo trimestre — com base em dados do funil, não em esperança?</p>

<p>Se a resposta for não, o problema não é o marketing. É que marketing e comercial ainda não falam a mesma língua.</p>

<p>Quando isso muda, tudo muda.</p>
`.trim()

const ARTICLE_2_CONTENT = `
<p>Seu marketing está gerando leads. O problema é outro.</p>

<p>Essa é uma das situações mais frustrantes que encontro nas empresas. O time de marketing mostra os números: leads crescendo, alcance aumentando, custo por lead caindo. E o comercial olha para aqueles números e não reconhece a realidade que vive todo dia.</p>

<p>Os leads chegam. Mas não avançam.</p>

<p>A reunião não acontece. A proposta não é solicitada. O contrato não fecha.</p>

<p class="callout">Volume sem conversão não é resultado. É ilusão de resultado.</p>

<h2>O erro de medir só o topo do funil</h2>

<p>Marketing B2B tem uma armadilha clássica: a obsessão pelo volume de leads.</p>

<p>Volume é fácil de medir. Aparece bem em relatório. Justifica investimento. Mas sozinho, não diz nada sobre o que está acontecendo com o negócio.</p>

<p>Existem quatro indicadores que marketing e comercial precisam olhar juntos. Não separados — juntos. São eles que formam o painel que de fato dá previsibilidade para o crescimento:</p>

<ul>
  <li>Volume de leads — o combustível do pipeline</li>
  <li>Taxa de conversão de MQL para SQL — a qualidade do que entra</li>
  <li>Taxa de conversão de oportunidade para reunião de diagnóstico — a efetividade da abordagem</li>
  <li>Taxa de conversão de proposta para implantação — a saúde do fechamento</li>
</ul>

<p>Quando você olha só para o primeiro, está olhando para o combustível sem saber se o motor está funcionando.</p>

<h2>Volume subindo, conversão caindo: o sinal de alerta que ninguém quer ver</h2>

<p>Tem um padrão que aparece com frequência nos diagnósticos que fazemos.</p>

<p>A empresa investe em tráfego pago, aumenta o volume de leads, comemora o crescimento da base. Mas três meses depois, o faturamento não se move na mesma proporção.</p>

<p>O que aconteceu?</p>

<p class="callout">O volume subiu, mas o perfil errou.</p>

<p>Quando volume sobe e conversão cai, você não está gerando mais negócio — você está comprando lead ruim. Está atraindo pessoas que não têm o perfil, o orçamento ou a urgência para comprar o que você vende.</p>

<p>E aí você tem dois problemas ao mesmo tempo: gasta mais em marketing e sobrecarrega o comercial com oportunidades que não vão a lugar nenhum.</p>

<h2>O que o comercial sabe que o marketing não está ouvindo</h2>

<p>Isso me leva a um ponto que repito em todo diagnóstico:</p>

<p class="callout">Marketing garante volume e origem. Comercial devolve feedback sobre qualidade — não opinião, evidência.</p>

<p>Toda semana, o time de vendas tem informação valiosa sobre o que está chegando pelo funil. Qual canal traz o lead que fecha. Qual traz o lead que some depois da primeira conversa. Qual perfil de empresa avança para proposta e qual abandona na reunião de diagnóstico.</p>

<p>Esse feedback precisa virar dado. E esse dado precisa chegar no marketing para ajustar segmentação, mensagem e oferta.</p>

<p>Quando isso não acontece, marketing e comercial vivem em mundos paralelos. Um celebra volume. O outro reclama de qualidade. E os dois têm razão — o problema é que não estão conversando.</p>

<h2>Como usar o volume de leads do jeito certo</h2>

<p>O volume de leads é um indicador de entrada. Ele responde uma pergunta simples: temos combustível suficiente no pipeline?</p>

<p>Se cai, o pipeline futuro cai junto. Isso é urgência real.</p>

<p>Mas se sobe sem que as taxas de conversão acompanhem, a urgência é diferente: você não tem problema de volume, tem problema de qualidade ou de processo.</p>

<p>As ações que mais movem esse indicador — quando bem direcionadas — são:</p>

<ul>
  <li>Captação em eventos com abordagem pré, durante e pós</li>
  <li>Conteúdo com CTA claro, não apenas conteúdo de branding</li>
  <li>Landing pages com promessa, prova e formulário objetivo</li>
  <li>Tráfego pago com segmentação coerente com o ICP real</li>
  <li>Programa de indicação com rotina e incentivo</li>
  <li>ABM — ações ativas direcionadas a contas específicas, marketing e comercial juntos</li>
</ul>

<p>A palavra-chave em todos esses pontos é coerência. O canal certo, para o perfil certo, com a mensagem certa.</p>

<h2>A pergunta que organiza tudo</h2>

<p>Antes de aumentar o investimento em geração de leads, responda:</p>

<p class="callout">Os leads que chegam hoje têm o perfil do cliente que fecha com a gente?</p>

<p>Se a resposta for não ou não sei, o problema não é volume. É critério.</p>

<p>Defina o ICP com o comercial. Cruze com o histórico de clientes que fecharam. Ajuste a segmentação. Só então escale.</p>

<p>Volume sem critério é dinheiro jogado no funil errado.</p>
`.trim()

const ARTICLE_3_CONTENT = `
<p>O lead chegou. Respondeu. Pediu mais informações. E sumiu.</p>

<p>Você conhece esse roteiro. O comercial abordou, a conversa começou, o interesse parecia real. E então, do nada, silêncio.</p>

<p>Não é azar. Não é o lead sendo difícil. Quase sempre é um dos quatro problemas abaixo — e todos têm solução.</p>

<h2>O que esse indicador mede — e por que importa</h2>

<p>A taxa de conversão de novas oportunidades para reunião de diagnóstico é um dos indicadores mais reveladores do funil B2B.</p>

<p>Ela mede uma coisa específica: a capacidade de transformar interesse em compromisso. Sair do "quero saber mais" para uma agenda marcada, com o decisor presente e disposto a investir tempo.</p>

<p>Quando essa taxa cai, a empresa sente como se o problema fosse o mercado, a crise, a concorrência. Mas quase nunca é.</p>

<p class="callout">Quando essa taxa cai, normalmente é um desses quatro problemas.</p>

<h2>Problema 1: mensagem fraca</h2>

<p>A abordagem não cria tensão. Não gera urgência. Não faz o prospect sentir que tem algo a perder se não marcar a reunião.</p>

<p>Mensagem fraca soa assim: <em>"Olá, somos a empresa X e gostaríamos de apresentar nossas soluções."</em></p>

<p>Mensagem forte soa assim: <em>"Identifiquei que empresas do seu segmento estão perdendo em média 30% das oportunidades na etapa de proposta por falta de processo comercial estruturado. Posso te mostrar como diagnosticamos isso em menos de duas horas?"</em></p>

<p>A diferença não é agressividade. É especificidade e relevância.</p>

<h2>Problema 2: público errado</h2>

<p>Você está falando com a pessoa certa?</p>

<p>No B2B, existem decisores e influenciadores. Falar com o influenciador sem mapear o decisor é marcar reunião que não vai a lugar nenhum — porque quem tem poder de dizer sim não está na conversa.</p>

<p>Antes de qualquer abordagem, mapeie: quem decide? Quem influencia? Quem vai usar? Quem aprova o orçamento? Cada um precisa de uma abordagem diferente.</p>

<h2>Problema 3: falta de prova</h2>

<p>O prospect até se interessa. Mas não tem confiança suficiente para investir o tempo de uma reunião.</p>

<p>Isso acontece quando a empresa não tem presença construída. Sem cases, sem conteúdo, sem referências, sem sinal de autoridade — a reunião parece um risco para ele.</p>

<p>A solução não é encher de depoimentos genéricos. É ter casos de sucesso segmentados por perfil de cliente, com contexto, número e resultado. Prova certa para o decisor certo.</p>

<h2>Problema 4: follow-up sem cadência</h2>

<p>Esse é o mais comum — e o mais silencioso.</p>

<p>O prospect demonstrou interesse. O comercial mandou uma mensagem. Não respondeu. E o comercial desistiu.</p>

<p>No B2B de ciclo longo, o primeiro contato raramente converte. O segundo também não. A venda acontece na cadência — quantidade, qualidade e ritmo de contatos ao longo do tempo.</p>

<p>Sem cadência definida, o follow-up vira esforço individual e inconsistente. Cada vendedor faz do seu jeito. E o lead que poderia fechar em 90 dias some depois da segunda tentativa.</p>

<h2>O que marketing pode fazer para resolver isso</h2>

<p>Marketing não fecha essa taxa sozinho. Mas tem um papel direto em três dos quatro problemas:</p>

<ul>
  <li>Mensagem fraca — marketing precisa pesquisar e testar mensagens com o comercial, não criar em isolamento</li>
  <li>Público errado — marketing define ICP junto com comercial, baseado em quem fechou, não em quem imagina que compraria</li>
  <li>Falta de prova — marketing produz cases, conteúdo técnico e presença que chegam antes da abordagem comercial</li>
</ul>

<p>O quarto problema — cadência — é operação comercial. Mas marketing pode apoiar com automação de nutrição para manter o lead aquecido enquanto o comercial segue a cadência.</p>

<h2>A regra prática</h2>

<p class="callout">Se essa taxa está baixa na sua empresa, não contrate mais vendedores antes de resolver a mensagem, o público e a prova.</p>

<p>Mais vendedor com a mesma mensagem fraca só escala o problema.</p>

<p>Corrija o que está quebrando antes de aumentar o volume. Esse é o trabalho de marketing e comercial sentados à mesma mesa.</p>
`.trim()

const ARTICLE_4_CONTENT = `
<p>Mandar proposta é fácil. Fechar é outra conversa.</p>

<p>Toda empresa que já investiu em vendas B2B conhece esse momento. A reunião foi bem. O prospect pareceu interessado. A proposta foi elaborada com cuidado e enviada no prazo. E então começou a espera.</p>

<p>Dias. Semanas. Um follow-up. Outro. Silêncio.</p>

<p>Isso não é falta de sorte. É sinal de que algo quebrou antes da proposta ser enviada.</p>

<h2>O que a taxa de conversão de proposta revela</h2>

<p>A taxa de conversão de proposta para implantação é o indicador mais honesto sobre a saúde do seu processo de vendas.</p>

<p>Ela revela três coisas ao mesmo tempo:</p>

<ul>
  <li>Se o diagnóstico foi feito de verdade — ou foi só uma apresentação disfarçada de diagnóstico</li>
  <li>Se o preço está posicionado com valor — ou se depende de desconto para fechar</li>
  <li>Se o time entende maturidade de venda B2B — mapear decisores, conduzir negociação, reduzir risco percebido</li>
</ul>

<p>Quando essa taxa é saudável, significa que o cliente enxerga valor suficiente para pagar o preço sem precisar que você ceda. Quando está baixa, o problema raramente é o preço.</p>

<p class="callout">O problema é que o valor não foi construído antes da proposta chegar.</p>

<h2>O diagnóstico que precede a proposta</h2>

<p>Proposta boa começa no diagnóstico. Não na planilha de preços.</p>

<p>Um diagnóstico bem feito documenta seis coisas no CRM:</p>

<ul>
  <li>Cenário atual do cliente — onde ele está hoje</li>
  <li>Dor — o que está travando ou custando</li>
  <li>Impacto — quanto essa dor custa em dinheiro, tempo ou risco</li>
  <li>Urgência — por que resolver agora e não em seis meses</li>
  <li>Critério de decisão — o que ele vai usar para escolher entre você e a concorrência</li>
  <li>Riscos percebidos — o que ele teme que dê errado</li>
</ul>

<p>Quando a proposta é construída em cima dessas seis informações, ela não parece uma cotação. Ela parece a resposta exata para o problema que ele mesmo descreveu.</p>

<p class="callout">Proposta desconectada do diagnóstico é cotação com logo bonito.</p>

<h2>O papel do marketing no fechamento</h2>

<p>Aqui tem um ponto que pouca gente discute: marketing tem um papel direto na taxa de fechamento.</p>

<p>Não na negociação em si — isso é operação comercial. Mas na percepção de valor que chega antes, durante e depois da proposta.</p>

<p>O que marketing pode preparar para apoiar o fechamento:</p>

<ul>
  <li>Cases de sucesso segmentados por tipo de cliente e serviço — com números, contexto e antes/depois</li>
  <li>Materiais de quebra de objeção: comparativo de abordagem, guia de implantação, FAQ para as objeções mais comuns</li>
  <li>Provas de autoridade: presença em eventos, conteúdo técnico, depoimentos reais</li>
</ul>

<p>Quando o prospect pesquisa a empresa depois da reunião e encontra conteúdo sólido, cases reais e presença consistente, a proposta já tem metade do trabalho feito.</p>

<p>Quando não encontra nada — ou encontra um site genérico sem substância — a proposta chega em terreno de desconfiança.</p>

<h2>Os sinais de um negócio com alta chance de fechar</h2>

<p>No CRM, um negócio saudável tem sinais claros. Se esses elementos estão documentados, a chance de fechar é alta:</p>

<ul>
  <li>Diagnóstico completo registrado com as seis informações acima</li>
  <li>Decisor identificado e envolvido — não só o contato inicial</li>
  <li>Critérios de decisão claros e acordados</li>
  <li>Histórico de pontos de contato registrado — sem gap de comunicação</li>
  <li>Proposta conectada ao diagnóstico, com valor e risco tratados</li>
  <li>Próximo passo agendado — data e responsável definidos</li>
  <li>Materiais de prova anexados — cases, comparativos, plano de implantação</li>
</ul>

<p>Se algum desses elementos está faltando quando a proposta sai, você está torcendo — não vendendo.</p>

<h2>Defesa de preço começa no diagnóstico</h2>

<p class="callout">Desconto não é estratégia de vendas. É sinal de que o valor não foi construído.</p>

<p>Quando o cliente pede desconto, a resposta correta não é ceder — é voltar ao diagnóstico. Retomar o impacto que ele mesmo descreveu. Mostrar o custo de não resolver. Conectar o preço ao valor entregue.</p>

<p>Isso só é possível se o diagnóstico foi feito de verdade e está documentado. É por isso que CRM bem alimentado não é detalhe operacional — é condição para vender com margem.</p>

<p>Ganhar com mão de ferro e perder na implantação é sinal de venda mal qualificada. O objetivo não é fechar qualquer negócio. É fechar o negócio certo — aquele que vai dar resultado para o cliente e para a empresa.</p>
`.trim()

const ARTICLE_5_CONTENT = `
<p>Marketing mede alcance. Comercial mede pipeline. E os dois acham que estão fazendo bem o trabalho.</p>

<p>O problema é que eles estão medindo coisas diferentes, em momentos diferentes, com critérios diferentes. E ninguém está medindo o que realmente importa: o que acontece entre o primeiro contato e o contrato assinado.</p>

<p>Existe um conjunto de quatro indicadores que, quando marketing e comercial olham juntos, muda completamente a conversa sobre crescimento. Não são métricas de vaidade. São métricas de receita.</p>

<h2>Por que a maioria das empresas não mede isso</h2>

<p>A resposta honesta é que medir esses quatro indicadores exige duas coisas que a maioria das empresas não tem ao mesmo tempo: CRM bem alimentado e alinhamento real entre os dois times.</p>

<p>Sem CRM, os dados não existem. Sem alinhamento, cada time define as métricas do seu jeito e ninguém consegue cruzar as informações.</p>

<p>O resultado é que marketing reporta CPL e alcance. Comercial reporta propostas enviadas e negócios fechados. E ninguém consegue responder a pergunta mais importante:</p>

<p class="callout">De onde vêm os clientes que fecham — e o que acontece com eles pelo caminho?</p>

<h2>Indicador 1 — Volume de leads</h2>

<p>É o combustível do pipeline. Mede quantos leads entram no funil em um período.</p>

<p>O que esse número revela além do óbvio: se o volume cai, o pipeline futuro cai. Mas se o volume sobe e as conversões caem, você está atraindo o perfil errado — e pagando por isso.</p>

<p>Ponto de alinhamento: marketing garante volume e origem. Comercial devolve feedback semanal sobre qualidade por canal. Não opinião — evidência. Quais leads avançaram. Quais sumiram. Por quê.</p>

<h2>Indicador 2 — Taxa de conversão de MQL para SQL</h2>

<p>MQL é o lead que marketing qualificou. SQL é o lead que o comercial confirmou como oportunidade real.</p>

<p>Esse indicador separa geração de volume de geração de negócio. Ele protege o comercial de pipeline inflado — cheio de oportunidades que não vão a lugar nenhum — e protege o marketing de ser avaliado só por quantidade.</p>

<p>Quando essa taxa é baixa, as causas mais comuns são: lead fora do ICP, abordagem inadequada para o contexto B2B ou tempo de resposta fora do SLA.</p>

<p class="callout">Velocidade de atendimento importa mais do que parece. Lead qualificado que espera 48 horas para ser contatado já esfriou.</p>

<h2>Indicador 3 — Taxa de conversão de oportunidade para reunião de diagnóstico</h2>

<p>Esse é o indicador que mostra se você consegue transformar interesse em compromisso.</p>

<p>Passar de "quero saber mais" para uma agenda marcada com o decisor presente exige quatro coisas: mensagem que cria urgência, abordagem para o perfil certo, prova de credibilidade e cadência de follow-up.</p>

<p>Se essa taxa cai, normalmente é um desses quatro elementos falhando. E a boa notícia é que todos têm solução — desde que marketing e comercial trabalhem juntos para diagnosticar qual é o gargalo real.</p>

<h2>Indicador 4 — Taxa de conversão de proposta para implantação</h2>

<p>Esse é o mais revelador de todos.</p>

<p>Ele mostra se a proposta foi construída em cima de um diagnóstico real ou se foi só uma cotação bem formatada. Mostra se o preço está posicionado com valor ou se depende de desconto para fechar. E mostra se o time tem maturidade para conduzir negociação B2B.</p>

<p>Quando essa taxa é saudável, o cliente enxerga valor suficiente para pagar sem negociar na base do desconto. Quando está baixa, o problema raramente é o preço — é que o valor não foi construído antes da proposta chegar.</p>

<h2>Como criar o painel conjunto</h2>

<p>Esses quatro indicadores funcionam como um sistema. Você não pode otimizar um isoladamente sem entender o que está acontecendo nos outros.</p>

<p>O passo a passo para implementar:</p>

<ul>
  <li>Defina as etapas do funil de forma acordada entre marketing e comercial — com critérios claros para o que é MQL, SAL e SQL na sua empresa</li>
  <li>Configure o CRM para registrar a data de entrada e saída em cada etapa</li>
  <li>Estabeleça uma reunião semanal curta entre os dois times para revisar os números — não para debater opiniões, mas para analisar dados</li>
  <li>Identifique o indicador com a pior taxa e concentre esforço ali antes de otimizar os outros</li>
</ul>

<p class="callout">O gargalo do funil raramente está onde a empresa acha que está.</p>

<p>Marketing acha que o problema é volume. Comercial acha que o problema é qualidade. Na maioria das vezes, o problema está na taxa de conversão entre uma etapa e outra — e só aparece quando os dois times olham para o mesmo número ao mesmo tempo.</p>

<h2>O que muda quando esses times se alinham</h2>

<p>Quando marketing e comercial compartilham os mesmos indicadores, três coisas mudam:</p>

<ul>
  <li>As discussões sobre investimento em marketing ganham base — você sabe qual canal traz o lead que fecha, não só o que traz mais volume</li>
  <li>O comercial para de reclamar de "lead ruim" sem dados — porque agora tem os dados para mostrar exatamente onde está o problema</li>
  <li>A previsibilidade de receita deixa de ser estimativa e vira cálculo — volume de leads × taxa de conversão × ticket médio × ciclo de vendas</li>
</ul>

<p>Crescimento previsível não é meta. É consequência de processo. E processo começa com os dois times olhando para o mesmo painel.</p>
`.trim()

export const POSTS: Post[] = [
  {
    slug: 'por-que-seu-marketing-gasta-e-nao-vende',
    title: 'Por que seu marketing gasta e não vende — e o que fazer nos próximos 30 dias',
    description:
      'Descubra por que empresas que investem em marketing continuam sem resultado — e o plano de 30 dias para alinhar marketing e comercial em torno do funil de vendas.',
    publishedAt: '2026-06-16',
    tags: ['Marketing', 'Comercial', 'Dados', 'Estratégia', 'B2B'],
    author: AUTHORS.cesar,
    excerpt:
      'Você não tem problema de marketing. Você tem problema de método. Essa é a primeira coisa que digo quando uma empresa chega até nós — e o CEO quase sempre fica em silêncio.',
    wordCount: 1120,
    conclusions: [
      'Marketing sem conexão com o funil de vendas é investimento sem retorno mensurável.',
      'No B2B de ciclo longo, a pergunta certa é onde o lead trava no funil — não de qual canal ele veio.',
      'As objeções da mesa de negociação precisam virar pauta de conteúdo e ajuste de mensagem.',
      'Trocar de agência sem estratégia é trocar o motorista sem saber em qual pista você está.',
      'Crescimento previsível começa quando marketing e comercial medem o mesmo funil.',
    ],
    content: ARTICLE_1_CONTENT,
  },
  {
    slug: 'volume-de-leads-nao-e-tudo',
    title: 'Volume de leads não é tudo: o que o seu pipeline está escondendo',
    description:
      'Volume de leads subindo e vendas paradas? Entenda o que o seu pipeline está escondendo — e como usar os 4 indicadores certos para alinhar marketing e comercial.',
    publishedAt: '2026-06-17',
    tags: ['Marketing', 'Comercial', 'Dados', 'B2B', 'Funil'],
    author: AUTHORS.cesar,
    excerpt:
      'Seu marketing está gerando leads. O problema é outro. O time de marketing mostra os números — e o comercial não reconhece a realidade que vive todo dia.',
    wordCount: 813,
    conclusions: [
      'Volume de leads sem taxa de conversão é ilusão de resultado — medir só o topo do funil não revela a saúde do negócio.',
      'Volume subindo com conversão caindo é sinal de perfil errado, não de crescimento.',
      'O feedback semanal do comercial sobre qualidade dos leads precisa virar dado para ajustar segmentação e mensagem.',
      'Antes de escalar volume, defina o ICP com base em quem fecha — não em quem você imagina que compraria.',
    ],
    content: ARTICLE_2_CONTENT,
  },
  {
    slug: 'por-que-seu-lead-some-antes-da-reuniao',
    title: 'Por que seu lead some entre o interesse e a reunião — e como resolver',
    description:
      'O lead chegou, demonstrou interesse — e sumiu antes da reunião. Entenda as quatro causas reais desse problema e como marketing e comercial podem resolvê-lo juntos.',
    publishedAt: '2026-06-18',
    tags: ['Marketing', 'Comercial', 'Funil', 'B2B', 'Vendas'],
    author: AUTHORS.cesar,
    excerpt:
      'O lead chegou. Respondeu. Pediu mais informações. E sumiu. Não é azar — quase sempre é um dos quatro problemas abaixo, e todos têm solução.',
    wordCount: 742,
    conclusions: [
      'A taxa de conversão de oportunidade para reunião revela a capacidade de transformar interesse em compromisso.',
      'Mensagem fraca, público errado, falta de prova e follow-up sem cadência são as quatro causas reais do sumiço de leads.',
      'Marketing tem papel direto em três dos quatro problemas — mensagem, público e prova.',
      'Contratar mais vendedores com a mesma mensagem fraca só escala o problema.',
    ],
    content: ARTICLE_3_CONTENT,
  },
  {
    slug: 'proposta-enviada-nao-e-negocio-fechado',
    title: 'Proposta enviada não é negócio fechado: o que separa uma boa proposta de uma que fecha',
    description:
      'Sua empresa envia propostas e não fecha? Entenda o que diferencia uma proposta que convence de uma que fecha — e o papel do diagnóstico, do CRM e do marketing nesse processo.',
    publishedAt: '2026-06-19',
    tags: ['Comercial', 'Vendas', 'B2B', 'Estratégia', 'Diagnóstico'],
    author: AUTHORS.cesar,
    excerpt:
      'Mandar proposta é fácil. Fechar é outra conversa. Se o silêncio vem depois da proposta, algo quebrou antes dela ser enviada.',
    wordCount: 816,
    conclusions: [
      'A taxa de conversão de proposta é o indicador mais honesto sobre a saúde do processo de vendas.',
      'Proposta que fecha começa no diagnóstico — não na planilha de preços.',
      'Marketing tem papel direto no fechamento: cases segmentados, materiais de quebra de objeção e provas de autoridade.',
      'Desconto não é estratégia — é sinal de que o valor não foi construído antes da proposta chegar.',
    ],
    content: ARTICLE_4_CONTENT,
  },
  {
    slug: 'os-4-indicadores-que-marketing-e-comercial-precisam-olhar-juntos',
    title: 'Os 4 indicadores que marketing e comercial precisam olhar juntos — e por que a maioria das empresas não mede nenhum deles',
    description:
      'A maioria das empresas mede marketing de um lado e comercial do outro. Conheça os 4 indicadores compartilhados que criam previsibilidade de receita quando os dois times olham para o mesmo painel.',
    publishedAt: '2026-06-20',
    tags: ['Marketing', 'Comercial', 'Dados', 'B2B', 'Estratégia', 'Funil'],
    author: AUTHORS.cesar,
    excerpt:
      'Marketing mede alcance. Comercial mede pipeline. E os dois acham que estão fazendo bem o trabalho. O problema é que ninguém está medindo o que realmente importa.',
    wordCount: 980,
    conclusions: [
      'Marketing e comercial medem coisas diferentes — os 4 indicadores compartilhados criam a linguagem comum para crescimento previsível.',
      'Sem CRM bem alimentado e alinhamento real entre os times, os dados necessários simplesmente não existem.',
      'O gargalo do funil raramente está onde a empresa acha — só aparece quando os dois times olham para o mesmo número.',
      'Previsibilidade de receita não é meta, é consequência de processo com indicadores compartilhados.',
    ],
    content: ARTICLE_5_CONTENT,
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function readingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200))
}
