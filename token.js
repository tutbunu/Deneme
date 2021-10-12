const router = require("express").Router();
const jwt = require("jsonwebtoken");
 
router.post("/getToken", (request, response, next) => {
    const { userName, password } = request.body;
    const payLoad = {
        userName,
        password,
        password1:"1",
        password2:"2",
        email: "tuncayguven@gmail.com"
    };
    const token = jwt.sign(payLoad, request.app.get("api_secret_key"), { expiresIn: '1m' });
    response.json({
        status: true,
        token
    });
});
 
module.exports = router;