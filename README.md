# Pokémon Frontend Challenge

Aplicação frontend desenvolvida como parte de um desafio técnico para a [Orbital.Company](https://orbital.company), utilizando **React, JavaScript e SCSS**, com integração à **PokéAPI**.

O projeto apresenta um catálogo responsivo de 8 Pokémon, com informações detalhadas, cadeia de evoluções e navegação entre os Pokémon.

## 🚀 Demonstração

**[Acessar aplicação](https://pokemon-challengexd.netlify.app)**

## ✨ Funcionalidades

- Catálogo com 8 Pokémon
- Consumo de dados através da PokéAPI
- Layout responsivo para diversos dispositivos
- Modal com detalhes do Pokémon
- Exibição de número, nome, espécie, altura, peso e habilidades
- Cadeia de evoluções
- Destaque da próxima evolução
- Navegação entre os Pokémon pelo próprio model
- Estado de carregamento durante a busca dos dados de evolução
- Cores baseadas no tipo do Pokémon

## 🛠️ Tecnologias

- React
- JavaScript (ES6+)
- SCSS
- Vite
- PokéAPI
- HTML5
- CSS3

## 📁 Estrutura principal do projeto

```text
src/
├── components/
│   ├── pokemonCard/ (pokemon)
│   ├── pokemonGrid/ (grid de pokemons da tela inicial)
│   └── pokemonModal/ (modal para detalhes avançados de um pokemon)
├── services/
│   └── pokeApi.js (conexões com a api, funções para cada uso)
├── App.jsx
├── App.scss
├── index.scss
└── main.jsx
```

## ⚙️ Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone 'https://github.com/TitanCodeXD/pokemon-challenge'
```

Entre na pasta do projeto:

```bash
cd pokemon-frontend-challenge
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite no terminal, normalmente [localhost:5173](http://localhost:5173)

### Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

## 🔌 API

O projeto utiliza a **[PokéAPI](https://pokeapi.co/)** para obter os dados dos Pokémon, espécies e cadeias de evolução.

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela:

- Desktop
- Tablet
- Mobile

## 👨‍💻 Autor

**Wesley Santos**

Desenvolvedor FullStack com foco no ecossistema JavaScript/Typescript, React e Node.js/NestJS.
