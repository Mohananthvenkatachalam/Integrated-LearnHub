const axios = require('axios');

const json = [
  {
    question:
      '<p>Which of the following ways can be used to represent a graph?</p>',
    options: [
      '<p>Adjacency List and Adjacency Matrix</p>',
      '<p>Incidence Matrix</p>',
      '<p>Adjacency List, Adjacency Matrix as well as Incidence Matrix</p>',
      '<p>None of these</p>',
    ],
    answer: [
      '<p>Adjacency List, Adjacency Matrix as well as Incidence Matrix</p>',
    ],
    difficulty: 'Medium',
  },
  {
    question: '<p>Which of the following is true?</p>',
    options: [
      '<p>A graph may contain no edges and many vertices</p>',
      '<p>A graph may contain many edges and no vertices</p>',
      '<p>A graph may contain no edges and no vertices</p>',
      '<p>None of the mentioned</p>',
    ],
    answer: ['<p>A graph may contain many edges and no vertices</p>'],
    difficulty: 'Easy',
  },
  {
    question:
      '<p>&nbsp;A graph having an edge from each vertex to every other vertex is called a</p>',
    options: [
      '<p>Tightly Connected</p>',
      '<p>Strongly Connected</p>',
      '<p>Strongly Connected</p>',
      '<p>Loosely Connected</p>',
    ],
    answer: ['<p>Tightly Connected</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>For the given graph(G), which of the following statements is true?</p><p><img src="https://www.sanfoundry.com/wp-content/uploads/2017/08/data-structure-questions-answers-graph-q3.png"></p>',
    options: [
      '<p>G is a complete graph</p>',
      '<p>G is not a connected graph</p>',
      '<p>The vertex connectivity of the graph is 2</p>',
      '<p>The edge connectivity of the graph is 1</p>',
    ],
    answer: ['<p>The vertex connectivity of the graph is 2</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>The data structure required for Breadth First Traversal on a graph is</p>',
    options: ['<p>Stack</p>', '<p>Array</p>', '<p>Queue</p>', '<p>Tree</p>'],
    answer: ['<p>Queue</p>'],
    difficulty: 'Easy',
  },
  {
    question:
      '<p>For a given graph G having v vertices and e edges which is connected and has no cycles, which of the following statements is true?</p>',
    options: [
      '<p>v=e</p>',
      '<p>v = e+1</p>',
      '<p>v + 1 = e</p>',
      '<p>None of these</p>',
    ],
    answer: ['<p>v = e+1</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>Which of the following statements for a simple graph is correct?</p>',
    options: [
      '<p>Every path is a trail</p>',
      '<p>Every trail is a path</p>',
      '<p>Every trail is a path as well as every path is a trail</p>',
      '<p>None of the mentioned</p>',
    ],
    answer: ['<p>Every path is a trail</p>'],
    difficulty: 'Easy',
  },
  {
    question:
      '<p>In a simple graph, the number of edges is equal to twice the sum of the degrees of the vertices.</p>',
    options: ['<p>True</p>', '<p>False</p>'],
    answer: ['<p>False</p>'],
    difficulty: 'Easy',
  },
  {
    question:
      '<p>How many undirected graphs (not necessarily connected) can be constructed out of a given set V= {V 1, V 2,…V n} of n vertices ?</p>',
    options: [
      '<p>n(n-1)/2</p>',
      '<p>2^n</p>',
      '<p>n!</p>',
      '<p>2^(n(n-1)/2)</p>',
    ],
    answer: ['<p>2^(n(n-1)/2)</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>What is the maximum possible number of edges in a directed graph with no self loops having 8 vertices?</p>',
    options: ['<p>28</p>', '<p>64</p>', '<p>256</p>', '<p>56</p>'],
    answer: ['<p>56</p>'],
    difficulty: 'Medium',
  },
  {
    question: '<p>What are the dimensions of an incidence matrix?</p>',
    options: [
      '<p>Number of edges*number of edges</p>',
      '<p>Number of edges*number of vertices</p>',
      '<p>Number of vertices*number of vertices</p>',
      '<p>None of the mentioned statements</p>',
    ],
    answer: ['<p>Number of edges*number of vertices</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>What is the maximum number of edges present in a simple directed graph with 7 vertices if there exists no cycles in the graph?</p>',
    options: ['<p>21</p>', '<p>7</p>', '<p>6</p>', '<p>49</p>'],
    answer: ['<p>6</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>A connected planar graph having 6 vertices, 7 edges contains _____________ regions.</p>',
    options: ['<p>15</p>', '<p>3</p>', '<p>1</p>', '<p>11</p>'],
    answer: ['<p>3</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>Which of the following properties does a simple graph not hold?</p>',
    options: [
      '<p>Must be connected</p>',
      '<p>Must be unweighted</p>',
      '<p>Must have no loops or multiple edges</p>',
      '<p>Must have no multiple edges</p>',
    ],
    answer: ['<p>Must be connected</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>What is time complexity to check if a string(length S1) is a substring of another string(length S2) stored in a Directed Acyclic Word Graph, given S2 is greater than S1?</p>',
    options: ['<p>O(S1)</p>', '<p>O(S2)</p>', '<p>O(S1+S2)</p>', '<p>O(1)</p>'],
    answer: ['<p>O(S1)</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      "<p>If a simple graph G, contains n vertices and m edges, the number of edges in the Graph G'(Complement of G) is</p>",
    options: [
      '<p>(n*n-n-2*m)/2</p>',
      '<p>(n*n+n+2*m)/2</p>',
      '<p>(n*n-n*2*m)/2</p>',
      '<p>(n*n-n+2*m)/2</p>',
    ],
    answer: ['<p>(n*n-n-2*m)/2</p>'],
    difficulty: 'Medium',
  },
  {
    question:
      '<p>Incidence matrix and Adjacency matrix of a graph will always have same dimensions?</p>',
    options: ['<p>True</p>', '<p>False</p>'],
    answer: ['<p>False</p>'],
    difficulty: 'Easy',
  },
  {
    question:
      '<p>Let G be a simple graph with 20 vertices and 8 components. If we delete a vertex in G, then number of components in G should lie between</p>',
    options: [
      '<p>8 and 20</p>',
      '<p>8 and 19</p>',
      '<p>7 and 19</p>',
      '<p>7 and 20</p>',
    ],
    answer: ['<p>7 and 19</p>'],
    difficulty: 'Medium',
  },
];

let i = 0;
const loop = async () => {
  if (i >= json.length) {
    return;
  }

  const res = await axios.post(
    'http://localhost:8080/api/gatway/post-question',
    json[i++]
  );
  console.log(res.data);
  loop();
};

loop().catch(e => console.log(e));
