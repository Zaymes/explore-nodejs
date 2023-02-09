## Hash, HMAC

`Crypto` mehtod for node basicly gives us some methods to perform hasing on different hasing algorithm as `md5, whirlpool, SHA1, SHA224, SHA356, SHA384, SHA512, ripemd-160`

Steps `js`
- create has object `hash = crypto.createHash('md5')` (example for `md5` algorithm)
- pass data to be hashed `data = hash.update('data string that will be hashed','utf-8') `
- generate hash `gen_hash = data.digest(hex)` (generate in hex format)

hmac on the other hand is hash message authentication code. basicly here hashingis done using secret atuhentication key.
