import pkg from 'ruru/server'
import { Router } from "express";


const ruruRouter = Router()
const {ruruHTML} = pkg


ruruRouter.get("/",async(_req,res)=>{
    res.type('html')
    res.end(ruruHTML({
        endpoint:'/graphql'
    }))
})


export default ruruRouter