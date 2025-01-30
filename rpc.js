let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let choice=document.querySelector(".choice");
let computer=document.querySelector(".computer");
let r=document.querySelector("#r");
let op=document.querySelector(".op");
let win=document.querySelector(".win");
let urmarks=document.querySelector(".urmarks");
let commarks=document.querySelector(".commarks");
let exit=document.querySelector(".exit");
let cnt=prompt("Enter how many times you want to play:");
console.log(exit);
if(cnt==null){
    alert("You have to enter a number");
    cnt=prompt("Enter how many times you want to play:");
}
var count=0;
var c=0;
var u=0;
rock.addEventListener('click',()=>{
    count++;
    choice.innerText="Your choice:rock";
        let randomnum=Math.floor(Math.random()*3)+1;
        if(randomnum==1){
        computer.innerText="Computer:rock";
        }
        else if(randomnum==2){
        computer.innerText="Computer:paper";
        c++;
        }
        else if(randomnum==3){
        computer.innerText="Computer:scissor"; 
        u++;
        }  
        urmarks.innerText="Your marks:"+u;
        commarks.innerText="Computer marks:"+c;  
    if(count>cnt){
        alert("You have completed this round");
        count=0;
        u=0;
        c=0;
        cnt=prompt("Enter how many times you want to play next:");
    }
    else if(count==cnt){
        if(u>c){
            win.innerText="You won the match";
        }
        else if(u<c){
            win.innerText="You lost the match";
        }
        else{
            win.innerText="Match..Draw..!";
        }
    }
});
paper.addEventListener('click',()=>{
    count++;
    choice.innerText="Your choice:paper";
        let randomnum=Math.floor(Math.random()*3)+1;
        if(randomnum==1){
        computer.innerText="Computer:rock";
        u++;
        }
        else if(randomnum==2){
        computer.innerText="Computer:paper";
        }
        else if(randomnum==3){
        computer.innerText="Computer:scissor";
        c++;
        }   
        urmarks.innerText="Your marks:"+u;
        commarks.innerText="Computer marks:"+c;   
    if(count>cnt){
        alert("You have completed this round");
        count=0;
        u=0;
        c=0;
        cnt=prompt("Enter how many times you want to play next:");
    }
    else if(count==cnt){
        if(u>c){
            win.innerText="You Won the match";
        }
        else if(u<c){
            win.innerText="You lost the match";
        }
        else{
            win.innerText="Match..Draw..!";
        };
    }
   
});
scissor.addEventListener('click',()=>{
    count++;
    choice.innerText="Your choice:scissor";
        let randomnum=Math.floor(Math.random()*3)+1;
        if(randomnum==1){
        computer.innerText="Computer:rock";
        c++;
        }
        else if(randomnum==2){
        computer.innerText="Computer:paper";
        u++;
        }
        else if(randomnum==3){
        computer.innerText="Computer:scissor"; 
        };
        urmarks.innerText="Your marks:"+u;
        commarks.innerText="Computer marks:"+c;  
    if(count>cnt){
        alert("You have completed this round");
        count=0;
        u=0;
        c=0;
        cnt=prompt("Enter how many times you want to play next:");
    }
    else if(count==cnt){
        if(u>c){
            win.innerText="You Won the match";
        }
        else if(u<c){
            win.innerText="You lost the match";
        }
        else{
            win.innerText="Match..Draw..!";
        };
    }
});
exit.addEventListener('click',()=>{
    window.close();
    console.log("clicked");

});