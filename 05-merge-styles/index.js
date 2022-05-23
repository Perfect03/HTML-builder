const fs = require('fs/promises');

const mergeStyle = async function(path, destination) {
  try {
    const styles = await fs.readdir(path, {withFileTypes: true});
    let a = [];
    for (let style of styles) {
      if (style.name.split('.')[1] === 'css' && style.isFile()) 
      {
        a.push(await fs.readFile(`${path}/${style.name}`));
      }
    }
    await fs.writeFile(`${destination}/bundle.css`, [...a]);
  } 
  catch (err) {
    console.log(err);
  }
};


mergeStyle('./05-merge-styles/styles', './05-merge-styles/project-dist');