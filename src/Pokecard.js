import React,{Component} from 'react';

class Pokecard extends Component{

    zeros=(id)=>{
        if(id<10)
        {
            return "00"+id;
        }
        else if(id<100)
        {
            return "0"+id;
        }
        else
        {
            return id;
        }
    }

    render(){
        return (
            <div style={{backgroundColor:'grey',borderRadius:'3%',margin:'3px',padding:'20px'}}>
                <h3>{this.props.item.name}</h3>
                <p><img height="140" width="140" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.zeros(this.props.item.id)}.png`} /></p>
                <p>Type: {this.props.item.type}</p>
                <p>Exp: {this.props.item.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;