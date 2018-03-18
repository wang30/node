const express = require('express')
const mysql = require('mysql')
const fs = require('fs')
const path = require('path')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4512',
    database: 'learn' 
})

module.exports = ()=>{
    const router = express.Router()

    router.get('/', (req, res)=>{                       //delete
        if(req.query.act === 'del' && req.query.id) {
            db.query(`select * from custom_evaluation_table where ID='${req.query.id}'`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error9').end()
                }
                else {
                    fs.unlink(`./static${data[0].src}`, (err)=>{
                        if(err) throw err
                        else {
                            db.query(`delete from custom_evaluation_table where ID='${req.query.id}'`, (err, data)=>{
                                if(err) {
                                    console.log(err)
                                    res.status(500).send('database error7').end()
                                }
                                else {
                                    res.redirect('/admin/custom')
                                }
                            })
                        }
                    })
                }
            })
        }
        else if(req.query.act === 'mod' && req.query.id) {
            db.query(`select * from custom_evaluation_table where ID='${req.query.id}'`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error4').end()
                }
                else {
                    db.query(`select * from custom_evaluation_table`, (err, custom)=>{
                        if(err) {
                            console.log(err)
                            res.status(500).send('database error5').end()
                        }
                        else {
                            res.render('admin/custom.ejs', {custom, mod: data[0]})
                        }
                    })
                }
            })
        }
        else {
            db.query(`select * from custom_evaluation_table`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error2').end()
                }
                else {
                    res.render('admin/custom.ejs', {custom: data, mod: {}})
                }
            })
        }
    })
    router.post('/', (req, res)=>{
        if(req.body.id) {                       //修改
            db.query(`update custom_evaluation_table set title='${req.body.title}', description='${req.body.description}' where ID='${req.body.id}'`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error6').end()
                }
                else {
                    res.redirect('/admin/custom')
                }
            })
        }
        else {       
            const file = req.files[0];
            const ext = path.parse(file.originalname).ext; 
            const newName = file.path + ext; 
            fs.rename(file.path, newName, (err, data)=>{
                if(err) {
                    res.status(400).send('file rename error').end()
                }
                else {
                    db.query(`insert into custom_evaluation_table(title, description, src) values('${req.body.title}', '${req.body.description}', '/upload/${file.filename}${ext}')`,(err, data)=>{
                        if(err) {
                            console.log(err)
                            res.status(500).send('database error8').end()
                        }
                        else {
                            res.redirect('/admin/custom')
                        }
                    })        
                }
            })
        }
    })
    
    return router
}