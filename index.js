const express = require("express");
const connction = require("./Config/db");
const {DataModel} = require("./Model/DataModel");

const cors=require("cors")

const app=express();

app.get("/", async(req,res)=>{
    try{
        // res.send("hello");
        try{
            // let data = await DataModel.find();
            // console.log({data});
            const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

            let data = await DataModel.find().sort({ ["price"]: sortOrder });

            res.send({data}); 
        }
        catch(err){
            res.send(`${err}`);    
        }
    }
    catch(err){
        res.send("something went wrong");
    }
})

// app.use(cors());

app.listen(8081,async()=>{
    try{
        await connction;
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
})