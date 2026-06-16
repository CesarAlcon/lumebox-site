export type Author = {
  name: string
  role: string
  photo: string
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
    photo: '/author/cesar_alcon.jpg',
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
    slug: 'como-estruturar-crm-para-vendas-b2b',
    title: 'Como estruturar um CRM para acelerar o ciclo de vendas B2B',
    description:
      'A maioria das empresas usa o CRM apenas como agenda. Veja como transformá-lo em inteligência de vendas com o Bitrix24.',
    publishedAt: '2026-07-08',
    tags: ['CRM', 'Vendas', 'B2B', 'Bitrix24'],
    author: AUTHORS.cesar,
    excerpt:
      'A maioria das empresas usa o CRM apenas como agenda. Veja como transformá-lo em inteligência de vendas.',
    wordCount: 0,
    conclusions: [],
    content: '',
    draft: true,
  },
  {
    slug: 'diagnostico-antes-do-investimento',
    title: 'Diagnóstico antes de investimento: por que 80% das empresas erram a sequência',
    description:
      'Investir em marketing sem diagnóstico é como medicar sem exame. Por que a sequência importa — e como acertar.',
    publishedAt: '2026-07-22',
    tags: ['Estratégia', 'Diagnóstico', 'Marketing'],
    author: AUTHORS.cesar,
    excerpt:
      'Investir em marketing sem diagnóstico é como medicar sem exame. Por que a sequência importa — e como acertar.',
    wordCount: 0,
    conclusions: [],
    content: '',
    draft: true,
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
