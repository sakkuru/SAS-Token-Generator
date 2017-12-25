# How to use;
```
git clone https://github.com/sakkuru/SAS-Token-Generator.git
cd SAS-Token-Generator
node app.js "Endpoint=sb://XXX.servicebus.windows.net/;SharedAccessKeyName=..."
-------------------------------------------------
Endpoint: https://XXX.servicebus.windows.net/YYY/publishers/test/messages
SAS Token: SharedAccessSignature sr=...&sig=...&se=...&skn=...re
-------------------------------------------------
```