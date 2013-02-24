var pdApp = angular.module('pdApp', ['ui']);

function pdctrl($scope){

    $scope.personendaten =
    {
/*      name:"",
        vorname:"",
        geburtstag: "",
        kreditkartenummer:""*/
    }

    $scope.personendaten = JSON.parse(localStorage.getItem('personendaten'));

    $scope.submit = function() {
       // console.log($scope.personendaten);
       // localStorage.personendaten = $scope.personendaten;

        localStorage.setItem('personendaten', JSON.stringify($scope.personendaten));
        window.location = "zusammenfassung.html"
    }
}

