angular.module('app', ['dynform'])
    .controller('myController',function($scope){
        $scope.formData = {};
        $scope.formTemplate = [
            {
                "type": "text",
                "label": "First Name",
                "model": "name.first",
                "attributes":{
                    "class": "form-control"
                }
            },
            {
                "type": "text",
                "label": "Last Name",
                "model": "name.last"
            },
            {
                "type": "email",
                "label": "Email Address",
                "model": "email"
            },
            {
                "type": "submit",
                "model": "submit"
            },
        ];

        $scope.processForm = function () {
            /* Handle the form submission... */
        };


    });

