import './product.scss';
import { Single } from '../../components/index.tsx';
import { singleProduct } from '../../data.ts';

const Product = () => {
    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    );
};

export default Product;
