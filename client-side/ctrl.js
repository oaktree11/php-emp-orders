
//<div id="grid1" ui-grid="{ data: my1Data }" ui-grid-selection class="grid"></div>
   var app = 
    angular.module("myapp", ['ngTouch', 'ui.grid', 'ui.grid.selection','ui.grid.resizeColumns', 'ui.grid.moveColumns']);
app.run(function ($rootScope) {
    $rootScope.$on('scope.stored', function (event, data) {
        console.log("scope.stored", data);
    });
});

     app.controller("MyController", ['$scope', '$http', '$interval', 'uiGridConstants', 'Scopes',function ($scope, $http, $interval, uiGridConstants,Scopes) {
		Scopes.store('MyController', $scope);
 		$scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
		$scope.gridOptions.multiSelect = false;
		$scope.gridOptions.modifierKeysToMultiSelect = false;
		$scope.gridOptions.noUnselect = true;
		$scope.gridOptions.onRegisterApi = function( gridApi ) {
			 gridApi.selection.on.rowSelectionChanged($scope,function(row){
				var msg = 'row selected ' + row.isSelected;
					console.log(msg);
                                        console.log(row.entity);
				var responsePromise = $http.get("http://localhost:8089/php/server/orders.php");

   		                responsePromise.success(function(data, status, headers, config) {
		                    $scope.myData.fromServer = data;
		    		    $scope.names = data;
                                  Scopes.get('MyController1').gridOptions1.data = data;
                                   
                    //xxx(data);
               			    });
                		responsePromise.error(function(data, status, headers, config) {
                   		 alert("AJAX failed!");
                		});
				

			  
			}); 
			$scope.gridApi = gridApi;
		};
 
		
            $scope.myData = [{
"firstName": "Cox",
"lastName": "Carney",
"company": "Enormo",
"employed": true
}];
            $scope.myData.doClick = function(item, event) {

                var responsePromise = $http.get("http://localhost:8089/php/server/employee.php");

                responsePromise.success(function(data, status, headers, config) {
                    $scope.myData.fromServer = data;
		    $scope.names = data.nodes;
                    $scope.gridOptions.data = data;
                    //xxx(data);
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!");
                });
            }


        } ]);

 app.controller("MyController1", ['$scope', '$http', '$interval', 'uiGridConstants', 'Scopes', function ($scope, $http, $interval, uiGridConstants,Scopes) {
                Scopes.store('MyController1', $scope);
 		$scope.gridOptions1 = { enableRowSelection: true, enableRowHeaderSelection: false };
		$scope.gridOptions1.multiSelect = false;
		$scope.gridOptions1.modifierKeysToMultiSelect = false;
		$scope.gridOptions1.noUnselect = true;
		$scope.gridOptions1.onRegisterApi = function( gridApi ) {
			 gridApi.selection.on.rowSelectionChanged($scope,function(row){
				var msg = 'row selected ' + row.isSelected;
					console.log(row.entity);
				
			});
			$scope.grid1Api = gridApi;
		};
 
		
                       


        } ]);

 
app.factory('Scopes', function ($rootScope) {
    var mem = {};
 
    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
});

