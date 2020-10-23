const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cookie =  require("js-cookie");

const saltRounds = 10;
const pool = require('../database');

const service = require('../services');

function signUp (req, res){
    const user = {
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        HBServer: req.body.HBServer,
        HBDashboard: req.body.HBDashboard,
        HBDocs: req.body.HBDocs
    }
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if (err) {
        console.log(err);
        }
        pool.query(
            "INSERT INTO users (username, password, fullname, HBServer, HBDashboard, HBDocs) VALUES (?,?,?,?,?,?)",
            [user.username, hash, user.fullname, user.HBServer, user.HBDashboard, user.HBDocs],
            (err, result) => {
                console.log(err); 
                if (err) {
                    res.send.status(500).send({ message:'Error in user creation: ${err}' })
                }
                return res.status(200).send({ token: service.createToken(user) })         
            }
        );
         
        
    });
}

function signIn(){
    
} 

module.exports = {
    signUp,
    signIn
}