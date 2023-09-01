import {SchemaTypes} from "mongoose";
import mongoose from "../connections.js";

const schema = mongoose.Schema
const UsersSchema = new schema({
    'firstname': {type:SchemaTypes.String, required: true},
    'lastname': {type:SchemaTypes.String, required: true},
    'email': {type:SchemaTypes.String, required: true},
    'githubhandle': {type:SchemaTypes.String, required: true},
    'password': {type:SchemaTypes.String, required: true},
    'confirmpassword': {type:SchemaTypes.String, required: true},
})
export const UserModel = mongoose.model('Attendees', UsersSchema);

