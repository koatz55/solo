const Apparel = require('../models/apparel.model');
const jwt = require('jsonwebtoken');


module.exports = {

    findAllApparel: async (req, res) => {
        try{
            const allApparel = await Apparel.find();
            res.status(200).json(allApparel)
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    allApparelByLoggedInUser: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            const user_id = decodedJwt.payload._id
            const apparels = await Apparel.find({user_id:user_id})
            res.status(200).json(apparels)
            // console.log('DECODED JWT ID', decodedJwt.payload._id);
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    // createApparel: (req, res) => {
    //     Apparel.create(req.body)
    //         .then((newApparel) => {
    //             res.status(200).json(newApparel)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },

    createApparel: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            console.log('DECODED JWT ID', decodedJwt.payload._id);
            const apparel = {...req.body, user_id:decodedJwt.payload._id}
            console.log('FINALIZED ALBUM', apparel);
            const newApparel = await Apparel.create(apparel);
            res.status(201).json(newApparel);
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    // ! Try to convert the remaining 3 controller functions to async/await 
    findOneApparel: (req, res) => {
        Apparel.findOne({_id: req.params.id})
            .then((oneApparel) => {
                res.status(200).json(oneApparel)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateApparel: (req, res) => {
        Apparel.findOneAndUpdate(        
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then((updatedApparel) => {
                res.status(200).json(updatedApparel)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }, 
    deleteApparel: (req, res) => {
        Apparel.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}