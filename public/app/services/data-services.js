angular.module('App')
.service('DataServices', DataServices);

function DataServices($http, $window, $location){


  // BELOW HERE WORKING FOR CURRENT SITE


  this.searchRecipes = function(query) {
    query = "dinner%20chicken&app_id="+ process.env.APP_ID +"&app_key="+ process.env.APP_KEY+"&health=vegan&health=peanut-free";
    var req = {
      url: '/api/recipes/search/' + query,
      method: "GET",
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Stock API request limit exceeded, please wait 1 min and try again', type: 'danger'});
      $location.path('/');
    });
  }

  this.getRecipeDetails = function(id) {
    var req = {
      url: '/api/recipes/show/' + id,
      method: "GET",
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Stock API request limit exceeded, please wait 1 min and try again', type: 'danger'});
      $location.path('/');
    });
  }


  // BELOW HERE NEEDS TO BE REDONE


  this.watchStock = function(symbol){
    var req = {
      url: '/api/users/watch/' + symbol,
      method: 'POST'
    }

    return $http(req).then(function success(res) {
      var msg = symbol + ' added to Watchlist. View in Portfolio.';
      $window.alerts.push({msg: msg, type: 'success'});
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, HTTP error. Please wait and try again.', type: 'danger'});
    });
  }

  this.buyStock = function(symbol, quantity, cb){
    var dataScope = this;
    var data = {};

    this.getStockDetails([symbol], function(results){
      data.stock = results[0];
      delete data.stock['Status'];
      data.quantity = quantity;

        var req = {
          url: '/api/users/buy',
          method: 'POST',
          data: {
            data: data
          }
        }

        return $http(req).then(function success(res) {
          var msg = quantity + ' shares of ' + symbol + ' purchased. View in Portfolio.';
          $window.alerts.push({msg: msg, type: 'success'});
          cb(res);
        }, function failure(res) {
          $window.alerts.push({msg: 'Sorry, API error. Please wait and try again.', type: 'danger'});
          $location.path('/');
        });

    })
  }

  this.getWatchlistSymbols = function(){
    var req = {
      url: '/api/users/watchlist',
      method: 'GET'
    }

    return $http(req).then(function success(res) {
      return res.data.watchlist;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Database error. Please wait and try again.', type: 'danger'});
      $location.path('/');
    });
  }

  this.getPurchased = function(){
    var req = {
      url: '/api/users/purchased',
      method: 'GET'
    }

    return $http(req).then(function success(res) {
      return res.data.purchases;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Database error. Please wait and try again.', type: 'danger'});
      $location.path('/');
    });
  }

  this.removeSymbolFromWatchlist = function(symbol){
    var req = {
      url: '/api/users/watch/' + symbol,
      method: 'DELETE'
    }

    return $http(req).then(function success(res) {
      var msg = symbol + ' removed from Watchlist.';
      $window.alerts.push({msg: msg, type: 'danger'});
    }, function failure(res) {
      $window.alerts.push({msg: 'Database error. Try again.', type: 'danger'});
      // $location.path('/portfolio');
    });
  }

  this.removePurchase = function(purchase_Id, symbol, quantity){
    var req = {
      url: '/api/users/buy/' + purchase_Id,
      method: 'DELETE'
    }

    return $http(req).then(function success(res) {
      var msg = quantity + ' ' + symbol + ' shares sold.';
      $window.alerts.push({msg: msg, type: 'success'});
    }, function failure(res) {
      $window.alerts.push({msg: 'Database error. Try again.', type: 'danger'});
      $location.path('/portfolio');
    });
  }

}

DataServices.$inject = ['$http', '$window', '$location'];
