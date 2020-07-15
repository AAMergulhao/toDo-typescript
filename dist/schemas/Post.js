"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');







const PostSchema = new (0, _mongoose.Schema)({
    title: String,
    content: String,
    dueDate: Date
},{timestamps: true});

exports. default = _mongoose.model('Post', PostSchema);
