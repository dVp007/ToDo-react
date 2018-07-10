import React,{Component} from 'react';

class TodoItems extends Component{
	constructor(props){
		super(props);

		this.createItems = this.createItems.bind(this)
	}
	checked(key){
		this.props.checked(key);
	}

	delete(key){
		this.props.delete(key);
	}

	edit(key,text){
		this.props.edit(key,text);
	}

	createItems(items){
		//console.log(items);
		return (
			<div className="box">
				<li className = {"list "+items.checked} key={items.key}>
					<span onClick={() => this.edit(items.key,items.text)} editable>{items.text}</span>
					<i className="material-icons round check " onClick={() => this.checked(items.key)}><span className="check">check</span></i>
					<i className="material-icons round delete" onClick={() => this.delete(items.key)}><span className="delete">delete</span></i>
				</li>
			</div>
		)
	}

	
	render(){
		var TodoEntries = this.props.entries;
		var listitems = TodoEntries.map(this.createItems)
		
		console.log(listitems);
		return(
			<ul className="list-main">
				{listitems}
			</ul>
		);
	}
}

export default TodoItems;