const express = require("express");
const router = express.Router();

module.exports = function(data) {

    router.get("/", (req, res) => {
        res.render("./index", {"info":data.info, "projects":data.projects});
    });

    router.get("/about", (req, res) => {
        res.render("./about", {"info":data.info});
    });

    router.get("/projects/:projectId", (req, res, next) => {
        let projectId = req.params.projectId;
        if(projectId < data.projects.length){
            project = data.projects[projectId];
            res.render("project", {"info":data.info, "project":project});
        } else {
            const err = new Error("Invalid project id provided!");
            err.status = 418;
            next(err);
        }
    });

    return router;

}