import React, { Component } from 'react';
import {Grid, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import List from './List';
import sortBy from "lodash/sortBy";
import Select from 'react-select';

// Create a list of all the types to filter by
var options = [
      { value: 'All', label: 'All' },
      { value: 'Normal', label: 'Normal' },
      { value: 'Grass', label: 'Grass' },
      { value: 'Poison', label: 'Poison' },
      { value: 'Fire', label: 'Fire' },
      { value: 'Flying', label: 'Flying' },
      { value: 'Water', label: 'Water' },
      { value: 'Bug', label: 'Bug' },
      { value: 'Electric', label: 'Electric' },
      { value: 'Ground', label: 'Ground' },
      { value: 'Fairy', label: 'Fairy' },
      { value: 'Fighting', label: 'Fighting' },
      { value: 'Psychic', label: 'Psychic' },
      { value: 'Rock', label: 'Rock' },
      { value: 'Steel', label: 'Steel' },
      { value: 'Ice', label: 'Ice' },
      { value: 'Dragon', label: 'Dragon' }
    ];

// Construct a FilteredList Class
class FilteredList extends Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            search: "",
            selectedTypes: [],
            sortby: "id",
            ascending: "1"
        };
    }

    // Selector for when MultiSelect filter changes
    handleSelectChange = (val) => {
          // Construct new array with all selected elements
          var newSelected = [];
          for (var i = 0, l = val.length; i < l; i++) {
              newSelected.push(val[i].value);
          }

          // If "All" was selected, remove all selected components
          if (newSelected.indexOf("All") !== -1) {
              this.setState({selectedTypes: []});
          }
          else
          {
              this.setState({selectedTypes: newSelected});
          }
        
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // Filters by search, and type1/type2
        return (item.name.toLowerCase().search(this.state.search)) !== -1 &&
            ((this.state.selectedTypes.indexOf(item.type1) !== -1) ||
            (this.state.selectedTypes.indexOf(item.type2) !== -1) ||
            this.state.selectedTypes.length === 0);
    }

    // Sortby event handler
    // Triggered when radio buttons change
    sortby = (changeEvent) => {
        this.setState({sortby: changeEvent.target.value});
    }

    // Sortby ascending/descending event handler
    // Triggered when radio buttons change
    sortasc = (changeEvent) => {
        this.setState({ascending: changeEvent.target.value});
    }

    // Render the GUI
    render() {
        // Items for list to display will be the sorted, filtered, ordered list
        var itemsForList = sortBy(this.props.items.filter(this.filterItem), this.state.sortby);
        if (this.state.ascending !== "1") 
        {
            itemsForList = sortBy(this.props.items.filter(this.filterItem), this.state.sortby).reverse();
        }
        return (
            <div className="filter-list">
                <h1 className="header">Zak's Pokedex:</h1> <br/>
                <div className="menu">
                    <input type="text" placeholder="Search for Pokemon..." onChange={this.onSearch} style={{width: "33%", padding: "5px", minWidth: "300px"}}/> <br/> <br/>
                    <Select className="filterSelect" multi joinValues value={this.state.selectedTypes} placeholder="Filter Pokemon By Certain Types!" options={options} onChange={this.handleSelectChange} />
                </div>

                <br/>
                <h3 className="menu"> Sort By: </h3>
                <ButtonToolbar className="centerH">
                
                  <ToggleButtonGroup type="radio" name="sortby" defaultValue={"id"}>
                    <ToggleButton value="id" onChange={this.sortby}> Pokedex Number </ToggleButton>
                    <ToggleButton value="name" onChange={this.sortby}>Alphabetical</ToggleButton>
                    <ToggleButton value="type1" onChange={this.sortby}>Type</ToggleButton>
                    <ToggleButton value="rating" onChange={this.sortby}>Rating</ToggleButton>
                    <ToggleButton value="HP" onChange={this.sortby}>HP</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                <br/>
                <ButtonToolbar className="centerH">
                    <ToggleButtonGroup type="radio" name="ascending" defaultValue={"1"}>
                        <ToggleButton value="1" onChange={this.sortasc}> Ascending </ToggleButton>
                        <ToggleButton value="0" onChange={this.sortasc}> Descending </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

                <Grid>
                    <Row><List items={itemsForList}/></Row>
                 </Grid>
            </div>
        );
    }
}
export default FilteredList;