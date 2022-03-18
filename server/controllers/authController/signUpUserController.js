
const User = require('../../models/User')
const Student = require('../../models/Student')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')



//Export the module
module.exports = {
    signUpUserController : async (req,res) => {

        const err = validationResult(req)

        if (err.array().length > 0){
            return res.status(200).json({
                err : err.array()
            })
        }else {
            const {firstname,lastname,email,password} = req.body

            //Check if email exist
            const userOne = await User.findOne({email : req.body.email}, (e,adv) => {

                if (e){
                    return res.status(500).json({
                        err : true,
                        msg : e.message
                    })
                }else{

                    if (adv){
                        return res.status(422).json({
                            err : true,
                            msg : 'Email Already Taken'
                        })
                    }else{

                        // //Hash User Password
                        bcrypt.hash(password,10,(e,hash) => {
                            if (e){
                                return res.status(500).json({
                                    err : true,
                                    msg : e.message
                                })
                            }else{

                                //Create a new user
                                const user = new User({
                                    _id : mongoose.Types.ObjectId(),
                                    firstname,
                                    lastname,
                                    email,
                                    password : hash
                                })

                                user.save((e, result) => {

                                    if (e){
                                        return res.status(500).json({
                                            err : true,
                                            msg : e.message
                                        })
                                    }
                                    return res.status(201).json({
                                        err : false,
                                        msg : 'Account created successfully, You can now login',
                                        resp : result
                                    })
                                })

                            }
                        })

                    }
                }

            }).clone()
        }
    },
    checkIfStudent : (req,res) => {
        const {_user_id} = req.body;
        Student.find({_student_id : _user_id},(e,adv) => {
            if (e){
                return res.status(200).json({
                    err : true,
                    msg : e
                })
            }else{
                console.log(adv)
                if (adv.length > 0){
                    return res.status(200).json({
                        err : false,
                        msg : 'User Is A Student',
                        isStudent : true
                    })
                }else{
                    return res.status(200).json({
                        err : true,
                        msg : 'User Not A Student',
                        isStudent : false
                    })
                }
            }
        })
    }

}


