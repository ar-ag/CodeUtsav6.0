// import IPFS from 'ipfs'
// import OrbitDB from 'orbit-db'

// // const ipfsOptions = {
// //     EXPERIMENTAL : {
// //         pubsub:true
// //     }
// // }
// // async function createDatabase(){
// // const ipfs = await IPFS.create(ipfsOptions);
// // const identity = await Identities.createIdentity(options)
// // console.log(identity.toJSON())

// // const optionsToWrite = {
// //     // Give write access to the creator of the database
// //     accessController: {
// //       type: 'orbitdb', //OrbitDBAccessController
// //       write: [OrbitDB.identity.id, identity.publicKey.toString()],
// //     },
    

// // }
// // const db = await OrbitDB.docs('test-db', optionsToWrite)}
// // createDatabase()

// // import IPFS from 'ipfs'
// // import {createRequire} from 'module'
// // const require = createRequire(import.meta.url)
// // const OrbitDB = require('orbit-db')
// // const IPFS = require('ipfs')


// async function main () {
//   // Create IPFS instance
//   const ipfsOptions = { repo : './ipfs', }
//   const ipfs = await IPFS.create(ipfsOptions)
//   console.log("helooooo")
//   // Create OrbitDB instance
//   const orbitdb = await OrbitDB.createInstance(ipfs)
//   }

// main()

import * as IPFS from 'ipfs-core';

async function main() {
const node = await IPFS.create();

const obj = {
    "name" : "amy",
    "title" : "shah"
}

const strg = JSON.stringify(obj);
const vart = "my ipfs file";

const fileAdded = await node.add({
  path: "test2.txt",
  content: strg,
});

const chunks = [];
for await (const chunk of node.cat(fileAdded.cid)) {
  chunks.push(chunk);
}

console.log("Retrieved file contents:", chunks.toString());
}

main();