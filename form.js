class Form{
    constructor(){
       this. input1=createInput("child");
       this. input2=createInput("mom");
       this.next=createButton("Next");
       this.next2=createButton("Next");
       this.choose=createButton("choose");
       this. textBox=createInput("type something");
       this.mics=createButton("mic");
       this.bye=createButton("bye");
       this.sel = createSelect();

    }
    hide1(){
        this.next2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        this.sel.hide();
        this. input1.position(200,200); 
        player.name = this.input1.value();
       this. input2.position(displayWidth/2-90,displayHeight/2-80); 
         player.mom = this.input2.value();
         this. next.position(displayWidth/2-40,displayHeight/2-80);
         player.updateName(player.name);
         player.updateMom(player.mom);
        this.next.mousePressed(()=>{
            this.hide2();
            console.log(player.name)

         })
    }
    hide2(){
        //this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        this.sel=createSelect();
        sel.size(200)
            sel.position(10, 10);
            sel.option('happy feelings');
            sel.option("what's special today");
             sel.option('random Q&A');
            sel.option('boredom solution');
            sel.option('sad feelings');
            sel.option('angry feelings');
            sel.option('share an idea');
            sel.option('complain');
            sel.option('need motivation');
            sel.option('proud movement');
            sel.option('scary feelings');
            sel.option('nervous feelings');
            sel.option('need sympathy');
            this.next2.mousePressed(()=>{
                this.hide3();
             })
          
    }
    hide3(){
        this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
       // this.choose.hide();
        //this. textBox.hide();
        //this.mics.hide();
       // this.bye.hide();
        this.sel.hide();
    }
   
}