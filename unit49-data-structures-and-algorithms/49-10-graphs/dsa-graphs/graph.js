class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    try {
      if (vertex === undefined) throw new Error("addVertex needs a vertex argument!");
      this.nodes.add(vertex);
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    try {
      if (vertexArray === undefined) throw new Error("addVertices needs a vertexArray argument!");
      vertexArray.forEach(vertex => this.nodes.add(vertex));
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    try {
      if (v1 === undefined || v2 === undefined) throw new Error("addEdge needs a v1 and v2 argument!");
      this.nodes.forEach(vertex => {
        if (vertex.value === v1.value) vertex.adjacent.add(v2);
        if (vertex.value === v2.value) vertex.adjacent.add(v1);
      });
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    try {
      if (v1 === undefined || v2 === undefined) throw new Error("removeEdge needs a v1 and v2 argument!");
      this.nodes.forEach(vertex => {
        if (vertex.value === v1.value) vertex.adjacent.delete(v2);
        if (vertex.value === v2.value) vertex.adjacent.delete(v1);
      });
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    try {
      if (vertex === undefined) throw new Error("removeVertex needs a vertex argument!");
      if (!this.nodes.has(vertex)) throw new Error("Vertex not found!");
      this.nodes.delete(vertex);
      this.nodes.forEach(node => {
        node.adjacent.delete(vertex);
      });
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, seen = new Set()) {
    try {
      if (start === undefined) throw new Error("depthFirstSearch needs a start argument!");
      const arr = [];
      const toVisitQueue = [start];
      while (toVisitQueue.length ) {
        const currPerson = toVisitQueue.pop();
        if (!seen.has(currPerson)) {
          arr.push(currPerson);
          seen.add(currPerson);
        }
        for (let node of currPerson.adjacent) {
          if (!seen.has(node)) {
            toVisitQueue.push(node);
          }
        }
      }
      return arr;
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  // this function returns an array of Node values using BFS
  // OLD SOLUTION
  // breadthFirstSearch(start, seen = new Set(), arr = []) {
  //   try {
  //     if (start === undefined) throw new Error("depthFirstSearch needs a start argument!");
  //     const toVisitQueue = [start];
  //     const currPerson = toVisitQueue.shift();
  //     if (!seen.has(currPerson)) {
  //       arr.push(currPerson);
  //       seen.add(currPerson);
  //     }
  //     currPerson.adjacent.forEach(node => {
  //       if (!seen.has(node)) this.depthFirstSearch(node, seen, arr);
  //     });
  //     return arr;
  //   } catch(err) {
  //     console.error(`ERROR!\n${err}`);
  //   }
  // }

  breadthFirstSearch(start, seen = new Set()) {
    try {
      if (start === undefined) throw new Error("depthFirstSearch needs a start argument!");
      const arr = [];
      const toVisitQueue = [start];
      while (toVisitQueue.length ) {
        const currPerson = toVisitQueue.shift();
        if (!seen.has(currPerson)) {
          arr.push(currPerson);
          seen.add(currPerson);
        }
        for (let node of currPerson.adjacent) {
          if (!seen.has(node)) {
            toVisitQueue.push(node);
          }
        }
      }
      return arr;
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }
}

/* SAMPLE GRAPH */
const homer = new Node("homer simpson");
const marge = new Node("marge simpson");
const maggie = new Node("maggie simpson");
const lisa = new Node("lisa simpson");
const gramps = new Node("gramps simpson");
const friends = new Graph();
friends.addVertices([ homer, marge, maggie, lisa, gramps ]);

friends.addEdge(homer, marge);
friends.addEdge(homer, lisa);
friends.addEdge(homer, maggie);
friends.addEdge(marge, maggie);
friends.addEdge(maggie, lisa);
friends.addEdge(lisa, gramps);

const moe = new Node("moe");
const barney = new Node("barney");
const lenny = new Node("lenny");

friends.addVertices([ moe, barney, lenny ]);
friends.addEdge(moe, barney);
friends.addEdge(barney, lenny);

module.exports = {Graph, Node}