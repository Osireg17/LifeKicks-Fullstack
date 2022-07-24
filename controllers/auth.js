const User = require('../models/user');
const bcrypt = require('bcrypt');

//need to make sure that two users cant have the same email
//need to make sure that the password is at least 8 characters long
//need to make sure that the password has at least one number
//need to make sure that the password has at least one special character

exports.RegisterController = async (req, res) => {
    //I have to pull, out all the data from the data entered in on the front end
    const { username, email, password } = req.body;

    //I have to check if the user's email already exists in the database
    try {
        const user = await User.findOne({
            email
        });
        const user2 = await User.findOne({
            username
        });
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }
        else if (user2) {
            return res.status(400).json({
                errorMessage: 'Username already exists',
            });
        }
        else if (user.email === email) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }
        else{
            const newUser = new User({
                username,
                email,
                password,
            });
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save();
            res.status(200).json({
                SuccessMessage: 'Registration successful. Please login.', //remeber to match the frontend SuccessMessage property name with the backend SuccessMessage
            });
        }
        //if the user email doesnt exist then make a new user
        
    } catch (err) {
        console.error('Signup error: ', err);
        res.status(500).send('Server Error');
    }

    }
