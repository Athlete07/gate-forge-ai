export interface Question {
  id: string;
  section: "GA" | "CORE";
  topic: string;
  stem: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  marks: 1 | 2;
  difficulty: "easy" | "moderate" | "hard";
  estimatedTime: number; // in seconds
  explanation: string;
  reference?: string;
}

export const mockExamQuestions: Question[] = [
  // General Aptitude Section (10 questions, 15 marks)
  {
    id: "GA001",
    section: "GA",
    topic: "Verbal Ability",
    stem: "Choose the word most similar in meaning to 'Prolific':",
    options: {
      A: "Productive",
      B: "Lazy",
      C: "Harmful",
      D: "Inactive"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Prolific means producing much fruit or many offspring; highly productive. Therefore, 'Productive' is the closest synonym.",
    reference: "GATE 2023 GA"
  },
  {
    id: "GA002",
    section: "GA",
    topic: "Quantitative Aptitude",
    stem: "If x + y = 12 and x - y = 4, what is the value of x?",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "4"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 90,
    explanation: "Adding both equations: (x+y) + (x-y) = 12+4 → 2x = 16 → x = 8",
    reference: "Basic Algebra"
  },
  {
    id: "GA003",
    section: "GA",
    topic: "Logical Reasoning",
    stem: "In a certain code, 'COMPUTER' is written as 'DPNQVUFS'. How is 'PROGRAM' written?",
    options: {
      A: "QSPHSBN",
      B: "QSPHSAN",
      C: "QSPGRAM",
      D: "QSOHRAN"
    },
    correctAnswer: "A",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "Each letter is shifted by +1 in the alphabet. P→Q, R→S, O→P, G→H, R→S, A→B, M→N",
    reference: "GATE 2022 GA"
  },
  {
    id: "GA004",
    section: "GA",
    topic: "Numerical Ability",
    stem: "A train travels 120 km at 60 km/h and then 180 km at 90 km/h. What is the average speed?",
    options: {
      A: "72 km/h",
      B: "75 km/h",
      C: "80 km/h",
      D: "85 km/h"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 150,
    explanation: "Total distance = 300 km. Time = 120/60 + 180/90 = 2 + 2 = 4 hours. Average speed = 300/4 = 75 km/h",
    reference: "Time, Speed & Distance"
  },
  {
    id: "GA005",
    section: "GA",
    topic: "Verbal Ability",
    stem: "Choose the grammatically correct sentence:",
    options: {
      A: "Each of the students have submitted their assignments.",
      B: "Each of the students has submitted their assignment.",
      C: "Each of the students has submitted his or her assignment.",
      D: "Each of the students have submitted his assignment."
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "'Each' is singular, so it takes 'has'. Also, 'his or her' maintains grammatical consistency.",
    reference: "English Grammar"
  },
  {
    id: "GA006",
    section: "GA",
    topic: "Data Interpretation",
    stem: "If 30% of a number is 90, what is 75% of that number?",
    options: {
      A: "200",
      B: "225",
      C: "250",
      D: "275"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 90,
    explanation: "Let the number be x. 0.30x = 90 → x = 300. Therefore, 75% of 300 = 225",
    reference: "Percentage"
  },
  {
    id: "GA007",
    section: "GA",
    topic: "Logical Reasoning",
    stem: "All roses are flowers. Some flowers are red. Therefore:",
    options: {
      A: "All roses are red",
      B: "Some roses are red",
      C: "No roses are red",
      D: "Cannot be determined"
    },
    correctAnswer: "D",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "The premises don't establish a definitive relationship between roses and the color red.",
    reference: "Syllogistic Reasoning"
  },
  {
    id: "GA008",
    section: "GA",
    topic: "Numerical Ability",
    stem: "What is the compound interest on ₹10,000 at 10% per annum for 2 years?",
    options: {
      A: "₹2,000",
      B: "₹2,100",
      C: "₹2,200",
      D: "₹2,500"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 150,
    explanation: "Amount = P(1+r/100)^n = 10000(1.1)^2 = 12,100. CI = 12,100 - 10,000 = ₹2,100",
    reference: "Compound Interest"
  },
  {
    id: "GA009",
    section: "GA",
    topic: "Verbal Ability",
    stem: "Antonym of 'Meticulous':",
    options: {
      A: "Careful",
      B: "Careless",
      C: "Precise",
      D: "Thorough"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "Meticulous means showing great attention to detail. The opposite is 'Careless'.",
    reference: "Vocabulary"
  },
  {
    id: "GA010",
    section: "GA",
    topic: "Data Interpretation",
    stem: "In a class of 50 students, 30 play cricket, 25 play football, and 15 play both. How many play neither?",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "20"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "Using set theory: n(C ∪ F) = n(C) + n(F) - n(C ∩ F) = 30 + 25 - 15 = 40. Neither = 50 - 40 = 10",
    reference: "Set Theory"
  },
  // Core CS Section (55 questions, 85 marks) - Sample questions
  {
    id: "CS001",
    section: "CORE",
    topic: "Data Structures",
    stem: "What is the time complexity of inserting an element at the end of a dynamic array (with amortized analysis)?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n log n)"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "With amortized analysis, inserting at the end of a dynamic array is O(1) because doubling happens infrequently.",
    reference: "CLRS Chapter 17"
  },
  {
    id: "CS002",
    section: "CORE",
    topic: "Algorithms",
    stem: "Which sorting algorithm has the best worst-case time complexity?",
    options: {
      A: "Quick Sort",
      B: "Merge Sort",
      C: "Bubble Sort",
      D: "Selection Sort"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Merge Sort has O(n log n) worst-case time complexity, while Quick Sort has O(n²).",
    reference: "Algorithm Analysis"
  },
  {
    id: "CS003",
    section: "CORE",
    topic: "Operating Systems",
    stem: "In a paging system with page size 4KB and logical address space 32 bits, how many entries are in the page table if physical memory is 1GB?",
    options: {
      A: "256K",
      B: "512K",
      C: "1M",
      D: "2M"
    },
    correctAnswer: "C",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 180,
    explanation: "Logical address space = 2^32 bytes. Pages = 2^32 / 2^12 = 2^20 = 1M entries.",
    reference: "OS Concepts - Paging"
  },
  {
    id: "CS004",
    section: "CORE",
    topic: "Database Management",
    stem: "Which normal form eliminates transitive dependencies?",
    options: {
      A: "1NF",
      B: "2NF",
      C: "3NF",
      D: "BCNF"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "3NF (Third Normal Form) eliminates transitive dependencies where non-key attributes depend on other non-key attributes.",
    reference: "Database Normalization"
  },
  {
    id: "CS005",
    section: "CORE",
    topic: "Computer Networks",
    stem: "What is the maximum number of hosts in a Class C network?",
    options: {
      A: "254",
      B: "256",
      C: "510",
      D: "512"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Class C has 8 host bits, giving 2^8 = 256 addresses. Subtract 2 (network and broadcast) = 254 usable hosts.",
    reference: "IP Addressing"
  },
  {
    id: "CS006",
    section: "CORE",
    topic: "Theory of Computation",
    stem: "Which of the following languages is context-free but not regular?",
    options: {
      A: "L = {a^n b^n | n ≥ 0}",
      B: "L = {a^n | n is prime}",
      C: "L = {ww | w ∈ {a,b}*}",
      D: "L = {a^*b^*}"
    },
    correctAnswer: "A",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "L = {a^n b^n} requires counting, which CFGs can do with a stack but regular expressions cannot.",
    reference: "Formal Languages"
  },
  {
    id: "CS007",
    section: "CORE",
    topic: "Digital Logic",
    stem: "How many NAND gates are required to implement an XOR gate?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "moderate",
    estimatedTime: 90,
    explanation: "XOR requires 4 NAND gates: A XOR B = (A NAND (A NAND B)) NAND (B NAND (A NAND B))",
    reference: "Digital Electronics"
  },
  {
    id: "CS008",
    section: "CORE",
    topic: "Compiler Design",
    stem: "Which phase of compiler construction handles syntax errors?",
    options: {
      A: "Lexical Analysis",
      B: "Syntax Analysis",
      C: "Semantic Analysis",
      D: "Code Generation"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Syntax Analysis (Parser) checks if the token sequence follows the grammar rules and reports syntax errors.",
    reference: "Compiler Phases"
  },
  {
    id: "CS009",
    section: "CORE",
    topic: "Computer Organization",
    stem: "What is the effective memory access time if cache hit rate is 90% with cache access time 10ns and main memory access time 100ns?",
    options: {
      A: "19ns",
      B: "20ns",
      C: "28ns",
      D: "30ns"
    },
    correctAnswer: "A",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 150,
    explanation: "EMAT = (hit rate × cache time) + (miss rate × (cache time + memory time)) = 0.9×10 + 0.1×(10+100) = 9 + 10 = 19ns",
    reference: "Memory Hierarchy"
  },
  {
    id: "CS010",
    section: "CORE",
    topic: "Programming",
    stem: "What is the output of: int x = 5; printf(\"%d\", x++ + ++x);",
    options: {
      A: "11",
      B: "12",
      C: "13",
      D: "Undefined behavior"
    },
    correctAnswer: "D",
    marks: 1,
    difficulty: "moderate",
    estimatedTime: 90,
    explanation: "Modifying and using a variable twice without a sequence point causes undefined behavior in C.",
    reference: "C Programming - Sequence Points"
  },
  // Additional Core CS questions (45 more) - abbreviated for brevity
  {
    id: "CS011",
    section: "CORE",
    topic: "Data Structures",
    stem: "In a binary search tree with n nodes, what is the average case time complexity for search?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n log n)"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Average case for BST search is O(log n) when the tree is balanced.",
    reference: "Binary Search Trees"
  },
  {
    id: "CS012",
    section: "CORE",
    topic: "Algorithms",
    stem: "Which data structure is used in Breadth-First Search?",
    options: {
      A: "Stack",
      B: "Queue",
      C: "Priority Queue",
      D: "Hash Table"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "BFS uses a queue to process nodes level by level.",
    reference: "Graph Algorithms"
  },
  {
    id: "CS013",
    section: "CORE",
    topic: "Operating Systems",
    stem: "Which scheduling algorithm can cause starvation?",
    options: {
      A: "FCFS",
      B: "Round Robin",
      C: "Priority Scheduling",
      D: "Shortest Job First"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Priority Scheduling can cause starvation when high-priority processes continuously arrive, preventing low-priority processes from executing.",
    reference: "CPU Scheduling"
  },
  {
    id: "CS014",
    section: "CORE",
    topic: "Database Management",
    stem: "What is the purpose of the GROUP BY clause in SQL?",
    options: {
      A: "Sort rows",
      B: "Filter rows",
      C: "Group rows with same values",
      D: "Join tables"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "GROUP BY groups rows that have the same values in specified columns into summary rows.",
    reference: "SQL Aggregation"
  },
  {
    id: "CS015",
    section: "CORE",
    topic: "Computer Networks",
    stem: "At which layer does TCP operate in the OSI model?",
    options: {
      A: "Network Layer",
      B: "Transport Layer",
      C: "Session Layer",
      D: "Application Layer"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "TCP (Transmission Control Protocol) operates at the Transport Layer (Layer 4) of the OSI model.",
    reference: "OSI Model"
  },
  {
    id: "CS016",
    section: "CORE",
    topic: "Data Structures",
    stem: "What is the minimum number of nodes in a complete binary tree of height h?",
    options: {
      A: "2^h",
      B: "2^h - 1",
      C: "2^(h-1)",
      D: "2^h + 1"
    },
    correctAnswer: "A",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "A complete binary tree of height h has minimum 2^h nodes (when only the root exists at the last level).",
    reference: "Binary Trees"
  },
  {
    id: "CS017",
    section: "CORE",
    topic: "Algorithms",
    stem: "What is the space complexity of merge sort?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n log n)"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Merge sort requires O(n) auxiliary space for merging.",
    reference: "Sorting Algorithms"
  },
  {
    id: "CS018",
    section: "CORE",
    topic: "Operating Systems",
    stem: "What is a semaphore?",
    options: {
      A: "A type of process",
      B: "A synchronization tool",
      C: "A memory management technique",
      D: "A scheduling algorithm"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "A semaphore is a synchronization tool used to control access to shared resources in concurrent programming.",
    reference: "Process Synchronization"
  },
  {
    id: "CS019",
    section: "CORE",
    topic: "Database Management",
    stem: "Which SQL command is used to remove a table from a database?",
    options: {
      A: "DELETE",
      B: "REMOVE",
      C: "DROP",
      D: "TRUNCATE"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "DROP TABLE removes the entire table structure and data from the database.",
    reference: "SQL DDL"
  },
  {
    id: "CS020",
    section: "CORE",
    topic: "Computer Networks",
    stem: "What is the purpose of ARP?",
    options: {
      A: "IP to MAC address resolution",
      B: "MAC to IP address resolution",
      C: "Domain name resolution",
      D: "Port number allocation"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in a local network.",
    reference: "Network Protocols"
  },
  // Continuing with more Core CS questions
  {
    id: "CS021",
    section: "CORE",
    topic: "Theory of Computation",
    stem: "Which problem is undecidable?",
    options: {
      A: "Halting Problem",
      B: "Sorting Problem",
      C: "Searching Problem",
      D: "Graph Coloring"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "moderate",
    estimatedTime: 90,
    explanation: "The Halting Problem, which asks whether a program will halt on a given input, is undecidable.",
    reference: "Decidability"
  },
  {
    id: "CS022",
    section: "CORE",
    topic: "Digital Logic",
    stem: "A multiplexer with n select lines can have how many input lines?",
    options: {
      A: "n",
      B: "2n",
      C: "2^n",
      D: "n^2"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "A multiplexer with n select lines can select from 2^n input lines.",
    reference: "Combinational Circuits"
  },
  {
    id: "CS023",
    section: "CORE",
    topic: "Compiler Design",
    stem: "What is the role of a lexical analyzer?",
    options: {
      A: "Parse syntax",
      B: "Generate tokens",
      C: "Optimize code",
      D: "Generate machine code"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "The lexical analyzer (lexer) reads source code and generates tokens.",
    reference: "Compiler Phases"
  },
  {
    id: "CS024",
    section: "CORE",
    topic: "Computer Organization",
    stem: "What is the purpose of a cache memory?",
    options: {
      A: "Permanent storage",
      B: "Virtual memory",
      C: "Speed up memory access",
      D: "Secondary storage"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Cache memory is used to speed up memory access by storing frequently used data closer to the CPU.",
    reference: "Memory Hierarchy"
  },
  {
    id: "CS025",
    section: "CORE",
    topic: "Data Structures",
    stem: "What is the maximum number of edges in a simple directed graph with n vertices?",
    options: {
      A: "n",
      B: "n(n-1)",
      C: "n(n-1)/2",
      D: "n^2"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "In a directed graph, each vertex can have an edge to every other vertex: n × (n-1) edges.",
    reference: "Graph Theory"
  },
  {
    id: "CS026",
    section: "CORE",
    topic: "Algorithms",
    stem: "What is the time complexity of Dijkstra's algorithm using a binary heap?",
    options: {
      A: "O(V log V)",
      B: "O(E log V)",
      C: "O((V+E) log V)",
      D: "O(V^2)"
    },
    correctAnswer: "C",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 150,
    explanation: "Dijkstra's with binary heap has O((V+E) log V) complexity: V insertions + E decrease-key operations.",
    reference: "Shortest Path Algorithms"
  },
  {
    id: "CS027",
    section: "CORE",
    topic: "Operating Systems",
    stem: "What is thrashing in an operating system?",
    options: {
      A: "High CPU utilization",
      B: "Excessive paging activity",
      C: "Deadlock situation",
      D: "Buffer overflow"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "moderate",
    estimatedTime: 90,
    explanation: "Thrashing occurs when a system spends more time paging than executing, due to insufficient memory.",
    reference: "Virtual Memory"
  },
  {
    id: "CS028",
    section: "CORE",
    topic: "Database Management",
    stem: "Which isolation level prevents dirty reads?",
    options: {
      A: "Read Uncommitted",
      B: "Read Committed",
      C: "Repeatable Read",
      D: "Both B and C"
    },
    correctAnswer: "D",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "Both Read Committed and Repeatable Read prevent dirty reads. Only Read Uncommitted allows them.",
    reference: "Transaction Isolation"
  },
  {
    id: "CS029",
    section: "CORE",
    topic: "Computer Networks",
    stem: "What is the window size in Stop-and-Wait ARQ?",
    options: {
      A: "1",
      B: "2",
      C: "4",
      D: "Unlimited"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Stop-and-Wait ARQ has a window size of 1, meaning only one frame is sent at a time.",
    reference: "Data Link Layer Protocols"
  },
  {
    id: "CS030",
    section: "CORE",
    topic: "Programming",
    stem: "What is the default return type of a function in C if not specified?",
    options: {
      A: "void",
      B: "int",
      C: "float",
      D: "char"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "In older C standards, if return type is not specified, it defaults to int.",
    reference: "C Programming"
  },
  // Continue with remaining questions (CS031-CS055)
  {
    id: "CS031",
    section: "CORE",
    topic: "Data Structures",
    stem: "Which traversal of a binary tree uses a stack?",
    options: {
      A: "Level-order",
      B: "In-order (iterative)",
      C: "Breadth-first",
      D: "All of the above"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "In-order iterative traversal uses a stack to maintain nodes to be visited.",
    reference: "Tree Traversals"
  },
  {
    id: "CS032",
    section: "CORE",
    topic: "Algorithms",
    stem: "What is the worst-case time complexity of insertion sort?",
    options: {
      A: "O(n)",
      B: "O(n log n)",
      C: "O(n^2)",
      D: "O(2^n)"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Insertion sort has O(n^2) worst-case when the array is in reverse order.",
    reference: "Sorting Algorithms"
  },
  {
    id: "CS033",
    section: "CORE",
    topic: "Operating Systems",
    stem: "Which of the following is NOT a deadlock condition?",
    options: {
      A: "Mutual Exclusion",
      B: "Hold and Wait",
      C: "Preemption",
      D: "Circular Wait"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "The four deadlock conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Preemption prevents deadlock.",
    reference: "Deadlock"
  },
  {
    id: "CS034",
    section: "CORE",
    topic: "Database Management",
    stem: "What does ACID stand for in database transactions?",
    options: {
      A: "Atomicity, Consistency, Isolation, Durability",
      B: "Accuracy, Consistency, Integrity, Durability",
      C: "Atomicity, Correctness, Isolation, Dependency",
      D: "Accuracy, Correctness, Integrity, Dependency"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "ACID properties ensure reliable database transactions: Atomicity, Consistency, Isolation, Durability.",
    reference: "Transaction Properties"
  },
  {
    id: "CS035",
    section: "CORE",
    topic: "Computer Networks",
    stem: "What is the maximum data rate of Fast Ethernet?",
    options: {
      A: "10 Mbps",
      B: "100 Mbps",
      C: "1 Gbps",
      D: "10 Gbps"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "Fast Ethernet (100BASE-T) operates at 100 Mbps.",
    reference: "Ethernet Standards"
  },
  {
    id: "CS036",
    section: "CORE",
    topic: "Theory of Computation",
    stem: "Which automaton can recognize context-free languages?",
    options: {
      A: "Finite Automaton",
      B: "Pushdown Automaton",
      C: "Turing Machine",
      D: "Linear Bounded Automaton"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Pushdown Automaton (PDA) recognizes context-free languages using a stack.",
    reference: "Automata Theory"
  },
  {
    id: "CS037",
    section: "CORE",
    topic: "Digital Logic",
    stem: "How many flip-flops are needed to construct a mod-16 counter?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "A mod-16 counter requires 4 flip-flops since 2^4 = 16.",
    reference: "Sequential Circuits"
  },
  {
    id: "CS038",
    section: "CORE",
    topic: "Compiler Design",
    stem: "What type of grammar does an LL parser use?",
    options: {
      A: "Left-recursive",
      B: "Right-recursive",
      C: "Context-free",
      D: "Context-sensitive"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "moderate",
    estimatedTime: 90,
    explanation: "LL parsers use context-free grammars, but they cannot handle left-recursive grammars.",
    reference: "Parsing Techniques"
  },
  {
    id: "CS039",
    section: "CORE",
    topic: "Computer Organization",
    stem: "What is the purpose of the Program Counter (PC)?",
    options: {
      A: "Store data",
      B: "Hold next instruction address",
      C: "Perform arithmetic operations",
      D: "Manage interrupts"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "The Program Counter holds the address of the next instruction to be executed.",
    reference: "CPU Architecture"
  },
  {
    id: "CS040",
    section: "CORE",
    topic: "Data Structures",
    stem: "What is the minimum number of queues needed to implement a stack?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "Cannot be implemented"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "A stack can be implemented using 2 queues by moving n-1 elements during push or pop.",
    reference: "Data Structure Implementation"
  },
  {
    id: "CS041",
    section: "CORE",
    topic: "Algorithms",
    stem: "Which algorithm is used for finding strongly connected components?",
    options: {
      A: "Dijkstra's",
      B: "Prim's",
      C: "Kosaraju's",
      D: "Kruskal's"
    },
    correctAnswer: "C",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "Kosaraju's algorithm finds strongly connected components using two DFS passes.",
    reference: "Graph Algorithms"
  },
  {
    id: "CS042",
    section: "CORE",
    topic: "Operating Systems",
    stem: "What is the Belady's anomaly related to?",
    options: {
      A: "Disk scheduling",
      B: "Page replacement",
      C: "Process scheduling",
      D: "Memory allocation"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "hard",
    estimatedTime: 150,
    explanation: "Belady's anomaly occurs in FIFO page replacement where increasing frames can increase page faults.",
    reference: "Virtual Memory"
  },
  {
    id: "CS043",
    section: "CORE",
    topic: "Database Management",
    stem: "What is a candidate key?",
    options: {
      A: "A foreign key",
      B: "Any key that can uniquely identify a row",
      C: "The primary key",
      D: "A composite key"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "A candidate key is any attribute or set of attributes that can uniquely identify a tuple.",
    reference: "Database Keys"
  },
  {
    id: "CS044",
    section: "CORE",
    topic: "Computer Networks",
    stem: "Which protocol is connectionless?",
    options: {
      A: "TCP",
      B: "UDP",
      C: "FTP",
      D: "HTTP"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "UDP (User Datagram Protocol) is connectionless and does not establish a connection before sending data.",
    reference: "Transport Protocols"
  },
  {
    id: "CS045",
    section: "CORE",
    topic: "Theory of Computation",
    stem: "What is the pumping lemma used for?",
    options: {
      A: "Proving a language is regular",
      B: "Proving a language is not regular",
      C: "Constructing automata",
      D: "Minimizing DFA"
    },
    correctAnswer: "B",
    marks: 2,
    difficulty: "moderate",
    estimatedTime: 120,
    explanation: "The pumping lemma is used to prove that a language is not regular by contradiction.",
    reference: "Regular Languages"
  },
  {
    id: "CS046",
    section: "CORE",
    topic: "Digital Logic",
    stem: "What is the Boolean expression for NAND gate?",
    options: {
      A: "A + B",
      B: "A · B",
      C: "¬(A · B)",
      D: "¬(A + B)"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "NAND gate output is the negation of AND: ¬(A · B).",
    reference: "Logic Gates"
  },
  {
    id: "CS047",
    section: "CORE",
    topic: "Compiler Design",
    stem: "What is the first phase of compilation?",
    options: {
      A: "Syntax Analysis",
      B: "Lexical Analysis",
      C: "Semantic Analysis",
      D: "Code Generation"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Lexical Analysis is the first phase where source code is converted into tokens.",
    reference: "Compiler Phases"
  },
  {
    id: "CS048",
    section: "CORE",
    topic: "Computer Organization",
    stem: "What is the Von Neumann architecture?",
    options: {
      A: "Separate memory for data and instructions",
      B: "Shared memory for data and instructions",
      C: "Multiple processors",
      D: "Distributed computing"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Von Neumann architecture uses a single shared memory for both data and instructions.",
    reference: "Computer Architecture"
  },
  {
    id: "CS049",
    section: "CORE",
    topic: "Data Structures",
    stem: "What is the degree of a node in a tree?",
    options: {
      A: "Number of children",
      B: "Number of parents",
      C: "Height of node",
      D: "Depth of node"
    },
    correctAnswer: "A",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "The degree of a node is the number of children it has.",
    reference: "Tree Data Structure"
  },
  {
    id: "CS050",
    section: "CORE",
    topic: "Algorithms",
    stem: "Which algorithm finds the minimum spanning tree?",
    options: {
      A: "Dijkstra's",
      B: "Floyd-Warshall",
      C: "Kruskal's",
      D: "Bellman-Ford"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Kruskal's algorithm finds the minimum spanning tree using a greedy approach.",
    reference: "Graph Algorithms"
  },
  {
    id: "CS051",
    section: "CORE",
    topic: "Operating Systems",
    stem: "In demand paging, what happens on a page fault?",
    options: {
      A: "Process terminates",
      B: "Page is loaded from disk",
      C: "Memory is expanded",
      D: "Cache is cleared"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "On a page fault, the required page is loaded from disk into main memory.",
    reference: "Virtual Memory"
  },
  {
    id: "CS052",
    section: "CORE",
    topic: "Database Management",
    stem: "Which join returns all rows when there is a match in either table?",
    options: {
      A: "Inner Join",
      B: "Left Join",
      C: "Right Join",
      D: "Full Outer Join"
    },
    correctAnswer: "D",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 60,
    explanation: "Full Outer Join returns all rows from both tables, with NULLs where there's no match.",
    reference: "SQL Joins"
  },
  {
    id: "CS053",
    section: "CORE",
    topic: "Computer Networks",
    stem: "What is the subnet mask for a /24 network?",
    options: {
      A: "255.0.0.0",
      B: "255.255.0.0",
      C: "255.255.255.0",
      D: "255.255.255.255"
    },
    correctAnswer: "C",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "/24 means the first 24 bits are the network part, giving 255.255.255.0.",
    reference: "IP Subnetting"
  },
  {
    id: "CS054",
    section: "CORE",
    topic: "Programming",
    stem: "What is the size of 'int' data type in C on a 32-bit system?",
    options: {
      A: "2 bytes",
      B: "4 bytes",
      C: "8 bytes",
      D: "Depends on compiler"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "On a 32-bit system, 'int' typically occupies 4 bytes (32 bits).",
    reference: "C Data Types"
  },
  {
    id: "CS055",
    section: "CORE",
    topic: "Algorithms",
    stem: "What is the time complexity of binary search?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n log n)"
    },
    correctAnswer: "B",
    marks: 1,
    difficulty: "easy",
    estimatedTime: 45,
    explanation: "Binary search divides the search space in half each iteration, giving O(log n) complexity.",
    reference: "Searching Algorithms"
  }
];

export interface ExamState {
  answers: Record<string, string>;
  markedForReview: Set<string>;
  timeRemaining: number; // in seconds
  currentQuestion: number;
  isSubmitted: boolean;
}

export const calculateScore = (answers: Record<string, string>) => {
  let score = 0;
  
  mockExamQuestions.forEach((question) => {
    const userAnswer = answers[question.id];
    if (userAnswer === question.correctAnswer) {
      score += question.marks;
    } else if (userAnswer && userAnswer !== question.correctAnswer) {
      // Negative marking
      score -= question.marks === 1 ? 0.33 : 0.66;
    }
  });
  
  return Math.max(0, Number(score.toFixed(2)));
};

export const getTopicWiseAnalysis = (answers: Record<string, string>) => {
  const topicStats: Record<string, { correct: number; total: number; marks: number }> = {};
  
  mockExamQuestions.forEach((question) => {
    if (!topicStats[question.topic]) {
      topicStats[question.topic] = { correct: 0, total: 0, marks: 0 };
    }
    
    topicStats[question.topic].total += 1;
    topicStats[question.topic].marks += question.marks;
    
    if (answers[question.id] === question.correctAnswer) {
      topicStats[question.topic].correct += 1;
    }
  });
  
  return topicStats;
};
