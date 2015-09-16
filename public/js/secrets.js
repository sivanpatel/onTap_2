consumer_key = 'BPsGlTNLUgKOVNktDxP19Q';

consumer_secret = 'oN2lmfyge2TXTq0alsP5jirH_fk';

token_secret = '7lFJOaZ4NCQdciAHfqMyqfdb0KI';

token = 'WcgE4894X_Gu1dpjoJgt2Enq6G1XQY8C';

signature_method = 'HMAC-SHA1';

nonce = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

function randomString(length, chars) {
 var result = '';
 for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
 return result;
};
