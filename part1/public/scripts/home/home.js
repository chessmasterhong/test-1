app.controller('homeController', function homeController($scope, $http) { // eslint-disable-line prefer-arrow-callback
  $scope.users = [];

  // Sort configuration
  $scope.sorts = [{
    id: 'featured',
    label: 'Featured',
    orderBy: '',
  }, {
    id: 'alphabetical',
    label: 'A-Z',
    orderBy: 'name',
  }, {
    id: 'priority',
    label: 'Priority',
    orderBy: 'priority',
  }];

  // Set up default selected options
  $scope.selected = {
    sort: $scope.sorts[0],
  };

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
