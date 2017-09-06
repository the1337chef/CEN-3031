angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function()
	{
		$scope.listings.push
		({
            code: $scope.addCode, 
            name: $scope.addBuilding, 
            coordinates:
			{
                latitude: $scope.addLat, 
                longitude: $scope.addLong
            }, 
            address: $scope.addAdd
        });
		$scope.addCode = "";
		$scope.addBuilding = "";
		$scope.addLat = "";
		$scope.addLong = "";
		$scope.addAdd = "";
		
	};
    $scope.deleteListing = function(code)
	{
		var i = 0;
		while(code != $scope.listings[i].code)
		{
			i++
		}
		$scope.listings.splice(i,1);
	};
    $scope.showDetails = function(code)
	{
		var i = 0;
		while(code != $scope.listings[i].code)
		{
			i++
		}
		$scope.detailedInfo = $scope.listings[i];
	};
  }
]);