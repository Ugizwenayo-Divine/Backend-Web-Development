const { Router } = require ('express');
const pool = require('../db');

const routerDb = Router();

routerDb.get('/',(req,res,next)=>{
    pool.query('SELECT * FROM familyTable ORDER BY id ASC',(err,result)=>{
         if(err) 
         {
         return next(err);
         }
         
         res.json(result.rows);
         });
 });
 routerDb.get('/:id',(req,res,next)=>{
     pool.query('SELECT * FROM familyTable WHERE id=$1',[req.params.id],(err,result)=>{
          if(err) 
          {
          return next(err);
          }
          
          res.json(result.rows);
          });
  });
  routerDb.post('/',(req,res,next)=>{
    const { firstName,lastName,age,sex,address } = req.body;
    pool.query('INSERT INTO familyTable(firstName,lastName,age,sex,address) VALUES ($1,$2,$3,$4,$5)',
    [firstName,lastName,age,sex,address]
    ,(err,result)=>{
         if(err) 
         {
         return next(err);
         }
         const resp={
             message:"Created successfully",
             data:req.body
         }
         res.json(resp);
         });
 });
 routerDb.put('/:id',(req,res,next)=>{
     const {id} = req.params;
     const keys = ['firstName','lastName','age','sex','address'];
     const fields = [];
     keys.forEach((keys) => {
         if(req.body[keys]) fields.push(keys);
     });
    fields.forEach((field) => {
        pool.query(`UPDATE familyTable SET ${field}=$1 WHERE id=$2`,
            [ req.body[field],id]
            ,(err,result)=>{
            if(err) 
            {
                console.log(err);
            }
            if(result.rowCount != 0){
                return res.end('The family member is updated');
            }
                return res.end('He is not a family member');
            });
        });
 });
 routerDb.delete('/:id',(req,res,next)=>{
    const {id} = req.params;
       pool.query(`DELETE FROM familyTable WHERE id=$1`,
           [id]
           ,(err,result)=>{
           if(err) 
           {
               console.log(err);
           }
           if(result.rowCount != 0){
               return res.end('The family member is deleted');
           }
               return res.end('He is not a family member');
           });
       });
  module.exports = routerDb;