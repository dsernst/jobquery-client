describe('ResourceDetailCtrl', function(){

  beforeEach(module('jobQuery'));

  beforeEach(inject(function($injector){

    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');

    createController = function(Resource){
      return $controller('ResourceDetailCtrl', {
        $scope: $rootScope.$new(),
        Resource: Resource
      });
    };

  }));

  it('should exist', function(){
    var controller = createController({});
    expect(typeof controller).toBe('object');
  });

});
