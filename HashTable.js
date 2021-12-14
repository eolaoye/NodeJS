class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    const stringifiedKey = key.toString();
    for (let i=0; i < stringifiedKey.length; i++) {
      hash = (hash + stringifiedKey.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address])
      this.data[address] = [];

    this.data[address].push([key, value]);

    return address;
  }

  get(key) {
    const address = this._hash(key);

    const dataAtKey = this.data[address];

    if (!dataAtKey)
      return undefined;

    for(let i = 0; i < dataAtKey.length; i++){
      if (dataAtKey[i][0] === key)
        return dataAtKey[i][1];
    }

    return undefined;
  }

  keys() {
    const keyArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i]){
        for (let j = 0; j < this.data[i].length; j++) {
          keyArray.push(this.data[i][j][0]);
        }
      }
    }
    console.log(keyArray);
    return keyArray;
  }

  values() {
    const valueArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i]){
        for (let j = 0; j < this.data[i].length; j++) {
          valueArray.push(this.data[i][j][1]);
        }
      }
    }
    console.log(valueArray);
    return valueArray;
  }
}

const hashTable = new HashTable(50);
hashTable.set(10, 'sope');
hashTable.set(24, 'Imole');

hashTable.keys();
hashTable.values();