 var map = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,2,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
            [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
            [1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1],
            [1,0,0,1,0,1,0,0,0,1,0,0,0,1,3,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
function render(){
    for (var y = 0; y < map.length; y++) {
           for(var x = 0; x < map[y].length; x++){
                var i = map[y][x];
                if( i == 1){
                    $('header').append('<div class="q"></div>')
                }
                else if(i == 0){
                    $('header').append('<div class="b"></div>')
                }
                else if(i == 3){
                    $('header').append('<div class="finish"></div>')
                }
                else if(i == 2){
                    $('header').append('<div class="v"></div>')
                }
           }
           $('header').append('<br>');
       }
}
function move(poX, poY){
    var peremen = 2;
    $('header').empty();
    for (var y = 0; y < map.length; y++) {
           for(var x = 0; x < map[y].length; x++){
                var i = map[y][x];
                
                if(i == peremen){
                    if(map[y+poY][x+poX] == 0){
                        peremen = 'qq';
                        map[y][x] = 0;
                        map[y+poY][x+poX] = 2;
                    }
                    if(map[y+poY][x+poX] == 3){
                        peremen = 'qq';
                        map[y][x] = 0;
                        map[y+poY][x+poX] = 2;
                        
                        setTimeout(function(){
                            alert("victory!!!")
                        document.write('<h2>game over, dosviduli</h2>')
                    },1000)
                        
                    }
                }
           }
    }
};

render();

$(document).keyup(function(){
 if( event.keyCode == 39){
    move(1,0);
    render();
 }
 if( event.keyCode == 37){
    move(-1,0);
    render();
 }
 if( event.keyCode == 38){
    move(0,-1);
    render();
 }
  if( event.keyCode == 40){
    move(0,1);
    render();
 }
});