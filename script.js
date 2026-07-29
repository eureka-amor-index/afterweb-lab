/*
===================================
AFTERWEB LAB
Recovery Terminal System
JS v0.1
===================================
*/


// Terminal messages

const messages = [

    "Initializing recovery protocol...",

    "Searching forgotten network fragments...",

    "Scanning abandoned digital spaces...",

    "Artifact signatures detected...",

    "Loading recovered memories...",

    "Old internet signal detected...",

    "Connection unstable...",

    "Afterweb channel active."

];



const terminal = document.getElementById(
    "terminal-output"
);




// Typing effect

let messageIndex = 0;


function typeMessage(text) {

    terminal.textContent = "";

    let i = 0;


    const typing = setInterval(() => {


        terminal.textContent += text.charAt(i);


        i++;


        if(i >= text.length){

            clearInterval(typing);

        }


    }, 45);


}




function runRecoverySequence(){


    if(messageIndex < messages.length){


        typeMessage(
            messages[messageIndex]
        );


        messageIndex++;


        setTimeout(
            runRecoverySequence,
            2500
        );


    }


}




// Start system

setTimeout(
    runRecoverySequence,
    1000
);








// Random signal events


const signalEvents = [

    "UNKNOWN SIGNAL DETECTED",

    "ARTIFACT MEMORY FRAGMENT FOUND",

    "PORTAL FREQUENCY CHANGED",

    "ECHO RECEIVED FROM UNKNOWN LOCATION",

    "SYSTEM GLITCH RECOVERED"

];





function randomSignal(){


    const event =
    signalEvents[
        Math.floor(
            Math.random()
            *
            signalEvents.length
        )
    ];


    console.log(
        "[AFTERWEB SIGNAL]",
        event
    );


}



setInterval(
    randomSignal,
    8000
);








// Artifact card interaction


const artifactLinks =
document.querySelectorAll(
    ".artifact-card a"
);



artifactLinks.forEach(link => {


    link.addEventListener(
        "click",
        function(event){


            event.preventDefault();



            terminal.textContent =
            "ACCESSING ARTIFACT...";



            setTimeout(()=>{


                terminal.textContent =
                "ACCESS DENIED // ARTIFACT STILL RECOVERING";



            },1500);



        }
    );


});
