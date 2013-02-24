
function zfctrl($scope){
    $scope.personendaten = JSON.parse(localStorage.getItem('personendaten'));
    // console.log($scope.personendaten);

    $scope.submit = function() {
        // ViewModel (Models pro View) wird per JS auf fachlich beständiges REST-Model des Backends gemappt
        localStorage.removeItem('personendaten');
        window.location = "ende.html"
    }

    $scope.onBack = function() {
        window.location = "personendaten.html"
    }
}