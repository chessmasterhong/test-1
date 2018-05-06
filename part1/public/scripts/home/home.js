app.controller('homeController', function homeController($scope, $http) { // eslint-disable-line prefer-arrow-callback
  $scope.users = [];
  $scope.categories = [];

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
    category: '',
  };

  /**
   * Generates distinct list of categories based on users data.
   * @param  {Object[]} data User data array.
   * @param  {String} category User category.
   * @return {String[]} Distinct list of categories.
   */
  function generateCategories(data) {
    const results = [];
    if (!Array.isArray(data)) {
      return results;
    }
    data.forEach((d) => {
      if (results.indexOf(d.category) < 0) {
        results.push(d.category);
      }
    });
    return results;
  }

  // Get users data
  $http.get('data/users.json')
    .then((res) => {
      // Unexpected format
      if (!res || !res.data || !res.data.data) {
        $scope.users = [];
        $scope.categories = [];
      }
      $scope.users = res.data.data;
      $scope.categories = generateCategories($scope.users);
    })
    .catch(() => {
      $scope.users = [];
    });
});
