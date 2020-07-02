const {io} = require('../server.js');

io.on('connection',(client)=>{
    console.log('usuario conectado');

    
    client.on('disconnect',()=>{
        console.log('usuario desconectado'); 
    });

    //escuchar clientes
    client.on ('enviarmensaje',(mensaje, callback)=>{
        io.sockets.emit('enviarmensaje',mensaje);
    });

    client.on('escribiendo', (dato)=>{
        client.broadcast.emit('escribiendo', dato);
    })
});