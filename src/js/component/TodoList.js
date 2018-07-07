import React,{Component} from 'react';
import TodoItems from './TodoItems'; 	


class TodoList extends Component{
	constructor(props){
		super(props);
		var newItem = {
		 		text:"Default",
		 		checked:false,
		 		key:Date.now()
		 	}

		this.state = {
    		items: [newItem]
  		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.checkedItem = this.checkedItem.bind(this);
	}

	checkedItem(key){
		var checkedItems = this.state.items.filter(function(item){
			if(item.key == key){
				item.checked = item.checked?false:true;
			}
			return item;
		});
		this.setState({
			items:checkedItems,
		})
	}

	deleteItem(key) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
	}

	editItem(key,text){
		var editedItem = this.state.items.filter(function (item) {
			 var editedText = prompt("enter the edited task");
			 if(editedText.trim() == ""){return item;}
	    	 if(item.key == key){
	    	 	item.text = editedText
	    	 }
	    	 return item;
	  	});
		this.setState({
			items : editedItem,
		});
		console.log(this.state);
	}

	addItem(e){
		if(this._inputElement.value !== ""){
		 	var newItem = {
		 		text:this._inputElement.value,
		 		checked:false,
		 		key:Date.now()
		 	}
		 	this.setState((prevState) =>{
		 		return { 
        			items: prevState.items.concat(newItem) 
      			};	
		 	});
		 	this._inputElement.value="";
		 }

		console.log(this.state.items);

		e.preventDefault();
	}
	render(){
		return(
			<div className="todo-main">
				<div className = 'header'>
					<div className = 'item-a'>TODO</div>
					<form className = 'item-b' onSubmit={this.addItem}>
						<input ref = {(a) =>this._inputElement=a} type="text" placeholder="Enter task and hit enter">
						</input>
					</form>
				</div>
				<TodoItems entries = {this.state.items} delete = {this.deleteItem} edit={this.editItem} checked={this.checkedItem}/>
			</div>
		)
	}
}
export default TodoList;