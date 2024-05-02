import { buildSchema } from "graphql"

// Construct a schema, using GraphQL schema language
export let schema = buildSchema(`
  type Query {
    hello: String,
    age: Int
  }`)

// The rootValue provides a resolver function for each API endpoint
export let rootValue = {
  age: () => {
    return 21
  },
  hello:()=>{
    return 'Hello World !'
  }
}




