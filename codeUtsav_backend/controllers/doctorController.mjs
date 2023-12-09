import asyncHandler from 'express-async-handler';
import doctorModel from '../models/doctorModel.mjs';
import * as IPFS from 'ipfs-core';
import buffer from 'buffer'

// @description:    Register new patient
// @route:          POST api/doctors
//@access:          Public


const addPatient = asyncHandler(async (req, res) => {
    const node = await IPFS.create();
    // const node = await IPFS.create({ repo: "ok" });
    console.log("hello from add patient");
    const obj = req.body.ehr;
    const strg = JSON.stringify(obj);
    console.log(strg)
    const fileAdded = await node.add({
        path: "test.txt",
        content: strg,
    })
    console.log(` After fileadded fn ${fileAdded.cid}`)
    console.log(req.body + "hello from add patient")
    const walletAddress = req.body.walletAddress;
    console.log(walletAddress);
    const doctorExists = await doctorModel.findOne({ walletAddress }).exec();
    console.log(doctorExists);
    if (doctorExists) {
        const updatedDoctor = await doctorModel.findOneAndUpdate({ walletAddress: req.body.walletAddress }, { $push: { patients: fileAdded.cid } }, { new: true });
        res.status(201).json({
            walletAddress: updatedDoctor.walletAddress,
            patients: updatedDoctor.patients
        })
    } else {
        const doctor = await doctorModel.create({
            walletAddress: req.body.walletAddress,
            patients: fileAdded.cid

            // {$push: {patients: fileAdded.cid}},
        })

        res.status(201).json({
            walletAddress: doctor.walletAddress,
            patients: doctor.patients
        })
    }

    await node.stop();
})
    
    // const Doctor = await doctorModel.create({
    //     wallletAddress,
    //     patients: patients.push(fileAdded.cid)
        
    // })


//     const chunks = [];
// for await (const chunk of node.cat(fileAdded.cid)) {
//   chunks.push(chunk);

// }

// console.log("Retrieved file contents:", chunks.toString());

    // console.log(fileAdded.cid)


// const addNewPatient = asyncHandler(async(req,res) => {
//     const node = await IPFS.create();
//     const obj = req.body.ehr;
//     const strg = JSON.stringify(obj);
//     console.log(strg)
//     const fileAdded = await node.add({
//         path: "test.txt",
//         content: strg,
//     })
//     console.log(` After fileadded fn ${fileAdded.cid}`)
//     const wallletAddress = req.body.wallletAddress;
//     const Doctor = await doctorModel.findOneAndUpdate({walletAddress: req.body.walletAddress}, {patients: patient.push(fileAdded.cid)});

    

// })

const getSpecificPatient = asyncHandler(async(req,res) => {
    console.log("hello from getSpecificPateint");
    const walletAddress = req.params.walletAddress
    const index = req.params.id
    console.log(index);
    const doctorExists = await doctorModel.findOne({walletAddress}).exec();
    // console.log(doctorExists);
    // const id = doctorModel.findById({_id:id})
    // console.log(typeOf(doctorExists))
    const docObj = (JSON.stringify(doctorExists));
    console.log(doctorExists);
    // console.log(doctorExists.patients);
    // console.log((doctorExists.patients).length)
    // const data = [];


    const node = await IPFS.create();
    // const node = await IPFS.create({ repo: "ok" });
    if(doctorExists) {
        let chunk = null;
        const chunks = [];
        
            const file = doctorExists.patients[index]
            console.log(file)
            for await (chunk of node.cat(file)) {
                
                const ch = chunk.toString();
                
                chunks.push(ch)
                
              }
            
        const data = (JSON.parse(chunks));
        console.log(data);
        res.status(200).send(data);
        
    } else {
        res.status(400).send({
            message:"doctor does not exist"
        })
    }

    await node.stop();
})

const getAllPatients = asyncHandler(async(req,res) => { 

    const ipfsOptions = {
        config: {
          Addresses: {
            API: '/ip4/0.0.0.0/tcp/5001',
            Gateway: '/ip4/0.0.0.0/tcp/8080',
          },
          API: {
            HTTPHeaders: {
              'Access-Control-Allow-Origin': ['*'],
            },
          },
        },
      };

    console.log("hello from getAllPatients");
    const walletAddress = req.params.walletAddress;
    console.log(walletAddress);
    const doctorExists = await doctorModel.findOne({walletAddress}).exec();
    if(!doctorExists) {
        const doctor = await doctorModel.create({
            walletAddress: walletAddress,
            patients: []
            
        })
        res.status(200).json(doctor.patients)

    } else {
        const node = await IPFS.create(ipfsOptions);
        // const node = await IPFS.create({repo: 'ok' + Math.random()});
        var chunks = [];
        const data=[]
        for(var i = 0; i< doctorExists.patients.length; i++) {
            const file = doctorExists.patients[i];
            for await (const chunk of node.cat(file)) {
                const ch = chunk.toString();
                chunks.push(ch);
              }
            //   data.push(chunks.name);
            data.push(chunks);
              chunks = [];

        }
        const userData = []
        for(var j =0;j<data.length;j++) {
            console.log(JSON.parse(data[j]))
            const userDataObj = JSON.parse(data[j])
            console.log(`userdataObj : ${userDataObj}`)
            const obj ={"name":userDataObj.name, "email":userDataObj.email, "phone":userDataObj.phone, "dob":userDataObj.dob}
            userData.push(obj)
        }

        console.log(`sending result: ${userData}`);
        
        res.status(200).json(
            userData
        )
        
        const stop = await node.stop();
        // try {
        //     res.status(200).json(userData);
        //   } finally {
        //     await node.stop();
        //   }
        // console.log(stop);



    }
})
export {addPatient,  getSpecificPatient, getAllPatients};
