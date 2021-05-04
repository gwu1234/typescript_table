import React, {Component} from 'react';
import styled from "styled-components";
import flags from './flags.json';
import {UpArrowIcon, DownArrowIcon} from './SVG.jsx'

interface Person  {
    name:  string,
    age:  number,
    movie_rating: number,
    city:  string,
    region:  string,
    country:  string,
}

interface Food {
    item:  string,
    inventory:  number,
    size:  string
}

const TABLE = styled.table`
  padding: 1em;
  background: white;
  color: black;
  max-width: 500px;
  margin: 20px;
`;

const COLUMN1 = styled.td`
  min-width: 140px;
  text-align: center;
`;

const TABLE1 = styled.table`
  max-width: 140px;
`;

const COLUMNS = styled.td`
  max-width: 360px;
  text-align: center;
  overflow:   scroll;
`;

const TABLES = styled.table`
  max-width: 360px;
`;

const Th = styled.th`
  min-width: 140px;
  text-align: center;
  padding-bottom: 15px;
  height: 50px;
`;

const Td = styled.td`
  min-width: 140px;
  text-align: center;
`;

const Td_lg = styled.td`
  min-width: 140px;
  text-align: center;
  color: lightGreen;
`;

const Td_lb = styled.td`
  min-width: 140px;
  text-align: center;
  background-color: lightBlue;
`;

const Tr = styled.tr`
  padding-top: 5px;
`;


class Table extends Component <{data:Person[]|Food[], columns: string},{data:Person[]|Food[], columns: string, sorting:string, ageSorting:string}>{
    constructor(props : {data: Person[]|Food[], columns: string}){
          super(props)
          const {data, columns} = props
          this.state = { 
              data: data,
              columns: columns, 
              sorting: "initial",
              ageSorting: "initial",
          };
          this.sortName = this.sortName.bind(this)
          this.sortAge = this.sortAge.bind(this)
    }

    isPerson(d:Person|Food) : d is Person {
         return "name" in d && "age" in d && "movie_rating" in d && "city" in d && "region" in d && "country" in d
    }  
    
    isFood(d:Person|Food) : d is Food {
         return "item" in d && "inventory" in d && "size" in d 
    }  

    renderColumn1Header() {
        const {sorting, data} = this.state
        const sortable = this.isPerson(data[0])
        const cols : string[] = this.props.columns.split("|")
            return <Th key={cols[0]} onClick ={this.sortName}>{cols[0].toUpperCase()} {sortable?sorting==="ascending"? <DownArrowIcon/>:<UpArrowIcon/>: null} </Th>
    }
    renderColumnsHeader() {
        const {ageSorting, data} = this.state
        let isPerson = this.isPerson(data[0])
        //console.log (isPerson)
        const cols : string[] = this.props.columns.split("|")
        return cols.map((col, index) => {
            if (index > 0) {
                let sortable = isPerson && col.trim() === "Age"
                //console.log (sortable)
                //console.log(col)
                //console.log (this.isPerson(data[0]))
                return <Th key={index} onClick ={this.sortAge}>{col.toUpperCase()} {sortable?ageSorting==="ascending"? <DownArrowIcon/>:<UpArrowIcon/>: null} </Th>
            }
        })    
    }
    
    renderColumn1Data() {
        const {data} = this.state
            return data.map((d:Person|Food, index:number) => {
                if (this.isPerson(d)) { 
                    return (
                        <Tr key={index}>
                            <Td>{d.name}</Td>
                        </Tr>
                    )
                }
                else if (this.isFood(d)) {
                    return (
                        <Tr key={index}>
                            <Td_lb>{d.item}</Td_lb>
                        </Tr>
                    )
                }
            })
    }

    renderColumnsData() {
        const {data} = this.state
            return data.map((d:Person|Food, index:number) => {
                if (this.isPerson(d)) { 
                    let emoji = flags.US.emoji
                    if (d.country === "Canada") {
                        emoji = flags.CA.emoji
                    } else if (d.country === "Germany") {
                        emoji = flags.DE.emoji
                    }
                    let star = `\u2B50`	
                    if (d.movie_rating === 5) {
                        star = `\u2B50\u2B50\u2B50\u2B50\u2B50`
                    }  else if (d.movie_rating === 4) {
                        star = '\u2B50\u2B50\u2B50\u2B50'
                    } else if (d.movie_rating === 3) {
                        star = '\u2B50\u2B50\u2B50'
                    } else if (d.movie_rating === 2) {
                        star = '\u2B50\u2B50'
                    }
                    return (
                        <Tr key={index}>
                            <Td>{star}</Td>
                            <Td>{d.age}</Td>
                            <Td>{d.city}</Td>
                            <Td>{d.region}</Td>
                            <Td>{emoji}</Td>
                        </Tr>
                    )
                }
                else if (this.isFood(d)) {
                    return (
                        <Tr key={index}>
                            <Td>{d.size}</Td>
                            <Td_lg>{d.inventory}</Td_lg>
                        </Tr>
                    )
                }
            })
    }

    sortName() {
        const {data} = this.state
        let {sorting} = this.state
        //console.log(sorting)
        data.sort ((a: Person|Food, b:Person|Food) =>{
            if (this.isPerson(a) && this.isPerson(b)) {
                if (sorting === "initial" || sorting === "descending") {
                    return a.name.localeCompare(b.name)
                } else {
                    return b.name.localeCompare(a.name)
                }
            } else {
                return 0
            }
        })
        this.setState({
            data: data,
            sorting: sorting === "initial" || sorting === "descending"? "ascending":"descending"
        })
    };

    sortAge() {
        const {data} = this.state
        let {ageSorting} = this.state
        data.sort ((a: Person|Food, b:Person|Food) =>{
            if (this.isPerson(a) && this.isPerson(b)) {
                if (ageSorting === "initial" || ageSorting === "descending") {
                    return a.age - b.age
                } else {
                    return b.age - a.age
                }
            } else {
                return 0
            }
        })
        this.setState({
            data: data,
            ageSorting: ageSorting === "initial" || ageSorting === "descending"? "ascending":"descending"
        })
    };

    render () {
        return (
            <TABLE> 
                <tbody>
                    <tr>
                    <COLUMN1> 
                        <TABLE1> 
                            <thead> 
                                <tr>
                                    {this.renderColumn1Header()} 
                                </tr> 
                            </thead>
                            <tbody>
                                {this.renderColumn1Data()}  
                            </tbody>
                        </TABLE1> 
                    </COLUMN1>
                    <COLUMNS> 
                        <TABLES> 
                            <thead> 
                                <tr>
                                     {this.renderColumnsHeader()}
                                </tr>
                            </thead> 
                            <tbody>  
                                {this.renderColumnsData()} 
                            </tbody> 
                        </TABLES> 
                    </COLUMNS> 
                    </tr> 
                </tbody>                
          </TABLE>
    )
  }
}

export default Table;
