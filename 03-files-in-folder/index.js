const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');


console.log("Введите текст");

async function lineFromFile() {
  const fileStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
   process.on(("exit"), () =>{
   // console.log('Endgame');
    fileStream.end();
    })
    process.on(("SIGINT"), () =>{
     // console.log('Endgame');
  fileStream.end();
    })
   /*  if (`${line}`== 'exit') {exit();}*/
    fileStream.write(`${line}`);
  }
}
lineFromFile();
