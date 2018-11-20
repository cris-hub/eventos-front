//Install express server
const express = require('express');
const path = require('path');

const app = express();



// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/eventos'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/eventos/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);