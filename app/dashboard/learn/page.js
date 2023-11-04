const gptResponse = [
  {
    conceptName: "Introduction to Algorithms",
    pageText:
      "Algorithms are step-by-step instructions done to solve a particular problem. Think of it as a recipe to bake a cake or building instructions for a piece of furniture. In the same way these procedures help us complete tasks correctly, algorithms in programming guide a computer program to perform an operation or solve a computational problem. Algorithms are the heart of computer science and coding, and they can vary greatly in complexity.",
  },
  {
    conceptName: "Understanding Optimisation in Algorithms",
    pageText:
      "Optimization in algorithms involves finding the most efficient way to solve a problem. It could mean solving the problem with the least amount of resources, including time or computational power. We often measure computational efficiency in terms of time complexity and space complexity. Time complexity considers how long an algorithm takes to run as a function of its input size, while space complexity considers the amount of memory an algorithm uses in relation to its input size.",
  },
  {
    conceptName: "Introduction to Greedy Algorithms",
    pageText:
      "A greedy algorithm, as the name suggests, always makes the choice that seems to be the best at the moment in hopes that these local optimal decisions will lead to a global optimal solution. In short, greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. They do not look ahead to see the effect of these choices. Greedy algorithms are used in optimization problems such as Knapsack Problem, Activity Selection Problem, etc.",
  },
  {
    conceptName: "Working Principle of Greedy Algorithms",
    pageText:
      "A greedy algorithm follows a problem-solving heuristic of making the locally optimal choice at each stage with the hope that these choices will lead to a global optimum. It doesn't consider the implications of the decision it's making at a given time, rather it makes the decision that looks the best at the specific moment. For example, consider a problem where we need to find the maximum sum of a subset in an array. The greedy algorithm would simply pick the largest number at each point, without considering if choosing a smaller number now might allow for more larger numbers later.",
  },
  {
    conceptName: "Advantages and Disadvantages of Greedy Algorithms",
    pageText:
      "Greedy algorithms are simple to design and often straightforward to implement. They are fast, as they generally only loop through the input once, making decisions on the fly based on the current element. This speed makes them suitable for problems where time efficiency is paramount. However, their significant disadvantage is that they don't always produce the best global solution. Because they make quick, greed-driven decisions without considering future ones, they sometimes settle for sub-optimal solutions, especially in complex scenarios.",
  },
  {
    conceptName: "Use Cases of Greedy Algorithms",
    pageText:
      "Despite their limitations, greedy algorithms find extensive use in certain problems. One significant example is the Huffman Coding algorithm used in data compression. It creates variable-length codes for input symbols such that the most frequent symbol gets the smallest code, and the least frequent symbol gets the largest code, efficiently compressing the data. Another use case is in network algorithms, like the protocol for finding a minimal spanning tree in a graph, called Prim’s algorithm. Such algorithms use a greedy approach since the globally optimum solution can typically be reached through locally optimum choices.",
  },
];
