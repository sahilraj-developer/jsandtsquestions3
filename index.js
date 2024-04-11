// You are Rewuired to implement a function generateAHsg that generate a hash tasg from a giveb input String.
// the hash tag should be constructed as follows

// the input string should be converted to a hash tag FormData, where each word is capatalized and concatenated together without spaces.


// return false if the string is more than 280 or empty


// Q. write a function generateHash to accomplish this task.
// output = "#MyNameIsSahilRaj"
function generateHash(data){
   if(data.length>280 || data.trim().length === 0){
    return false;
   }
   data = data.split(" ");
   data = data.map((elem,i)=>
   elem.replace(elem[0], elem[0].toUpperCase())
   )
   data = `#${data.join('')}`;
   return data;
}

console.log(generateHash("My name is sahil raj"));