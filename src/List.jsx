import React, { Component } from 'react';
import {Col} from 'react-bootstrap';


/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class List extends Component {

    // Use different colors for each type
    type_color(poke_type) {
        var s = '<p style="padding: 6px; color: black; background-color: gray; display: inline-block;">'+poke_type+'</p>';
          switch(poke_type) {
            case "Normal":
                s = '<p style="padding: 6px; color: white; background-color: darkgray; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Fighting":
                s = '<p style="padding: 6px; color: black; background-color: darkorange; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Ice":
                s = '<p style="padding: 6px; color: white; background-color: lightblue; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Poison":
                s = '<p style="padding: 6px; color: white; background-color: purple; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Bug":
                s = '<p style="padding: 6px; color: white; background-color: darkgreen; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Grass":
                s = '<p style="padding: 6px; color: white; background-color: green; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Dragon":
                s = '<p style="padding: 6px; color: lightgreen; background-color: blue; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Psychic":
                s = '<p style="padding: 6px; color: white; background-color: pink; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Ground":
                s = '<p style="padding: 6px; color: white; background-color: brown; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Fire":
                s = '<p style="padding: 6px; color: white; background-color: red; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Water":
                s = '<p style="padding: 6px; color: white; background-color: blue; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Steel":
                s = '<p style="padding: 6px; color: white; background-color: darkgray; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Electric":
                s = '<p style="padding: 6px; color: white; background-color: gold; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Fairy":
                s = '<p style="padding: 6px; color: gray; background-color: white; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Rock":
                s = '<p style="padding: 6px; color: white; background-color: brown; display: inline-block;">'+poke_type+'</p>';
            break;
            case "Flying":
                s = '<p style="padding: 6px; color: white; background-color: LightSteelBlue; display: inline-block;">'+poke_type+'</p>';
            break;
            default: 
                s = '';
            break;
          }
          return s;
    }

    renderList() {
        const items = this.props.items.map(item => {
            // Get sprite image
            var x = "./sprites/" + item.id + ".png";

            // Get Type paragraph tag(s)
            var poke_type = this.type_color(item.type1);
            poke_type += this.type_color(item.type2);

            // Display each Pokemon block
            return (
            <Col id={item.name} style={{maxWidth: '260px'}} className="Pokemon">
                <p className="floatLeft">#{item.id}</p>
                <h2 className="header">{item.name}</h2>
                <div className="PokemonImage">
                  <img src={x} alt={item.name}/>
                </div>
                <div className="PokemonType">
                  <div className="content" dangerouslySetInnerHTML={{__html: poke_type}}></div>
                </div>
                <div className="PokemonRate">
                  <p><b>HP:</b> {item.HP}</p>
                  <p><b>Rating:</b> {item.rating}</p>
                </div>
            </Col>)
        });

        return items;
    }

    render() {
        return (
                this.renderList()
        );
    }
}

export default List;