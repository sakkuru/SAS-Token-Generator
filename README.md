# How to use

```
> git clone https://github.com/sakkuru/SAS-Token-Generator.git
> cd SAS-Token-Generator
> node app.js '<Connection String>' <- Quoted!
-------------------------------------------------
HTTPS Endpoint:
<HTTPS Endpoint>

SAS Token:
<SAS Token>

Test command:
curl -i -H 'Authorization: SharedAccessSignature sr=...' -d {"hoge":"fuga"} ...
-------------------------------------------------
> curl -i -H 'Authorization: SharedAccessSignature sr=...' -d {"hoge":"fuga"} ...
HTTP/2 201
content-type: application/xml; charset=utf-8
server: Microsoft-HTTPAPI/2.0
strict-transport-security: max-age=31536000
date: Tue, 26 Dec 2017 03:13:30 GMT
```