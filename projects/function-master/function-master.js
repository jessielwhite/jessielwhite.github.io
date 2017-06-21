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
    string = string.split(" ");
    for (var i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");
    
}

function welcomeMessage(obj) {
    if(obj.hasOwnProperty('name')){
        return "Welcome " + capitalizeWord(obj['name']) + "!";
    }
}

function profileInfo(obj) {
    if(obj.hasOwnProperty('name') && obj.hasOwnProperty('species')){
        return capitalizeWord(obj['name']) + " is a " + capitalizeWord(obj['species']);
    }
}

function maybeNoises(obj) {
    if(obj.hasOwnProperty('noises') && obj['noises'].length > 0){
        return (obj['noises'].join(" "));
    }else{
        return "there are no noises";
    }

}

function hasWord(stringOfWords, word) {
    var string = stringOfWords.split(" ");
    for(var i = 0; i < string.length; i++) {
        if (word.toUpperCase() === string[i].toUpperCase()){
            return true;
        }
    } return false;
}

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    if(obj.hasOwnProperty('friends')){
        for(var i = 0; i < obj.friends.length; i++){
            if(name === obj.friends[i]){
                return true;
            }
        }
    }
    return false;
}

function nonFriends(name, people) {
  var friends = [];
  var notFriends = [];
  for(var i = 0; i < people.length; i++){
    if(people[i].name === name){
      friends = people[i].friends;
    }
  }
  for(var j = 0; j < people.length; j++){
    if(people[j].name !== name && !friends.includes(people[j].name)){
       notFriends.push(people[j].name);
    }
  }
  return notFriends;
}
  
  
 function updateObject(obj, key, value){
    obj[key] = value;
    return obj;
 }
   
function removeProperties(obj, props){
    for (var i = 0; i < props.length; i++) {
        if(obj.hasOwnProperty(props[i])){
            delete obj[props[i]];
        }
    }
}

function dedup(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}