# Atividade Prática 2 — Página Pessoal (GAC116)

Página pessoal de **Gabriel Ferreira de Castro**, graduando em Ciência da Computação pela **UFLA** (7º período), desenvolvida para a disciplina **GAC116 — Programação Web (2026/1)**.

O projeto apresenta a mesma página em **duas versões**, cada uma usando um framework CSS diferente, com **alternância de tema claro/escuro** via JavaScript.

## 🔗 Demo (GitHub Pages)

- **Página inicial:** https://gabrelcastro.github.io/Atividade2_WeB/
- **Versão Bootstrap:** https://gabrelcastro.github.io/Atividade2_WeB/bootstrap/
- **Versão Materialize:** https://gabrelcastro.github.io/Atividade2_WeB/materialize/

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

## 🧰 Tecnologias

- **HTML5**, **CSS3**, **JavaScript**
- **Bootstrap 5** (via CDN) — versão 1
- **Materialize CSS** (via CDN) — versão 2
- **Font Awesome** — ícones em ambas as versões
- Layout totalmente **responsivo** (mobile, tablet, desktop)
- **Tema claro/escuro** com persistência em `localStorage`

## ▶️ Como rodar localmente

Não há build — é tudo estático. Basta servir a pasta:

```bash
python3 -m http.server 8000
```

E abrir:

- http://localhost:8000/
- http://localhost:8000/bootstrap/
- http://localhost:8000/materialize/

Ou abrir `index.html` diretamente no navegador (`file://`).

## 📑 Seções da página

Navbar · Hero · Sobre · Habilidades · Projetos · Interesses · Contato · Rodapé

## 📝 Referência

Adaptado a partir do material oficial da disciplina: [ufla-prog-web/aula-bootstrap](https://github.com/ufla-prog-web/aula-bootstrap).

## 👤 Autor

- **Nome:** Gabriel Ferreira de Castro
- **E-mail:** ferreiragabriel589@gmail.com
- **GitHub:** [@gabrelcastro](https://github.com/gabrelcastro)
- **LinkedIn:** [Gabriel Ferreira](https://www.linkedin.com/in/gabriel-ferreira-30a855217/)
- **Site:** [gabrel.tech](https://gabrel.tech)
