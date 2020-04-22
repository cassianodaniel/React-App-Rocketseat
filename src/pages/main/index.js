import React, { Component } from 'react';
import API from "../../services/api";
import CSS from "../main/styles.css"

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
        const {products} = this.state;

        return (<h1>"{this.state.products.length}"
            <div className = "product-list">
                {this.state.products.map(product =>(
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href=".">Acessar</a>
                    </article>
                ))} 
            </div>
           </h1>
        )
    }
}