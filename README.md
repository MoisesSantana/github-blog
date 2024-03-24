<h1 align="center">
  <img    src="https://github.com/vitejs.png" width="100px" alt="ViteJS">
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=5.0.2&color=blue&labelColor=202024" alt="TypeScript version 5.0.2" />
  <img src="https://img.shields.io/static/v1?label=NPM&message=10.2.4&color=red&labelColor=202024" alt="NPM version 10.2.4" />
  <img src="https://img.shields.io/static/v1?label=Node&message=20.11.0&color=green&labelColor=202024" alt="NodeJs versuib 20.11.0" />
  <img src="https://img.shields.io/static/v1?label=Vite&message=4.4.5&color=yellow&labelColor=202024" alt="Vite version 4.4.5" />
  <img src="https://img.shields.io/static/v1?label=React&message=18.2.0&color=blue&labelColor=202024" alt="React version 18.2.0" />
  <img src="https://img.shields.io/static/v1?label=styled-components&message=6.0.7&color=AA336A&labelColor=202024" alt="styled-components version 6.0.7" />
  <img src="https://img.shields.io/static/v1?label=react router&message=6.15.0&color=FF0000&labelColor=202024" alt="react router version 6.15.0" />
  <img src="https://img.shields.io/static/v1?label=axios&message=1.6.8&color=purple&labelColor=202024" alt="axios version 1.6.8" />
  <img src="https://img.shields.io/static/v1?label=swr&message=2.2.5&color=black&labelColor=202024" alt="swr version 2.2.5" />
  <img src="https://img.shields.io/static/v1?label=date-fns&message=3.6.0&color=8c1b54&labelColor=202024" alt="date-fns version 3.6.0" />
  <img src="https://img.shields.io/static/v1?label=react-markdown&message=9.0.1&color=black&labelColor=202024" alt="react-markdown version 9.0.1" />
  <img src="https://img.shields.io/static/v1?label=husky&message=8.0.0&color=B6B6B6&labelColor=202024" alt="husky version 8.0.0" />
</p>

## 💻 Projeto

  Esse projeto é um blog onde terá posts sobre o mundo da programação, voltada principalmente para front-end.

  O intuíto deste projeto é além de exercitar e por em prática tecnologias que gosto e acho interessante, é poder postar conteúdos a qual acredito que irá agregar as pessoas que possam ler esses pots.

  Neste projeto é possível visualizar os posts feitos através de issues desse mesmo repositório, filtrar pelos posts e abrir para poder ler.

  Este projeto utiliza APIs do github:
  - https://api.github.com

  Assim sendo possível capturar informações sobre minhas issues e meu usuário.

## 💻 Tecnologias
  
![Static Badge](https://img.shields.io/badge/ViteJS-yellow)
![Static Badge](https://img.shields.io/badge/TypeScript-blue)

Sendo um projeto relativamente pequeno, não optei por uso de algum framework como o Next por exemplo, então para a realização desse projeto foi utilizado o [ViteJS](https://nextjs.org/), o _ViteJS_ é uma ferramenta de construção de aplicações web extremamente rápida e eficiente, desenvolvida para projetos modernos. Ele se destaca por sua velocidade de desenvolvimento, proporcionada pela sua arquitetura única e abordagem de desenvolvimento de última geração e que possibilita criar projetos utilizando algumas libs dentre elas o _React_ que foi escolhida. Também optei por utilizar [TypeScript](https://www.typescriptlang.org/), principalmente por está habituado a utiliza-lo, então a escolha foi mais por um conforto, mas o TypeScript auxilia muito na manutenção do código, trazendo um intelisense que aumenta a produtividade mesmo após muito tempo sem ver o código.

![Static Badge](https://img.shields.io/badge/ContextAPI-blue)

Para gerenciar os estados globais fiz a escolha do [ContextAPI](https://react.dev/reference/react/createContext), por mais que veja o _Zustand_ ganhando bastante popularidade e ser uma ferramenta muito simples, o que faria sentido neste projeto, o fato de ter uma lib a menos instalada no projeto me fez optar pelo _ContextAPI_ e também não precisaria de algo tão opnativo como o Redux.

![Static Badge](https://img.shields.io/badge/swr-black)

Apesar de não ter utilizado de todo o potencial do [swr](https://swr.vercel.app) ele é uma lib simples de ser utilizada e tem cache automático, dessa forma após fazer a primeira requisição a segunda já é automatica enquanto você não encerrar a seção, o que torna a navegação entre as páginas muito rápidas apesar das requisições, além disso ele gerencia o status da solicitação sem a necessidade de criar useEffects e estados para lidar com carregamento, erro e resultado da requisição, o _swr_ faz isso por você, um outro motivo que me agradou é o limite de requisições imposto pela API do github, evitando erros 429.

![Static Badge](https://img.shields.io/badge/react%20markdown-black)

Como cada post feito no blog é uma issue escrita em markdown, foi utilizado a lib _react-markdown_ para renderizar esses markdowns com o mínimo de impacto possível, além de ser uma biblioteca bem simples de ser utilizada.

![Static Badge](https://img.shields.io/badge/date%20fns-8c1b54)

O date-fns é uma das melhores libs da atualidade para tratar datas, e sua função `formatDistanceToNow` juntamente com o pacote `date-fns/locale` facilita muito como construir de forma elegante a quanto tempo o post foi criado.

![Static Badge](https://img.shields.io/badge/husky-202024)

Para evitar subir códigos sem padronização o uso do husky foi estremamente útil rodando o `eslint` antes de qualquer commit, dessa forma o commit só era efetuado caso não houvesse erros de lint.

## ✍️ Instrução

### Pré configuração.
>Para executar esse projeto será necessário ter o [node](https://nodejs.org/en) instalado, de preferência para as versões apresentadas nas tags do início desse readme.

>Para conseguir transitar bem entre as versões sugiro o uso do [nvm](https://github.com/nvm-sh/nvm)

### Configuração

Agora você deve executar os seguintes passos no seu terminal:
```bash
# instalação dos pacotes
$ npm install

# execução do servidor
$ npm run dev
```
