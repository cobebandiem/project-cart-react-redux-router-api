import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
  onDelete=(id)=>{
    this.props.onDelete(id);
  }
  onEditingProduct=(id)=>{
    this.props.onEditingProduct(id);
  }
  render(){
    var { product,index }=this.props;
    var statusName=product.chkbStatus?'Còn Hàng':'Hết Hàng';
    var statusClass=product.chkbStatus?'btn-success':'';
    return (
      <tr>
        <td>{index+1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>Do apple sản xuất</td>
        <td>{product.price}</td>
        <td>
          <button type="button" className={`btn btn-xs ${statusClass}`}>{statusName}</button>
        </td>
        <td>
          <Link to={`product/${product.id}/edit`} onClick={()=>this.onEditingProduct(product.id)} className="btn btn-info"><i className="fas fa-edit"></i>&nbsp;Sửa</Link>&nbsp;
          <button onClick={()=>this.onDelete(product.id)} type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i>&nbsp;Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
