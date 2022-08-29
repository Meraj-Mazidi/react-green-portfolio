import './productList.css';
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = ({ dark }) => {

    const textColor = {
        color: dark ? 'white' : 'black'
    }

    const bgShape = {
        background: dark ? '#000' : 'linear-gradient(180deg, #59b256 0%, #aaffa8 100%)'
    }
    return ( 
        <section className='pl'>
            <span className='pl-bg effect' style={bgShape}></span>
            <div className="pl-texts effect" style={textColor}>
                <h1 className="pl-title">Create & Inspire</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minus quo nulla iste voluptates sed cupiditate tenetur! Incidunt, consectetur ullam!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product
                        key={item.id}
                        img={item.img}
                        link={item.link}
                        dark={dark}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
