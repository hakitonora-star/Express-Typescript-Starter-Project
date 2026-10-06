WHENEVER we use register a  router  we use use 
means jab hume router to call krna hai toh use ka use krnege jab main controller pe krna hai toh get deltete api request ka use krenege

for only start and test command you have to write npm start etc but for any other command we have use run examplw:npm run dev
#packages need to installed
npm init -y
npm install express
npm install -D typescript
npm install -D @types/node
npm install -D @types/express
npm install -D nodemon
npm install -D tsx
npm install dotenv
npx tsc --init
"start": "ts-node src/server.ts",
"dev": "nodemon src/server.ts"

for validation library
-->npm i zod
-->npm i winston
-->npm i uuid

// validatemiddleware---->controller--->errorMiddleware 
https://expressjs.com/en/5x/guide/error-handling/

## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/singhsanket143/Express-Typescript-Starter-Project.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable

```
echo PORT=3000 >> .env
```

5. Start the express server

```
npm run dev



```
So our complete commands are:
in windows powershell
D:
mkdir GitProjects
cd GitProjects
git clone https://github.com/singhsanket143/Express-Typescript-Starter-Project.git demo-of-git folder name is demo git
cd demo-of-git
code .




