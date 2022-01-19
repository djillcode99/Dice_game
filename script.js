let btn_roll = document.getElementById('roll')
let btn_hold = document.getElementById('hold')
let new_game = document.getElementById('new_game')
let f1 = document.getElementById('face_one')
let f2 = document.getElementById('face_two')
let f3 = document.getElementById('face_three')
let f4 = document.getElementById('face_four')
let f5 = document.getElementById('face_five')
let f6 = document.getElementById('face_six')
let current_left = document.getElementById('current-left')
let current_right = document.getElementById('current-right')
let current_left_score = 0;
let current_right_score = 0; 
let total_left = document.getElementById('total_score_1')
let total_right = document.getElementById('total_score_2')
let total_score_1 = 0; 
let total_score_2 = 0; 
let game = document.getElementById('rightplayer'); 
let player_round = 1; 
let dot_left = document.getElementById('dot1');
let dot_right = document.getElementById('dot2');
let alert1 = document.getElementById('alert1'); 
let alert2 = document.getElementById('alert_win');




function reset(){
        f2.style.opacity=100; 
        f3.style.opacity=100; 
        f4.style.opacity=100; 
        f5.style.opacity=100; 
        f6.style.opacity=100; 
        alert2.style.opacity = 0; 
        btn_roll.removeAttribute('disabled'); 
        btn_hold.removeAttribute('disabled'); 
        
}
function result(){
    let i = Math.floor(Math.random() * 6) + 1;
    console.log(i);
    switch(i){
        case 1 : 
        f1.style.opacity=100;
        f2.style.opacity=0; 
        f3.style.opacity=0; 
        f4.style.opacity=0; 
        f5.style.opacity=0; 
        f6.style.opacity=0; 
        
        break; 
        case 2 : 
        f1.style.opacity=0; 
        f3.style.opacity=0; 
        f4.style.opacity=0; 
        f5.style.opacity=0; 
        f6.style.opacity=0;
        break;  
        case 3 : 
        f1.style.opacity=0; 
        f2.style.opacity=0; 
        f4.style.opacity=0; 
        f5.style.opacity=0; 
        f6.style.opacity=0;
        break; 
        case 4 : 
        f1.style.opacity=0; 
        f2.style.opacity=0; 
        f3.style.opacity=0; 
        f5.style.opacity=0; 
        f6.style.opacity=0;
        break; 
        case 5 : 
        f1.style.opacity=0; 
        f2.style.opacity=0; 
        f3.style.opacity=0; 
        f4.style.opacity=0; 
        f6.style.opacity=0;
        break; 
        case 6 : 
        f1.style.opacity=0; 
        f2.style.opacity=0; 
        f3.style.opacity=0; 
        f4.style.opacity=0; 
        f5.style.opacity=0;
        break; 
    }
    if(player_round === 1){
       
       if (i === 1){
            
            current_left_score = 0; 
            current_left.textContent = current_left_score; 
            player_round = 2; 
            dot_right.style.opacity = 100;
            dot_left.style.opacity =0; 
            alert1.style.color = 'red'; 
            alert1.style.opacity = 100; 
            setTimeout(()=>{
                alert1.style.opacity = 0; 
            },1000);
        }else{
            current_left_score = current_left_score+i; 
            current_left.textContent = current_left_score; 
        } 
    }else {
        if (i === 1){
            current_right_score = 0; 
            current_right.textContent = current_right_score; 
            player_round = 1; 
            dot_right.style.opacity = 0;
            dot_left.style.opacity =100; 
            alert1.style.color = 'red'; 
            alert1.style.opacity = 100;
            setTimeout(()=>{
                alert1.style.opacity = 0; 
            },1000);
           
        }else{
            current_right_score = current_right_score+i; 
            current_right.textContent = current_right_score; 
        } 
    }

        
        
   
    
    

}
function roll(){
    
    reset();
    f6.style.opacity =0;
    
    setTimeout(() => {
        f5.style.opacity=0; 
    }, 50);
    setTimeout(() => {
        f4.style.opacity=0; 
    }, 100);
    setTimeout(() => {
        f3.style.opacity=0; 
    }, 150);
    setTimeout(() => {
        f2.style.opacity=0; 
    }, 200);
    setTimeout(() => {
        reset();
    }, 300);
    setTimeout(() => {
        result(); 
    }, 400);
    
    
    
}

function calcul_total_score(){
     
    if(player_round === 1){
        total_score_1 = total_score_1+ current_left_score; 
        total_left.textContent = total_score_1; 
        current_left_score = 0; 
        current_left.textContent = current_left_score; 
        player_round = 2; 
        dot_right.style.opacity = 100;
        dot_left.style.opacity =0; 
    }else {
        total_score_2 = total_score_2+ current_right_score; 
        total_right.textContent = total_score_2; 
        current_right_score = 0; 
        current_right.textContent = current_left_score; 
        player_round = 1; 
        dot_right.style.opacity = 0;
        dot_left.style.opacity =100; 
    }
    testWin();
}
function restart(){
    reset(); 
    player_round = 1; 
    dot_left.style.opacity = 100;
    dot_right.style.opacity = 0; 
    current_left_score = 0; 
    current_right_score = 0; 
    current_left.textContent = 0; 
    current_right.textContent = 0; 
    total_score_1 = 0; 
    total_score_2 = 0;
    total_left.textContent = 0;
    total_right.textContent = 0; 
}
function testWin(){
    if(total_score_1 >= 100){
        alert2.textContent = 'Player 1 you won! Congratulations!';
        alert2.style.opacity = 100;
        btn_hold.setAttribute('disabled', 'true');
        btn_roll.setAttribute('disabled', 'true'); 
    } else if (total_score_2 >= 100){
        alert2.textContent = 'Player 2 you won! Congratulations!';
        alert2.style.opacity = 100; 
        btn_hold.setAttribute('disabled', 'true');
        btn_roll.setAttribute('disabled', 'true');
    }
}

btn_roll.addEventListener('click',roll);
btn_roll.addEventListener('touchstart', roll);
btn_hold.addEventListener('click', calcul_total_score);
new_game.addEventListener('click',restart );

