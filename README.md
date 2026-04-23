# Atividade Prática 2 — Página Pessoal (GAC116)

> `gabrel~$ cat README.md`

Página pessoal de **Gabriel Ferreira de Castro** — estudante de Ciência da Computação na **UFLA** (7º período) e estagiário de **desenvolvimento back-end na Equals — Gestão Financeira Inteligente**. Projeto desenvolvido para a disciplina **GAC116 — Programação Web (2026/1)**.

A mesma página pessoal aparece em **duas versões**, cada uma construída com um framework CSS diferente, para efeito de comparação. Ambas têm **toggle de tema claro/escuro** em JavaScript.

## 🔗 Demo (GitHub Pages)

- **Página inicial (escolha de versão):** https://gabrelcastro.github.io/Atividade2_WeB/
- **Versão Bootstrap 5:** https://gabrelcastro.github.io/Atividade2_WeB/bootstrap/
- **Versão Materialize CSS:** https://gabrelcastro.github.io/Atividade2_WeB/materialize/

## 🧱 Estrutura

```
Atividade2_WeB/
├── index.html                 # Landing: escolhe a versão
├── bootstrap/                 # Versão 1 — Bootstrap 5
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/script.js
│       └── img/foto.svg
└── materialize/               # Versão 2 — Materialize CSS
    ├── index.html
    └── assets/
        ├── css/styles.css
        ├── js/script.js
        └── img/foto.svg
```

## 📑 Seções da página

`sobre_` · `stack_` · `trajetória_` · `projetos_` · `interesses_` · `contato_`

- **Sobre** — bio, formação, atuação atual
- **Stack** — tecnologias, competências e barras de familiaridade
- **Trajetória** — timeline com Equals, Compass UOL, Fapemig e Comp Júnior
- **Projetos** — gabrel.tech e Jurídica Jr. UFLA
- **Interesses** — back-end, arquitetura, bancos, DevOps, cloud, data
- **Contato** — e-mail, GitHub, LinkedIn

## 🧰 Tecnologias usadas no projeto

- **HTML5**, **CSS3**, **JavaScript** (vanilla)
- **Bootstrap 5** via CDN — versão 1
- **Materialize CSS** via CDN — versão 2
- **Font Awesome** 6 — ícones
- **JetBrains Mono + Inter** — tipografia via Google Fonts
- **Tema claro/escuro** com persistência em `localStorage`
- Layout **responsivo** (mobile, tablet, desktop)

## ▶️ Como rodar localmente

É tudo estático — sem build:

```bash
python3 -m http.server 8000
```

Acessar:

- http://localhost:8000/ — landing
- http://localhost:8000/bootstrap/ — versão Bootstrap
- http://localhost:8000/materialize/ — versão Materialize

Ou abrir `index.html` direto no navegador (`file://`).

## 🧭 Referência

Estrutura adaptada do material oficial da disciplina: [ufla-prog-web/aula-bootstrap](https://github.com/ufla-prog-web/aula-bootstrap) · [demo](https://ufla-prog-web.github.io/aula-bootstrap/page/).

## 👤 Autor

- **Gabriel Ferreira de Castro**
- Site: [gabrel.tech](https://gabrel.tech)
- E-mail: ferreiragabriel589@gmail.com
- GitHub: [@gabrelcastro](https://github.com/gabrelcastro)
- LinkedIn: [Gabriel Ferreira](https://www.linkedin.com/in/gabriel-ferreira-30a855217/)

```
gabrel~$ exit
```
