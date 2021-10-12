const router = require("express").Router();
 
router.get("/get", (request, response, next) => {
    response.send("Get Tuncay");
    next();
});
 
router.post("/post", (request, response, next) => {
    response.send("Post Tuncay");
    next();
});
module.exports = router;