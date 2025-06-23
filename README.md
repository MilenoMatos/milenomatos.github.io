<h1 align="center">🌐 Site Pessoal - Mileno Oliveira Matos</h1>

<p align="center">
  Este é o código-fonte do meu site pessoal, desenvolvido com HTML, CSS, JavaScript e publicado utilizando as <strong>tecnologias do GitHub Pages</strong>. O objetivo deste projeto é apresentar meu perfil, meus projetos acadêmicos e minhas experiências na área de tecnologia.
</p>

---

## 🔗 Acesse o site

📍 [https://milenomatos.github.io](https://milenomatos.github.io)

---

## ✨ Funcionalidades

- Layout responsivo com HTML + CSS moderno
- Animação de fundo interativa com Canvas (JavaScript)
- Texto animado com efeito de digitação
- Navegação entre páginas: Início, Sobre e Projetos
- Simulador incorporado via iframe na página de projetos

---

## ⚙️ Como o site é gerado

Este site é publicado diretamente a partir deste repositório usando o **GitHub Pages**. O sistema utiliza o gerador de sites estáticos **Jekyll**, que interpreta os arquivos `.md` (Markdown) com metadados (`front matter`) e aplica o layout definido em `_layouts/default.html`.

Você não precisa compilar nada manualmente — o próprio GitHub Pages se encarrega de transformar o conteúdo em um site funcional.

## 📁 Estrutura do Projeto

```plaintext
.
├── _config.yml               # Configuração do Jekyll
├── index.md                  # Página inicial (usa layout default)
├── sobre.md                  # Página "Sobre"
├── projetos.md               # Página "Projetos"
├── _layouts/
│   └── default.html          # Layout principal compartilhado
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos do site
│   └── js/
│       └── welcome-animation.js  # Animações de fundo e texto
