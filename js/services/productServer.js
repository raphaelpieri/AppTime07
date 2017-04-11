app.factory("productServer", ProductServer);

function ProductServer($sessionStorage) {
    function getProducts() {
        return $sessionStorage.products;
    }

    function saveProduct(produto){
        $sessionStorage.products.push(produto);
    }

    return{
        getProducts: getProducts,
        saveProduct: saveProduct
    }

}