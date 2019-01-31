class Tabs {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    this.element.addEventListener('click', () => {
      this.current = document.querySelector('.tabs-link-selected');
      this.select();
    });
  }
}


class TabLink extends Tabs {
  constructor(element) {
    super(element);
  }

  select() {
    // Deselect current element
    this.deselect();

    // Add selected class
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    this.current.classList.remove('tabs-link-selected');
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Deselect current element
    this.deselect();
    // Add selected class
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    document.querySelector('.tabs-item-selected').classList.remove('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');

links.forEach(el => new TabLink(el));