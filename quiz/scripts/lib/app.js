angular.module('quizApp',[])
    .controller('quizController',['$scope','$http',function($scope,$http){
        $http.get("data/quiz.json")
            .success(function(resp){
            $scope.questions=resp;
        });
    
    
    
    
}]);