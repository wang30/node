const express = require('express')
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4512',
    database: 'learn' 
})

module.exports = ()=>{
    const router = express.Router()

    router.get('/', (req, res)=>{
        if(req.query.act === 'del' && req.query.id) {
            db.query(`delete from banner_table where ID='${req.query.id}'`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error3').end()
                }
                else {
                    res.redirect('/admin/banners')
                }
            })
        }
        else if(req.query.act === 'mod' && req.query.id) {
            db.query(`select * from banner_table where ID='${req.query.id}'`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error4').end()
                }
                else {
                    db.query(`select * from banner_table`, (err, banners)=>{
                        if(err) {
                            console.log(err)
                            res.status(500).send('database error5').end()
                        }
                        else {
                            res.render('admin/banner.ejs', {banners, mod: data[0]})
                        }
                    })
                }
            })
        }
        else {
            db.query(`select * from banner_table`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error2').end()
                }
                else {
                    res.render('admin/banner.ejs', {banners: data, mod: {}})
                }
            })
        }
    })
    router.post('/', (req, res)=>{
        if(req.body.id) {
            db.query(`update banner_table set title='${req.body.title}', description='${req.body.description}', href='${req.body.href}' where ID=${req.body.id}`, (err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error6').end()
                }
                else {
                    res.redirect('/admin/banners')
                }
            })
        }
        else {
            db.query(`insert into banner_table(title, description, href) values('${req.body.title}', '${req.body.description}', '${req.body.href}')`,(err, data)=>{
                if(err) {
                    console.log(err)
                    res.status(500).send('database error1').end()
                }
                else {
                    res.redirect('/admin/banners')
                }
            })
        }
    })
    
    return router
}