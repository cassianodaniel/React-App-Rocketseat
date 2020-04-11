import React, { Component } from 'react';
import API from "../../services/api";

export default class Main extends Component {
    state = { //aqui ficam as variáveis
        products: [],
    }
    
    componentDidMount(){ //assim que o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await API.get('/products');
        console.log(response.data.docs); //informações da API;
        this.setState({products: response.data.docs});
    };

    render(){//mostre o tamanho de products e mapeie todos títulos da product 
        return (<h1>"{this.state.products.length}"
            <div className = "product-list">
                {this.state.products.map(product => (<h6>key={product._id}{product.title}</h6>) )} 
            </div>
            </h1>
        )
    }
}