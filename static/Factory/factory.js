 myApp
           .factory("myFactory", function($http){

            var myFactory = {};

            myFactory.empList = empList;

            return myFactory;


             function empList(callback){
              $http.get("static/Json/emp_list.json").then(function(response) {
                callback(response);
              });
            };

           });
