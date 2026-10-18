window.ITPEC_QUIZZES = window.ITPEC_QUIZZES || {};
window.ITPEC_QUIZZES["2025"] = {
  "year": "2025",
  "session": "April 2025",
  "questions": [
    {
      "number": 1,
      "text": "As shown in Figure 1, there is a box that generates a single output for two (2) inputs. The input in this box is either “Agree” or “Disagree,” and the output of “Agree” is generated only when both inputs are “Agree,” while in other cases the output of “Disagree” is generated. When three (3) inputs are entered into two (2) boxes as shown in Figure 2, which of the following is the correct description concerning the output?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q1)",
      "images": [
        "questions/2025/q001-1.webp"
      ],
      "originalText": "As shown in Figure 1, there is a box that generates a single output for two (2) inputs. The\ninput in this box is either “Agree” or “Disagree,” and the output of “Agree” is generated only\nwhen both inputs are “Agree,” while in other cases the output of “Disagree” is generated.\nWhen three (3) inputs are entered into two (2) boxes as shown in Figure 2, which of the\nfollowing is the correct description concerning the output?\na) The output of “Agree” is generated at all times when one (1) or more inputs are “Agree.”\nb) The output of “Agree” is generated at all times when two (2) or more inputs are\n“Agree.”\nc) The output of “Disagree” is generated only when two (2) or more inputs are “Disagree.”\nd) The output of “Agree” is generated only when all three (3) inputs are “Agree.”",
      "preferOriginal": true,
      "explanation": "Each box behaves like an AND gate. The first box needs inputs 1 and 2 to agree, and the second also needs input 3 to agree. The final result is Agree only when all three agree.",
      "equation": "Final output = Input 1 AND Input 2 AND Input 3"
    },
    {
      "number": 2,
      "text": "Which of the following is the binary result of the multiplication of binary 1011 and binary 101?",
      "choices": [
        "1111",
        "10000",
        "101111",
        "110111"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q2)",
      "images": [],
      "originalText": "Which of the following is the binary result of the multiplication of binary 1011 and binary\n101?\na) 1111 b) 10000 c) 101111 d) 110111",
      "preferOriginal": false,
      "explanation": "Convert the binary operands to decimal: 1011₂ = 11 and 101₂ = 5. Their product is 55. Since 55 = 32 + 16 + 4 + 2 + 1, its binary form is 110111₂.",
      "steps": [
        "1011₂ = 8 + 2 + 1 = 11",
        "101₂ = 4 + 1 = 5",
        "11 × 5 = 55",
        "55 = 32 + 16 + 4 + 2 + 1"
      ],
      "equation": "1011₂ × 101₂ = 110111₂"
    },
    {
      "number": 3,
      "text": "The automation of the inspections performed by a quality controller is considered. By providing as training data 10,000 product images and the results of judgments by the quality controller about whether each product is defective or not, a machine learning model is created to judge whether a product is defective or not. The results of a test judgement by a machine learning model on 100 product images are as shown in the table. When the ratio of the number of images that product is judged to be defective by the machine learning model out of the images that product is judged to be defective by the quality controller is deemed to be the recall rate, what is the recall rate in this test judgement? Unit: Images Judgment by the machine learning model Defective Not defective Judgment by the Defective 5 5 quality controller Not defective 15 75",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q3)",
      "images": [
        "questions/2025/q003-1.webp"
      ],
      "originalText": "The automation of the inspections performed by a quality controller is considered. By\nproviding as training data 10,000 product images and the results of judgments by the quality\ncontroller about whether each product is defective or not, a machine learning model is created\nto judge whether a product is defective or not. The results of a test judgement by a machine\nlearning model on 100 product images are as shown in the table. When the ratio of the number\nof images that product is judged to be defective by the machine learning model out of the\nimages that product is judged to be defective by the quality controller is deemed to be the\nrecall rate, what is the recall rate in this test judgement?\nUnit: Images\nJudgment by the machine learning model\nDefective Not defective\nJudgment by the Defective 5 5\nquality controller Not defective 15 75\na) 0.05 b) 0.25 c) 0.50 d) 0.80",
      "preferOriginal": true,
      "explanation": "Recall counts correctly detected defective products out of all products the controller identified as defective. There are 5 detected and 5 missed, so recall = 5 ÷ (5 + 5) = 0.50.",
      "steps": [
        "True positives: 5 defective products correctly detected.",
        "False negatives: 5 defective products missed.",
        "All actual positives: 5 + 5 = 10."
      ],
      "equation": "Recall = TP / (TP + FN)\n       = 5 / (5 + 5)\n       = 0.50 = 50%",
      "recallVisual": true
    },
    {
      "number": 4,
      "text": "When a six (6)-sided dice with the numbers 1 to 6 is thrown three (3) times, what is the probability of not getting any 1? 1 5 91 125",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q4)",
      "images": [
        "questions/2025/q004-1.webp"
      ],
      "originalText": "When a six (6)-sided dice with the numbers 1 to 6 is thrown three (3) times, what is the\nprobability of not getting any 1?\n1 5 91 125\na) b) c) d)\n216 72 216 216",
      "preferOriginal": true,
      "explanation": "On one roll, five of the six outcomes are not 1. The rolls are independent, so multiply 5/6 three times: (5/6)³ = 125/216.",
      "steps": [
        "Chance of not getting 1 on one roll: 5/6.",
        "Multiply the three independent probabilities."
      ],
      "equation": "(5/6) × (5/6) × (5/6) = 125/216"
    },
    {
      "number": 5,
      "text": "Which of the following is a term for a list of instructions to a computer that are written in a human-readable programming language?",
      "choices": [
        "PIN code",
        "Source code",
        "Binary code",
        "Character code"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q5)",
      "images": [],
      "originalText": "Which of the following is a term for a list of instructions to a computer that are written in\na human-readable programming language?\na) PIN code b) Source code\nc) Binary code d) Character code",
      "preferOriginal": false,
      "explanation": "Source code is the human-readable set of instructions written in a programming language. It is translated or interpreted so that the computer can execute it."
    },
    {
      "number": 6,
      "text": "The procedure calculateElectricBill receives electricity usage that accepts the units (non-negative value) and returns the amount of electricity bills. The pricing structure is given as: For the first 100 units, the cost is $10 per unit. Any units exceeding 100 are charged at $15 per unit. Which of the following is an appropriate piece of code to be inserted into _______ in the program? [Program] ○ integer: calculateElectricBill(integer: units) integer: payAmount ← 0 if (units ≤ 100) payAmount ← units × 10 else payAmount ← ____ __ endif return payAmount",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q6)",
      "images": [
        "questions/2025/q006-1.webp"
      ],
      "originalText": "The procedure calculateElectricBill receives electricity usage that accepts the units\n(non-negative value) and returns the amount of electricity bills. The pricing structure is given\nas: For the first 100 units, the cost is $10 per unit. Any units exceeding 100 are charged at\n$15 per unit. Which of the following is an appropriate piece of code to be inserted into\n_______ in the program?\n[Program]\n○ integer: calculateElectricBill(integer: units)\ninteger: payAmount ← 0\nif (units ≤ 100)\npayAmount ← units × 10\nelse\npayAmount ← ____ __\nendif\nreturn payAmount\na) (units - 100) × 10 + 100 × 15\nb) (units - 100) × 15 + 100 × 10\nc) units × 15\nd) units × 15 + 100 × 10",
      "preferOriginal": true,
      "explanation": "Charge the first 100 units at $10 each and only the extra units at $15 each. For usage above 100, the bill is 100 × 10 + (units − 100) × 15."
    },
    {
      "number": 7,
      "text": "A program uses loops to display results based on whether the cycle numbers are odd or even. The execution result of the program is shown below. 0+0+0+0 +++++++ 2+2+2+2 +++++++ 4+4+4+4 +++++++ 6+6+6+6 Which of the following is an appropriate combination of pieces of code to be inserted into ___A___ through ___C___ in the program? [Program] integer: i, j for (increase i from 0 to 6 by 1) for (increase j from 0 to 6 by 1) if (____A____) output ____B____ else output ____C____ endif endfor output a new line endfor A B C",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q7)",
      "images": [
        "questions/2025/q007-1.webp"
      ],
      "originalText": "A program uses loops to display results based on whether the cycle numbers are odd or\neven. The execution result of the program is shown below.\n0+0+0+0\n+++++++\n2+2+2+2\n+++++++\n4+4+4+4\n+++++++\n6+6+6+6\nWhich of the following is an appropriate combination of pieces of code to be inserted into\n___A___ through ___C___ in the program?\n[Program]\ninteger: i, j\nfor (increase i from 0 to 6 by 1)\nfor (increase j from 0 to 6 by 1)\nif (____A____)\noutput ____B____\nelse\noutput ____C____\nendif\nendfor\noutput a new line\nendfor\nA B C\na) (i mod 2 ≠ 0) and (j mod 2 ≠ 0) \"+\" i\nb) (i mod 2 ≠ 0) and (j mod 2 ≠ 0) i \"+\"\nc) (i mod 2 = 0) and (j mod 2 = 0) \"+\" i\nd) (i mod 2 = 0) and (j mod 2 = 0) i \"+\"",
      "preferOriginal": true,
      "explanation": "Numbers appear only at positions where both the row index i and the column index j are even. At those positions, output i; everywhere else, output the plus sign."
    },
    {
      "number": 8,
      "text": "In the data structure called a queue that is suitable for performing first-in first-out (FIFO) processing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values are removed consecutively. Which of the following is the last value that is removed?",
      "choices": [
        "1",
        "3",
        "6",
        "8"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q8)",
      "images": [],
      "originalText": "In the data structure called a queue that is suitable for performing first-in first-out (FIFO)\nprocessing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values\nare removed consecutively. Which of the following is the last value that is removed?\na) 1 b) 3 c) 6 d) 8",
      "preferOriginal": false,
      "explanation": "A queue removes values in their arrival order. The first removal returns 8 and the second returns 1, making 1 the last of the two removed values.",
      "equation": "Queue: 8 → 1 → 6 → 3\n1st out: 8\n2nd out: 1"
    },
    {
      "number": 9,
      "text": "As shown in Figure 1, there is a box that generates two (2) numerical values B1 and B2 when two (2) positive integers A1 and A2 are entered. B1 has the same value as A2, and B2 is the remainder of A1 divided by A2. In Figure 2, when two (2) boxes are connected, and 49 is entered as A1 and 11 is entered as A2 in the left box, what is the value of B2 generated from the right box? A1 B1 A2 B2 Figure 1 49 B1 11 B2 Figure 2",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q9)",
      "images": [
        "questions/2025/q009-1.webp"
      ],
      "originalText": "As shown in Figure 1, there is a box that generates two (2) numerical values B1 and B2\nwhen two (2) positive integers A1 and A2 are entered. B1 has the same value as A2, and B2\nis the remainder of A1 divided by A2. In Figure 2, when two (2) boxes are connected, and 49\nis entered as A1 and 11 is entered as A2 in the left box, what is the value of B2 generated\nfrom the right box?\nA1 B1\nA2 B2\nFigure 1\n49 B1\n11 B2\nFigure 2\na) 1 b) 2 c) 4 d) 5",
      "preferOriginal": true,
      "explanation": "The first box produces 11 and the remainder 49 mod 11 = 5. These become the next box's inputs, so its second output is 11 mod 5 = 1.",
      "steps": [
        "First box: 49 = 11 × 4 + 5, so its outputs are 11 and 5.",
        "Second box: 11 = 5 × 2 + 1, so its second output is 1."
      ],
      "equation": "49 mod 11 = 5\n11 mod 5 = 1"
    },
    {
      "number": 10,
      "text": "Which of the following is an appropriate combination of words that are inserted into and in the description below concerning the execution sequence of instructions in a computer? In a computer, the instructions are executed in the sequence shown below. (1) Refer to the program counter. (2) the instruction. (3) Set the program counter to the main memory address of the next instruction. (4) the instruction. (5) Execute processing according to the instruction. (6) Return to (1). A B",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q10)",
      "images": [
        "questions/2025/q010-1.webp"
      ],
      "originalText": "Which of the following is an appropriate combination of words that are inserted into\nand in the description below concerning the execution sequence of\ninstructions in a computer?\nIn a computer, the instructions are executed in the sequence shown below.\n(1) Refer to the program counter.\n(2) the instruction.\n(3) Set the program counter to the main memory address of the next instruction.\n(4) the instruction.\n(5) Execute processing according to the instruction.\n(6) Return to (1).\nA B\na) Decode Read\nb) Read Decode\nc) Read Write\nd) Write Decode",
      "preferOriginal": true,
      "explanation": "The processor fetches or reads the instruction from memory before decoding it. Decoding determines what operation must be executed."
    },
    {
      "number": 11,
      "text": "Which of the following is an appropriate description concerning the primary and secondary cache memory that a CPU is equipped with?",
      "choices": [
        "The primary cache memory has larger capacity than the secondary cache memory.",
        "The secondary cache memory is slower than the main memory in writing and reading.",
        "When the CPU reads data, it first accesses the primary cache memory, and then it accesses the secondary cache memory if the data is not available.",
        "All of the data that is required for a process needs to be present on the primary or secondary cache memory when a program starts."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q11)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning the primary and\nsecondary cache memory that a CPU is equipped with?\na) The primary cache memory has larger capacity than the secondary cache memory.\nb) The secondary cache memory is slower than the main memory in writing and reading.\nc) When the CPU reads data, it first accesses the primary cache memory, and then it\naccesses the secondary cache memory if the data is not available.\nd) All of the data that is required for a process needs to be present on the primary or\nsecondary cache memory when a program starts.",
      "preferOriginal": false,
      "explanation": "The CPU checks the faster primary cache first. If the requested data is absent, it checks the secondary cache before proceeding farther down the memory hierarchy."
    },
    {
      "number": 12,
      "text": "Which of the following is a type of device that is also used as a memory device in IoT devices, and has a lower power consumption and higher impact resistance than an HDD as it has memory media that is made of semiconductors and does not have any moving components?",
      "choices": [
        "DRM",
        "DVD",
        "HDMI",
        "SSD"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q12)",
      "images": [],
      "originalText": "Which of the following is a type of device that is also used as a memory device in IoT\ndevices, and has a lower power consumption and higher impact resistance than an HDD as it\nhas memory media that is made of semiconductors and does not have any moving\ncomponents?\na) DRM b) DVD c) HDMI d) SSD",
      "preferOriginal": false,
      "explanation": "An SSD stores data in semiconductor memory and has no spinning disks or moving read/write heads. This gives it lower power use and better resistance to physical shock than an HDD."
    },
    {
      "number": 13,
      "text": "Which of the following is the appropriate description concerning the performance of a CPU?",
      "choices": [
        "Between a 32-bit CPU and a 64-bit CPU, the length of data that a 64-bit CPU can process at once can be greater.",
        "The smaller the amount of cache memory in a CPU, the higher the processing speed of the CPU.",
        "In CPUs with the same structure, when the clock frequency is decreased, the processing speed increases.",
        "Between a dual core CPU and a quad core CPU, a dual core CPU can execute a greater number of processes simultaneously."
      ],
      "answer": 0,
      "source": "(2025S, IP, Q13)",
      "images": [],
      "originalText": "Which of the following is the appropriate description concerning the performance of a\nCPU?\na) Between a 32-bit CPU and a 64-bit CPU, the length of data that a 64-bit CPU can\nprocess at once can be greater.\nb) The smaller the amount of cache memory in a CPU, the higher the processing speed of\nthe CPU.\nc) In CPUs with the same structure, when the clock frequency is decreased, the processing\nspeed increases.\nd) Between a dual core CPU and a quad core CPU, a dual core CPU can execute a greater\nnumber of processes simultaneously.",
      "preferOriginal": false,
      "explanation": "The bit width describes how much data a CPU can handle in an operation. A 64-bit CPU can process a wider data value at once than a 32-bit CPU, although bit width alone does not determine overall speed."
    },
    {
      "number": 14,
      "text": "Which of the following is an appropriate characteristic of a dual system?",
      "choices": [
        "It provides two (2) sets of systems that perform the same processing and checks the correctness of the processing by comparing the results. If one of the systems fails, it isolates the failed system and continues the processing.",
        "The same two (2) devices are used, so that the processing capability can be increased to double that of a simplex system.",
        "It provides a currently used system for performing online processing and also a backup system that is made on standby while performing batch processing. In the event of a failure in the currently used system, it switches to the backup system, starts the online processing on it, and continues the service.",
        "It connects multiple devices in series and configures them in such a way that the load of each function is distributed among them, so that processing capability is high. But if any one of the devices fails, it becomes unable to provide the service."
      ],
      "answer": 0,
      "source": "(2025S, IP, Q14)",
      "images": [],
      "originalText": "Which of the following is an appropriate characteristic of a dual system?\na) It provides two (2) sets of systems that perform the same processing and checks the\ncorrectness of the processing by comparing the results. If one of the systems fails, it\nisolates the failed system and continues the processing.\nb) The same two (2) devices are used, so that the processing capability can be increased to\ndouble that of a simplex system.\nc) It provides a currently used system for performing online processing and also a backup\nsystem that is made on standby while performing batch processing. In the event of a\nfailure in the currently used system, it switches to the backup system, starts the online\nprocessing on it, and continues the service.\nd) It connects multiple devices in series and configures them in such a way that the load of\neach function is distributed among them, so that processing capability is high. But if any\none of the devices fails, it becomes unable to provide the service.",
      "preferOriginal": false,
      "explanation": "A dual system runs the same processing on two systems and compares their results. If a failed system can be identified and isolated, the remaining system can continue processing."
    },
    {
      "number": 15,
      "text": "Among the changes A through D in a client/server system, which of the following is the list that contains all and only the appropriate changes for reducing the response time? A: Establishing a high-speed line between the client and the server, and reducing the time taken to transmit data B: Increasing the number of clients, and reducing the waiting time for users before using clients C: Reducing the time taken for data entry by users on the client’s input screen D: Making the server high-performance, and reducing the server’s processing time",
      "choices": [
        "A, B, C",
        "A, D",
        "B, C",
        "C, D"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q15)",
      "images": [],
      "originalText": "Among the changes A through D in a client/server system, which of the following is the\nlist that contains all and only the appropriate changes for reducing the response time?\nA: Establishing a high-speed line between the client and the server, and reducing the time\ntaken to transmit data\nB: Increasing the number of clients, and reducing the waiting time for users before using\nclients\nC: Reducing the time taken for data entry by users on the client’s input screen\nD: Making the server high-performance, and reducing the server’s processing time\na) A, B, C b) A, D c) B, C d) C, D",
      "preferOriginal": false,
      "explanation": "Response time includes transmission and processing after a request is made. Faster communication and a faster server reduce those parts. Adding clients or shortening manual data entry does not directly reduce the system's response time."
    },
    {
      "number": 16,
      "text": "There is a web system that is composed of two (2) web servers and one (1) database server as shown in the figure. When the availability of each Web server is 0.8 and the availability of the Database server is 0.9, which of the following is the availability of this system rounded off to two (2) decimal places? Here, if at least one (1) of the two (2) Web servers are operating and the Database server is operating, it is considered that the system is operating. Also, a fault occurs randomly on each server. Web server Database server Web server",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q16)",
      "images": [
        "questions/2025/q016-1.webp"
      ],
      "originalText": "There is a web system that is composed of two (2) web servers and one (1) database\nserver as shown in the figure. When the availability of each Web server is 0.8 and the\navailability of the Database server is 0.9, which of the following is the availability of this\nsystem rounded off to two (2) decimal places? Here, if at least one (1) of the two (2) Web\nservers are operating and the Database server is operating, it is considered that the system is\noperating. Also, a fault occurs randomly on each server.\nWeb\nserver\nDatabase\nserver\nWeb\nserver\na) 0.04 b) 0.58 c) 0.86 d) 0.96",
      "preferOriginal": true,
      "explanation": "Both web servers fail with probability 0.2 × 0.2 = 0.04, so at least one works with probability 0.96. The database must also work: 0.96 × 0.9 = 0.864, which rounds to 0.86.",
      "steps": [
        "Chance one web server fails: 1 − 0.8 = 0.2.",
        "Chance both web servers fail: 0.2 × 0.2 = 0.04.",
        "Chance at least one web server works: 1 − 0.04 = 0.96.",
        "The database must also work: multiply by 0.9."
      ],
      "equation": "[1 − (1 − 0.8)²] × 0.9\n= 0.864 ≈ 0.86"
    },
    {
      "number": 17,
      "text": "Which of the following is an appropriate explanation of multitasking?",
      "choices": [
        "Several computers connected via a network work together to achieve a high- performance system.",
        "Several processor cores composed of arithmetic circuits and other control circuits are implemented in a single CPU.",
        "The CPU processing time is allocated to several processes in turn so that the processes can be executed concurrently.",
        "The same processing is performed for multiple data items by executing a single instruction."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q17)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of multitasking?\na) Several computers connected via a network work together to achieve a high-\nperformance system.\nb) Several processor cores composed of arithmetic circuits and other control circuits are\nimplemented in a single CPU.\nc) The CPU processing time is allocated to several processes in turn so that the processes\ncan be executed concurrently.\nd) The same processing is performed for multiple data items by executing a single\ninstruction.",
      "preferOriginal": false,
      "explanation": "Multitasking allocates CPU time to multiple processes in turns. Switching between them allows their execution to overlap in time from the user's perspective."
    },
    {
      "number": 18,
      "text": "The types of programs that are running when a PC is started are broadly classified into three (3) categories, namely BIOS (Basic Input Output System), OS, and resident application programs. Which of the following is the order of execution of the programs?",
      "choices": [
        "BIOS, OS, resident application programs",
        "OS, BIOS, resident application programs",
        "OS, resident application programs, BIOS",
        "Resident application programs, BIOS, OS"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q18)",
      "images": [],
      "originalText": "The types of programs that are running when a PC is started are broadly classified into\nthree (3) categories, namely BIOS (Basic Input Output System), OS, and resident application\nprograms. Which of the following is the order of execution of the programs?\na) BIOS, OS, resident application programs\nb) OS, BIOS, resident application programs\nc) OS, resident application programs, BIOS\nd) Resident application programs, BIOS, OS",
      "preferOriginal": false,
      "explanation": "The BIOS or firmware initializes the hardware first. It starts the operating system, and the operating system then starts resident application programs."
    },
    {
      "number": 19,
      "text": "Multiple files stored on a hard disk are used in work, from Monday to Friday. In order to handle failure of the hard disk, the data is backed up to another hard disk after the end of each day’s work. When the backup has following conditions, what is the total time required (in minutes) to perform backups of data from Monday to Friday? [Conditions for backups] (1) There are 6,000 files used in work, each with a size of 3 Mbytes. (2) In each day’s work, 1,000 files are modified. Modifications do not change the size of the files. (3) Files are copied to the other hard disk at a speed of 10 Mbytes/second. One (1) file is backed up at a time; backup continues without interruption. (4) From Monday to Thursday, only files modified that day are backed up. On Friday, all files are backed up, whether or not they have been modified.",
      "choices": [
        "25",
        "35",
        "50",
        "150"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q19)",
      "images": [],
      "originalText": "Multiple files stored on a hard disk are used in work, from Monday to Friday. In order to\nhandle failure of the hard disk, the data is backed up to another hard disk after the end of each\nday’s work. When the backup has following conditions, what is the total time required (in\nminutes) to perform backups of data from Monday to Friday?\n[Conditions for backups]\n(1) There are 6,000 files used in work, each with a size of 3 Mbytes.\n(2) In each day’s work, 1,000 files are modified. Modifications do not change the size of\nthe files.\n(3) Files are copied to the other hard disk at a speed of 10 Mbytes/second. One (1) file is\nbacked up at a time; backup continues without interruption.\n(4) From Monday to Thursday, only files modified that day are backed up. On Friday, all\nfiles are backed up, whether or not they have been modified.\na) 25 b) 35 c) 50 d) 150",
      "preferOriginal": false,
      "explanation": "Four daily backups copy 4 × 1,000 × 3 = 12,000 MB, and Friday's full backup copies 6,000 × 3 = 18,000 MB. At 10 MB/s, the total 30,000 MB takes 3,000 seconds, or 50 minutes.",
      "steps": [
        "Monday–Thursday: 4 × 1,000 files × 3 MB = 12,000 MB.",
        "Friday: 6,000 files × 3 MB = 18,000 MB.",
        "Total: 30,000 MB ÷ 10 MB/s = 3,000 seconds."
      ],
      "equation": "3,000 seconds ÷ 60 = 50 minutes"
    },
    {
      "number": 20,
      "text": "Spreadsheet software is to be used to perform a calculation with the monthly sales data for each product shown in the worksheet below. When the expression “COUNTIF(B2:D2,>15000)” is entered in cell E2 and then copied to cell E3 and cell E4, which of the following is the value that is displayed in cell E4? A B C D E Product January February March Conditional 1 name sales sales sales count 2 Product A 10,000 15,000 20,000 3 Product B 5,000 10,000 5,000 4 Product C 10,000 20,000 30,000",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q20)",
      "images": [
        "questions/2025/q020-1.webp"
      ],
      "originalText": "Spreadsheet software is to be used to perform a calculation with the monthly sales data\nfor each product shown in the worksheet below. When the expression\n“COUNTIF(B2:D2,>15000)” is entered in cell E2 and then copied to cell E3 and cell E4,\nwhich of the following is the value that is displayed in cell E4?\nA B C D E\nProduct January February March Conditional\n1\nname sales sales sales count\n2 Product A 10,000 15,000 20,000\n3 Product B 5,000 10,000 5,000\n4 Product C 10,000 20,000 30,000\na) 0 b) 1 c) 2 d) 3",
      "preferOriginal": true,
      "explanation": "When copied to row 4, the relative range becomes B4:D4. Product C has values 10,000, 20,000 and 30,000. Two values are greater than 15,000, so COUNTIF returns 2.",
      "equation": "Row 4: [10,000, 20,000, 30,000]\nValues > 15,000: 20,000 and 30,000\nCOUNTIF = 2"
    },
    {
      "number": 21,
      "text": "Which of the following is an Open Source Software (OSS) OS that is used in mobile devices such as smartphones and tablets?",
      "choices": [
        "Android",
        "iOS",
        "Safari",
        "Windows"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q21)",
      "images": [],
      "originalText": "Which of the following is an Open Source Software (OSS) OS that is used in mobile\ndevices such as smartphones and tablets?\na) Android b) iOS\nc) Safari d) Windows",
      "preferOriginal": false,
      "explanation": "Android is based on an open source operating system platform used in smartphones, tablets and other devices. The question asks for a mobile operating system, rather than application software."
    },
    {
      "number": 22,
      "text": "In document creation software, spreadsheet software, and other such software, which of the following is a function that predefines and executes a series of operation procedures?",
      "choices": [
        "Autocomplete",
        "Source code",
        "Plug and play",
        "Macro"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q22)",
      "images": [],
      "originalText": "In document creation software, spreadsheet software, and other such software, which of\nthe following is a function that predefines and executes a series of operation procedures?\na) Autocomplete b) Source code\nc) Plug and play d) Macro",
      "preferOriginal": false,
      "explanation": "A macro records or defines a sequence of operations so that the sequence can be executed automatically. It is commonly used to repeat tasks in office applications."
    },
    {
      "number": 23,
      "text": "Which of the following is a space-saving server where computer components including the CPU, main memory, and storage are installed on a single circuit board and multiple circuit boards are mounted in racks?",
      "choices": [
        "DNS server",
        "FTP server",
        "Web server",
        "Blade server"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q23)",
      "images": [],
      "originalText": "Which of the following is a space-saving server where computer components including\nthe CPU, main memory, and storage are installed on a single circuit board and multiple circuit\nboards are mounted in racks?\na) DNS server b) FTP server\nc) Web server d) Blade server",
      "preferOriginal": false,
      "explanation": "A blade server places the main computing components on a compact board that fits into a shared enclosure. Multiple blades share infrastructure and save installation space."
    },
    {
      "number": 24,
      "text": "Which of the following is a technology that projects things such as video made with computer graphics on to buildings, objects, and other such three-dimensional things, and produces a variety of visual effects?",
      "choices": [
        "Digital signage",
        "Virtual reality",
        "Projection mapping",
        "Polygon"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q24)",
      "images": [],
      "originalText": "Which of the following is a technology that projects things such as video made with\ncomputer graphics on to buildings, objects, and other such three-dimensional things, and\nproduces a variety of visual effects?\na) Digital signage b) Virtual reality\nc) Projection mapping d) Polygon",
      "preferOriginal": false,
      "explanation": "Projection mapping fits projected images or video to the shape of buildings or other objects. It produces visual effects on physical three-dimensional surfaces."
    },
    {
      "number": 25,
      "text": "Which of the following is a data format that can be used to compress both video and audio data?",
      "choices": [
        "BMP",
        "GIF",
        "JPEG",
        "MPEG"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q25)",
      "images": [],
      "originalText": "Which of the following is a data format that can be used to compress both video and\naudio data?\na) BMP b) GIF c) JPEG d) MPEG",
      "preferOriginal": false,
      "explanation": "MPEG includes standards for compressing moving pictures and associated audio. It therefore meets the requirement to compress both video and sound."
    },
    {
      "number": 26,
      "text": "By joining tables “Employees in charge”, “Regions”, and “Customers” that are managed in a relational database, the table A that is shown below is obtained. Which of the following is the table “Customers” that is used for the joining? Here, a solid underline indicates a primary key and a dotted underline indicates a foreign key. Employees in charge Employee code Employee name Regions Region code Region name A Customer code Customer name Employee name Region name Representative name",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q26)",
      "images": [
        "questions/2025/q026-1.webp"
      ],
      "originalText": "By joining tables “Employees in charge”, “Regions”, and “Customers” that are managed\nin a relational database, the table A that is shown below is obtained. Which of the following\nis the table “Customers” that is used for the joining? Here, a solid underline indicates a\nprimary key and a dotted underline indicates a foreign key.\nEmployees in charge\nEmployee code Employee name\nRegions\nRegion code Region name\nA\nCustomer code Customer name Employee name Region name Representative name\na) Customer code Customer name Representative name\nb) Customer code Customer name Representative name Employee code\nc) Customer code Customer name Representative name Region code\nd) Customer code Customer name Representative name Employee code Region code",
      "preferOriginal": true,
      "explanation": "The Customers table must identify each customer and store its representative name. It must also carry employee and region codes as foreign keys so that the employee and region names can be obtained through joins."
    },
    {
      "number": 27,
      "text": "Which of the following is an appropriate purpose of conducting data normalization when a relational database is constructed?",
      "choices": [
        "Providing redundancy to data in order to detect data errors",
        "Eliminating data inconsistencies and duplications in order to make it easy to maintain and manage the data",
        "Unifying the character code of data in order to improve data reliability and storage efficiency",
        "Losslessly compressing data in order to improve access efficiency"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q27)",
      "images": [],
      "originalText": "Which of the following is an appropriate purpose of conducting data normalization when\na relational database is constructed?\na) Providing redundancy to data in order to detect data errors\nb) Eliminating data inconsistencies and duplications in order to make it easy to maintain\nand manage the data\nc) Unifying the character code of data in order to improve data reliability and storage\nefficiency\nd) Losslessly compressing data in order to improve access efficiency",
      "preferOriginal": false,
      "explanation": "Normalization reduces duplicated data and dependencies that cause inconsistent updates. This makes relational data easier to maintain without insertion, deletion or update anomalies."
    },
    {
      "number": 28,
      "text": "An “Employee” table and a “Department” table that are to be managed with a relational database were created on the basis of the conditions (i) through (v). Which of the following is the most appropriate primary key for the “Employee” table? [Conditions] (i) Each employee has one (1) employee number that is not duplicated. (ii) There can be employees with the same first name and family name. (iii) Each department has one (1) department code that is not duplicated. (iv) Each department has multiple employees. (v) Each employee belongs to only one (1) department. Employee EmployeeNumber EmployeeName DepartmentCode DateOfBirth Address Department DepartmentCode DepartmentName Location",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q28)",
      "images": [
        "questions/2025/q028-1.webp"
      ],
      "originalText": "An “Employee” table and a “Department” table that are to be managed with a relational\ndatabase were created on the basis of the conditions (i) through (v). Which of the following\nis the most appropriate primary key for the “Employee” table?\n[Conditions]\n(i) Each employee has one (1) employee number that is not duplicated.\n(ii) There can be employees with the same first name and family name.\n(iii) Each department has one (1) department code that is not duplicated.\n(iv) Each department has multiple employees.\n(v) Each employee belongs to only one (1) department.\nEmployee\nEmployeeNumber EmployeeName DepartmentCode DateOfBirth Address\nDepartment\nDepartmentCode DepartmentName Location\na) “EmployeeNumber”\nb) “EmployeeNumber” and “DepartmentCode”\nc) “EmployeeName”\nd) “DepartmentCode”",
      "preferOriginal": true,
      "explanation": "EmployeeNumber is unique for every employee, so it identifies a row. Names can be duplicated, and DepartmentCode is shared by multiple employees, so neither is an appropriate employee primary key."
    },
    {
      "number": 29,
      "text": "Which of the following is the appropriate description concerning transaction processing?",
      "choices": [
        "Commit is the reversion of a database to the status prior to the start of the transaction when a transaction is not processed successfully.",
        "Exclusive control is the confirmation of the content of a database when a transaction is processed successfully.",
        "Rollback ensures that there are no inconsistencies in data when multiple transactions attempt to update data simultaneously.",
        "Log is a file that records transaction history of a database."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q29)",
      "images": [],
      "originalText": "Which of the following is the appropriate description concerning transaction processing?\na) Commit is the reversion of a database to the status prior to the start of the transaction\nwhen a transaction is not processed successfully.\nb) Exclusive control is the confirmation of the content of a database when a transaction is\nprocessed successfully.\nc) Rollback ensures that there are no inconsistencies in data when multiple transactions\nattempt to update data simultaneously.\nd) Log is a file that records transaction history of a database.",
      "preferOriginal": false,
      "explanation": "A database log records the history of transaction operations. Such records support recovery and help restore consistency after failures."
    },
    {
      "number": 30,
      "text": "Three (3) PCs and an Internet-capable TV (television) set are to be connected to the Internet by using a hub and a router that has a firewall function. Which of the following is an appropriate connection that enables the firewall function of the router to be used for all the traffic between the devices and the Internet? Here, “FW” in each figure indicates the firewall function.",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q30)",
      "images": [
        "questions/2025/q030-1.webp"
      ],
      "originalText": "Three (3) PCs and an Internet-capable TV (television) set are to be connected to the\nInternet by using a hub and a router that has a firewall function. Which of the following is an\nappropriate connection that enables the firewall function of the router to be used for all the\ntraffic between the devices and the Internet? Here, “FW” in each figure indicates the firewall\nfunction.\na)\nb)\nc)\nd)",
      "preferOriginal": true,
      "explanation": "All devices must reach the Internet through the router's firewall. In option A, the local devices connect on the protected side, so their external traffic passes through the firewall."
    },
    {
      "number": 31,
      "text": "Which of the following is the appropriate role of a DNS in a network?",
      "choices": [
        "In response to a request from a client for the allocation of an IP address, it allocates an unused IP address from a pool of IP addresses.",
        "It receives a requests for file transfers from clients and transfers files to clients, and stores files that it receives from clients.",
        "It links domain names to IP addresses.",
        "It receives a request for retrieval from an e-mail recipient and transfers e-mail received by a mail server."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q31)",
      "images": [],
      "originalText": "Which of the following is the appropriate role of a DNS in a network?\na) In response to a request from a client for the allocation of an IP address, it allocates an\nunused IP address from a pool of IP addresses.\nb) It receives a requests for file transfers from clients and transfers files to clients, and\nstores files that it receives from clients.\nc) It links domain names to IP addresses.\nd) It receives a request for retrieval from an e-mail recipient and transfers e-mail received\nby a mail server.",
      "preferOriginal": false,
      "explanation": "DNS resolves domain names to IP addresses. This lets users refer to a host by its name while network communication uses the address."
    },
    {
      "number": 32,
      "text": "Which of the following is an appropriate example of an IPv4 IP address that is assigned to a PC?",
      "choices": [
        "00.00.11.aa.bb.cc",
        "050-1234-5678",
        "10.123.45.67",
        "http://www.example.co.jp/"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q32)",
      "images": [],
      "originalText": "Which of the following is an appropriate example of an IPv4 IP address that is assigned\nto a PC?\na) 00.00.11.aa.bb.cc b) 050-1234-5678\nc) 10.123.45.67 d) http://www.example.co.jp/",
      "preferOriginal": false,
      "explanation": "An IPv4 address consists of four decimal octets, each from 0 to 255. The address 10.123.45.67 follows that structure."
    },
    {
      "number": 33,
      "text": "Mr. A sent an e-mail to the three (3) people Mr. P, Mr. Q, and Mr. R. He entered Mr. P’s e-mail address in the To field, Mr. Q’s e-mail address in the CC field, and Mr. R’s e-mail address in the BCC field. Which of the following is the appropriate description concerning the three (3) recipients of the e-mail?",
      "choices": [
        "Mr. P and Mr. Q can see that the same e-mail was also sent to Mr. R.",
        "Mr. P cannot see that the same e-mail was also sent to Mr. Q.",
        "Mr. Q can see that the same e-mail was also sent to Mr. P.",
        "Mr. R cannot see that the same e-mail was also sent to Mr. P and Mr. Q."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q33)",
      "images": [],
      "originalText": "Mr. A sent an e-mail to the three (3) people Mr. P, Mr. Q, and Mr. R. He entered Mr. P’s\ne-mail address in the To field, Mr. Q’s e-mail address in the CC field, and Mr. R’s e-mail\naddress in the BCC field. Which of the following is the appropriate description concerning\nthe three (3) recipients of the e-mail?\na) Mr. P and Mr. Q can see that the same e-mail was also sent to Mr. R.\nb) Mr. P cannot see that the same e-mail was also sent to Mr. Q.\nc) Mr. Q can see that the same e-mail was also sent to Mr. P.\nd) Mr. R cannot see that the same e-mail was also sent to Mr. P and Mr. Q.",
      "preferOriginal": false,
      "explanation": "To and CC recipients are visible to the recipients of the message. BCC recipients are hidden, so the CC recipient can see the To recipient but not the hidden BCC recipient."
    },
    {
      "number": 34,
      "text": "Which of the following is a technology that is used to make voice calls over the Internet by two (2) parties using the same application on their smartphones or other devices?",
      "choices": [
        "MVNO",
        "NFC",
        "NTP",
        "VoIP"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q34)",
      "images": [],
      "originalText": "Which of the following is a technology that is used to make voice calls over the Internet\nby two (2) parties using the same application on their smartphones or other devices?\na) MVNO b) NFC c) NTP d) VoIP",
      "preferOriginal": false,
      "explanation": "Voice over IP, or VoIP, carries voice communication as data over an IP network. Applications that provide Internet voice calls use this technology."
    },
    {
      "number": 35,
      "text": "Among descriptions A through D concerning how to conduct information security education to employees, which of the following contains all and only the appropriate descriptions? A The re-education of one who has committed an information security breach includes preventive actions to avoid the same fault being repeated. B One way to conduct it is to incorporate it in a training program for new employees. C It is restricted to employees in the information systems department. D It is conducted after an incident or an accident concerning information security as well as on a regular basis.",
      "choices": [
        "A, B, D",
        "A, C, D",
        "A, D",
        "B, C"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q35)",
      "images": [],
      "originalText": "Among descriptions A through D concerning how to conduct information security\neducation to employees, which of the following contains all and only the appropriate\ndescriptions?\nA The re-education of one who has committed an information security breach includes\npreventive actions to avoid the same fault being repeated.\nB One way to conduct it is to incorporate it in a training program for new employees.\nC It is restricted to employees in the information systems department.\nD It is conducted after an incident or an accident concerning information security as\nwell as on a regular basis.\na) A, B, D b) A, C, D c) A, D d) B, C",
      "preferOriginal": false,
      "explanation": "Security education should include new employees, be repeated regularly and after incidents, and address prevention of repeated mistakes. Restricting it to the information systems department leaves other staff unprepared."
    },
    {
      "number": 36,
      "text": "Among the descriptions A through D of how to handle a contact list that includes customer names, addresses, and other information, which of the following contains all and only the appropriate descriptions in terms of personal information protection? A Even if a customer asks to check his/her own registration information, this cannot be disclosed on the grounds of information protection. B A list of all names and addresses is extracted from the contact list and is sent to all the customers to have them check for errors. C A CD-ROM that includes contact list data is to be shredded before it is discarded. D Contact list data is to be encrypted when it is stored in a file.",
      "choices": [
        "A, C, D",
        "A, D",
        "B, C",
        "C, D"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q36)",
      "images": [],
      "originalText": "Among the descriptions A through D of how to handle a contact list that includes\ncustomer names, addresses, and other information, which of the following contains all and\nonly the appropriate descriptions in terms of personal information protection?\nA Even if a customer asks to check his/her own registration information, this cannot be\ndisclosed on the grounds of information protection.\nB A list of all names and addresses is extracted from the contact list and is sent to all the\ncustomers to have them check for errors.\nC A CD-ROM that includes contact list data is to be shredded before it is discarded.\nD Contact list data is to be encrypted when it is stored in a file.\na) A, C, D b) A, D c) B, C d) C, D",
      "preferOriginal": false,
      "explanation": "Destroying discarded media and encrypting stored customer information reduce leakage risk. Sending the complete customer list to every customer would disclose other people's information."
    },
    {
      "number": 37,
      "text": "Among the threats and vulnerabilities in information security, which of the following is a vulnerability?",
      "choices": [
        "Computer virus",
        "Social engineering",
        "Tapping of communications data",
        "Inappropriate password management"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q37)",
      "images": [],
      "originalText": "Among the threats and vulnerabilities in information security, which of the following is a\nvulnerability?\na) Computer virus b) Social engineering\nc) Tapping of communications data d) Inappropriate password management",
      "preferOriginal": false,
      "explanation": "A vulnerability is a weakness that can be exploited. Inappropriate password management is such a weakness; an attack or damaging event is a threat rather than the vulnerability itself."
    },
    {
      "number": 38,
      "text": "Which of the following is an appropriate disposal method for media that stores confidential information to ensure that information leakage does not occur?",
      "choices": [
        "CDs and DVDs are destroyed and then are disposed of.",
        "A PC is disposed of with its CPU being destroyed.",
        "USB memory is disposed of with its files and folders being deleted.",
        "Paper documentation is not reused as memo paper and is sealed in a confidential envelope and then is disposed of together with general trash."
      ],
      "answer": 0,
      "source": "(2025S, IP, Q38)",
      "images": [],
      "originalText": "Which of the following is an appropriate disposal method for media that stores\nconfidential information to ensure that information leakage does not occur?\na) CDs and DVDs are destroyed and then are disposed of.\nb) A PC is disposed of with its CPU being destroyed.\nc) USB memory is disposed of with its files and folders being deleted.\nd) Paper documentation is not reused as memo paper and is sealed in a confidential\nenvelope and then is disposed of together with general trash.",
      "preferOriginal": false,
      "explanation": "Physically destroying a CD or DVD prevents its confidential contents from being read from the discarded medium. Merely deleting a file name does not reliably remove stored data."
    },
    {
      "number": 39,
      "text": "Which of the following is a term for software that encrypts files on a computer in order to make them unusable, and demands money or other valuables in exchange for the decryption key?",
      "choices": [
        "Keylogger",
        "Ransomware",
        "Rootkit",
        "Worm"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q39)",
      "images": [],
      "originalText": "Which of the following is a term for software that encrypts files on a computer in order\nto make them unusable, and demands money or other valuables in exchange for the\ndecryption key?\na) Keylogger b) Ransomware\nc) Rootkit d) Worm",
      "preferOriginal": false,
      "explanation": "Ransomware blocks access to data, commonly by encryption, and demands a ransom for restoring access. The described demand for a decryption key matches ransomware."
    },
    {
      "number": 40,
      "text": "Which of the following is an appropriate example of biometric authentication?",
      "choices": [
        "Authentication with a fingerprint",
        "Authentication with a digital certificate",
        "Authentication with a personal ID card",
        "Authentication with a one-time password"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q40)",
      "images": [],
      "originalText": "Which of the following is an appropriate example of biometric authentication?\na) Authentication with a fingerprint\nb) Authentication with a digital certificate\nc) Authentication with a personal ID card\nd) Authentication with a one-time password",
      "preferOriginal": false,
      "explanation": "A fingerprint is a physical characteristic of the person being authenticated. Authentication using such characteristics is biometric authentication."
    },
    {
      "number": 41,
      "text": "During the use of a PC in workplace, a message was displayed stating that antivirus software had detected a virus. Which of the following is an appropriate action that should be taken immediately?",
      "choices": [
        "Reboot of the PC",
        "Notification to the workplace by e-mail from the PC",
        "Disconnection of the PC from networks",
        "Backup of files on the PC"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q41)",
      "images": [],
      "originalText": "During the use of a PC in workplace, a message was displayed stating that antivirus\nsoftware had detected a virus. Which of the following is an appropriate action that should be\ntaken immediately?\na) Reboot of the PC\nb) Notification to the workplace by e-mail from the PC\nc) Disconnection of the PC from networks\nd) Backup of files on the PC",
      "preferOriginal": false,
      "explanation": "Disconnecting the affected PC from networks helps contain the infection and prevent spread or data transmission. The incident should then be handled through the organization's response procedures."
    },
    {
      "number": 42,
      "text": "There is an IoT system that is composed of IoT devices and an IoT server that manages them. Which of the following is the appropriate combination of information security incidents (i) through (iii) in this system, and confidentiality, integrity, and availability that are compromised because of the incidents? [Incident] (i) An IoT device stopped working because its battery ran out. (ii) Communication between the IoT devices and the IoT server was not encrypted, so an information leakage occurred. (iii) Incorrect data was recorded because of a system fault. (i) (ii) (iii)",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q42)",
      "images": [
        "questions/2025/q042-1.webp"
      ],
      "originalText": "There is an IoT system that is composed of IoT devices and an IoT server that manages\nthem. Which of the following is the appropriate combination of information security incidents\n(i) through (iii) in this system, and confidentiality, integrity, and availability that are\ncompromised because of the incidents?\n[Incident]\n(i) An IoT device stopped working because its battery ran out.\n(ii) Communication between the IoT devices and the IoT server was not encrypted, so an\ninformation leakage occurred.\n(iii) Incorrect data was recorded because of a system fault.\n(i) (ii) (iii)\na) Availability Integrity Confidentiality\nb) Availability Confidentiality Integrity\nc) Integrity Availability Confidentiality\nd) Confidentiality Availability Integrity",
      "preferOriginal": true,
      "explanation": "A stopped device harms availability, leaked communication harms confidentiality, and incorrectly recorded data harms integrity. This produces the order Availability, Confidentiality, Integrity."
    },
    {
      "number": 43,
      "text": "In the activities of an organization that runs an ISMS on the basis of the PDCA cycle, improvements and corrective measures are decided from the results of monitoring of the risk management activities and other such information. In which process of the PDCA cycle is this activity performed?",
      "choices": [
        "P",
        "D",
        "C",
        "A"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q43)",
      "images": [],
      "originalText": "In the activities of an organization that runs an ISMS on the basis of the PDCA cycle,\nimprovements and corrective measures are decided from the results of monitoring of the risk\nmanagement activities and other such information. In which process of the PDCA cycle is\nthis activity performed?\na) P b) D c) C d) A",
      "preferOriginal": false,
      "explanation": "Act is the PDCA stage where monitoring findings are used to decide corrective actions and improvements. Check evaluates the results; Act responds to those findings."
    },
    {
      "number": 44,
      "text": "When risk treatment in risk management for information security is divided into the four (4) categories of risk avoidance, risk sharing, risk mitigation, and risk retention, which of the following is the appropriate explanation of risk sharing?",
      "choices": [
        "Halting activities that involve risk and fundamentally eliminating risk factors, for example, by not handling personal information",
        "Implementing measures to reduce the probability of risk occurrence and reduce damage, such as distributing a data center over multiple locations that are geographically far away from each other in preparation for a disaster",
        "Reducing damage that may occur when a risk materializes by transferring or distributing risk to a separate organization on the basis of an agreement, such as the purchasing of an insurance policy",
        "If the probability of risk occurrence or the damage in the event of occurrence is considered to be small, recognizing the risk, and then accepting it without taking any particular measures"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q44)",
      "images": [],
      "originalText": "When risk treatment in risk management for information security is divided into the four\n(4) categories of risk avoidance, risk sharing, risk mitigation, and risk retention, which of the\nfollowing is the appropriate explanation of risk sharing?\na) Halting activities that involve risk and fundamentally eliminating risk factors, for\nexample, by not handling personal information\nb) Implementing measures to reduce the probability of risk occurrence and reduce damage,\nsuch as distributing a data center over multiple locations that are geographically far\naway from each other in preparation for a disaster\nc) Reducing damage that may occur when a risk materializes by transferring or distributing\nrisk to a separate organization on the basis of an agreement, such as the purchasing of an\ninsurance policy\nd) If the probability of risk occurrence or the damage in the event of occurrence is\nconsidered to be small, recognizing the risk, and then accepting it without taking any\nparticular measures",
      "preferOriginal": false,
      "explanation": "Risk sharing distributes some financial consequences to another party through an agreement. Insurance is a common example, although it does not eliminate the underlying risk."
    },
    {
      "number": 45,
      "text": "Which of the following is an appropriate description concerning user authentication of a system?",
      "choices": [
        "A mechanism that achieves login to multiple servers, applications, and other such things with a single authentication is called challenge-response authentication.",
        "A mechanism that authenticates a user by using fingerprints, voice prints, and other characteristics of a body is called single sign-on.",
        "A code number that is used in order to authenticate a user of an information system is called a PIN.",
        "A method where, instead of the order of specific numbers or characters, the positions in a grid are memorized, and during authentication, a person enters the numbers and characters in the positions that he/she remembers in a grid that is displayed on the screen is called multi-factor authentication."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q45)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning user authentication of a\nsystem?\na) A mechanism that achieves login to multiple servers, applications, and other such things\nwith a single authentication is called challenge-response authentication.\nb) A mechanism that authenticates a user by using fingerprints, voice prints, and other\ncharacteristics of a body is called single sign-on.\nc) A code number that is used in order to authenticate a user of an information system is\ncalled a PIN.\nd) A method where, instead of the order of specific numbers or characters, the positions in\na grid are memorized, and during authentication, a person enters the numbers and\ncharacters in the positions that he/she remembers in a grid that is displayed on the screen\nis called multi-factor authentication.",
      "preferOriginal": false,
      "explanation": "A personal identification number, or PIN, is a code used as an authentication secret. The statement correctly identifies a PIN's role in authenticating a user."
    },
    {
      "number": 46,
      "text": "Mr. A, a participant in system testing, has no access to the design of the internal structure of the system or software and prepares input data and output data to be used in verification of the transaction functions commonly used in the department. Which of the following is the testing technique that Mr. A is going to implement?",
      "choices": [
        "Inspection",
        "Walk-through",
        "Black-box testing",
        "White-box testing"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q46)",
      "images": [],
      "originalText": "Mr. A, a participant in system testing, has no access to the design of the internal structure\nof the system or software and prepares input data and output data to be used in verification\nof the transaction functions commonly used in the department. Which of the following is the\ntesting technique that Mr. A is going to implement?\na) Inspection b) Walk-through\nc) Black-box testing d) White-box testing",
      "preferOriginal": false,
      "explanation": "Black-box testing checks inputs and expected outputs without relying on knowledge of the internal design. That matches the tester's access and the proposed test data."
    },
    {
      "number": 47,
      "text": "The processes of system development include system requirements definition, systems architecture design, system integration testing, and software acceptance. Which of the following is an activity that is performed in system requirements definition?",
      "choices": [
        "The party to which development is outsourced uses the software under the same conditions as the actual production environment in order to determine if it runs correctly.",
        "A system test plan is created, and a test environment is prepared.",
        "The functions and performance required of the system are clarified.",
        "A program is created and test results are reviewed according to the evaluation criteria."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q47)",
      "images": [],
      "originalText": "The processes of system development include system requirements definition, systems\narchitecture design, system integration testing, and software acceptance. Which of the\nfollowing is an activity that is performed in system requirements definition?\na) The party to which development is outsourced uses the software under the same\nconditions as the actual production environment in order to determine if it runs correctly.\nb) A system test plan is created, and a test environment is prepared.\nc) The functions and performance required of the system are clarified.\nd) A program is created and test results are reviewed according to the evaluation criteria.",
      "preferOriginal": false,
      "explanation": "Requirements definition clarifies the functions and performance that the system must provide. Architecture design and integration testing occur after these needs have been defined."
    },
    {
      "number": 48,
      "text": "What is the term for revising and changing programs after system development?",
      "choices": [
        "Computerization planning",
        "System operation",
        "Software maintenance",
        "Requirements definition"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q48)",
      "images": [],
      "originalText": "What is the term for revising and changing programs after system development?\na) Computerization planning b) System operation\nc) Software maintenance d) Requirements definition",
      "preferOriginal": false,
      "explanation": "Software maintenance covers changes and corrections made to software after its initial development. This includes fixing faults and adapting it to changed needs."
    },
    {
      "number": 49,
      "text": "Which of the following is the most appropriate description concerning the usability of RPA software when the quality characteristics of software are classified into portability, functional suitability, compatibility, usability, reliability, performance efficiency, security, and maintainability?",
      "choices": [
        "It operates even if the OS of the PC that RPA runs on changes.",
        "Automatic processing is executed at the time and on the conditions that are specified with RPA.",
        "Even if the version of the application software that is the subject of operation by RPA is upgraded, RPA will work with a simple change of the settings.",
        "People who have never used RPA can use it with only simple education."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q49)",
      "images": [],
      "originalText": "Which of the following is the most appropriate description concerning the usability of\nRPA software when the quality characteristics of software are classified into portability,\nfunctional suitability, compatibility, usability, reliability, performance efficiency, security,\nand maintainability?\na) It operates even if the OS of the PC that RPA runs on changes.\nb) Automatic processing is executed at the time and on the conditions that are specified\nwith RPA.\nc) Even if the version of the application software that is the subject of operation by RPA is\nupgraded, RPA will work with a simple change of the settings.\nd) People who have never used RPA can use it with only simple education.",
      "preferOriginal": false,
      "explanation": "Usability concerns how easily intended users can learn and operate software. Being usable after only simple training is evidence of good usability."
    },
    {
      "number": 50,
      "text": "Which of the following is the most appropriate case example of DevOps in software development?",
      "choices": [
        "The developer prepares a prototype of important functions, and evaluates its adequacy by measuring the performance together with the customer.",
        "The developer moves on to the next development phase only after it is judged that the current phase is complete, and handovers the system to the operation side only after the system test where users participating in a system test confirm the operability.",
        "The developer and the operator work in close cooperation and quickly proceed with the implementation and update of functions, etc., by using automation tools and other such tools.",
        "The programs are added one by one while fixed short-period cycles are repeated in order to expand the functions in the development of a system."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q50)",
      "images": [],
      "originalText": "Which of the following is the most appropriate case example of DevOps in software\ndevelopment?\na) The developer prepares a prototype of important functions, and evaluates its adequacy\nby measuring the performance together with the customer.\nb) The developer moves on to the next development phase only after it is judged that the\ncurrent phase is complete, and handovers the system to the operation side only after the\nsystem test where users participating in a system test confirm the operability.\nc) The developer and the operator work in close cooperation and quickly proceed with the\nimplementation and update of functions, etc., by using automation tools and other such\ntools.\nd) The programs are added one by one while fixed short-period cycles are repeated in order\nto expand the functions in the development of a system.",
      "preferOriginal": false,
      "explanation": "DevOps combines close collaboration between development and operations with practices such as automation. This supports quicker, more reliable releases and updates."
    },
    {
      "number": 51,
      "text": "A system development project has more defects than the quality targets. In order to clarify the issues to prioritize for resolution, the number of defects for each cause is to be investigated and shown with a chart. Which of the following is an appropriate chart to use?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q51)",
      "images": [
        "questions/2025/q051-1.webp"
      ],
      "originalText": "A system development project has more defects than the quality targets. In order to clarify\nthe issues to prioritize for resolution, the number of defects for each cause is to be\ninvestigated and shown with a chart. Which of the following is an appropriate chart to use?\na) b)\nc) d)",
      "preferOriginal": true,
      "explanation": "A Pareto chart ranks defect causes by frequency and shows their cumulative contribution. This helps the team identify the few causes that account for a large share of defects."
    },
    {
      "number": 52,
      "text": "A system development project at a company is becoming delayed. In order to resolve the delay, the project leader proposes to project members that part of the planned work procedure be omitted. The project members are divided into those who think that this cannot be avoided and those who are opposed because the quality will decrease. From the perspective of ensuring quality in a project, which of the following is the most appropriate action for a project leader to take?",
      "choices": [
        "Discussing detailed measures against decrease in quality within the project, and building consensus as a project",
        "Deciding whether to accept or reject a proposal with a majority decision by highly skilled people from among the project members",
        "Proceeding as he/she proposed because he/she has the most experience",
        "Replacing project members who cannot agree with his/her proposal"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q52)",
      "images": [],
      "originalText": "A system development project at a company is becoming delayed. In order to resolve the\ndelay, the project leader proposes to project members that part of the planned work procedure\nbe omitted. The project members are divided into those who think that this cannot be avoided\nand those who are opposed because the quality will decrease. From the perspective of\nensuring quality in a project, which of the following is the most appropriate action for a\nproject leader to take?\na) Discussing detailed measures against decrease in quality within the project, and building\nconsensus as a project\nb) Deciding whether to accept or reject a proposal with a majority decision by highly\nskilled people from among the project members\nc) Proceeding as he/she proposed because he/she has the most experience\nd) Replacing project members who cannot agree with his/her proposal",
      "preferOriginal": false,
      "explanation": "The project leader should assess the quality impact and agree on concrete countermeasures with the team. Omitting planned work without this discussion would leave the quality risk unmanaged."
    },
    {
      "number": 53,
      "text": "In an arrow diagram that shows system development, if activities A and D are delayed for three (3) days in total, what is the delay in the entire project? A D 2 4 B E Legend 4 3 Activity C F name 7 1 Required days",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q53)",
      "images": [
        "questions/2025/q053-1.webp"
      ],
      "originalText": "In an arrow diagram that shows system development, if activities A and D are delayed\nfor three (3) days in total, what is the delay in the entire project?\nA D\n2 4\nB E Legend\n4 3 Activity\nC F name\n7 1\nRequired\ndays\na) 1 b) 2 c) 3 d) 4",
      "preferOriginal": true,
      "explanation": "The original longest route takes 8 days, while the route containing A and D takes 6. Delaying A and D by 3 days makes their route 9 days, so project completion is delayed by 1 day.",
      "equation": "Original longest route = 8 days\nDelayed A–D route = 6 + 3 = 9 days\nProject delay = 9 − 8 = 1 day"
    },
    {
      "number": 54,
      "text": "In a project team that is required to communicate information on a one-to-one basis, when the members increase from six (6) people to ten (10) people, by how many times does the number of paths that are required for communicating information increase?",
      "choices": [
        "1.5",
        "2.5",
        "3",
        "6"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q54)",
      "images": [],
      "originalText": "In a project team that is required to communicate information on a one-to-one basis, when\nthe members increase from six (6) people to ten (10) people, by how many times does the\nnumber of paths that are required for communicating information increase?\na) 1.5 b) 2.5 c) 3 d) 6",
      "preferOriginal": false,
      "explanation": "For n members, one-to-one communication paths equal n(n − 1)/2. Six members have 15 paths and ten have 45, so the number of paths becomes three times as large.",
      "steps": [
        "6 members: 6 × 5 ÷ 2 = 15 pairs.",
        "10 members: 10 × 9 ÷ 2 = 45 pairs."
      ],
      "equation": "45 ÷ 15 = 3 times"
    },
    {
      "number": 55,
      "text": "Which of the following is a method that organizes all of the activities to be performed in the project in a hierarchical structure?",
      "choices": [
        "CRM",
        "ERP",
        "PPM",
        "WBS"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q55)",
      "images": [],
      "originalText": "Which of the following is a method that organizes all of the activities to be performed in\nthe project in a hierarchical structure?\na) CRM b) ERP c) PPM d) WBS",
      "preferOriginal": false,
      "explanation": "A work breakdown structure, or WBS, decomposes all project work into a hierarchy of smaller work packages. It organizes the work required to complete the project."
    },
    {
      "number": 56,
      "text": "When a system development project is started, it is foreseen that the progress of the project may be affected by a large number of change requests for specification that come from users during the course of development. Which of the following is the most appropriate measure for ensuring that there is no deterioration in quality or delay in delivery date?",
      "choices": [
        "Declaring to the customer that change requests cannot be accepted after the completion of design",
        "Shortening the test period by skipping tests when a delay occurs during the course of the project",
        "Including in the plan that the implementation of a function will be called off if there are a large number of change requests",
        "Reaching an agreement with the customer on what can be accepted as change requests and how to determine the priority of the accepted change requests"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q56)",
      "images": [],
      "originalText": "When a system development project is started, it is foreseen that the progress of the\nproject may be affected by a large number of change requests for specification that come from\nusers during the course of development. Which of the following is the most appropriate\nmeasure for ensuring that there is no deterioration in quality or delay in delivery date?\na) Declaring to the customer that change requests cannot be accepted after the completion\nof design\nb) Shortening the test period by skipping tests when a delay occurs during the course of the\nproject\nc) Including in the plan that the implementation of a function will be called off if there are\na large number of change requests\nd) Reaching an agreement with the customer on what can be accepted as change requests\nand how to determine the priority of the accepted change requests",
      "preferOriginal": false,
      "explanation": "Agreeing on acceptance rules and priorities for changes provides a controlled way to assess requests. This helps the team protect quality and delivery commitments while handling necessary changes."
    },
    {
      "number": 57,
      "text": "The processes of project management include project cost management, project communications management, project resources management, project schedule management, and the like. In a system development project, which of the following is the most appropriate activity in project cost management when members are added for implementing a test?",
      "choices": [
        "Updating the mailing list, etc. so that information can be efficiently transmitted to the newly participating members",
        "Requesting a vendor to provide training on the testing tool to the newly participating members",
        "Adding tasks to be handled by the newly participating members, and changing the schedule",
        "Estimating the personnel expenses of the newly participating members, and changing the plan"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q57)",
      "images": [],
      "originalText": "The processes of project management include project cost management, project\ncommunications management, project resources management, project schedule management,\nand the like. In a system development project, which of the following is the most appropriate\nactivity in project cost management when members are added for implementing a test?\na) Updating the mailing list, etc. so that information can be efficiently transmitted to the\nnewly participating members\nb) Requesting a vendor to provide training on the testing tool to the newly participating\nmembers\nc) Adding tasks to be handled by the newly participating members, and changing the\nschedule\nd) Estimating the personnel expenses of the newly participating members, and changing the\nplan",
      "preferOriginal": false,
      "explanation": "Adding members changes labor expenses. Estimating those expenses and updating the cost plan is a project cost management activity."
    },
    {
      "number": 58,
      "text": "Which of the following is an appropriate purpose for facility management concerning IT systems?",
      "choices": [
        "Optimization of IT service cost",
        "Continuation of a company’s business in the event of a disaster, etc.",
        "Ensuring appropriate security for information assets",
        "Overall maintenance of facilities and the environment for information processing"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q58)",
      "images": [],
      "originalText": "Which of the following is an appropriate purpose for facility management concerning IT\nsystems?\na) Optimization of IT service cost\nb) Continuation of a company’s business in the event of a disaster, etc.\nc) Ensuring appropriate security for information assets\nd) Overall maintenance of facilities and the environment for information processing",
      "preferOriginal": false,
      "explanation": "IT facility management maintains the physical facilities and operating environment used for information processing. It includes conditions such as power, cooling and equipment accommodation."
    },
    {
      "number": 59,
      "text": "Which of the following is the most appropriate activities of a service desk?",
      "choices": [
        "Eliminating the root cause of an incident and preventing the recurrence of the incident",
        "Installing updated software in order to prevent the recurrence of an incident",
        "Performing centralized management of changes in a service",
        "Handling and recording inquiries from users"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q59)",
      "images": [],
      "originalText": "Which of the following is the most appropriate activities of a service desk?\na) Eliminating the root cause of an incident and preventing the recurrence of the incident\nb) Installing updated software in order to prevent the recurrence of an incident\nc) Performing centralized management of changes in a service\nd) Handling and recording inquiries from users",
      "preferOriginal": false,
      "explanation": "The service desk is a contact point for users. Receiving, recording and coordinating user inquiries is a central service desk activity."
    },
    {
      "number": 60,
      "text": "Which of the following is the most appropriate interface that responds to the query from a user in an interactive and automated manner?",
      "choices": [
        "Recommendation",
        "Chatbot",
        "Escalation",
        "FAQs"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q60)",
      "images": [],
      "originalText": "Which of the following is the most appropriate interface that responds to the query from\na user in an interactive and automated manner?\na) Recommendation b) Chatbot\nc) Escalation d) FAQs",
      "preferOriginal": false,
      "explanation": "A chatbot responds to user messages through an automated conversational interface. It is suited to interactive handling of common queries."
    },
    {
      "number": 61,
      "text": "In the PDCA cycle of service level management, which of the following is implemented as C (Check)?",
      "choices": [
        "Providing services on the basis of the SLA",
        "Preparing a service improvement plan on the basis of the service report and its review results",
        "Agreeing upon the desired service quality on the basis of the service requirements and the service improvement plan, and preparing an SLA",
        "Monitoring and measuring the provided services, and preparing a service report"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q61)",
      "images": [],
      "originalText": "In the PDCA cycle of service level management, which of the following is implemented\nas C (Check)?\na) Providing services on the basis of the SLA\nb) Preparing a service improvement plan on the basis of the service report and its review\nresults\nc) Agreeing upon the desired service quality on the basis of the service requirements and\nthe service improvement plan, and preparing an SLA\nd) Monitoring and measuring the provided services, and preparing a service report",
      "preferOriginal": false,
      "explanation": "Check involves monitoring and measuring the service and comparing performance with targets. A service report records the results of that evaluation."
    },
    {
      "number": 62,
      "text": "Which of the following is the appropriate combination of IT service management and the content of the SLA for a hosting service A through C below? A: The time that a server is operational B: The time taken until a specified member of staff is notified after it is detected that the amount of free space on a disk has reached a set threshold C: The time taken until a specified member of staff is notified after an unauthorized access is detected Service availability Capacity Information security management management management",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q62)",
      "images": [
        "questions/2025/q062-1.webp"
      ],
      "originalText": "Which of the following is the appropriate combination of IT service management and the\ncontent of the SLA for a hosting service A through C below?\nA: The time that a server is operational\nB: The time taken until a specified member of staff is notified after it is detected that the\namount of free space on a disk has reached a set threshold\nC: The time taken until a specified member of staff is notified after an unauthorized\naccess is detected\nService availability Capacity Information security\nmanagement management management\na) A B C\nb) A C B\nc) B A C\nd) C B A",
      "preferOriginal": true,
      "explanation": "Server operating time is an availability measure. Notification about low disk space relates to capacity management, while notification about unauthorized access relates to information security management."
    },
    {
      "number": 63,
      "text": "In a company, which of the following is responsible for the establishment of IT governance?",
      "choices": [
        "Shareholders",
        "Management",
        "System auditor",
        "Head of the systems department"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q63)",
      "images": [],
      "originalText": "In a company, which of the following is responsible for the establishment of IT\ngovernance?\na) Shareholders b) Management\nc) System auditor d) Head of the systems department",
      "preferOriginal": false,
      "explanation": "Management establishes IT governance because it is accountable for direction, oversight and alignment of IT with organizational objectives."
    },
    {
      "number": 64,
      "text": "A food manufacturer is conducting business in accordance with food industry safety standards. As the safety standards are revised, the internal standards of the company are also revised accordingly. Which of the following objectives of internal control corresponds to this action?",
      "choices": [
        "Effectiveness and efficiency of business",
        "Reliability of financial reporting",
        "Compliance with laws and regulations that are related to business operations",
        "Protection of assets"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q64)",
      "images": [],
      "originalText": "A food manufacturer is conducting business in accordance with food industry safety\nstandards. As the safety standards are revised, the internal standards of the company are also\nrevised accordingly. Which of the following objectives of internal control corresponds to this\naction?\na) Effectiveness and efficiency of business\nb) Reliability of financial reporting\nc) Compliance with laws and regulations that are related to business operations\nd) Protection of assets",
      "preferOriginal": false,
      "explanation": "Revising internal standards to meet revised industry safety requirements supports compliance with applicable laws, regulations and standards. That is the relevant internal control objective."
    },
    {
      "number": 65,
      "text": "Which of the following is the most appropriate objective of an accounting audit?",
      "choices": [
        "To check that risks are controlled concerning the accounting system and other such IT, and IT governance is implemented",
        "To check that risk management is implemented effectively concerning information security, including the method of use of the PCs that the accounting department possesses",
        "To check that various kinds of work including accounting service within an organization are implemented rationally and efficiently according to the policy of the organization",
        "To check that processing is performed without impropriety or errors, from the occurrence of various everyday transactions to aggregation into a financial report"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q65)",
      "images": [],
      "originalText": "Which of the following is the most appropriate objective of an accounting audit?\na) To check that risks are controlled concerning the accounting system and other such IT,\nand IT governance is implemented\nb) To check that risk management is implemented effectively concerning information\nsecurity, including the method of use of the PCs that the accounting department\npossesses\nc) To check that various kinds of work including accounting service within an organization\nare implemented rationally and efficiently according to the policy of the organization\nd) To check that processing is performed without impropriety or errors, from the\noccurrence of various everyday transactions to aggregation into a financial report",
      "preferOriginal": false,
      "explanation": "An accounting audit examines whether transactions and financial reporting are free from material errors or impropriety. It checks the reliability of the accounting process and its results."
    },
    {
      "number": 66,
      "text": "Which of the following is an appropriate way to brainstorm?",
      "choices": [
        "Asking participants to present feasible ideas and refrain from generating unrestrained ideas",
        "Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea",
        "Proceeding with the session while selecting the ideas that are suitable to the theme",
        "Encouraging the criticism of ideas to pursue quality rather than quantity of ideas"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q66)",
      "images": [],
      "originalText": "Which of the following is an appropriate way to brainstorm?\na) Asking participants to present feasible ideas and refrain from generating unrestrained\nideas\nb) Proceeding with the session without blaming any member who creates an improved idea\nthat takes advantage of another member’s idea\nc) Proceeding with the session while selecting the ideas that are suitable to the theme\nd) Encouraging the criticism of ideas to pursue quality rather than quantity of ideas",
      "preferOriginal": false,
      "explanation": "Brainstorming encourages participants to build on one another's ideas without criticism during idea generation. This creates more possibilities before the ideas are evaluated."
    },
    {
      "number": 67,
      "text": "A certain product’s sales plan and sales result are shown in the table below. What is the ratio in percentage of the profit result to the profit plan? Here, the decimal fractions of the ratio are truncated. Sales result / Sales plan Sales result sales plan (X) (Y) (Y/X) Purchase price (p) 1,000 yen 1,000 yen 100% Number of purchases (q) 1,000 pieces 1,100 pieces 110% Sale price (r) 1,500 yen 1,350 yen 90% Number of sales (s) 1,000 pieces 1,100 pieces 110% Profit (t = r × s - p × q) 500,000 yen Note: The shaded section is not shown.",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q67)",
      "images": [
        "questions/2025/q067-1.webp"
      ],
      "originalText": "A certain product’s sales plan and sales result are shown in the table below. What is the\nratio in percentage of the profit result to the profit plan? Here, the decimal fractions of the\nratio are truncated.\nSales result /\nSales plan Sales result\nsales plan\n(X) (Y)\n(Y/X)\nPurchase price (p) 1,000 yen 1,000 yen 100%\nNumber of purchases (q) 1,000 pieces 1,100 pieces 110%\nSale price (r) 1,500 yen 1,350 yen 90%\nNumber of sales (s) 1,000 pieces 1,100 pieces 110%\nProfit (t = r × s - p × q) 500,000 yen\nNote: The shaded section is not shown.\na) 77 b) 99 c) 110 d) 129",
      "preferOriginal": true,
      "explanation": "Actual revenue is 1,350 × 1,100 = 1,485,000 yen and purchase cost is 1,000 × 1,100 = 1,100,000 yen. Actual profit is 385,000 yen, so 385,000 ÷ 500,000 × 100 = 77%.",
      "equation": "Actual profit = (1,350 × 1,100) − (1,000 × 1,100)\n              = 385,000 yen\nPlan ratio = 385,000 ÷ 500,000 × 100 = 77%"
    },
    {
      "number": 68,
      "text": "If risk assessment is divided into three (3) processes, which of the following is the third process besides risk identification and risk evaluation?",
      "choices": [
        "Risk transfer",
        "Risk avoidance",
        "Risk reduction",
        "Risk analysis"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q68)",
      "images": [],
      "originalText": "If risk assessment is divided into three (3) processes, which of the following is the third\nprocess besides risk identification and risk evaluation?\na) Risk transfer b) Risk avoidance\nc) Risk reduction d) Risk analysis",
      "preferOriginal": false,
      "explanation": "Risk assessment consists of risk identification, risk analysis and risk evaluation. Analysis studies likelihood and consequences before risks are evaluated against criteria."
    },
    {
      "number": 69,
      "text": "Which of the following is the most appropriate term that describes the case below? “In order to achieve continuous growth, a company withdraws from business area A with stagnant sales, and puts the management resources into strengthening business area B.”",
      "choices": [
        "Business environment",
        "Business strategy",
        "Management vision",
        "Management philosophy"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q69)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term that describes the case below?\n“In order to achieve continuous growth, a company withdraws from business area A with\nstagnant sales, and puts the management resources into strengthening business area B.”\na) Business environment b) Business strategy\nc) Management vision d) Management philosophy",
      "preferOriginal": false,
      "explanation": "Withdrawing from one business and reallocating resources to another determines where and how the company will compete. This is a business strategy decision."
    },
    {
      "number": 70,
      "text": "Which of the following is an expression that calculates operating profit?",
      "choices": [
        "(Gross profit) − (Selling, general, and administrative expense)",
        "(Sales) − (Cost of sales)",
        "(Current profits) + (Extraordinary profit) − (Extraordinary loss)",
        "(Current net profit before tax) − (Corporate tax, residential tax, and business tax)"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q70)",
      "images": [],
      "originalText": "Which of the following is an expression that calculates operating profit?\na) (Gross profit) − (Selling, general, and administrative expense)\nb) (Sales) − (Cost of sales)\nc) (Current profits) + (Extraordinary profit) − (Extraordinary loss)\nd) (Current net profit before tax) − (Corporate tax, residential tax, and business tax)",
      "preferOriginal": false,
      "explanation": "Operating profit subtracts selling, general and administrative expenses from gross profit. Gross profit is the amount left after deducting the cost of sales from revenue."
    },
    {
      "number": 71,
      "text": "In order to improve the customer service level of a call center, the complaints received from customers concerning the response of the call center are classified and tabulated. Which of the following is a chart suitable for displaying the number of complaints in a bar chart and the cumulative percentage in a line chart, in descending order of complaints, for determining the priority of improvement?",
      "choices": [
        "PERT chart",
        "Control chart",
        "Cause and effect diagram",
        "Pareto chart"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q71)",
      "images": [],
      "originalText": "In order to improve the customer service level of a call center, the complaints received\nfrom customers concerning the response of the call center are classified and tabulated. Which\nof the following is a chart suitable for displaying the number of complaints in a bar chart and\nthe cumulative percentage in a line chart, in descending order of complaints, for determining\nthe priority of improvement?\na) PERT chart b) Control chart\nc) Cause and effect diagram d) Pareto chart",
      "preferOriginal": false,
      "explanation": "A Pareto chart displays categories as bars in descending order and the cumulative percentage as a line. This makes it useful for prioritizing complaint reduction."
    },
    {
      "number": 72,
      "text": "Which of the following is a role that has direct responsibility for technology management, such as the creation of a technology strategy and the promotion of technology development?",
      "choices": [
        "CEO",
        "CFO",
        "COO",
        "CTO"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q72)",
      "images": [],
      "originalText": "Which of the following is a role that has direct responsibility for technology management,\nsuch as the creation of a technology strategy and the promotion of technology development?\na) CEO b) CFO c) COO d) CTO",
      "preferOriginal": false,
      "explanation": "The chief technology officer, or CTO, is responsible for technology direction, strategy and development. That matches the responsibility described in the question."
    },
    {
      "number": 73,
      "text": "Which of the following is a corporate activity of compliance promotion?",
      "choices": [
        "A mechanism for sharing sales people’s sales know-how, customer information, and negotiation information in the sales department is implemented to improve sales productivity.",
        "A mechanism for sharing customer information and purchasing history among all departments that come into contact with customers is implemented to increase customer satisfaction.",
        "Schedules, documents, messages, and meeting room reservation status are shared with groups such as departments and projects in order to prevent loss of communication.",
        "A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q73)",
      "images": [],
      "originalText": "Which of the following is a corporate activity of compliance promotion?\na) A mechanism for sharing sales people’s sales know-how, customer information, and\nnegotiation information in the sales department is implemented to improve sales\nproductivity.\nb) A mechanism for sharing customer information and purchasing history among all\ndepartments that come into contact with customers is implemented to increase customer\nsatisfaction.\nc) Schedules, documents, messages, and meeting room reservation status are shared with\ngroups such as departments and projects in order to prevent loss of communication.\nd) A code of conduct or a conduct manual based on corporate ethics that aims to follow the\nlaw is created, and ethical education is implemented to ensure that employees\nunderstand them.",
      "preferOriginal": false,
      "explanation": "Compliance promotion includes practical rules based on law and ethics, together with education that helps employees follow those rules."
    },
    {
      "number": 74,
      "text": "Among information processing standards, which of the following is defined for information security management?",
      "choices": [
        "IEEE 802.3",
        "ISO/IEC 27001",
        "JPEG 2000",
        "MPEG 1"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q74)",
      "images": [],
      "originalText": "Among information processing standards, which of the following is defined for\ninformation security management?\na) IEEE 802.3 b) ISO/IEC 27001\nc) JPEG 2000 d) MPEG 1",
      "preferOriginal": false,
      "explanation": "ISO/IEC 27001 specifies requirements for an information security management system. It is the information security management standard among the choices."
    },
    {
      "number": 75,
      "text": "Which of the following is the most appropriate example of standardization in the manufacturing industry?",
      "choices": [
        "Daily workload is balanced, and the types and volume of components taken daily in from the previous process are equalized.",
        "In order to streamline the production process, common components and procedures are used for manufacturing.",
        "In order to improve the speed of a production management program, the optimum algorithm is selected.",
        "Production planning, production processes, and working methods are simplified through a reduction in product types and a review of work details."
      ],
      "answer": 1,
      "source": "(2025S, IP, Q75)",
      "images": [],
      "originalText": "Which of the following is the most appropriate example of standardization in the\nmanufacturing industry?\na) Daily workload is balanced, and the types and volume of components taken daily in\nfrom the previous process are equalized.\nb) In order to streamline the production process, common components and procedures are\nused for manufacturing.\nc) In order to improve the speed of a production management program, the optimum\nalgorithm is selected.\nd) Production planning, production processes, and working methods are simplified through\na reduction in product types and a review of work details.",
      "preferOriginal": false,
      "explanation": "Standardization establishes common specifications, components or procedures. Sharing components and procedures can simplify manufacturing and make the process more efficient."
    },
    {
      "number": 76,
      "text": "According to the ISO 9000 family, quality is defined as the “degree to which a set of inherent characteristics fulfills requirements.” When products are evaluated on the basis of this definition, which of the following is most appropriate as a product with good quality?",
      "choices": [
        "A product having no customer complaints and a high level of customer satisfaction",
        "A product that a company produces in-house without outsourcing",
        "A product designed and manufactured using CAD and CAM",
        "A product utilizing materials and components of high quality"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q76)",
      "images": [],
      "originalText": "According to the ISO 9000 family, quality is defined as the “degree to which a set of\ninherent characteristics fulfills requirements.” When products are evaluated on the basis of\nthis definition, which of the following is most appropriate as a product with good quality?\na) A product having no customer complaints and a high level of customer satisfaction\nb) A product that a company produces in-house without outsourcing\nc) A product designed and manufactured using CAD and CAM\nd) A product utilizing materials and components of high quality",
      "preferOriginal": false,
      "explanation": "Under the definition given, quality is about meeting requirements. A product that meets customer needs and achieves high satisfaction is therefore an appropriate example of good quality."
    },
    {
      "number": 77,
      "text": "Which of the following is the most appropriate example of enhanced corporate governance?",
      "choices": [
        "Enhancing the labor system in order to empower women",
        "Purchasing another company in order to swiftly deploy business",
        "Increasing the number of highly-independent outside directors",
        "Withdrawing from a business where it is hard to obtain profit"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q77)",
      "images": [],
      "originalText": "Which of the following is the most appropriate example of enhanced corporate\ngovernance?\na) Enhancing the labor system in order to empower women\nb) Purchasing another company in order to swiftly deploy business\nc) Increasing the number of highly-independent outside directors\nd) Withdrawing from a business where it is hard to obtain profit",
      "preferOriginal": false,
      "explanation": "Independent outside directors can strengthen oversight of management and reduce conflicts of interest. This supports stronger corporate governance."
    },
    {
      "number": 78,
      "text": "A piece of software is provided in a form that enables use at a set fee or for a certain period of time. Which of the following is the most appropriate term to express this form of use?",
      "choices": [
        "Activation",
        "Adware",
        "Subscription",
        "Volume license"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q78)",
      "images": [],
      "originalText": "A piece of software is provided in a form that enables use at a set fee or for a certain\nperiod of time. Which of the following is the most appropriate term to express this form of\nuse?\na) Activation b) Adware\nc) Subscription d) Volume license",
      "preferOriginal": false,
      "explanation": "A subscription provides access to software or services under recurring or time-based terms. It differs from an unrestricted one-time ownership purchase."
    },
    {
      "number": 79,
      "text": "In order to consider near-term strategies, automobile manufacturer Company A identified its strengths and weaknesses, as well as the opportunities and threats it faces in the external environment. On the basis of the results, which of the following is appropriate as measures to leverage the company's strengths and overcome the threats? Strengths Weaknesses • Strong brand image • Large-scale retirement of Internal • Accumulation of multi- skilled workers environment directional research and development Opportunities Threats External • Monetary easing under interest • Sharp rise in oil prices environment rate decline • Spread of environmental conservation consciousness",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q79)",
      "images": [
        "questions/2025/q079-1.webp"
      ],
      "originalText": "In order to consider near-term strategies, automobile manufacturer Company A\nidentified its strengths and weaknesses, as well as the opportunities and threats it faces in\nthe external environment. On the basis of the results, which of the following is appropriate\nas measures to leverage the company's strengths and overcome the threats?\nStrengths Weaknesses\n• Strong brand image • Large-scale retirement of\nInternal\n• Accumulation of multi- skilled workers\nenvironment\ndirectional research and\ndevelopment\nOpportunities Threats\nExternal • Monetary easing under interest • Sharp rise in oil prices\nenvironment rate decline • Spread of environmental\nconservation consciousness\na) Extend the retirement age of skilled workers or implement rehiring\nb) Procure funds at low interest and stockpile large reserves of oil\nc) Conduct research and development and commercialize electric automobiles\nd) Take advantage of brand image to strengthen sales capabilities",
      "preferOriginal": true,
      "explanation": "Strong research capabilities are an internal strength, while rising fuel costs and environmental concerns create external threats. Developing electric vehicles uses that strength to respond to those threats."
    },
    {
      "number": 80,
      "text": "Which of the following is an appropriate description concerning M&A?",
      "choices": [
        "The analysis of the flow of business and the chain of value for creating value of products and services provided by a company",
        "The increase in autonomy in business strategy making by dividing a company by business or region",
        "The drastic reform of business processes, and using IT to increase business throughput and cost efficiency",
        "The acceleration of business deployment by fulfilling the functions that the company is lacking from other companies through corporate acquisition, etc."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q80)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning M&A?\na) The analysis of the flow of business and the chain of value for creating value of products\nand services provided by a company\nb) The increase in autonomy in business strategy making by dividing a company by\nbusiness or region\nc) The drastic reform of business processes, and using IT to increase business throughput\nand cost efficiency\nd) The acceleration of business deployment by fulfilling the functions that the company is\nlacking from other companies through corporate acquisition, etc.",
      "preferOriginal": false,
      "explanation": "Mergers and acquisitions can obtain capabilities, operations or resources from other companies. This can speed up business expansion compared with developing everything internally."
    },
    {
      "number": 81,
      "text": "Which of the following is an appropriate explanation of 3C analysis that is used to analyze a business environment?",
      "choices": [
        "The analysis is performed from the three (3) perspectives of the customers, the competitors, and the company.",
        "The analysis is performed from the three (3) perspectives of last purchase date, purchase frequency, and purchase amount.",
        "The analysis is performed by decomposition into the three (3) elements of era, age, and generation.",
        "The analysis is performed by categorization into three (3) groups in descending order of total sales."
      ],
      "answer": 0,
      "source": "(2025S, IP, Q81)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of 3C analysis that is used to\nanalyze a business environment?\na) The analysis is performed from the three (3) perspectives of the customers, the\ncompetitors, and the company.\nb) The analysis is performed from the three (3) perspectives of last purchase date, purchase\nfrequency, and purchase amount.\nc) The analysis is performed by decomposition into the three (3) elements of era, age, and\ngeneration.\nd) The analysis is performed by categorization into three (3) groups in descending order of\ntotal sales.",
      "preferOriginal": false,
      "explanation": "The three Cs are Customers, Competitors and Company. The analysis considers these three perspectives when examining the business environment."
    },
    {
      "number": 82,
      "text": "Which of the following is an appropriate description concerning a balanced scorecard (BSC)?",
      "choices": [
        "It is a business management technique that converts a company or organization’s vision and strategy into specific actions from four (4) viewpoints (“financial viewpoint,” “customer viewpoint,” “business process viewpoint,” and “growth and learning viewpoint”).",
        "It is an approach where the corporate activities of providing a product or service to customers are viewed as a chain of activities of procurement, development, manufacturing, sales, and service that adds and builds up value and costs in a sequential manner and produces the final “value” for the customer.",
        "It is a business analysis technique for a company that produces and sells a wide variety of products and is involved in several businesses to determine the products and businesses’ combination that has the most efficient and effective distribution of management resources from a strategic perspective.",
        "It is a business strategy technique for use in the evaluation of strengths, weaknesses, opportunities, and threats in projects, venture businesses, and other such activities by organizations and individuals that perform decision making in order to achieve a target."
      ],
      "answer": 0,
      "source": "(2025S, IP, Q82)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning a balanced scorecard\n(BSC)?\na) It is a business management technique that converts a company or organization’s vision\nand strategy into specific actions from four (4) viewpoints (“financial viewpoint,”\n“customer viewpoint,” “business process viewpoint,” and “growth and learning\nviewpoint”).\nb) It is an approach where the corporate activities of providing a product or service to\ncustomers are viewed as a chain of activities of procurement, development,\nmanufacturing, sales, and service that adds and builds up value and costs in a sequential\nmanner and produces the final “value” for the customer.\nc) It is a business analysis technique for a company that produces and sells a wide variety\nof products and is involved in several businesses to determine the products and\nbusinesses’ combination that has the most efficient and effective distribution of\nmanagement resources from a strategic perspective.\nd) It is a business strategy technique for use in the evaluation of strengths, weaknesses,\nopportunities, and threats in projects, venture businesses, and other such activities by\norganizations and individuals that perform decision making in order to achieve a target.",
      "preferOriginal": false,
      "explanation": "The balanced scorecard translates strategy into objectives and measures across financial, customer, internal process, and learning and growth perspectives."
    },
    {
      "number": 83,
      "text": "Several companies want to collaborate on research and development to develop a new business. Which of the following is an appropriate organization that is formed through collaborative investment?",
      "choices": [
        "M&A",
        "Cross-license",
        "Joint venture",
        "Spin-off"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q83)",
      "images": [],
      "originalText": "Several companies want to collaborate on research and development to develop a new\nbusiness. Which of the following is an appropriate organization that is formed through\ncollaborative investment?\na) M&A b) Cross-license\nc) Joint venture d) Spin-off",
      "preferOriginal": false,
      "explanation": "A joint venture is a jointly funded business undertaking. It allows the participating companies to share investment, resources and risks in a new activity."
    },
    {
      "number": 84,
      "text": "Which of the following is the most appropriate example of business improvement through the implementation of SCM?",
      "choices": [
        "Products are now sold over the Internet as well, so increased sales on the basis of expanded sales channels can be anticipated.",
        "The sales information and sales know-how possessed by sales representatives is now managed with a database, so it is possible to share these with the sales department as a whole.",
        "Sales information is now sent to a manufacturer over a network, so the manufacturer can produce and supply products in a timely way.",
        "Sales data from stores are now gathered on a server at headquarters, so sales trends can be analyzed by age and by gender."
      ],
      "answer": 2,
      "source": "(2025S, IP, Q84)",
      "images": [],
      "originalText": "Which of the following is the most appropriate example of business improvement\nthrough the implementation of SCM?\na) Products are now sold over the Internet as well, so increased sales on the basis of\nexpanded sales channels can be anticipated.\nb) The sales information and sales know-how possessed by sales representatives is now\nmanaged with a database, so it is possible to share these with the sales department as a\nwhole.\nc) Sales information is now sent to a manufacturer over a network, so the manufacturer can\nproduce and supply products in a timely way.\nd) Sales data from stores are now gathered on a server at headquarters, so sales trends can\nbe analyzed by age and by gender.",
      "preferOriginal": false,
      "explanation": "Supply chain management coordinates demand, production and delivery across organizations. Sharing sales data lets the manufacturer plan timely production and supply."
    },
    {
      "number": 85,
      "text": "A certain bank makes the deployment of highly convenient and advanced services easier by publishing the interface specifications for its systems and permitting access from external parties who have concluded a contract in advance. Which of the following is the most appropriate term to express this initiative?",
      "choices": [
        "BPO",
        "RPA",
        "Open API",
        "Technology management"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q85)",
      "images": [],
      "originalText": "A certain bank makes the deployment of highly convenient and advanced services easier\nby publishing the interface specifications for its systems and permitting access from external\nparties who have concluded a contract in advance. Which of the following is the most\nappropriate term to express this initiative?\na) BPO b) RPA\nc) Open API d) Technology management",
      "preferOriginal": false,
      "explanation": "An open API exposes defined interfaces that outside parties can use under agreed conditions. Publishing those interfaces makes compatible external services easier to develop."
    },
    {
      "number": 86,
      "text": "Which of the following is a system that collects information that is required for sales management or inventory control by reading or keying in a product code or a buyer’s attribute at the time of a sale?",
      "choices": [
        "ETC",
        "GPS",
        "POS",
        "SCM"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q86)",
      "images": [],
      "originalText": "Which of the following is a system that collects information that is required for sales\nmanagement or inventory control by reading or keying in a product code or a buyer’s\nattribute at the time of a sale?\na) ETC b) GPS c) POS d) SCM",
      "preferOriginal": false,
      "explanation": "A point-of-sale system records details of sales when transactions occur. The collected product and customer information can support inventory control and sales analysis."
    },
    {
      "number": 87,
      "text": "Which of the following is the most appropriate description concerning deep learning?",
      "choices": [
        "It is a mechanism that integrates information and the workflow between departments that are involved with customers, such as sales, marketing, and after-sales service.",
        "It is a form of education, learning, and training that is implemented by using digital devices such as computers, and communication networks.",
        "It is a mechanism for the knowledge and knowhow possessed by each individual in an organization to be shared and effectively utilized by the organization as a whole.",
        "It is a technology where a computer itself identifies and learns the characteristics of data by analyzing a large volume of data with a model that imitates the neural circuits of a human being."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q87)",
      "images": [],
      "originalText": "Which of the following is the most appropriate description concerning deep learning?\na) It is a mechanism that integrates information and the workflow between departments that\nare involved with customers, such as sales, marketing, and after-sales service.\nb) It is a form of education, learning, and training that is implemented by using digital\ndevices such as computers, and communication networks.\nc) It is a mechanism for the knowledge and knowhow possessed by each individual in an\norganization to be shared and effectively utilized by the organization as a whole.\nd) It is a technology where a computer itself identifies and learns the characteristics of data\nby analyzing a large volume of data with a model that imitates the neural circuits of a\nhuman being.",
      "preferOriginal": false,
      "explanation": "Deep learning uses neural-network models with multiple processing layers to learn useful features from data. It can identify complex patterns from large training datasets."
    },
    {
      "number": 88,
      "text": "Which of the following is an appropriate effect of CAD?",
      "choices": [
        "Identifying the required volume of material, and placing the optimum order",
        "Automating production processes and removing the need for human work",
        "Managing the series of production processes in an integrated manner",
        "Reusing design data and simplifying the streamlining of work"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q88)",
      "images": [],
      "originalText": "Which of the following is an appropriate effect of CAD?\na) Identifying the required volume of material, and placing the optimum order\nb) Automating production processes and removing the need for human work\nc) Managing the series of production processes in an integrated manner\nd) Reusing design data and simplifying the streamlining of work",
      "preferOriginal": false,
      "explanation": "Computer-aided design stores designs as reusable digital data. Reusing and modifying that data reduces repeated drawing work and supports more efficient design."
    },
    {
      "number": 89,
      "text": "Which of the following is the most appropriate term for referring to an automobile that has a function for connecting to the Internet, sends information captured by onboard sensors to a server and receives the driving-related information from the server for purposes such as support for driving?",
      "choices": [
        "Car sharing",
        "Car navigation system",
        "Connected car",
        "Electric automobile"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q89)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term for referring to an automobile that\nhas a function for connecting to the Internet, sends information captured by onboard sensors\nto a server and receives the driving-related information from the server for purposes such as\nsupport for driving?\na) Car sharing b) Car navigation system\nc) Connected car d) Electric automobile",
      "preferOriginal": false,
      "explanation": "A connected car exchanges information with external systems through a network. Onboard sensors and received driving information are typical elements of this connection."
    },
    {
      "number": 90,
      "text": "In a manufacturing company, a production system uses electronic tags containing information such as the part number of a component. The tags are used as a production order from a post-process to a pre-process and a delivery note from a pre-process to a post-process. A system such as this is used in a just in time production system in a supply chain or in-house manufacturing. Which of the following is the appropriate name for a system such as this?",
      "choices": [
        "Kanban system",
        "Craft production system",
        "Cell production system",
        "Build-to-stock production system"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q90)",
      "images": [],
      "originalText": "In a manufacturing company, a production system uses electronic tags containing\ninformation such as the part number of a component. The tags are used as a production order\nfrom a post-process to a pre-process and a delivery note from a pre-process to a post-process.\nA system such as this is used in a just in time production system in a supply chain or in-house\nmanufacturing. Which of the following is the appropriate name for a system such as this?\na) Kanban system b) Craft production system\nc) Cell production system d) Build-to-stock production system",
      "preferOriginal": false,
      "explanation": "Kanban uses signals or cards to request production and movement of parts between processes. It supports pull-based, just-in-time replenishment."
    },
    {
      "number": 91,
      "text": "Crowdfunding can be classified into loan-based, donation-based, purchase-based, or investment-based types, depending on the form of funding and the way the compensation is paid. In order to start a new business, Company A has decided to raise funds through crowdfunding and pay a part of the profits to the funders as dividends. Which of the following is the most appropriate type of crowdfunding used by Company A?",
      "choices": [
        "Loan-based crowdfunding",
        "Donation-based crowdfunding",
        "Purchase-based crowdfunding",
        "Investment-based crowdfunding"
      ],
      "answer": 3,
      "source": "(2025S, IP, Q91)",
      "images": [],
      "originalText": "Crowdfunding can be classified into loan-based, donation-based, purchase-based, or\ninvestment-based types, depending on the form of funding and the way the compensation is\npaid. In order to start a new business, Company A has decided to raise funds through\ncrowdfunding and pay a part of the profits to the funders as dividends. Which of the following\nis the most appropriate type of crowdfunding used by Company A?\na) Loan-based crowdfunding b) Donation-based crowdfunding\nc) Purchase-based crowdfunding d) Investment-based crowdfunding",
      "preferOriginal": false,
      "explanation": "When funders provide capital in exchange for a share of profits or dividends, the arrangement is investment-based crowdfunding. The compensation is an investment return."
    },
    {
      "number": 92,
      "text": "As sightseeing guidance, images of buildings from the past and explanatory information are displayed on top of the current actual scenery when a smartphone is pointed at a historic site or other such site. Which of the following is the most appropriate term to describe the mechanism that is utilized?",
      "choices": [
        "AR",
        "GUI",
        "VR",
        "Metaverse"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q92)",
      "images": [],
      "originalText": "As sightseeing guidance, images of buildings from the past and explanatory information\nare displayed on top of the current actual scenery when a smartphone is pointed at a historic\nsite or other such site. Which of the following is the most appropriate term to describe the\nmechanism that is utilized?\na) AR b) GUI c) VR d) Metaverse",
      "preferOriginal": false,
      "explanation": "Augmented reality overlays digital information on a view of the real world. Historical building images placed over the current scene are an AR application."
    },
    {
      "number": 93,
      "text": "Which of the following is the most appropriate description concerning DFD?",
      "choices": [
        "It represents transitions of the state of a system as time passes and the condition changes.",
        "It represents the relationship and data structure of the entities handled by a system.",
        "It represents the attributes of, operations for and relations between the components that a system is composed of.",
        "It focuses on the flow of data, and represents the relations between the flow and the processing of data."
      ],
      "answer": 3,
      "source": "(2025S, IP, Q93)",
      "images": [],
      "originalText": "Which of the following is the most appropriate description concerning DFD?\na) It represents transitions of the state of a system as time passes and the condition changes.\nb) It represents the relationship and data structure of the entities handled by a system.\nc) It represents the attributes of, operations for and relations between the components that a\nsystem is composed of.\nd) It focuses on the flow of data, and represents the relations between the flow and the\nprocessing of data.",
      "preferOriginal": false,
      "explanation": "A data flow diagram shows how data moves between processes, data stores and external entities. Its focus is the processing and flow of data."
    },
    {
      "number": 94,
      "text": "Which of the following is the most appropriate term for information in large quantities and in diverse forms that grows rapidly and is expected to help obtain knowledge useful for decision-making?",
      "choices": [
        "Big data",
        "Diversity",
        "Core competence",
        "Crowdfunding"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q94)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term for information in large quantities\nand in diverse forms that grows rapidly and is expected to help obtain knowledge useful for\ndecision-making?\na) Big data b) Diversity\nc) Core competence d) Crowdfunding",
      "preferOriginal": false,
      "explanation": "Big data refers to data whose volume, variety and rapid growth create opportunities for new analysis. The definition in the question points to that term."
    },
    {
      "number": 95,
      "text": "Which of the following is the most appropriate explanation of the relation between business strategy and information systems strategy?",
      "choices": [
        "A business strategy and information systems strategy are created independently of each other.",
        "An information systems strategy is created on the basis of a business strategy.",
        "A business strategy is created on the basis of an information systems strategy.",
        "An information systems strategy is the strategy of an IT department, and a business strategy is the strategy of a business planning department."
      ],
      "answer": 1,
      "source": "(2025S, IP, Q95)",
      "images": [],
      "originalText": "Which of the following is the most appropriate explanation of the relation between\nbusiness strategy and information systems strategy?\na) A business strategy and information systems strategy are created independently of each\nother.\nb) An information systems strategy is created on the basis of a business strategy.\nc) A business strategy is created on the basis of an information systems strategy.\nd) An information systems strategy is the strategy of an IT department, and a business\nstrategy is the strategy of a business planning department.",
      "preferOriginal": false,
      "explanation": "An information systems strategy should support the organization's business strategy. Business objectives guide what information systems capabilities are needed."
    },
    {
      "number": 96,
      "text": "Which of the following is a term that represents the practical verification of a new concept or idea before development?",
      "choices": [
        "CRM",
        "KPI",
        "PoC",
        "SLA"
      ],
      "answer": 2,
      "source": "(2025S, IP, Q96)",
      "images": [],
      "originalText": "Which of the following is a term that represents the practical verification of a new\nconcept or idea before development?\na) CRM b) KPI c) PoC d) SLA",
      "preferOriginal": false,
      "explanation": "A proof of concept, or PoC, tests whether a proposed concept is practical or feasible before full development. It reduces uncertainty early in a project."
    },
    {
      "number": 97,
      "text": "Which of the following is the appropriate combination of terms or phrases to be inserted into A through C in the description below concerning a request for proposal? A request for proposal concerning system development is a document by which generally A presents to B the C , procurement conditions, etc. A B C an information system",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q97)",
      "images": [
        "questions/2025/q097-1.webp"
      ],
      "originalText": "Which of the following is the appropriate combination of terms or phrases to be inserted\ninto A through C in the description below concerning a request for\nproposal?\nA request for proposal concerning system development is a document by which generally\nA presents to B the C , procurement conditions, etc.\nA B C\nan information system\na) vendors system requirements\ndepartment\nan information system\nb) user departments system requirements\ndepartment\nan information system\nc) a vendor system installation result\ndepartment\nd) a vendor a user department system installation result",
      "preferOriginal": true,
      "explanation": "In an RFP, the procuring information systems department presents its requirements and procurement conditions to potential vendors. Vendors use this to propose suitable solutions."
    },
    {
      "number": 98,
      "text": "Which of the following is the most appropriate term that refers to the goals for development that must be achieved by 2030 adopted by the United Nations in order to achieve a sustainable world?",
      "choices": [
        "SDGs",
        "SDK",
        "SGA",
        "SGML"
      ],
      "answer": 0,
      "source": "(2025S, IP, Q98)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term that refers to the goals for\ndevelopment that must be achieved by 2030 adopted by the United Nations in order to achieve\na sustainable world?\na) SDGs b) SDK c) SGA d) SGML",
      "preferOriginal": false,
      "explanation": "The Sustainable Development Goals, or SDGs, are the UN's goals associated with the 2030 Agenda for Sustainable Development. The year 2030 is the key clue in the question."
    },
    {
      "number": 99,
      "text": "When the software lifecycle is divided into the planning process, the requirements definition process, the development process, and the operation process, which of the following is the process where the system functions that users and stakeholders require are clarified and consensus is built on the basis of a computerization plan?",
      "choices": [
        "Planning process",
        "Requirements definition process",
        "Development process",
        "Operation process"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q99)",
      "images": [],
      "originalText": "When the software lifecycle is divided into the planning process, the requirements\ndefinition process, the development process, and the operation process, which of the\nfollowing is the process where the system functions that users and stakeholders require are\nclarified and consensus is built on the basis of a computerization plan?\na) Planning process b) Requirements definition process\nc) Development process d) Operation process",
      "preferOriginal": false,
      "explanation": "Requirements definition clarifies and agrees on what users and stakeholders need the system to do. It turns the computerization plan into agreed system requirements."
    },
    {
      "number": 100,
      "text": "Which of the following is the most appropriate term to express the change where by using digital technology, a company creates a user experience (UX) and a business model that attract customers, expels conventional services in the industry, and as a result destroys the existing structure of an industry?",
      "choices": [
        "Digital signage",
        "Digital disruption",
        "Digital divide",
        "Digital transformation"
      ],
      "answer": 1,
      "source": "(2025S, IP, Q100)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term to express the change where by using\ndigital technology, a company creates a user experience (UX) and a business model that\nattract customers, expels conventional services in the industry, and as a result destroys the\nexisting structure of an industry?\na) Digital signage b) Digital disruption\nc) Digital divide d) Digital transformation",
      "preferOriginal": false,
      "explanation": "Digital disruption occurs when digital products or business models significantly overturn an established market structure. The described replacement of conventional services matches that effect."
    }
  ]
};
