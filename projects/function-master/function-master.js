function objectValues(obj) {
    var arr = [];
    for (var keys in obj){
        arr.push(obj[keys]);
    }
    return arr;
}

function keysToString(obj) {
    var string = [];
    for (var key in obj){
        string.push(key);
    }
    string = string.join(" ");
    return string;
}

function valuesToString(obj) {
    var string = [];
    for(var key in obj){
        if(typeof obj[key] === "string"){
            string.push(obj[key]);
        }
    } return string.join(" ");
} 

function arrayOrObject(arg){
    if (Array.isArray(arg)) {
        return "array";
    } else if (arg === null){
        
    } else if (arg instanceof Date){
        
    }else{
        if (typeof arg === "object"){
            return "object";
        }
    }
} 

function capitalizeWord(string){
    return string[0].toUpperCase() + string.slice(1);
}

function capitalizeAllWords(string){
    var upper = string.toUpperCase();
    console.log(upper);
    
}