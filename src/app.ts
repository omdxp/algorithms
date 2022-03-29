class HashTable<T> {
  private _keyMap: Array<Array<[string, T]>>;
  public get keyMap(): Array<Array<[string, T]>> {
    return this._keyMap;
  }

  constructor(public size: number = 53) {
    this._keyMap = new Array(size);
  }

  private hash(key: string) {
    let total = 0;
    let WEIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRED_PRIME + value) % this._keyMap.length;
    }
    return total;
  }

  set(key: string, value: T) {
    let hashedKey = this.hash(key);
    if (!this._keyMap[hashedKey]) this._keyMap[hashedKey] = [[key, value]];
    else {
      this._keyMap[hashedKey].push([key, value]);
    }
  }

  get(key: string): T | null {
    let hashedKey = this.hash(key);
    if (!this._keyMap[hashedKey]) return null;
    let foundElement: T;
    for (let i = 0; i < this._keyMap[hashedKey].length; i++) {
      if (this._keyMap[hashedKey][i][0] === key) {
        foundElement = this._keyMap[hashedKey][i][1];
        break;
      }
    }
    return foundElement!;
  }
}

let hashTable = new HashTable(10);

hashTable.set("pink", 2);
hashTable.set("blue", true);
hashTable.set("salmon", "here");

console.log(hashTable.get("pink"));
console.log(hashTable.get("blue"));
console.log(hashTable.get("salmon"));

console.log("----");

console.log(hashTable.keyMap);
