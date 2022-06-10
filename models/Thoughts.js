const {Schema, model} = require('mongoose');
const reactionsSchema = require('./Reaction');

// create a new schema that will have the table columns and export it
const thoughtSchema = new Schema(
    {
        thoughtPost:{
            type: String,
            minlength: 1,
            maxlength: 280,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema]

    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)
// create a model

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;