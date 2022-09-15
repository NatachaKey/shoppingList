import { Component } from "react";
import icon from './icon.png';

export class GroceryList extends Component{
    state={
        userInput: "",
        groceryList: []

        // iznachalnoe sostoyanie -pystaya string, 
        // sozdaem pystoi massiv kyda bydem dobavlyat elementy, eti dve xarakteristiki bydyt postoyanno menyatsya
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        
// evemt- e- eto click, izmenenye chego-libo naprimer texta.. console.log(e.target.value)event.target.value ili e.target.value- to chto pozvolyaet nam poluchit 
// dostup k tomy chto pechataet polzovatel, cherez setstate menyaem user input v zavisimosti ot togo chto pishet polzovatel
         
    }

    addItem(input){
        if (input===""){
            alert("Please enter an item")
        }
        else{

        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList:listArray,  userInput: ""})
    }
}
deleteItem(){
    let listArray= this.state.groceryList;
    listArray=[];
    this.setState({groceryList: listArray})
}

    crossedWord(event){
        const li =event.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
    <div>
        <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What do you want to buy?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
            {/* //1 poluchaem dostup k tomy chto pishet user, 2 menyaem user input v sootvetstvii s ettim onChange et metod kotoryi otslegivaet izmeneniya sdelannye polzovatelem,
            // value eto to chto pishet polzovatel na dannyi moment(znachenie), poluchaem dostp k tomy chto pishet polzovatel */}
            </div>

            <div  className="container">
                <button className="btn add" onClick={()=> this.addItem(this.state.userInput)}>Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index)=>(
                /* stavim map na ves spisok govorim chto xotim poluchit dostup k kagdomy item */
                <li onClick={this.crossedWord} key={index}><img src={icon} width="40px" alt="icon"/> {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className="btn delete" onClick={()=> this.deleteItem(this.state.userInput)}>Delete</button>
            </div>
            </form>
    </div>


        )
    }
}