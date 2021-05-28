import db from '../views/db.js'

const login = function(req, res){
    res.render('auth/login')
}

const controller ={ 
    login: login
} 

export default controller;