function merge(obj: object, objB: object) {
    return Object.assign(obj, objB)
}

const mergedObj = merge({name: 'Sindhu'}, {age: 24})
console.log(mergedObj)

// console.log(mergedObj.name) 
// access name in mergedObj throws an error as TS doesn't know that mergedObj has name property or not. It just thinks it of a object but doesn't knw the properties
// for this we need to use generics which gives the intersection of 2 types and thus TS knows that the object will have both name and age and properties

function genericMerge<A, B> (objA: A, objBB: B) {
    return Object.assign(objA, objBB)
}

const genericMerged = genericMerge({name: 'name'}, {name:'dupName', age: 30})
const genericMerged1 = genericMerge({name: 'name'}, 30)
console.log(genericMerged);
console.log(genericMerged1);
console.log(genericMerged.name); // this works as TS knows that this object has both the properties

// below we are restricting that this generic function accepts only objects as Object.assign merges objects
// similarly we can define whatever types we want to
function genericWithConstraints<A extends object, B extends object> (objA: A, objBB: B) {
    return Object.assign(objA, objBB)
}

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy> (ele: T) : [T, string] {
    let desc = 'Got to know value';
    if(ele.length > 0) desc = 'Got length ' + ele.length;

    return [ele, desc]
}

console.log(countAndPrint([1,2,3]))
console.log(countAndPrint("Hey there"));

// generic classes
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('a');
textStorage.addItem('b');
console.log(textStorage.getItems())

const numStorage = new DataStorage<number>();
numStorage.addItem(1);
numStorage.addItem(2);
console.log(numStorage.getItems())