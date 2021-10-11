const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let poem = "In Bollywood or Broadway, you have to know how to dance".toUpperCase()

let arrayFL = poem.split(' ').map(i => i.charAt(0)) //Uppercase each letter

message = "Hi Bob".toUpperCase()

let completeMessage = []

const acrostic = () =>{

    for (let i = 0; i < message.length; i++){
        // console.log(i)
        for (let y = 0; y < arrayFL.length; y++){
            // console.log(y)
            if (message.length === completeMessage.length){
                console.log(completeMessage.join(""))
                break
            } else if(message.charAt(i) === arrayFL[y]){
                arrayFL.splice(y, 0)
                console.log(arrayFL[y])
                // console.log(arrayFL)
                completeMessage.push(arrayFL[y])
                
            }
        }
    }
}


acrostic()
// console.log(arrayFL)
// console.log(array)