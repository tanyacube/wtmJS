Item = class {
   constructor(title, description) {
      this.title = title
      this.description = description
      this.status = 'to do'
   }
    changeTitle(title) {
        this.title = title
   }
   changeDescription(decription) {
       this.decription = decription
   }

   changeStatus(status){
       this.status = status
   }

   showItem(){
    
   }
}

ItemsList = class {
    constructor(items){
        this.items = []
    }

    addItem(item){
        this.items.push(item)
    }

    removeItem(title){
        this.items = this.items.filter(function(item) {
            return item.title !== title;
        });
    }
}

birthday = new Item ('Birthday', 'Sis is turning 30')
graduation = new Item ('Graduation day', 'Alex graduates today!')
haloween = new Item ('Haloween', 'Big party at Sarah\'s')

priorityList = new ItemsList()
priorityList.addItem(birthday)
priorityList.addItem(graduation)
priorityList.addItem(haloween)
console.log(priorityList)

priorityList.removeItem('Graduation day')
console.log(priorityList)



