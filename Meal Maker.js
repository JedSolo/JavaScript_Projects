const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers(){
    return this._courses.appetizers
  },
  set appetizers(appetizer){
    this._courses.appetizers = appetizer 
  },
  get mains(){
    return this._courses.mains
  },
  set mains(main){
    this._courses.main = main
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(dessert){
    this._courses.desserts = dessert
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
    },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },

  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
    
    return `Your meal: Appetizer:${appetizer.name}, Main Course:${main.name}, Dessert:${dessert.name}. The price is $${totalPrice}`
  }
}

// Adding appetizers to the Menu:
menu.addDishToCourse('appetizers', 'Blooming Onion', 5.5);
menu.addDishToCourse('appetizers', 'Baked Buffalo Wings', 6.25);
menu.addDishToCourse('appetizers', 'Chicken Wonton Tacos', 7.00);

// Adding main dishes to the Menu:
menu.addDishToCourse('mains', 'Bourbon Street Chicken and Shrimp', 35.00);
menu.addDishToCourse('mains', 'Original BBQ Chicken Pizza', 15.00);
menu.addDishToCourse('mains', 'Rib-Eye Steak', 40.00);

// Adding desserts to the Menu:
menu.addDishToCourse('desserts', 'Cheese Cake', 5.00);
menu.addDishToCourse('desserts', 'Chocolate Fondue', 4.00);
menu.addDishToCourse('desserts', 'Lemon souffles', 3.50);

// Creating a meal from the Menu:
const meal = menu.generateRandomMeal()
console.log(meal)