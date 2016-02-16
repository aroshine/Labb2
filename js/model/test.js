
	var getDishById = function(id) {
		for(i = 0; i < dishes.length; i++){	
			if(id==dishes[i].id) {
				return dishes[i];
			}
		}
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
	var dish = getDishById(id);
	for( j= 0; j < selectedDishes.length; j++){
		if(dish.type==selectedDishes[j].type){
			selectedDishes[j] = dish;
		}
	}

	}






	this.addDishToMenu = function(id) {
		//TODO Lab 2 
	var dish;
	for(i = 0; i < dishes.length; i++){	
		if(id==dishes[i].id) {
			dish = dishes[i];
		}
	}

	for( j= 0; j < selectedDishes.length; j++){
		if(id==selectedDishes[j]){
			selectedDishes[j] = dish;

		}
	}


			<h1>Dinner planner</h1>
		<div id="exampleView">
			<div>
				Number of guests: <span id="numberOfGuests"></span>
			</div>
			<div>
          <button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>
				<button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
			</div>
				Total cost: <div id="totCost"></div>
		</div>