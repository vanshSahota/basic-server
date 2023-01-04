const userTable = require('./../tables/user.table')

const userController = {
  getUsers: async (req, res, next)=>{
    try {
      console.log("fetching users");

      let users = await userTable.findAndCountAll();

      res.json({
        status:"Success",
        data:users
      })      
    } catch (error) {
      next(error)
    }
  },
  postUsers:async (req, res, next)=>{
    try {
      console.log("create users",req.body);

      let user = await userTable.findOne({
        where:{
          email:req.body.email
        }
      });
      if(user){
        throw new Error("Email already exists");
      }

      let users = await userTable.create({
        username:req.body.name,
        email:req.body.email,
      });

      res.json({
        status:"Success",
        data:users
      })      
    } catch (error) {
      next(error)
    }
  },
  getSpecificUser: async (req, res, next)=>{
    try {
      if(!req.params.id){
        throw new Error("Id nnhi hai");
      }

      console.log("params ye aaya hai", req.params);

      let user = await userTable.findOne({
        where:{
          id:req.params.id
        }
      })
      res.status(200).send({message:user, params:req.params})
    } catch (error) {
      next(error)
    }
  },
  updateUser:async (req,res)=>{
    try {
      if(!req.params.id){
        throw new Error("nahi hai");
      }

      let user= await userTable.findOne({
        where:{
          id:req.params.id
        }
      })
      if(!user){
        throw new Error("user not found");
      }
      let updatedUser=await userTable.update({
        username:req.body.name,
        email:req.body.email
        
      },
      {
        where:{
          id:req.params.id
        }
      })
      res.json({
        staus:"sucess",
        data:updatedUser
      })
      
    } catch (error) {
      res.status(500).json({
        status:'failed'
      })
    }
  },
  deleteuser:async (req,res)=>{
    try {
      if(!req.params.id){
        throw new Error("nahi hai");
      }

      let user= await userTable.findOne({
        where:{
          id:req.params.id
        }
      })
      if(!user){
        throw new Error("user not found");
      }
      let deleteuser=await userTable.destroy({
        
        where:{
          id:req.params.id
        }
      })
      res.json({
        staus:"sucess",
        data:deleteuser
      })
      
    } catch (error) {
      res.status(500).json({
        status:'failed'
      })
    
    console.log(error);
    }
  }
}

module.exports = userController