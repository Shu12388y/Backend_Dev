import { Router } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import {rootValue,schema} from "../schema/schema.js"
const graphqlRoute = Router();



graphqlRoute.all("/graphql",createHandler({
    schema,
    rootValue

}))



export default graphqlRoute
