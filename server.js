var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: "production",
  db: {
    host: 'ds019038.mlab.com',
    port: 19038,
    name: 'build_react_native',
    credentials: {
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD
    }
  }
});

server.sockets.manager.settings.transports = ['xhr-polling'];

server.listen();

server.on('listening', function(){
  console.log('Server is listening on port: ' + process.env.PORT);
});

server.on('error', function(err){
  console.error(err);
  process.nextTick(function(){
    process.exit();
  })
})
