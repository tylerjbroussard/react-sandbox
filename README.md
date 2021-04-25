## sequelize steps

##sequelize steps

-- recipe 1: this will create a sequelize config file, modes folder, js models and index.js for future crud op's

clone https://github.com/tylerjbroussard/react-sandbox

cd to react-sandbox

npm i sequelize-cli

npm i sequelize

npm install sequelize mariadb

npm i sequelize-auto

npm install sequelize mariadb

npx sequelize init

npx sequelize-auto -o "./models" -d "database" -h "host" -u "user" -p 3306 -x "password" -e mariadb

---

//additional commands

npx sequelize db:migrate

npx sequelize-auto -o "./models" -d sequelize_auto_test
