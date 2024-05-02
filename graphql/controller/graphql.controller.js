import { createHandler } from "graphql-http/lib/use/express";
import {schema,rootValue} from "../schema/schema.js"
async function handler(_req,res){
    
    const response = await createHandler(schema,rootValue)
    const data = await response.data
    console.log(data)
    res.send(data)


}


export default handler