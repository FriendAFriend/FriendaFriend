const jwt = require('jsonwebtoken');
// const express = require('express');


module.exports = {
    // generateToken: ({username: username}, {password: password}, {})

    setAuthToken: (username, password) => {
        const expirationSeconds = 60 * 60 * 24 * 7; // one week
       console.log('password is ', typeof password, 'in setAuthToken');
        // Create token if the password matched and no error was thrown.
        const token = jwt.sign({username: username}, `${password}`, {
         expiresIn: expirationSeconds,
        });
        return token;
    },
    setCookie: (token, res) => {
        const expirationSeconds = 60 * 60 * 24 * 7; // one week
        const cookieExpiration = Date.now() + expirationSeconds * 1000;
        res.cookie('jwt', token, {expires: new Date(cookieExpiration), httpOnly: true});
       
        return res.json({
         success: true,
        //  token: `JWT ${token}`,
        //  username
        });
    },
    verifyJWT: (token, password, res, next) => {
        return jwt.verify(token, password, function(err, decoded){
            if(err){
              console.log('error in verifyJWT');
            //   return next();
            // redirect to signup 
            //   return res.send(err.message);
            return false;
            //   return res.redirect('../routes/userRoutes/signup');
            };
            console.log('success in verifyJWT');
            return true;
          });
    }
}