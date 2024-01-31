const mongoose=require("mongoose");

const connction=mongoose.connect("mongodb+srv://shailesh:shailesh@cluster0.rors66x.mongodb.net/JainamInfotech?retryWrites=true&w=majority")

module.exports={connction};