//console.log("Hello via Bun!");

let port = 8080
Bun.serve({
  port,
  fetch(req){
    console.log("server is on",port);
      
    return new Response("bun server")
  }
})
