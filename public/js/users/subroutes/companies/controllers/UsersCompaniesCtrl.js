app.controller('UsersCompaniesCtrl', ['$scope', 'UsersCompany', '$http', 'UsersOpportunity', function ($scope, UsersCompany, $http, UsersOpportunity) {
  $scope.opp = "Opportunities";
  UsersCompany.getAll().then(function (companies) {
    $scope.companies = companies;
    console.log($scope.companies);
  });
  $scope.num = function(index) {
    if($scope.companies[index].opportunities.length === 1) {
      $scope.opp = "Opportunity";
      return $scope.companies[index].opportunities.length;
    } else {
      $scope.opp = "Opportunities";
      return $scope.companies[index].opportunities.length;
    }
  };
  $scope.location = function(index) {
    if($scope.companies[index].city.length) {
      return true;
    } else {
      return false;
    }
  };
}]);
