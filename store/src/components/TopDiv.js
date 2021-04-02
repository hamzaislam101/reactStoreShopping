import React from 'react';

export default class TopDiv extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h4 className="text-center">Sales</h4>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }


}