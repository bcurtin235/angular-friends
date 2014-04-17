angular.module('angular-friends').controller('friendController', function($scope){

    $scope.test = 'hello world'
    $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json',function(myJsonDataFromServer){
//    $scope.friends=myJsonDataFromServer.results;
      $scope.$apply(function(){
         $scope.friends= myJsonDataFromServer.results;
      });
    })
})




