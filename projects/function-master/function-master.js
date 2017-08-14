function objectValues(obj) {
   var objectToArray = [];
    
    for (var key in obj) {
        objectToArray.push(obj[key]);
    }
    return objectToArray;
};

function keysToString(data) {
    var keyArray = Object.keys(data);
    var newKeyArray = keyArray.join(" ");
    return newKeyArray;
}   
    

//     var arrayOfKeys = [];
//         for (var key in obj) {
//             arrayOfKeys.push(key);
//         }
//         return arrayOfKeys.join(" ");
        

function valuesToString(obj) {
    var arrayOfValues = [];
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            arrayOfValues.push(obj[key]);
        }
          
    }   return arrayOfValues.join(" ");   
    
}

function arrayOrObject(arg) {
    if (Array.isArray(arg)) {
        return "array";
    } else if (typeof arg === "object") {
        return "object";
    }
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    
}

function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj["name"]) + "!";
}

function profileInfo(obj) {
    return capitalizeWord(obj["name"]) + " is a " + capitalizeWord(obj["species"]);
}

function maybeNoises(obj) {
    if (obj.hasOwnProperty("noises") && obj["noises"].length > 0) {
        return obj["noises"].join(" ");
    } else {
        return "there are no noises";
    }
}

function hasWord(stringOfWords, word) {
    if (stringOfWords.includes(word)) {
        return true;
    }
    return false;
}

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    if (obj.friends) {
        var newString = obj.friends.join(" ");
        return (newString.includes(name));
    } else {
        return false;
    }

}

function nonFriends(name, people) {
    var notFriends = [];
    for(var i = 0; i < people.length; i++){
        if(people[i].name !== name && !people[i].friends.includes(name)) {
            notFriends.push(people[i].name);
        }
    }
    return notFriends;
}

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeProperties(obj, arrayOfStrings) {
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if(obj.hasOwnProperty(arrayOfStrings[i])) {
            delete obj[arrayOfStrings[i]];
        }
    }
}

function dedup(array) {
for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i +1]) { 
            array.splice(i +1, 1);
            i -= 1;
        }
    }
    return array;
}