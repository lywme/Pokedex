import React,{Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    constructor(props)
    {
        super(props);
    }

    random=(data)=>{
        //Shuffle the data array
        var dataCpy=data;
        var newArr=[];
        while(dataCpy.length!=0)
        {
            const min=0;
            const max=dataCpy.length;
            const ran=Math.floor(Math.random()*max);
            //console.log(dataCpy[ran]);
            newArr.push(dataCpy[ran]);
            dataCpy=[...dataCpy.slice(0,ran),...dataCpy.slice(ran+1)];
        }

        return newArr;
    }

    render(){
        const data=[
            {id:4,name:'Charmander',type:'fire',base_experience:62},
            {id:7,name:'Squirtle',type:'water',base_experience:63},
            {id:11,name:'Metapod',type:'bug',base_experience:72},
            {id:12,name:'Butterfree',type:'flying',base_experience:178},
            {id:25,name:'Pikachu',type:'electric',base_experience:112},
            {id:39,name:'Jigglypuff',type:'normal',base_experience:95},
            {id:94,name:'Gengar',type:'poison',base_experience:225},
            {id:133,name:'Eevee',type:'normal',base_experience:65},
        ];

        const lists=data.map((item,index)=><div key={index} className="col-lg-3"><Pokecard key={index} item={item}/></div>);
        let randomData=this.random(data);
        //console.log(randomData);
        const hand1=randomData.slice(0,randomData.length/2);
        const hand2=randomData.slice(randomData.length/2);
        const shuffleLists1=hand1.map((item,index)=><div key={index} className="col-lg-3"><Pokecard key={index} item={item}/></div>);
        const shuffleLists2=hand2.map((item,index)=><div key={index} className="col-lg-3"><Pokecard key={index} item={item}/></div>);
        const exp1=hand1.reduce(function(sum,item){
            return sum+item.base_experience;
        },0);

        const exp2=hand2.reduce(function(sum,item){
            return sum+item.base_experience;
        },0);

        //console.log(exp1);
        //console.log(exp2);

        const h3style1={margin:'15px',color:'green'};
        const h3style2={margin:'15px',color:'red'};

        return (
            <div>
                <br />
                <h2>Pokedex</h2>
                <br />
                <div className="container">
                    <div className="row">
                        <h3 className="col-12" style={exp1>exp2?h3style1:h3style2}>{exp1>exp2?'Hand 1 wins':'Hand 1 lose'}</h3>
                        <h5 className="col-12" style={exp1>exp2?h3style1:h3style2}>Total exp is :{exp1}</h5>
                        {shuffleLists1}
                        <h3 className="col-12" style={exp2>exp1?h3style1:h3style2}>{exp2>exp1?'Hand 2 wins':'Hand 2 lose'}</h3>
                        <h5 className="col-12" style={exp2>exp1?h3style1:h3style2}>Total exp is :{exp2}</h5>
                        {shuffleLists2}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;