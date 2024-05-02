Bun.serve({
  port:8080,
  fetch(req){
    return new response("Bun server")
  }
})
