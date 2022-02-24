import React from 'react';
import {connect} from 'react-redux';
const Hello = (props) =>{
    return(
     <div>
         <h4>Hello :{this.props.count}</h4>
     </div>
    );
}

const mapStateToProps = (state) =>{
return {
    count :state.counter.count
}
}

export default connect(mapStateToProps,null)(Hello);