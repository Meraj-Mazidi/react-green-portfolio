import './product.css';

const Product = ({ img, link }) => {


    return (
        <article className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={`assets/${img}`} alt="" className="p-img" />
            </a>
        </article>
    );
}

export default Product;
