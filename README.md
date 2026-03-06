# TermProjTS
Typescript version of https://github.com/shamseen/CS602_Project_Rahman_Shamseen

[api tutorial]: https://nodesource.com/blog/scalable-api-with-node.js-and-typescript
[server tutorial]: https://dev.to/justwonder/setting-up-an-express-typescript-server-a-step-by-step-guide-gic

# Server
File structure with the [api tutorial][api tutorial]
```
src/
├── routes/        // define routes & route groups
├── controllers/   // handle request logic
├── services/      // business logic layer
├── models/        // data structures or ORM models
├── middlewares/   // custom middleware (auth, error handling, etc)
├── utils/         // helper functions
```
Set up express server with [server tutorial][server tutorial]

1. Node packages
```
npm install express
npm install --save-dev typescript @types/node @types/express ts-node nodemon
```
2. tsconfig file (edited with [api tutorial][api tutorial]):

```
npx tsc --init
```

3. Scripts (build and start are for production)
```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc -p .",
  "dev": "nodemon src/server.ts"
}
```
