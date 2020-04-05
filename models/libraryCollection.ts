export interface LibraryCollection<T> {
  _items: T[];
  addItemToCatalog(newItem: T, text: string): void;
  removeItemFormCatalog(oldItem: T): void;
}

let littleCollecton: LibraryCollection<string> = {
    _items : ["Hello", " my", " friend"],
    addItemToCatalog: (x,y) => console.log(`Added ${y} times ${x}`),
    removeItemFormCatalog: x=> console.log(`Removed ${x}`)
};

export class Shelf<T> implements LibraryCollection<T>{
    _items:T[];

    addItemToCatalog(newItem: T): void{

    }

    removeItemFormCatalog(oldItem: T): void{

    }
}