var myApp = angular
           .module("myModule", [])
           .controller("myController", function($scope, $http, myFactory){


              myFactory.empList(function(response) {
                $scope.employees = response.data;
                console.log($scope.employees);
              });

              $scope.employeeView = "static/EmployeeTbl.html";

           });
