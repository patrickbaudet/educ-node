var Points = angular.module('Points',[]);
Points.controller('PointsCtrl',['$scope','$http',function($scope,$http){
//console.log("Salut depuis le controller");


//////////////////////////////////////////////////////////////////////////////////
// récupération  des matières : noms court et long et coefficients
//////////////////////////////////////////////////////////////////////////////////
$http.get('matieres.json')
          .then(function(res){
             $scope.matieres = res.data;
           });
/*
$scope.matieres = [
{
  id: 1,
  NomMat: 'Türkçe',
  coeff: 3,
  ValAff: ['T1','T2']
},
{
  id: 2,
  NomMat: 'Matematik',
  coeff: 2,
  ValAff: ['M1','M2']
},
{
  id: 3,
  NomMat: 'Fen ve Teknoloji',
  coeff: 2,
  ValAff: ['F1','F2']
},
{
  id: 4,
  NomMat: 'İnkılâp T. ve Atatürkçülük',
  coeff: 2,
  ValAff: ['İ1','İ2']
}
];
*/

//////////////////////////////////////////////////////////////////////////////////
// Bouttons tout à 90 95 ou 100
//////////////////////////////////////////////////////////////////////////////////
$scope.add90_1 = function() {
   for (var id in $scope.matieres) {
      $scope.note1[id]=90;
   }
   $scope.calcul_points();
 };

 $scope.add90_2 = function() {
    for (var id in $scope.matieres) {
       $scope.note2[id]=90;
       $scope.calcul_points();
    }
  };

$scope.add95_1 = function() {
   for (var id in $scope.matieres) {
      $scope.note1[id]=95;
      $scope.calcul_points();
   }
 };

 $scope.add95_2 = function() {
    for (var id in $scope.matieres) {
       $scope.note2[id]=95;
       $scope.calcul_points();
    }
  };

  $scope.add100_1 = function() {
     for (var id in $scope.matieres) {
        $scope.note1[id]=100;
        $scope.calcul_points();
     }
   };

   $scope.add100_2 = function() {
      for (var id in $scope.matieres) {
         $scope.note2[id]=100;
         $scope.calcul_points();
      }
    };

//////////////////////////////////////////////////////////////////////////////////
// Calculs des points
//////////////////////////////////////////////////////////////////////////////////
$scope.calcul_points = function() {
       var somme = 0;
       var notes_ok = true;
       for (var id in $scope.matieres) {
          somme+=(parseInt($scope.note1[id])+parseInt($scope.note2[id]))*$scope.matieres[id].coeff;
          if ( ($scope.note1[id]==='') || (isNaN($scope.note1[id])) || ($scope.note2[id]==='') || (isNaN($scope.note2[id]))) {
            notes_ok = false;
          }
        }
        if (notes_ok) {
              $scope.les_points = (somme/2).toFixed(4);
          } else {
              $scope.les_points = '';
          }
};

//////////////////////////////////////////////////////////////////////////////////
// controle entrée ni plus grand que 100 ni négatif ni décimal 0 interdit
//////////////////////////////////////////////////////////////////////////////////
// a noter que si cela se confirme on pourrait autoriser que les multiples de 5
 $scope.note1 = function(id,note) {
   if (parseInt(note)===0) {
        $scope.note1[id-1]='';
   }
   if (Math.floor(note)!==note) {
        $scope.note1[id-1]=Math.floor(note);
   }
   if (note > 100) {
        note=note/10;
        $scope.note1[id-1]=Math.trunc(note);
   }
   if (note <= 0) {
        $scope.note1[id-1]='';
   }
   $scope.calcul_points();
 };

 $scope.note2 = function(id,note) {
   if (parseInt(note)===0) {
        $scope.note2[id-1]='';
   }
   if (Math.floor(note)!==note) {
        $scope.note2[id-1]=Math.floor(note);
   }
   if (note > 100) {
        note=note/10;
        $scope.note2[id-1]=Math.trunc(note);
   }
   if (note <= 0) {
        $scope.note2[id-1]='';
   }
   $scope.calcul_points();
 };

}]);
