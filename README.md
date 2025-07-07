
<p align="center">
  <a href="https://nodejs.org" target="blank">
    <img src="https://nodejs.org/static/images/logo.svg" width="100" alt="Node.js Logo" />
  </a>
</p>

<p align="center">Uma API RESTful construída com <a href="https://nodejs.org" target="_blank">Node.js</a>, <a href="https://expressjs.com/" target="_blank">Express</a>, <a href="https://sequelize.org/" target="_blank">Sequelize</a> e autenticação JWT.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/v/express.svg" alt="Express Version" /></a>
  <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"><img src="https://img.shields.io/npm/dm/jsonwebtoken.svg" alt="JWT Downloads" /></a>
  <a href="https://www.npmjs.com/package/sequelize" target="_blank"><img src="https://img.shields.io/npm/v/sequelize.svg" alt="Sequelize Version" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License" /></a>
</p>

---

## 📌 Descrição

Este é um projeto base de uma API RESTful que implementa autenticação com JWT, versionamento de rotas, ORM Sequelize com SQLite (ou PostgreSQL) e um padrão de estrutura de pastas escalável, ideal para aplicações reais.

---

## ⚙️ Instalação do Projeto

```bash
git clone https://github.com/DavidsonDias/projeto-api.git
cd projeto-api
npm install
```

---

## 🚀 Rodar o Projeto

```bash
# Desenvolvimento com reinicialização automática
npm run dev
```

---

## 🧪 Rotas Disponíveis

| Método | Rota                 | Protegida | Descrição                     |
|--------|----------------------|-----------|-------------------------------|
| POST   | /api/v1/auth/register| ❌        | Cadastra um novo usuário      |
| POST   | /api/v1/auth/login   | ❌        | Realiza login e retorna token |
| GET    | /api/v1/users/me     | ✅        | Retorna dados do usuário logado|

---

## 📁 Estrutura do Projeto

```
projeto-api/
├── src/
│   ├── config/          # Configurações (ex: conexão com DB)
│   ├── controllers/     # Lógica das rotas
│   ├── middlewares/     # Middlewares (ex: autenticação JWT)
│   ├── models/          # Definição dos modelos com Sequelize
│   ├── routes/          # Definição de rotas
│   ├── services/        # Regras de negócio e serviços auxiliares
│   └── app.js           # Configuração principal do app
├── .env                 # Variáveis de ambiente (ex: JWT_SECRET)
├── .gitignore
├── package.json
└── server.js            # Arquivo de inicialização do servidor
```

---

## 🔐 Autenticação

Este projeto utiliza **JWT** como método de autenticação. Após realizar login via `/auth/login`, use o token retornado no header de cada requisição protegida:

```http
Authorization: Bearer <seu_token>
```

---

## 📚 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/) ou [PostgreSQL](https://www.postgresql.org/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

---

## 📄 Licença

Projeto licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).

---

## 👨‍💻 Autor

Desenvolvido por [Davidson Dias](https://github.com/DavidsonDias) — Projeto de estudo para o MBA Full Stack da Faculdade Impacta.
