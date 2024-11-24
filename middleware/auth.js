export default defineNuxtRouteMiddleware(async (to, from) => {

    const token = useCookie('auth')
    if (!token.value) { return navigateTo('/login') }

    try {
        //  避免重複取到2次資料
        await useFetch("/user/check", {
            method: "GET",
            baseURL: "https://nuxr3.zeabur.app/api/v1",
            //要把 token 傳送過去比對～～
            headers: {
                Authorization: token.value,
            },
        })
 

    } catch (err) {
        console.log(err.response);
        // 將 cookie 的內容刪除
        token.value = null;
        // 並返回登入頁
        return navigateTo('/login')
    }




})
