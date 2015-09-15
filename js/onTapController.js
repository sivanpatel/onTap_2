onTapModule.controller('OnTapController', ['$resource', '$http', function($resource, $http) {
 var index = 0;
 var self = this;

 self.doSearch = function() {

   var timestamp = new Date().getTime();
   var method = 'GET';
   var url = 'http://api.yelp.com/v2/search?';
   var params =    {
     'callback': 'angular.callbacks._' + index,
     'oauth_consumer_key': consumer_key,
     'oauth_token': token,
     'oauth_signature_method': signature_method,
     'oauth_timestamp': timestamp,
     'oauth_nonce': nonce,
     'location': self.searchTerm,
     'cc': 'GB',
     'category_filter': 'pubs'
     }
   var consumerSecret = consumer_secret;
   var tokenSecret = token_secret;
   var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
   params['oauth_signature'] = signature;
   $http.jsonp(url, { params: params }).then(function(data) {
       self.searchResult = data.data;
       console.log(data);
   }, function(response) { console.log(response) })
   index ++;
   });

 };

}]);
