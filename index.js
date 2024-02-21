

$("button").on("keydown",function(Event){
    var keypressed = Event.key;
    console.log(keypressed);
    playsound(keypressed);
    pressAnimation(keypressed);

});

var buttons = $("button");
for(let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click",function(Event){
        let keypressed = buttons[i].id;
        console.log("clicked" + keypressed);
        playsound(keypressed);
        pressAnimation(keypressed);
});

$("#darkbtn").on("click",function(){
    $(".wrapper").toggleClass("darkmode");
    $(".heading").toggleClass("dark-text");
});

function playsound(key){
    switch(key){
        case "a":
            var sound = new Audio('./sound/a.mp3');
            sound.play();
            break;
            
        case "b":
            var sound = new Audio('./sound/asharp.mp3');
            sound.play();
            break;

        case "c":
            var sound = new Audio('./sound/c.mp3');
            sound.play();
            break;

        case "d":
            var sound = new Audio('./sound/csharp.mp3')
            sound.play();
            break;

        case "e":
            var sound = new Audio('./sound/d.mp3')
            sound.play();
            break;

        case "f":
            var sound = new Audio('./sound/do.mp3')
            sound.play();
            break;

        case "g":
            var sound = new Audio('./sound/dsharp.mp3')
            sound.play();
            break;

        case "h":
            var sound = new Audio('./sound/e.mp3')
            sound.play();
            break;

        case "i":
            var sound = new Audio('./sound/f.mp3')
            sound.play();
            break;
        
        case "j":
            var sound = new Audio('./sound/fa.mp3')
            sound.play();
            break;
        
        case "k":
            var sound = new Audio('./sound/fsharp.mp3')
            sound.play();
            break;
        
        case "l":
            var sound = new Audio('./sound/g.mp3')
            sound.play();
            break;
        
        case "m":
            var sound = new Audio('./sound/gsharp.mp3')
            sound.play();
            break;
        
        case "n":
            var sound = new Audio('./sound/la.mp3')
            sound.play();
            break;
        
        case "o":
            var sound = new Audio('./sound/mi.mp3')
            sound.play();
            break;
        
        case "p":
            var sound = new Audio('./sound/re.mp3')
            sound.play();
            break;
        
        case "q":
            var sound = new Audio('./sound/sol.mp3')
            sound.play();
        
        case "r":
            var sound = new Audio('./sound/si.mp3')
            sound.play();
            break;
        
        case "s":
            var sound = new Audio('./sound/sol.mp3')
            sound.play();
            break;
        
        case "t":
            var sound = new Audio('./sound/Ab.mp3')
            sound.play();
            break;
        
        case "u":
            var sound = new Audio('./sound/Bb.mp3')
            sound.play();
            break;
        
        case "v":
            var sound = new Audio('./sound/C-outta-tune.mp3')
            sound.play();
            break;
        
        case "w":
            var sound = new Audio('./sound/Db.mp3')
            sound.play();
            break;
        
        case "x":
            var sound = new Audio('./sound/Eb.mp3')
            sound.play();
            break;
        
        case "y":
            var sound = new Audio('./sound/F-outta-tune.mp3')
            sound.play();
            break;
        
        case "z":
            var sound = new Audio('./sound/Gb.mp3')
            sound.play();
            break;
                    
        default:
            console.log("Incorrect");
    }
}

function pressAnimation(keypressed){
    $("#" + keypressed).toggleClass("pressed");
    setTimeout(function(){
        $("#" + keypressed).toggleClass("pressed");
    },100);

    // console.log(keypressed + "animation");
}