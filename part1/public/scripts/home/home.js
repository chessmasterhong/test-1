app.controller('homeController', function homeController($scope, $http) { // eslint-disable-line prefer-arrow-callback
  $scope.users = [];

  // Get users data
  $http.get('data/users.json')
    .then((res) => {
      // Unexpected format
      if (!res || !res.data || !res.data.data) {
        $scope.users = [];
      }

      $scope.users = res.data.data;
    })
    .catch(() => {
      $scope.users = [];
    });
});
