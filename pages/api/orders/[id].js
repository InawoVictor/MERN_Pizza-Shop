import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order"

const handler = async (req, res) => {

    dbConnect();

    const {method, query: {id}} = req;

    if(method === "GET"){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    if(method === "PUT"){
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    if(method === "DELETE"){

    }
}

export default handler;  