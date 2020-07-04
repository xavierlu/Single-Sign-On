const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const uuidV1 = require("uuid/v1");

const SHA256 = require("crypto-js/sha256");

class Util {
  static genKeyPair() {
    return ec.genKeyPair();
  }

  static id() {
    return uuidV1();
  }
}

module.exports = Util;
