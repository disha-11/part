class Game{
    constructor(){

    }
getState(){
    var stateref=database.ref("gameState").on("value",(data)=>{
 gameState=data.val();
    })
}
updateState(data){
    database.ref("/").update({
        gameState:data
    })
}
start(){
    if(gameState===0){
        form=new Form();
        form.hide1();
        player=new Player();
       
    }
}
}