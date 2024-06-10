// authMiddleware.js

function isAuthenticated(req, res, next) {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // If user is authenticated, continue to the next middleware or route handler
        return next();
    } else {
        // If user is not authenticated, redirect to login page or handle unauthorized access
        res.redirect('/login');
    }
}

module.exports = isAuthenticated;
