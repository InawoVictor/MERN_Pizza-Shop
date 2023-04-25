import Product from "../../../models/Product"
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
    dbConnect();

    const {method, query: {id}, cookies} = req;

    const token = cookies.token

    if(method === "GET"){
        try {
            const products = await Product.findById(id);
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "PUT"){
        if(!token || token !== process.env.TOKEN){
            return res.status(400).json("Not authenticated!")
        }
        try {
            const  product = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "DELETE"){
        if(!token || token !== process.env.TOKEN){
            return res.status(400).json("Not authenticated!")
        }
        try {
            const products = await Product.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!.")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
