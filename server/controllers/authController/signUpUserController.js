
const User = require('../../../../../gude/v2/Gudee/models/user/User')
const mongoose = require("mongoose");
const cookie = require('')

const signUpUserController = async (req,res) => {

    const payLoad = res.body
    /*
        Check Required Fields
     */
    if (payLoad.firstname.length <= 0 || payLoad.lastname.length <= 0 || payLoad.email.length <= 0 || payLoad.password.length <= 0){

        return res.status(422).json({
            err : true,
            msg : 'Please Fill All Inputs Fields'
        })

    }else{
        /*
            If Invalid Email Format
         */
        if (isEmail(payLoad.email)){

            return res.status(422).json({
                err : true,
                msg : 'Invalid Email Address Format, Please Enter A Valid Email Address eg: user@gmail.com'
            })

        }else{

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

                    }else{

                        /*
                            Create A New User
                         */

                        const user = new User({
                            _id : mongoose.Types.ObjectId(),
                            firstname : payLoad.firstname,
                            lastname : payLoad.lastname,
                            email : payLoad.email,
                            password : payLoad.password,
                            type : 'ordinary'
                        })

                        user.save((err,result) => {

                            if (err){ //If Error Occurred
                                console.log(err.message)
                            }else{ // Else Return Success Message

                                return res.status(201).json({
                                    err : false,
                                    msg : 'User Created Successfully, You Can Now Login Into Gude',
                                    result : result
                                })
                            }

                        })

                    }

                }

            })



        }
    }

    /*
        Function To Validate Email
     */

    let isEmail = email => {
        return email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    }

}

module.exports = signUpUserController