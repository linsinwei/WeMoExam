# WeMoExam 
##### 2020.06.19 Jacky Lin

### Create a next app
```sh
npx create-next-app wemo-restful-api
```
### Install Mongodb driver
```sh
npm install mongodb --save
```
### Install next-connect
```sh
npm install next-connect --save 
```

### Install archetype-js
```sh
npm install archetype-js --save 
```

### 目錄結構
* wemo-resful-api
    * Domain        
        * UserModel.js (使用者模型)
    * Persistent
        * wemoUserRepository.js (資料庫持久層)
    * Service
        * wemoUserService.js (服務層)
    * pages
        * api
            * userLogin.js (使用者登入API)
            * userRegister.js (使用者註冊API)
        * index.js (首頁)

### Build app
```sh
npm run build
```

### Run app
```sh
npm run dev
``

