const express = require("express");
const data = require("./data.json");
const routes = require("./routes.js")(data);

const app = express();

app.set("view engine", "pug");

app.use(routes);
app.use("/static", express.static("public"));

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(500);
    res.render('error', {"info":data.info})
});

app.use((req, res, next) => {
    res.status(404);
    res.render('404', {"info":data.info})
});

app.listen(3000, () => {
    console.log("The application is running on localhost!");
})