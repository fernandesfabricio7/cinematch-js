# 🎬 CineMatch JS

## 📌 Sobre o projeto

O **CineMatch JS** é um sistema interativo de recomendação de filmes e séries desenvolvido em JavaScript com Node.js.

O projeto simula o funcionamento de uma plataforma de streaming, onde a pessoa usuária realiza um cadastro inicial informando:

- Nome;
- Idade;
- Gêneros favoritos.

Após o cadastro, o sistema compara o perfil criado com um catálogo fictício de filmes e séries, calculando a compatibilidade entre os gostos da pessoa usuária e os conteúdos disponíveis.

O sistema apresenta:

- Percentual de compatibilidade;
- Gêneros em comum;
- Gêneros ainda não explorados;
- Classificação de afinidade;
- Conteúdo mais recomendado;
- Sugestão personalizada;
- Menu interativo no terminal.


---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido como mini-projeto avaliativo do Módulo 01 de Desenvolvimento Mobile React Native.

O objetivo é praticar fundamentos de JavaScript utilizando uma aplicação realista de recomendação de conteúdo.

Foram aplicados conceitos como:

- Lógica de programação;
- Variáveis;
- Tipos de dados;
- Condicionais;
- Laços de repetição;
- Funções;
- Arrow functions;
- Arrays;
- Métodos de array;
- Objetos;
- Classes;
- Herança;
- Construtores;
- Uso do this;
- Callbacks;
- Closures;
- Promises;
- Async/Await;
- Entrada de dados pelo terminal.




---

# 📂 Estrutura do projeto

```text
cinematch-js/

│
├── cinematch.js
├── package.json
├── package-lock.json
├── README.md
└── node_modules/
```


---

# ⚙️ Como executar o projeto

## 1 - Pré-requisitos

É necessário ter instalado:

- Node.js
- npm



## 2 - Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd cinematch-js
```
## Como executar

1. Instale as dependências:
```bash
npm install


## 3 - Executar

Execute:

```bash
node cinematch.js
```


Após iniciar, responda as perguntas exibidas no terminal e utilize o menu de opções.


---

# 🎮 Funcionamento do sistema

O fluxo do programa acontece da seguinte forma:


## 1. Cadastro do usuário

O sistema solicita:

- Nome;
- Idade;
- Gêneros favoritos.


Os dados são armazenados em um objeto JavaScript.


Exemplo:

```javascript
{
 nome: "Ana",
 idade: 22,
 generosFavoritos: [
   "Ação",
   "Comédia"
 ]
}
```


---

## 2. Catálogo de conteúdos

O sistema possui um catálogo fictício contendo filmes e séries.

Cada conteúdo possui:

- Título;
- Tipo;
- Gêneros;
- Duração;
- Temporadas (quando for série).


---

## 3. Cálculo de compatibilidade

A compatibilidade é calculada através da comparação entre:

- Gêneros favoritos do usuário;
- Gêneros disponíveis no conteúdo.


Fórmula utilizada:

```
compatibilidade =
gêneros em comum / total de gêneros do conteúdo * 100
```


---

## 4. Classificação

Os resultados são classificados como:


| Percentual | Classificação |
|---|---|
| 80% a 100% | Alta afinidade |
| 50% a 79% | Média afinidade |
| 0% a 49% | Baixa afinidade |

## Tecnologias utilizadas

- JavaScript
- Node.js
- Programação Orientada a Objetos
- Promises e Async/Await
- Manipulação de arrays
---

# 🧠 Conceitos JavaScript aplicados


## Arrays

Utilizados para armazenar:

- Lista de gêneros;
- Catálogo de conteúdos.


## Métodos de array utilizados:

- map()
- filter()
- reduce()
- forEach()


## Programação Orientada a Objetos

Foi criada a classe:

```javascript
Conteudo
```

Responsável por representar filmes e séries.


Também foi criada a classe:

```javascript
Serie extends Conteudo
```

Aplicando o conceito de herança.


---

# 🌐 Arquitetura cliente-servidor

Mesmo sendo uma aplicação executada no terminal, o projeto simula uma comunicação com servidor.

O carregamento do catálogo utiliza:

- Promise;
- Async/Await.


A função:

```javascript
buscarCatalogoSimulado()
```

representa uma busca de dados em um servidor de streaming.


---

# 🌎 Como a internet funciona

A internet funciona através da comunicação entre computadores conectados em rede.

Quando um usuário acessa um serviço, o dispositivo cliente envia uma solicitação para um servidor, que processa a informação e retorna uma resposta.

Esse modelo é conhecido como arquitetura cliente-servidor.


---

# 📋 Organização do projeto

O desenvolvimento foi organizado utilizando Kanban, com as seguintes etapas:

- Backlog;
- A Fazer;
- Em Andamento;
- Concluído.


As tarefas foram divididas para acompanhar a evolução do projeto, um amigo meu faz o curso, comentou que este projeto era em grupo, porém preferi fazer sozinho, não consigo ter muito tempo para ver as aulas completas sempre, então sempre preciso dar uma olhada nas gravações


---

# 👨‍💻 Autor

Nome do aluno:

Fabrício Fernandes Silva


---


