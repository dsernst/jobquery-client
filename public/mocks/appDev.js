var appDev = angular.module('jobQueryDev', ['jobQuery', 'ngMockE2E']);

appDev.run(function($httpBackend){

  $httpBackend.whenPOST(/api/).respond({});
  $httpBackend.whenPUT(/api/).respond(function(request, url, data, headers){
    var route = url.split('/').slice(4);
    if(route[0] === 'public'){
      var resource = route[1];
      var id = route[2];
      if(resource === 'opportunities'){
        userOpportunities[id-1].match = JSON.parse(data);
        return ['200', userOpportunities[id-1]];
      }
    }
    return ['200', {}];
  });
  $httpBackend.whenGET(/api/).respond(function(request, url){

    var route = url.split('/').slice(4);
    var resource = route[0];
    var id = route[1];
    var filteredMatches;
    switch(resource){
      case 'users':
        return id ? ['200', users[id - 1]] : ['200', users];
      case 'messages':
        return id ? ['200', messages[id - 1]] : ['200', messages];
      case 'tags':
        return id ? ['200', tags[id - 1]] : ['200', tags];
      case 'companies':
        return id ? ['200', companies[id - 1]] : ['200', companies];
      case 'opportunities':
        return id ? ['200', opportunities[id - 1]] : ['200', opportunities];
      case 'matches':
        var subroute = route[1];
        id = route[2];
        if(!subroute){
          return ['200', matches];
        } else if (subroute === 'users') {
          filteredMatches = matches.filter(function(match){
            return id === match.userId;
          });
          return ['200', filteredMatches];
        } else if (subroute === 'opportunities') {
          filteredMatches = matches.filter(function(match){
            return id === match.oppId;
          });
        } else {
          return ['404'];
        }
        break;
      case 'public':
        resource = route[1];
        id = route[2];
        switch(resource){
          case 'companies':
            return id ? ['200', userCompanies[id-1]] : ['200', userCompanies];
          case 'opportunities':
            return id ? ['200', userOpportunities[id-1]] : ['200', userOpportunities];
          case 'account':
            return ['200', userAccount];
          default:
            return ['404'];
        }
        break;
      default:
        return ['404'];
    }

  });
  $httpBackend.whenGET(/.tpl.html/).passThrough();

});
