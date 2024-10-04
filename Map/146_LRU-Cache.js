
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let val = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, val)
        return val
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        // Delete the key first so that we can update it and move it to the end
        this.map.delete(key);
    }
    else if (this.map.size === this.capacity) {
        // Remove the first key (least recently used)
        const firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
    }
    // Set the new key-value pair (or update the existing one)
    this.map.set(key, value);

};

//TC- O(1)
//SC- O(n)

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */