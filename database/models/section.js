const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let schema = new Schema({
   title: { type: String, required: true },
   index: { type: Number },
   fields: [{
       type: { type: String },
       value: { type: Schema.Types.Mixed }
   }]
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

const Model = mongoose.model('Section', schema); // Section
module.exports = (registry) => {
    registry['Section'] = Model;
};
