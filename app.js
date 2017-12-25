const utf8 = require('utf8');
const crypto = require('crypto');

// const createSharedAccessToken = (uri, saName, saKey) => {
const createSharedAccessToken = connectionString => {
    const endpoint = connectionString.split('Endpoint=')[1].split(";")[0];
    const saName = connectionString.split('SharedAccessKeyName=')[1].split(";")[0];
    const saKey = connectionString.split('SharedAccessKey=')[1].split(";")[0];
    const entity = connectionString.split('EntityPath=')[1].split(";")[0];

    if (!endpoint || !saName || !saKey || !entity) {
        throw "Missing required parameter";
    }

    const uri = 'https:' + endpoint.split(":")[1] + entity + '/publishers/test/messages';
    const encoded = encodeURIComponent(uri);
    const now = new Date();
    const week = 60 * 60 * 24 * 7;
    const ttl = Math.round(now.getTime() / 1000) + week;
    const signature = encoded + '\n' + ttl;
    const signatureUTF8 = utf8.encode(signature);
    const hash = crypto.createHmac('sha256', saKey).update(signatureUTF8).digest('base64');
    return [
        'SharedAccessSignature sr=' + encoded + '&sig=' +
        encodeURIComponent(hash) + '&se=' + ttl + '&skn=' + saName,
        uri
    ];
}

const [sasToken, endpoint] = createSharedAccessToken(process.argv[2]);
console.log('-------------------------------------------------');
console.log('Endpoint:', endpoint);
console.log('SAS Token:', sasToken);
console.log('-------------------------------------------------');