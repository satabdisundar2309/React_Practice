import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProduct(data){
        console.log("inside newProduct")
        console.log(data);
        props.printProduct(data);
    }
    return (<div className='new-product'>
        <ProductForm printProduct2={saveProduct}/>
    </div>)
}
export default NewProduct;