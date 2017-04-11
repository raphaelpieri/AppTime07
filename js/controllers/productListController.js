app.controller('productListController', ProductListController);

function ProductListController(productServer, $scope){
    $scope.product = {};

    function listar() {
        var products = productServer.getProducts();
        $scope.productList = products;
    }
}