
// this script is used in case we dont want to use any packages 
function terminate (server, options = { coredump: false, timeout: 500 }) {
    // Exit function
    const exit = code => {
      options.coredump ? process.abort() : process.exit(code)
    }
  
    return (code, reason) => (err, promise) => {
      if (err && err instanceof Error) {
      // Log error information, use a proper logging library here :)
      console.log(err.message, err.stack)
      }
  
      // Attempt a graceful shutdown
      // if the server is closed or the timout is reached the process will exit
      // to avoid long shutdown
      // timeout depends on the need of the app
      server.close(()=> {
        process.exit(0)
      })
      setTimeout(() => {
        process.exit(0)
      }, options.timeout).unref() // do not register on event loop
    }
  }
  // a better solution would be to use a package like 
  // http-graceful-shutdown or terminus
  
  module.exports = terminate