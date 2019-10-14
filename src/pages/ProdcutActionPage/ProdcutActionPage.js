import React,{ Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';
class ProdcutActionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            txtName:'',
            txtPrice:'',
            chkbStatus:false
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.editingProduct){
            this.setState({
                id:nextProps.editingProduct.id,
                txtName:nextProps.editingProduct.name,
                txtPrice:nextProps.editingProduct.price,
                chkbStatus:nextProps.editingProduct.chkbStatus
            });
        }
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:value
        });
    }
    onSave=(event)=>{
        var {history}=this.props;
        event.preventDefault();
        this.props.onSaveProduct(this.state);
        history.goBack();
    }
    onGoBack=()=>{
        var {history}=this.props;
        history.goBack();
    }
  render(){
    var {txtName,txtPrice,chkbStatus}=this.state;
    return (
      <div className="row">    
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <form onSubmit={this.onSave}>
                  <div className="form-group">
                      <label>Tên Sản Phẩm:</label>
                      <input type="text" className="form-control" name="txtName" onChange={this.onChange} value={txtName} />
                  </div>
                  <div className="form-group">
                      <label>Giá:</label>
                      <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                      <label>Trạng Thái:</label>
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={chkbStatus}/>
                          Còn Hàng
                      </label>
                  </div>            
                  <button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp;
                  <button type="button" onClick={ this.onGoBack } className="btn btn-danger">Trở Lại</button>
              </form> 
          </div>    
      </div>   
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        editingProduct:state.editingProduct
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return {
        onSaveProduct:(product)=>{
            dispatch(actions.actAddProductRequest(product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProdcutActionPage);
