const mongoose=require("mongoose");

const dataScema = new mongoose.Schema({
    productName:String,
    price:Number,
    description:String,
    discounted_price:Number
})

const DataModel=mongoose.model("data",dataScema);

module.exports={
    DataModel
}