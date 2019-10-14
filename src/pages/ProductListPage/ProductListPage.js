import React,{ Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from './../../actions/index';
class ProductListPage extends Component {
  componentDidMount(){
    this.props.fetchAllProducts();
    console.log('sda');
  }
  onDelete=(id)=>{
    this.props.fetchDeleteProduct(id);
  }
  onEditingProduct=(id)=>{
    this.props.onEditingProduct(id);
  }
  render(){
    var {products}=this.props; 
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-primary"><i className="fas fa-plus"></i>&nbsp; Thêm Sản Phẩm</Link>
          <ProductList>
            {this.showProdcuts(products)}
          </ProductList>
        </div>
      </div>
    );
  }
  showProdcuts=(products)=>{
    var result=null;
    if(products.length>0){
      result=products.map((product,index)=>{
        return(
          <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} onEditingProduct={ this.onEditingProduct }/>
        );
      });
    }
    return result;
  }
}

const mapStateToProps=(state)=>{
  return{
    products:state.products
  }
}
const mapDispatchToProps=(dispatch,action)=>{
  return{
     fetchAllProducts:()=>{
       dispatch(actions.actFetchProductsRequest());
     },
     fetchDeleteProduct:(id)=>{
       dispatch(actions.actDeleteProductRequest(id));
     },
     onEditingProduct:(id)=>{
       dispatch(actions.actEditingProductRequest(id));
     }
     
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
