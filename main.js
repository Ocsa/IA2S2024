function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states, visitedStates){
    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    
    // Actualizar estados
    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    // Verificar si todos los estados han sido visitados
    var newState = states.join(",");
    if (!visitedStates.includes(newState)){
        visitedStates.push(newState);
    }
    
    // Verificar si hay más acciones pendientes
    if (visitedStates.length < 8){
        setTimeout(function(){ test(states, visitedStates); }, 2000);
    }
}

var states = ["A","DIRTY","DIRTY"];
var visitedStates = [];
test(states, visitedStates);