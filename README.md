# Day 14 - 登入功能與存入 Cookie 題目

請 clone 這一份模板實作帳號登入功能 :

- 作答前需要先在 `/pages/register.vue` 使用模板提供的操作介面註冊帳號，格式如下:
  - 所有欄位都必填。
  - 密碼需要至少 8 碼以上，並英數混合。
  - 電話格式可以是手機號碼與市內電話。
  - birthday 格式可以是 "yyyy-mm-dd”。
  - zipcode 需要對照到各縣市各區的郵遞區號，可以參考 [郵遞區號速查一覽表](https://c2e.ezbox.idv.tw/zipcode.php)。
- 在 `/pages/login.vue` 頁面串接旅館的 [登入 API](https://todolist-api.hexschool.io/doc/#/%E4%BD%BF%E7%94%A8%E8%80%85/post_users_sign_in) ( 需使用 try catch )。登入成功後，使用 `useCookie()` 將 token 寫入名稱為 “auth” 的 cookie。
- 登入成功與失敗皆使用 [sweetAlert2 套件](https://sweetalert2.github.io/) 顯示訊息。sweetAlert2 套件在模板已有安裝與引入，不需再額外設定。

```jsx
$swal.fire({
  position: "center",
  icon: ... ,
  title: ... ,
  showConfirmButton: false,
  timer: 1500,
});
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day14-nuxt3-login  https://github.com/jasonlu0525/nuxt3-live-question.git day14-nuxt3-login-question
```

### 移動到專案內

```bash
cd  day14-nuxt3-login-question
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```
