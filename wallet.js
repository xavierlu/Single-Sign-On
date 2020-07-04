const Util = require("./utils");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const SHA256 = require("crypto-js/sha256");
const ripemd160 = require("crypto-js/ripemd160");

class Wallet {
  constructor(publicKeyPath, privateKeyPath) {
    fs.readFile(publicKeyPath, (err, data) => {
      if (err) {
        console.error("Error reading public key", err);
      } else {
        this.publicKey = data;

        // generating address
        this.address = ripemd160(SHA256(this.publicKey)).toString();
      }
    });

    fs.readFile(privateKeyPath, (err, data) => {
      if (err) {
        console.error("Error reading private key", err);
      } else {
        this.privateKey = data;
      }
    });
  }

  generateToken() {
    var payload = {};

    var signOptions = {
      expiresIn: "5h",
      algorithm: "RS256",
    };

    var token = jwt.sign(
      payload,
      { key: this.privateKey, passphrase: "cornellblockchain" },
      signOptions
    );
    console.log("token: " + token);

    return token;
  }
}

module.exports = Wallet;
