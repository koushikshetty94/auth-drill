var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Tasks", taskSchema);

