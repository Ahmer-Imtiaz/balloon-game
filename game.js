let popped = 0;
let lives = 4   ;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-red"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
              if(popped===4){

              }
               
    } 


    
    else if(e.target.className === "balloon"){
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "FAIL!";
                popped++;
                lives--;    
                
             removeEvent(e);
                checkAllPopped();
             
    }   
    
    
    
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};
function checkAllPopped(){
    if (popped === 5){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
 
    }
};
  
checkAllPopped();