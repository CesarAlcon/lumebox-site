# Design System — Regras de UI

> **Diretriz central:** Evite a estética genérica de IA. Nada de gradientes azuis-roxos, cards flutuantes sem propósito, ícones de "cérebro/rede neural", ou layouts que pareçam um SaaS de 2022. Prefira personalidade visual forte, intenção editorial e escolhas que surpreendam positivamente.

---

## 1. Escala Tipográfica

Base: `16px` (1rem). Escala modular de razão **1.25** (Major Third).

| Token         | Tamanho   | Uso                                      |
|---------------|-----------|------------------------------------------|
| `text-xs`     | 12px      | Labels, metadados, legendas              |
| `text-sm`     | 14px      | Texto auxiliar, captions, notas          |
| `text-base`   | 16px      | Corpo de texto principal                 |
| `text-lg`     | 20px      | Subtítulos, destaques de parágrafo       |
| `text-xl`     | 24px      | Títulos de seção (h3)                    |
| `text-2xl`    | 32px      | Títulos de página (h2)                   |
| `text-3xl`    | 40px      | Hero / títulos primários (h1)            |
| `text-4xl`    | 56px      | Display / editorial de impacto           |

**Regras:**
- Line-height: `1.5` para corpo, `1.2` para headings.
- Nunca misturar mais de 2 famílias tipográficas.
- Peso mínimo para texto em fundo escuro: `400`. Para fundo claro com pouco contraste: `500`.
- Evitar `font-size` abaixo de 12px em qualquer contexto.

---

## 2. Sistema de Espaçamento (Grid Base 8px)

Toda medida de espaçamento é múltiplo de **8px**. Para ajustes finos, usar **4px**.

| Token    | Valor | Uso típico                                    |
|----------|-------|-----------------------------------------------|
| `space-1` | 4px  | Micro-ajustes (icon gap, badge padding)        |
| `space-2` | 8px  | Espaçamento interno mínimo (padding sm)        |
| `space-3` | 16px | Padding padrão de componentes                  |
| `space-4` | 24px | Separação entre elementos relacionados         |
| `space-5` | 32px | Separação entre blocos distintos               |
| `space-6` | 48px | Seções dentro de uma página                    |
| `space-7` | 64px | Separação entre seções maiores                 |
| `space-8` | 96px | Espaçamento de layout / hero / página inteira  |

**Regras:**
- Layout em grid de **12 colunas**, gutter de `24px`, margem lateral de `32px` (mobile: `16px`).
- Nunca usar valores arbitrários como `17px`, `23px` ou `37px`.
- Componentes internos: padding horizontal sempre maior ou igual ao vertical.

---

## 3. Tokens de Cor

### Primária
Cor de ação, interação e identidade da marca.

| Token                  | Valor sugerido | Uso                          |
|------------------------|----------------|------------------------------|
| `color-primary-50`     | `#EEF2FF`      | Fundo de estado ativo leve   |
| `color-primary-100`    | `#C7D2FE`      | Hover em elementos sutis     |
| `color-primary-500`    | `#4F46E5`      | Botão principal, links       |
| `color-primary-600`    | `#4338CA`      | Hover do botão principal     |
| `color-primary-900`    | `#1E1B4B`      | Texto de destaque escuro     |

### Neutra
Base para texto, fundos, bordas e superfícies.

| Token                  | Valor sugerido | Uso                          |
|------------------------|----------------|------------------------------|
| `color-neutral-0`      | `#FFFFFF`      | Superfície mais clara        |
| `color-neutral-50`     | `#F9FAFB`      | Fundo de página              |
| `color-neutral-100`    | `#F3F4F6`      | Cards, inputs, chips         |
| `color-neutral-300`    | `#D1D5DB`      | Bordas sutis                 |
| `color-neutral-500`    | `#6B7280`      | Texto secundário             |
| `color-neutral-700`    | `#374151`      | Texto principal              |
| `color-neutral-900`    | `#111827`      | Texto de alto contraste      |

### Destaque (Accent)
Usada com parcimônia para chamar atenção sem competir com a primária.

| Token                  | Valor sugerido | Uso                              |
|------------------------|----------------|----------------------------------|
| `color-accent-100`     | `#FEF3C7`      | Fundo de alertas / avisos        |
| `color-accent-400`     | `#FBBF24`      | Badges, tags, estados de atenção |
| `color-accent-600`     | `#D97706`      | Ícones de destaque, CTAs         |
| `color-accent-900`     | `#78350F`      | Texto sobre fundo claro accent   |

**Regras:**
- Contraste mínimo de **4.5:1** para texto (WCAG AA).
- Destaque (accent) não deve aparecer em mais de 10% da tela simultaneamente.
- Nunca usar gradiente como substituto de cor sólida com significado.
- Cores semânticas: `success #16A34A`, `error #DC2626`, `warning #D97706`, `info #2563EB`.

---

## 4. Padrões de Componente

### Botões
- **Primary:** fundo `color-primary-500`, texto branco, `border-radius: 6px`, padding `12px 24px`.
- **Secondary:** borda `color-primary-500`, texto `color-primary-600`, fundo transparente.
- **Ghost:** sem borda, texto `color-neutral-700`, hover com fundo `color-neutral-100`.
- Estado de loading: substituir label por spinner, manter largura do botão (`min-width`).
- Nunca desabilitar sem mostrar tooltip explicando o motivo.

### Cards
- Fundo: `color-neutral-0` ou `color-neutral-50`.
- Borda: `1px solid color-neutral-100` (não usar `box-shadow` como substituto de borda com significado estrutural).
- `border-radius: 12px` para cards de conteúdo; `8px` para cards compactos.
- Elevação (`box-shadow`) reservada para elementos flutuantes reais (modais, dropdowns, tooltips).

### Inputs
- Altura mínima: `40px`. Label sempre visível (nunca depender apenas de placeholder).
- Estado de foco: `outline: 2px solid color-primary-500`, `outline-offset: 2px`.
- Estado de erro: borda `color-error`, mensagem de erro imediatamente abaixo do campo.
- Nunca usar input sem label associada (`<label for>` ou `aria-label`).

### Ícones
- Tamanho padrão: `20px` (inline com texto `text-base`); `24px` standalone.
- Sistema único: escolher uma biblioteca e não misturar (ex.: Lucide, Heroicons ou Phosphor).
- Ícones decorativos: `aria-hidden="true"`. Ícones funcionais: `aria-label` descritivo.
- Nunca usar ícone como único indicador de estado — sempre acompanhar de texto ou tooltip.

### Animação e Movimento
- Duração padrão: `150ms` (micro), `250ms` (transição de estado), `400ms` (entrada de elementos).
- Easing: `ease-out` para entradas, `ease-in` para saídas, `ease-in-out` para loops.
- Usar `framer-motion` para animações complexas; CSS transitions para estados simples.
- Respeitar `prefers-reduced-motion`: toda animação deve ter fallback estático.
- Movimento deve ter **propósito** — nunca animar só para animar.

---

## Anti-padrões (evitar ativamente)

- Gradientes azul-roxo sem contexto de marca.
- Cards com `box-shadow` excessivo empilhados sobre fundo branco.
- Ícones de "inteligência artificial" (cérebros, redes neurais, faíscas genéricas).
- Tipografia toda em maiúsculas para parágrafos inteiros.
- Botões arredondados demais (`border-radius: 9999px`) fora de contexto de pill/badge.
- Loading spinners sem indicação de progresso para operações > 3s.
- Layouts que dependem de hover para revelar informação essencial (mobile-hostile).
- Paletas de cor com mais de 5 tons distintos visíveis simultaneamente.
