# TermProjTS
Typescript version of https://github.com/shamseen/CS602_Project_Rahman_Shamseen

# Server
Set up express server via [this tutorial](https://dev.to/justwonder/setting-up-an-express-typescript-server-a-step-by-step-guide-gic)

1. Node packages
```
npm install express
npm install --save-dev typescript @types/node @types/express ts-node nodemon
```
2. tsconfig file:
`npx tsc --init`

3. Scripts (build and start are for production)
```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc -p .",
  "dev": "nodemon src/server.ts"
}
```