# Project Overview

# Project Name: BOOKKI.

# Live URL:

```bash
https://assignment8-server.onrender.com
```

# Project description

BO0KKI is a Book Library management system there we can create book and this book any member can borrow. This backend server we have tow user like admin and member. Admin user manage book and manipulate this book and. Member can borrow book and also return borrowed book as well. BOOKIE have organized backend system there handle error and use modular pattern to scala out project.

# Technologies Used

- Typescript (Programming language)
- Express.js (Node.js framework)
- Prisma (Postgres ORM)
- PostgresSQL (Database)
- Zod (Validation Library)
- Bcrypt.js (Secure Password)
- jsonwebtoken (authentication and authorization)



# Features

* Sign up Member
* Manage Book
* Borrow Book
* Return Book
* Overdue Books
* Authorization
* Validations


# Backend server setup and how to running

# step-1: initialize npm and setup basic express server

Initialize node package manager(NPM) with default input

```javascript
npm init -y
```

Install the express, cors, jsonwebtoken, and dotenv package

```javascript
npm install express cors dotenv jsonwebtoken
```

Install bcrypt.js for secure password

```
npm install bcrypt.js
```

Make folder structure using modular pattern

```javascript
src
    app
      middleware
      errors
      routes
      utils
      interfaces
      config
        index.ts
      modules
        book
            ...files
        member
            ...fils
        borrow
            ...files
        return
            ...files
    app.ts
    server.ts
```

Install types of node, express, and cors

```javascript
npm i --save-dev @types/cors @types/node @types/express
```

# step-2: initialize typescript with related package

Install typescript developer dependency

```javascript
npm install -D typescript
```

Initialize typescript and configuration it the tsconfig.json

```javascript
tsc --init
```

In the tsconfig change the root directory and out directory destination. (Note: uncomment the rootDir and outDir)

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

Run typescript code install ts-node-dev as developer dependency

```javascript
npm install -D ts-node-dev
```

# step-3: install prisma and connect with project and .env code add

Install Prisma

```javascript
npm install prisma
```

Connect with prisma this following code

```javascript
import app from "./app";
import config from "./config";

async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(`BOOKIE LISTENING ON PORT ${config.port} 👌`);
  });
}

main();
```

# step-4: Configuration the package.json with script

Main destination change that

```javascript
"main": "./dist/server.js",
```

Make the script for running project locally, build project, lint all file, fix problem using lint, and format code using prettier.

```javascript
  "scripts": {
    "build": "tsc",
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

# step-6: Install ZOD OR JOI validation package

Install ZOD package

```javascript
npm install zod
```

Install JOI package

```javascript
npm install joi
```

# step-7: Run project locally

step-7.1
Run eslint

```javascript
npm run lint
```

step-7.2
Run prettier

```javascript
npm run format
```

step-7.3
Build project

```javascript
npm run build
```

step-7.4
Run javascript file

```javascript
npm run start:prod
```

step-7.5
Run locally typescript file

```javascript
npm run start:dev
```

Author: Sourave Halder

# Thank You for Scrolling my Readme file
