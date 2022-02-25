
const User = require('../../../../../gude/v2/Gudee/models/user/User')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const signUpUserController = async (req,res) => {


    //Assign the payload to req.body from the request
    const payLoad = res.body
    /*
        Check Required Fields
     */
    if (payLoad.firstname.length <= 0 || payLoad.lastname.length <= 0 || payLoad.email.length <= 0 || payLoad.password.length <= 0){

        return res.status(422).json({
            err : true,
            msg : 'Please Fill All Inputs Fields'
        })

    }else{ //All Required Fields Are Entered
        /*
            If Invalid Email Format
         */
        if (isEmail(payLoad.email)){

            return res.status(422).json({
                err : true,
                msg : 'Invalid Email Address Format, Please Enter A Valid Email Address eg: user@gmail.com'
            })

        }else{//If email is valid format

            //Check if email is taken
            const user = await User.findOne({email : payLoad.email}, (e, adventure) => {

                /*
                    If Error Occurred
                 */

                if (e){

                    return res.status(500).json({
                        err : true,
                        msg : e.message
                    })

                }else if (adventure.length > 0){ //If Else Email Already Taken

                    return res.status(409).json({
                        err : true,
                        msg : 'Email Address Already Taken, Please Use A Different Email.'
                    })

                }else{ //Else Email Is Free To Be Used

                    /*
                      If Password Is Less Than 8 Characters
                   */

                    if (payLoad.password.length < 8){

                        return res.status(422).json({
                            err : true,
                            msg : 'Password Should Be At Least 8 Characters Long'
                        })

                    }else{//If password length is > 8
                        /*
                            Hash User Password
                         */

                        bcrypt.hash(payLoad.password, 10 , (e,hash) => {

                            if (e) {

                                return res.status(500).json({
                                    err: true,
                                    msg: e.message
                                })

                            }else{
                                /*
                                    Create A New User
                                */

                                const user = new User({
                                    _id : mongoose.Types.ObjectId(),
                                    firstname : payLoad.firstname,
                                    lastname : payLoad.lastname,
                                    email : payLoad.email,
                                    password : hash,
                                    type : 'ordinary'
                                })

                                user.save((err,result) => {

                                    if (err){ //If Error Occurred
                                        console.log(err)
                                    }else{ // Else Return Success Message

                                        return res.status(201).json({
                                            err : false,
                                            msg : 'User Created Successfully, You Can Now Login Into Gude',
                                            result : result
                                        })
                                    }
                                })//End of save function

                            }//End of no bcrypt error

                        })//End of bcrypt hash

                    }//End of else password is > 8 by length

                }//End of else email is not taken

            })//End of promise to find one user from db

        }//End of else valid email

    }//End of else all required fields are entered

    /*
        Function To Validate Email
     */

    let isEmail = email => {
        return email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    }

}
//Export the module
module.exports = signUpUserController