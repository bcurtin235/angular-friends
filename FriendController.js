angular.module('angular-friends').controller('friendController', function($scope,$http){

    $scope.test = 'hello world'





        $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(myJsonDataFromServer);
       function myJsonDataFromServer(friendsData){
           $scope.friends=friendsData.results;
       }

    $scope.search = "";
    $scope.sortBy='friend_count';
    $scope.sortOrder='false';





//    $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json',function(myJsonDataFromServer){
//       $scope.friends= myJsonDataFromServer.results;
//    $scope.$apply(function(){
//         $scope.friends= myJsonDataFromServer.results;
//      });

})




