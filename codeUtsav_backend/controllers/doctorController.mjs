import asyncHandler from 'express-async-handler';
import doctorModel from '../models/doctorModel.mjs';
import * as IPFS from 'ipfs-core';
import buffer from 'buffer'

// @description:    Register new patient
// @route:          POST api/doctors
//@access:          Public

const addPatient = asyncHandler(async(req,res) => {
    const node = await IPFS.create();
    const obj = req.body.ehr;
    const strg = JSON.stringify(obj);
    console.log(strg)
    const fileAdded = await node.add({
        path: "test.txt",
        content: strg,
    })
    console.log(` After fileadded fn ${fileAdded.cid}`)
    const walletAddress = req.body.walletAddress;
    console.log(walletAddress);
    const doctorExists = await doctorModel.find({walletAddress}).exec();
    if(doctorExists) {
        const updatedDoctor = await doctorModel.findOneAndUpdate({walletAddress: req.body.walletAddress}, {$push: {patients: fileAdded.cid}});
        res.status(201).json({
            walletAddres: updatedDoctor.walletAddress,
            patients: updatedDoctor.patients
        })
    } else {
        const doctor = await doctorModel.create({
            walletAddress: walletAddress,
            patients: fileAdded.cid
            // {$push: {patients: fileAdded.cid}},
        })
        res.status(201).json({
            walletAddres: doctor.walletAddress,
            patients: doctor.patients
        })
    }

    
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
})

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

const getPatient = asyncHandler(async(req,res) => {
    const walletAddress = req.params.walletAddress
    const doctorExists = await doctorModel.findOne({walletAddress}).exec();
    // console.log(doctorExists);
    // const id = doctorModel.findById({_id:id})
    // console.log(typeOf(doctorExists))
    const docObj = (JSON.stringify(doctorExists));
    console.log(doctorExists);
    console.log(doctorExists.patients);
    // console.log((doctorExists.patients).length)
    const data = [];
    const node = await IPFS.create();
    if(doctorExists) {
        let chunk = null;
        const chunks = [];
        for(let i =0;i<doctorExists.patients.length; i++) {
            const file = doctorExists.patients[i]
            console.log(file)
            for await (chunk of node.cat(file)) {
                chunks.push(chunk);
                // console.log(chunk)
                // console.log("break")
                console.log(chunk.toString())
                const ch = chunk.toString();
                console.log(ch);
                chunks.push(ch)
                // console.log
              }
              
              
        }
        var temp = JSON.parse(chunks.toString())
        console.log(data);
        res.status(200).send(temp);
    }
})
export {addPatient, getPatient};
