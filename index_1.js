const crypto = require('crypto');

function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var randomUint32 = crypto.randomBytes(4).readUInt32BE(0);
  var suffix = randomUint32 * Math.pow(2, -32);
  var password = "sssAAAA" + suffix;
  return password;
}