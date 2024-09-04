const crypto = require('crypto');
const fs = require('fs');
const os = require('os');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cryptoHash = (text) => {
    const cdata= crypto.randomUUID();
    console.log("uuid",cdata);

    const encrypted = crypto.createCipheriv('aes-256-cbc', key, iv);

    let encryptedData = encrypted.update(text, 'utf8', 'hex');

    encryptedData += encrypted.final('hex');
    return encryptedData;
  };

  // const readData = () => {
  //   const data = fs.readFileSync('data.txt', 'utf8');
  //   return data;
  // }

  let readstream = fs.createReadStream('data.txt');
 

  
  const stmemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately starting ${Math.round(stmemory * 100) / 100} MB`);
  console.time('time');
    // readData();
    readstream.on('data', (chunk) => {
      let data="";
      data = data+chunk
      console.log(data.toString());
    });
    readstream.on('end', () => {
      console.log('No more data!');
      console.timeEnd('time');
      const endmemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ending ${Math.round(endmemory * 100) / 100} MB`);
    })
    console.log(os.cpus());
    console.log(os.uptime());
console.log(cryptoHash("Hello, Good Morning"))
  
  
  
  

