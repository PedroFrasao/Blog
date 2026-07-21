# artigos.dev — blog pessoal (Astro)

Site estático para publicar artigos, feito para dar o mínimo de trabalho
possível de manter. Escreve o artigo em Markdown, sobe pro Git, pronto —
o Cloudflare Pages publica sozinho.

**Stack:** Astro + Markdown (Content Collections) · Cloudflare Pages ·
CSS puro (sem framework) · Giscus (comentários) · Cloudflare Web Analytics.

## Rodando localmente

Precisa de [Node.js](https://nodejs.org) (versão 18 ou mais recente).

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Como publicar um novo artigo

1. Crie um arquivo `.md` em `src/content/blog/`, por exemplo
   `src/content/blog/meu-projeto-com-stm32.md`.
2. Comece o arquivo com o cabeçalho (front-matter):

   ```md
   ---
   title: "Título do artigo"
   description: "Um resumo de 1-2 frases (aparece na listagem e no RSS)."
   pubDate: 2026-08-01
   tags: ["stm32", "firmware"]
   ---

   Conteúdo do artigo em Markdown normal a partir daqui.
   ```

3. Escreva o artigo em Markdown (títulos com `##`, listas, blocos de
   código com ```` ``` ````, etc).
4. `git add`, `git commit`, `git push` — o Cloudflare Pages builda e
   publica automaticamente em 1-2 minutos.

Quer rascunhar sem publicar? Adicione `draft: true` no cabeçalho — o
artigo fica de fora da listagem e do build até você tirar essa linha.

Para apagar os dois artigos de exemplo, é só remover
`src/content/blog/bem-vindo.md` e `src/content/blog/exemplo-uart-esp32.md`.

## Deploy no Cloudflare Pages (grátis)

1. Suba este projeto para um repositório no GitHub (pode ser privado).
2. No [dashboard do Cloudflare](https://dash.cloudflare.com/) →
   **Workers & Pages** → **Create application** → **Pages** →
   **Connect to Git**.
3. Selecione o repositório. Nas configurações de build, use:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. A cada `git push` na branch principal, o site é republicado
   sozinho.
5. (Opcional) Em **Custom domains**, aponte seu próprio domínio.

## Configurando o Giscus (comentários)

O Giscus usa o GitHub Discussions do seu próprio repositório como banco
de comentários — sem servidor, sem custo.

1. O repositório do site precisa ser **público** (ou o repositório que
   você escolher para hospedar as discussions) e ter a aba
   **Discussions** habilitada (Settings → Features → Discussions).
2. Instale o app [giscus](https://github.com/apps/giscus) nesse
   repositório.
3. Acesse [giscus.app](https://giscus.app), preencha os dados do seu
   repositório e copie os valores gerados (`data-repo-id`,
   `data-category`, `data-category-id`).
4. Cole esses valores em `src/components/Giscus.astro`, substituindo os
   placeholders `SEU-USUARIO/SEU-REPO`, `TROQUE_PELO_REPO_ID` e
   `TROQUE_PELO_CATEGORY_ID`.

## Configurando o Cloudflare Web Analytics

1. No dashboard do Cloudflare → **Analytics & Logs** → **Web Analytics**
   → **Add a site** (não precisa que o domínio esteja na Cloudflare).
2. Copie o **token** gerado.
3. Cole em `src/layouts/BaseLayout.astro`, no lugar de
   `SEU_TOKEN_AQUI`.

## Estrutura do projeto

```
src/
  content/
    blog/            ← seus artigos em .md ficam aqui
    config.ts         ← schema dos campos do front-matter
  components/
    Header.astro
    Footer.astro
    Giscus.astro
  layouts/
    BaseLayout.astro  ← <head>, analytics, header/footer
    PostLayout.astro   ← layout de cada artigo
  pages/
    index.astro        ← lista de artigos (home)
    sobre.astro
    blog/[...slug].astro  ← gera a página de cada artigo automaticamente
    rss.xml.js          ← feed RSS automático
  styles/
    global.css          ← todo o visual do site (sem framework)
public/
  favicon.svg
```

## Ideias para depois (opcional)

- Trocar o CSS puro por Tailwind, se preferir.
- Adicionar busca (ex: Pagefind) se o número de artigos crescer muito.
- Página de tags (`/tags/esp32`) listando posts por assunto.
- Dark/light mode (hoje o site é fixo no tema escuro).

Nenhuma dessas é necessária — o site funciona 100% sem elas.
