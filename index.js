////////////////
// VAR SETUP  //
////////////////

let storylist = new String("");
let debuglist = new String("");

////////////////
// FUNCTIONS  //
////////////////

// UTILITY
////////////

function randomInt(x) {
    // random int from 0 incl to x excl
    return Math.floor(
        (Math.random() * x)
    );
}

function Log(str) {
    // add input string to the debug readout
    debuglist += ("\n" + str);

    document
        .getElementById("debug_output")
        .innerHTML = debuglist;
}

// this function from
// https://forkful.ai/en/javascript/data-formats-and-serialization/working-with-csv
function parseCsv(csv) {
    const lines   = csv.split("\n");
    const result  = [];
    const headers = lines[0].split(",");
    ////
  
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(",");
        ////
            
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }

        result.push(obj);
    }
    
    return result;
}

function TextEngine() {
    Log("text start");

    const TextArray = [
        "This story is about a {noun}.",
        "This tale features a {noun}."
    ];
    const dice = randomInt(TextArray.length);

    let result = null;
    ////

    result = TextArray[dice]

    return result || "TEST TextEngine!";
}

function StoryEngine() {
    Log("generate start");

    let result = null;
    ////
    
    result = TextEngine();
    
    return result || "TEST StoryEngine!";
}

function Engine() {
    Log("engine start");

    let result = null;

    //let Nouns = "https://docs.google.com/spreadsheets/d/1HPWCBgZo6UinIWZbvMDbgmImNOIwa0xK338RZnjBxS8/pub?gid=0&single=true&output=csv"
    //let Verbs = "https://docs.google.com/spreadsheets/d/1HPWCBgZo6UinIWZbvMDbgmImNOIwa0xK338RZnjBxS8/pub?gid=2092645124&single=true&output=csv"
    //let Adjvs = "https://docs.google.com/spreadsheets/d/1HPWCBgZo6UinIWZbvMDbgmImNOIwa0xK338RZnjBxS8/pub?gid=525846539&single=true&output=csv"
    ////

    result = StoryEngine();

    return result || "TEST Engine!";
}

function Generate() {
    Log("\ngenerating....")
    ////

    storylist = Engine() + "<br><br>" + storylist;

    document
        .getElementById("storyList_p")
        .innerHTML = storylist;
}

////////////////
// LISTENERS  //
////////////////

function Generator_btn() {
    let Generator_btn_lst = document
        .getElementById("generator_btn");
        
        Generator_btn_lst.addEventListener(
            "click",
            function() {
                Generate();
        });

    return true;
};

function init_eventListeners() {
    Log("init event listeners")

    return Generator_btn();
}

////////////////
// INIT CALLS //
////////////////
function start() {
    Log("INIT....");
    Log(init_eventListeners());
}

start();
