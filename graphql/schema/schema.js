import { graphql, buildSchema } from "graphql"

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String,
    age: Int
  }

`)

// The rootValue provides a resolver function for each API endpoint
let rootValue = {
  age: () => {
    return 21
  },
  hello:()=>{
    return 'Hello World !'
  }
}




// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ age }",
  rootValue,
}).then(response => {
  console.log(response)
})