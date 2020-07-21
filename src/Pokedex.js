import React,{Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    constructor(props)
    {
        super(props);
        this.state={win:true,score1:0,score2:0};
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

        //Determine who wins? the first 4 or the second 4 cards.
        var score1=0;
        for(var i=0;i<newArr.length/2;i++)
        {
            score1+=newArr[i].base_experience;
        }
    
        console.log("score1="+score1);

        var score2=0;
        for(var i=newArr.length/2;i<newArr.length;i++)
        {
            score2+=newArr[i].base_experience;
        }
    
        console.log("score2="+score2);
        var win=score1>score2;
        console.log(win);

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

        const shuffleLists1=randomData.slice(0,randomData.length/2).map((item,index)=><div key={index} className="col-lg-3"><Pokecard key={index} item={item}/></div>);
        const shuffleLists2=randomData.slice(randomData.length/2).map((item,index)=><div key={index} className="col-lg-3"><Pokecard key={index} item={item}/></div>);
        

        return (
            <div>
                <br />
                <h2>Pokedex</h2>
                <br />
                <div className="container">
                    <div className="row">
                        {shuffleLists1}
                        {shuffleLists2}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;