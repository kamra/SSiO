var config = {};

// Used only if https is disabled
config.pep_port = 80;

// Set this var to undefined if you don't want the server to listen on HTTPS
config.https = {
    enabled: false,
    cert_file: 'cert/cert.crt',
    key_file: 'cert/key.key',
    port: 4443
};

config.idm = {
        host: 'localhost',
        port: 3443,
        ssl: true
}

config.app = {
        host: '18.197.199.85', //URL or IP address of Context Broker (Orion)
        port: '1026',
        ssl: false // Use true if the app server listens in https
}


// Credentials obtained when registering PEP Proxy in app_id in Keyrock Account Portal
config.pep = {
        app_id: '46b4debc-a08a-4248-b62e-5b0689d9746c',
        username: 'pep_proxy_6512f156-177f-4f91-84ad-568a16ce49fe',
        password: 'pep_proxy_a1570248-d936-4617-ad1a-c36a2f294795',
        trusted_apps : []
}

// in seconds
config.cache_time = 300;

// if enabled PEP checks permissions with AuthZForce GE. 
// only compatible with oauth2 tokens engine
//
// you can use custom policy checks by including programatic scripts 
// in policies folder. An script template is included there
config.azf = {
        enabled: false,
        protocol: 'https',
    host: 'auth.lab.fiware.org',
    port: 6019,
    custom_policy: undefined // use undefined to default policy checks (HTTP verb + path).
};

// list of paths that will not check authentication/authorization
// example: ['/public/*', '/static/css/']
config.public_paths = [];

config.magic_key = undefined;

module.exports = config;