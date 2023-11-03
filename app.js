// {1,2,3,4}

// "ref"

/*
{
[1,2,3]: true,
[1,2,3]: false,
}
*/
const hasDuplicate = (arr) => {
    const noDupes = new Set(arr);
    if(noDupes.size === arr.length){
        return false;
    }
    return true;
}

const vowelCount = (str) => {
    const vowelstr = "aeiouAEIOU";
    const vowelMap = new Map();
    for(let char of str){
        if(vowelstr.includes(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) +1);
            }else{
                vowelMap.set(char, 1);
            }
        }
    }
  return vowelMap;
}
