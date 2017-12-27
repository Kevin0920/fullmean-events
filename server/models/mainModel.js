var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


var UserSchema = new mongoose.Schema({
    first_name: { type: String, required:true },
    last_name: { type: String, required:true },
    email: { type: String, required:true },
    state: { type: String, required:true },
    password: {type: String, require: true},
    _comments: [ { type: mongoose.Schema.ObjectId, ref: 'Comment' } ],
    events: [ { type: mongoose.Schema.ObjectId, ref: 'Event' } ]
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);

var EventSchema = new mongoose.Schema({
    eventName: { type: String, required:true },
    date: Number,
    price: Number,
    state: { type: String, required:true },
    host: { type: String, required:true },
    users: [ {type : mongoose.Schema.ObjectId, ref : 'User'} ],
    _comments: [ { type: mongoose.Schema.ObjectId, ref: 'Comment' } ],
}, {timestamps: true});

var Event = mongoose.model('Event', EventSchema);

var CommentSchema = new mongoose.Schema({
    contents: { type: String, required:true },
}, {timestamps: true});

var Comment = mongoose.model('Comment', CommentSchema);