/**
 * Snippet 087: LRU cache implementation
 * File: 86-lru-cache.js
 *
 * How to use:
 *   node snippets/86-lru-cache.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

class LRU {
  constructor(limit=100) { this.limit=limit; this.map=new Map(); }
  get(k){
    if(!this.map.has(k)) return;
    const v=this.map.get(k);
    this.map.delete(k);
    this.map.set(k,v);
    return v;
  }
  set(k,v){
    if(this.map.has(k)) this.map.delete(k);
    this.map.set(k,v);
    if(this.map.size>this.limit) this.map.delete(this.map.keys().next().value);
  }
}

const c = new LRU(2);
c.set("a",1); c.set("b",2);
c.get("a"); c.set("c",3); // evicts b
console.log([...c.map.entries()]);
