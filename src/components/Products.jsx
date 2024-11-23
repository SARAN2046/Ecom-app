import c1 from './images/c1.jpg';
import c5 from './images/c5.jpg';
import c6 from './images/c6.jpg';

const Products = () => {
  return (
    <div className='mt-5 container'>
      <h1 className='text-center mb-5'>Products</h1>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 g-4">
          
          <div className="col">
            <div className="card product-card">
              <img src={c5} className="card-img-top" alt="Casual Denim Jacket"/>
              <div className="card-body">
                <h5 className="card-title">Urban Street Hoodie</h5>
                <p className="card-text fw-bold">Price: $49.99</p>
                <a href="/" className="btn btn-dark">Buy now</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card product-card">
              <img src={c6} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Classic Hoodie</h5>
                <p className="card-text fw-bold">Price: $59.99</p>
                <a href="/" className="btn btn-dark">Buy now</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card product-card">
              <img src={c1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Cozy Fleece Hoodie</h5>
                <p className="card-text fw-bold">Price: $34.99</p>
                <a href="/" className="btn btn-dark">Buy now</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card product-card">
              <img src={c5} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wool Knit Hoodie</h5>
                <p className="card-text fw-bold">Price: $19.99
                </p>
                <a href="/" className="btn btn-dark">Buy now</a>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default Products;
