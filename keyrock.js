var config = {};

config.host = 'http://localhost:3000';
config.port = 3000

// HTTPS enable
config.https = {
    enabled: true,
    cert_file: 'certs/idm-2018-cert.pem',
    key_file: 'certs/idm-2018-key.pem',
    port: 3443
};

// Config email list type to use domain filtering
config.email_list_type = null   // whitelist or blacklist 

// Secret for user sessions in web
config.session = {
    secret: 'nodejs_idm',       // Must be changed
    expires: 60 * 60 * 1000     // 1 hour
}

// Key to encrypt user passwords
config.password_encryption = {
        key: 'nodejs_idm'               // Must be changed
}

// Config oauth2 parameters
config.oauth2 = {
    authorization_code_lifetime: 5 * 60,            // Five minutes
    access_token_lifetime: 60 * 60,                 // One hour
    refresh_token_lifetime: 60 * 60 * 24 * 14       // Two weeks
}

// Config api parameters
config.api = {
    token_lifetime: 60 * 60     // One hour
}

// Enable authzforce
config.authzforce = {
        enabled: false,
        host: '',
        port: 8080
}

var database_host = (process.env.DATABASE_HOST) ? process.env.DATABASE_HOST : 'localhost'

// Database info
config.database = {
    host: database_host,         // default: 'localhost' 
    password: 'xxxx',             // default: 'idm'
    username: 'root',            // default: 'root'
    database: 'idm',             // default: 'idm'
    dialect: 'mysql'             // default: 'mysql'
};

// External user authentication
config.external_auth = {
    enabled: false,
    authentication_driver: 'custom_authentication_driver',
    database: {
        host: 'localhost',
        database: 'db_name',
        username: 'db_user',
        password: 'db_pass',
        user_table: 'user',
        dialect: 'mysql'
    }
}

// Email configuration
config.mail = {
    host: 'smtphost.ltu.se',
    port: 25,
    from: 'noreply@ltu.se'
}


// Config themes
config.site = {
    title: 'Identity Manager',
    theme: 'default'
};

module.exports = config;
