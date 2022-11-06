const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    customerName: {
        type: 'String'
    },
    email: {
        type: 'String',
        required: [true, "Please enter your email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ],
    },
    contact: 'String',
    address: 'String',
    packageType: 'String',
    billingCycle: 'String',
    postRemaining: {
        type: String,
        default: '0',
      },
    
    postDone:  {
        type: String,
        default: '0',
      },
    dollarRemaining: {
        type: String,
        default: '0',
      },
    dollarSpent:  {
        type: String,
        default: '0',
      },
    startDate: 'String',
    endDate: 'String',
    contract: {
        public_id: {
            type: String,
            requried: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    logo: {
        public_id: {
            type: String,
            requried: true,
        },
        url: {
            type: String,
            required: true,
        }
    }
})

module.exports = new mongoose.model('project', projectSchema);