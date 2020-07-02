var socket= io();

let mesage = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click',function(){
    socket.emit('enviarmensaje',{
        usuario: username.value,
        mensaje: mesage.value
    });

});
socket.on('connect', function(){
    console.log('conectado al servidor');
})
socket.on('disconnect', function(){
    console.log('perdimos conecccion con el servidor ')
})
//enviar informacion
mesage.addEventListener('keypress', function(){
    socket.emit('escribiendo', username.value)
});

socket.on('enviarmensaje',function(mensaje){
    actions.innerHTML = ""
    output.innerHTML += `<p>
        <strong>${mensaje.usuario}</strong>: 
        ${mensaje.mensaje}     
    </p>`
})

socket.on('escribiendo',function(mensaje){

    actions.innerHTML = `<p>
        <em>${mensaje} esta escribiendo</em>
            
    </p>`
})