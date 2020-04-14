const { Router } = require ('express');
const families = require('../data/family.json');
const fs = require('fs');

const router = Router();
const writeMember = (member) => {
    fs.writeFile('./data/family.json',JSON.stringify(member),(err)=>{
        if (err) {
        console.log(err);
    }
        console.log('Done!');
    
    });
}
    router.get('/',(req,res)=>{
    res.json(families);
    });
    router.get('/:id',(req,res)=>{
        const member = families.find(f=> f.id == req.params.id);
        res.json(member);
    });
    router.post('/', (req,res)=>{
    const { firstName,lastName,age,sex,address } = req.body;
    const id = (families.length)+1;
    const newMember = { id,firstName,lastName,age,sex,address };
    const newFamilies = families.concat(newMember);
    writeMember(newFamilies);
    res.json(newFamilies);
    });
    router.put('/:id',(req,res)=>{
    const found = families.find(f=>f.id==req.params.id);
    console.log(req.body);
    ['firstName','lastName','age','sex','address'].forEach((key) => { 
        if (req.body[key])
        found.key = req.body[key];
    });
    writeMember(families);
    res.send(families);
    });
    router.delete('/:id',(req,res) => {
        const newFamily = families.filter(f => f.id != req.params.id);
        writeMember(newFamily);
        res.send(newFamily);
    });

    module.exports = router;