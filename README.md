# Single Sign-On

Single Sign-On Blockchain Solution with node.js


### Generate Key Pairs

1. Generate a 2048 bit RSA key with passphrase: `$ openssl genrsa -des3 -out private.pem 2048`
2. Export the RSA public key to a file: `$ openssl rsa -in private.pem -outform PEM -pubout -out public.pem`
3. Keep the keypair files somewhere safe
