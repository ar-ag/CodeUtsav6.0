import mongoose, { Schema } from 'mongoose';

const DoctorSchema = Schema({
    walletAddress:{
        type:String,
    },
    patients : [{
                type: String
            }]
        
    
})

export default mongoose.model("Doctor",DoctorSchema)