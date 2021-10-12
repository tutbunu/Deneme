const router = require("express").Router();
 
router.get("/get", (request, response, next) => {
    response.send("Get Tuncay");
});
 
router.post("/post", (request, response, next) => {
    response.send("Post Tuncay");
});
module.exports = router;