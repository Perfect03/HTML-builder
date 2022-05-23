const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');


console.log("Внимание! В Git Bash некоторых версий для Windows присутствует баг, из-за которого не выводится прощальное сообщение при нажатии Ctrl+C. Т.к. при их нажатии программа завершается автоматически, и функция для вывода сообщения даже не успевает сработать. Пожалуйста, попробуйте запустить программу в другом терминале.\n");
console.log("Введите текст");

async function lineFromFile() {
  const fileStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {

  /* process.on(("exit"), () =>{
   console.log('Endgame');
    fileStream.end();
    })*/
    process.on(("SIGINT"), () =>{
     console.log('Endgame');
  fileStream.end();
    })
   if (`${line}`== 'exit') {console.log('Endgame');
   fileStream.end();break;}
    fileStream.write(`${line}`);
  }
}
lineFromFile();