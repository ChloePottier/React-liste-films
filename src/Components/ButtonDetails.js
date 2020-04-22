import React, {Component} from 'react'
import './ButtonDetails.css'
class ButtonDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return(
            // <form onSubmit={this.handleSubmit}> 
                // <input type=" " defaultValue="test"/>
                <button type="submit">Détails</button>
            //   </form>
            // <p>bouton</p>
        );
    }
}
export default ButtonDetails;