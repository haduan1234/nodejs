import db from '../views/db.js'
import shortid from 'shortid';

const index = async (req, res) => {
    res.render('users/index', {
        users: db.data.users
    })
};

const search = function (req, res) {
    var q = req.query.searchName;
    var matchedUsers = db.data.users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {

        users: matchedUsers
    });
};

const create = function (req, res) {
    res.render('users/create');
}

const getUserById = async (req, res) => {
    var id = req.params.id;
    var users = db.data.users.filter((u) => {
        return u.id == id
    })
    var user = users[0]
    res.render('users/view', {
        user: user
    })
}

const postCreate = async (req, res) => {
    req.body.id = shortid.generate();
console.log(req.body.name)
    var errors = [];
    if (!req.body.namel) {
        errors.push('Name is required')
    }
    if (!req.body.phone) {
        errors.push('Phone is required')
    }
    if (errors.length) {
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    db.data.users.push(req.body)
    await db.write()
    res.redirect('/users');
}

// export {
//     index,
//     search,
//     create,
//     get,
//     postCreate
// } export dang tang phan tu

const controller = {
    index: index,
    search,
    create,
    getUserById,
    postCreate
}

export default controller
