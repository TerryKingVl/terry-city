import fs from 'node:fs';
import vm from 'node:vm';
const filename=process.argv[2]||'worker.js';
const src=fs.readFileSync(filename,'utf8');
const match=src.match(/const HTML\s*=\s*String\.raw`([\s\S]*?)`;\s*/);
if(!match)throw new Error('Embedded HTML template missing');
const scripts=[...match[1].matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
if(!scripts.length)throw new Error('No inline browser scripts');
for(let i=0;i<scripts.length;i++){
  new vm.Script(scripts[i][1],{filename:`embedded-script-${i}.js`});
}
console.log(`Validated ${scripts.length} embedded scripts`);
