import { Component } from "react";
class DemoClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'house',
            products: ['item 1', 'item 2'],
            type: {},
            isFavourable: false
        }
    }
    userName = 'nguyenhuuluan';
    
    updateState() {
        this.setState({
            name: 'new house',
        })
        this.setState(prev => {
            return {
                isFavourable: !prev.isFavourable,
                name: 'new house',
            }
        })
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <p>{this.userName}</p>
                <p>{this.props.email}</p>
                <p>{this.state.name}</p>
                <button onClick={this.updateState.bind(this)}>Update</button>
            </>
        );
    }
}
export default DemoClassComponent;
