/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "../dto/item.interface";
import { Items } from "../dto/items.interface";

/**
 * In-Memory Store
 */
let itemsStore: Items = {
    1: {
      id: 1,
      name: "Burger",
      price: 599,
      description: "Meat++",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 299,
      description: "Veggie",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 199,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };

/**
 * Service Methods - CRUD functions
 */
//Query All
export const findAll = async (): Promise<Item[]> => Object.values(itemsStore);

//Query with ID
export const find = async (id: number): Promise<Item> => itemsStore[id];

//Create
export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf(); //for creating a unique id. Can be replaced with a GUID generator as well. 
  
    itemsStore[id] = {
      id,
      ...newItem,
    };
  
    return itemsStore[id];
  };

//Update
export const update = async (
    id: number,
    itemUpdate: BaseItem
  ): Promise<Item | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    itemsStore[id] = { id, ...itemUpdate };
  
    return itemsStore[id];
};

//Delete
export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete itemsStore[id];
  };