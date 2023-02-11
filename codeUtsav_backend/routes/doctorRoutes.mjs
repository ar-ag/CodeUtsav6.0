import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import {addPatient, getPatient} from '../controllers/doctorController.mjs'
import doctorModel from '../models/doctorModel.mjs';



// router.route('/').get(getAllPatients).post( addPatient);
// router.route('/:id').get(getSpecificPatient);

router.route('/').post(addPatient);

// const routeFunction = asyncHandler(async(req,res)=>{
//     const walletAddress = req.body.walletAddress
//     const doctor = await doctorModel.find({walletAddress: walletAddress});
//     if((doctor.patients).length > 0) {
//         router.route('/').put(addNewPatient)
//     } else {
//         router.route('/').post(addPatient)
//     }
// })
router.route('/:walletAddress').get(getPatient);

// routeFunction();

export default router