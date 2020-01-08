// Require our models
const db = require("../models");

// Routes
module.exports = function(app){
    app.get("/api/burger", async function(req,res){
        try{
            const allburgers = await db.burgers.findAll()
            res.json(allburgers)
        }
        catch(err){
            console.log(err)
        }
    })
    
    app.post("/api/burger", async function(req, res){
        const {burgerName} = req.body;
        try{
            const newburger = await db.burgers.create({burger_name: burgerName})
            res.json(newburger)
        }
        catch(err){
            console.log(err)
        }
    })

    app.put("/api/burger/:id", async function(req, res){
        const burgerToDevour = req.params.id;
        try{
            const burgerDevoured = await db.burgers.update({devoured: true},{where:{id: burgerToDevour}})
            res.json(burgerDevoured)
        }
        catch(err){
            console.log(err)
        }
    })
}