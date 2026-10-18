window.ITPEC_QUIZZES = window.ITPEC_QUIZZES || {};
window.ITPEC_QUIZZES["2024"] = {
  "year": "2024",
  "session": "April 2024",
  "questions": [
    {
      "number": 1,
      "text": "Sound signals are digitized. Sampling is performed at Time 1 through Time 5 in the figure below, and four-level quantization is performed; in other words, the levels closest to the sampling point are selected. After that, two-bit encoding is performed. The result is “11 01 00 10 11”. When digitization is performed in the same way, which of the following figures represents the sound signal that results in “01 00 10 11 01”?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q1)",
      "images": [
        "questions/2024/q001-1.webp"
      ],
      "originalText": "Sound signals are digitized. Sampling is performed at Time 1 through Time 5 in the figure\nbelow, and four-level quantization is performed; in other words, the levels closest to the\nsampling point are selected. After that, two-bit encoding is performed. The result is “11\n01 00 10 11”. When digitization is performed in the same way, which of the following\nfigures represents the sound signal that results in “01 00 10 11 01”?\na) b)\nc) d)\nAmplitude Amplitude\n11 11\n10 10\n01 01\n00 00\n1 2 3 4 5 Time 1 2 3 4 5 Time",
      "preferOriginal": true,
      "explanation": "Read the signal at each of the five sampling times and round each sample to its nearest quantization level. Option B produces the sequence 01, 00, 10, 11, 01 in that order."
    },
    {
      "number": 2,
      "text": "Which of the following is the logical operation that is equivalent to the truth table below? Input A Input B Output 0 0 0 0 1 0 1 0 0 1 1 1",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q2)",
      "images": [
        "questions/2024/q002-1.webp"
      ],
      "originalText": "Which of the following is the logical operation that is equivalent to the truth table below?\nInput A Input B Output\n0 0 0\n0 1 0\n1 0 0\n1 1 1\na) AND b) NOT c) OR d) XOR",
      "preferOriginal": true,
      "explanation": "The output is 1 only in the row where both inputs are 1. That is the defining truth table of the AND operation.",
      "equation": "A  B | A AND B\n0  0 |    0\n0  1 |    0\n1  0 |    0\n1  1 |    1"
    },
    {
      "number": 3,
      "text": "Which of the following is a standard encoding system that is widely used for handling multilingual text and symbols around the world as a single character set?",
      "choices": [
        "ASCII",
        "EBCDIC",
        "EUC",
        "Unicode"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q3)",
      "images": [],
      "originalText": "Which of the following is a standard encoding system that is widely used for handling\nmultilingual text and symbols around the world as a single character set?\na) ASCII b) EBCDIC\nc) EUC d) Unicode",
      "preferOriginal": false,
      "explanation": "Unicode assigns character codes across many languages and symbol sets within one standard. It is designed for representing multilingual text consistently."
    },
    {
      "number": 4,
      "text": "When a chairperson and a secretary are selected from three (3) candidates with a method that allows dual roles, there are three (3) ways for the selection of a single chairperson and three (3) ways for the selection of a secretary, so in total, there are nine (9) combinations for the selection of a chairperson and a secretary. When a chairperson and a secretary are selected from five (5) candidates with a method that allows dual roles, how many combinations for the selection are there?",
      "choices": [
        "5",
        "10",
        "20",
        "25"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q4)",
      "images": [],
      "originalText": "When a chairperson and a secretary are selected from three (3) candidates with a method\nthat allows dual roles, there are three (3) ways for the selection of a single chairperson and\nthree (3) ways for the selection of a secretary, so in total, there are nine (9) combinations\nfor the selection of a chairperson and a secretary. When a chairperson and a secretary are\nselected from five (5) candidates with a method that allows dual roles, how many\ncombinations for the selection are there?\na) 5 b) 10 c) 20 d) 25",
      "preferOriginal": false,
      "explanation": "There are five choices for chairperson and, because one person may hold both roles, five independent choices for secretary. The total is 5 × 5 = 25.",
      "equation": "5 chairperson choices × 5 secretary choices = 25"
    },
    {
      "number": 5,
      "text": "The function calGrade receives the student’s score and returns the grade. The score is an integer. If the score is greater than or equal to 80, the function calGrade returns “A”; if the score is between 65 and 79, it returns “B”; between 50 and 64, it returns “C”; and otherwise, it returns “Fail.” Which of the following is an appropriate piece of code to be inserted in _______ in the program? [Program] ○ string: calGrade(integer: score) string: grade if (score ≥ 80) grade ← \"A\" elseif (_______) grade ← \"B\" elseif (score ≥ 50) grade ← \"C\" else grade ← \"Fail\" endif return grade",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q5)",
      "images": [
        "questions/2024/q005-1.webp"
      ],
      "originalText": "The function calGrade receives the student’s score and returns the grade. The score is\nan integer. If the score is greater than or equal to 80, the function calGrade returns “A”; if\nthe score is between 65 and 79, it returns “B”; between 50 and 64, it returns “C”; and\notherwise, it returns “Fail.” Which of the following is an appropriate piece of code to be\ninserted in _______ in the program?\n[Program]\n○ string: calGrade(integer: score)\nstring: grade\nif (score ≥ 80)\ngrade ← \"A\"\nelseif (_______)\ngrade ← \"B\"\nelseif (score ≥ 50)\ngrade ← \"C\"\nelse\ngrade ← \"Fail\"\nendif\nreturn grade\na) score ≥ 65 b) score ≥ 65 or score ≤ 79\nc) score ≤ 65 and score ≥ 79 d) score ≤ 79",
      "preferOriginal": true,
      "explanation": "The first condition has already handled scores of 80 or above. Checking score ≥ 65 next therefore selects exactly the remaining scores from 65 through 79."
    },
    {
      "number": 6,
      "text": "The procedure described below is sequentially performed for two (2) variables x and y, starting with step (1). When the procedure is completed, what is the resulting value of x? [Procedure] (1) Assign 2 to x and 3 to y. (2) Subtract 1 from the value of y, and assign the resulting value to y. (3) Add the values of x and y, and assign the resulting value to x. (4) If the value of y is 1, complete the procedure. Otherwise, return to step (2).",
      "choices": [
        "4",
        "5",
        "7",
        "8"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q6)",
      "images": [],
      "originalText": "The procedure described below is sequentially performed for two (2) variables x and y,\nstarting with step (1). When the procedure is completed, what is the resulting value of x?\n[Procedure]\n(1) Assign 2 to x and 3 to y.\n(2) Subtract 1 from the value of y, and assign the resulting value to y.\n(3) Add the values of x and y, and assign the resulting value to x.\n(4) If the value of y is 1, complete the procedure. Otherwise, return to step (2).\na) 4 b) 5 c) 7 d) 8",
      "preferOriginal": false,
      "explanation": "Start at x = 2 and y = 3. The first cycle makes y = 2 and x = 4. The second makes y = 1 and x = 5, and the procedure then stops.",
      "equation": "Start:     x = 2, y = 3\n1st cycle: y = 2, x = 2 + 2 = 4\n2nd cycle: y = 1, x = 4 + 1 = 5\nStop because y = 1."
    },
    {
      "number": 7,
      "text": "There exist four (4) states numbered 1 through 4. The four (4) states are connected as shown in the figure below, and the state transition occurs in a clockwise or counter- clockwise direction. If the current state is 1, which of the following is the state that is reached after the procedure below is performed twice? [Procedure] The number of the current state is multiplied by 11, and the result is divided by 3. The process below is performed based on the remainder of the division. • When the remainder is 0, a transition to the next state occurs in the clockwise direction. • When the remainder is 1, a transition to the next state occurs in the counter-clockwise direction. • When the remainder is 2, a transition to the second state occurs in the clockwise direction.",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q7)",
      "images": [
        "questions/2024/q007-1.webp"
      ],
      "originalText": "There exist four (4) states numbered 1 through 4. The four (4) states are connected as\nshown in the figure below, and the state transition occurs in a clockwise or counter-\nclockwise direction.\nIf the current state is 1, which of the following is the state that is reached after the procedure\nbelow is performed twice?\n[Procedure]\nThe number of the current state is multiplied by 11, and the result is divided by 3. The\nprocess below is performed based on the remainder of the division.\n• When the remainder is 0, a transition to the next state occurs in the clockwise\ndirection.\n• When the remainder is 1, a transition to the next state occurs in the counter-clockwise\ndirection.\n• When the remainder is 2, a transition to the second state occurs in the clockwise\ndirection.\na) 1 b) 2 c) 3 d) 4",
      "preferOriginal": true,
      "explanation": "From state 1, 11 mod 3 = 2, so move two states clockwise to state 3. Then 33 mod 3 = 0, so move one state clockwise to state 4.",
      "equation": "State 1: 11 mod 3 = 2 → two clockwise steps → 3\nState 3: 33 mod 3 = 0 → one clockwise step → 4"
    },
    {
      "number": 8,
      "text": "There is a device that stacks products from the bottom to the top, and removes the products sequentially from the top. There are only two (2) operations for this device. PUSH x: Stacks one (1) product x. POP: Removes one (1) product from the top. PUSH POP Nothing is stacked at the start, and three (3) products arrive in the order A, B, then C. If only one (1) device is used, when the products are removed with POP operations, which of the following is an impossible order of removal?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q8)",
      "images": [
        "questions/2024/q008-1.webp"
      ],
      "originalText": "There is a device that stacks products from the bottom to the top, and removes the products\nsequentially from the top. There are only two (2) operations for this device.\nPUSH x: Stacks one (1) product x.\nPOP: Removes one (1) product from the top.\nPUSH POP\nNothing is stacked at the start, and three (3) products arrive in the order A, B, then C.\nIf only one (1) device is used, when the products are removed with POP operations, which\nof the following is an impossible order of removal?\na) A, B, C b) B, A, C c) C, A, B d) C, B, A",
      "preferOriginal": true,
      "explanation": "The device is a stack and removes its top item first. To remove C first, A and B must already be underneath it; B must then leave before A. Therefore C, A, B cannot be produced.",
      "equation": "Push A, then B, then C\nTop → C, B, A\nAfter removing C, B still blocks A.\nTherefore C → A → B is impossible."
    },
    {
      "number": 9,
      "text": "The program performs circular left shifting on the array elements. For example, after circular left shifting, the initial array {1, 2, 3, 4, 5} becomes {2, 3, 4, 5, 1}. Which of the following is an appropriate combination of pieces of code to be inserted in ___A___ and ___B___ in the program? [Program] integer []: array ← {1, 2, 3, 4, 5} integer: i integer: tmp tmp ← array[1] for (increase i from 2 to the number of elements in the array by 1) array[___A___] ← array[i] endfor ___B___ ← tmp A B",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q9)",
      "images": [
        "questions/2024/q009-1.webp"
      ],
      "originalText": "The program performs circular left shifting on the array elements. For example, after\ncircular left shifting, the initial array {1, 2, 3, 4, 5} becomes {2, 3, 4, 5, 1}.\nWhich of the following is an appropriate combination of pieces of code to be inserted in\n___A___ and ___B___ in the program?\n[Program]\ninteger []: array ← {1, 2, 3, 4, 5}\ninteger: i\ninteger: tmp\ntmp ← array[1]\nfor (increase i from 2 to the number of elements in the array by 1)\narray[___A___] ← array[i]\nendfor\n___B___ ← tmp\nA B\na) i + 1 array[the number of elements of array - 1]\nb) i + 1 array[the number of elements of array]\nc) i - 1 array[the number of elements of array - 1]\nd) i - 1 array[the number of elements of array]",
      "preferOriginal": true,
      "explanation": "Save the first element, then copy each later element into the preceding position using index i − 1. Finally place the saved first element in the last array position.",
      "equation": "Save array[1]\narray[i − 1] ← array[i]\narray[last] ← saved value\n[1,2,3,4,5] → [2,3,4,5,1]"
    },
    {
      "number": 10,
      "text": "Which of the following is the unique value that is sequentially assigned to a memory location in order to identify the location of instructions or data stored in the main memory of a computer?",
      "choices": [
        "Address",
        "Counter",
        "Index",
        "Pointer"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q10)",
      "images": [],
      "originalText": "Which of the following is the unique value that is sequentially assigned to a memory\nlocation in order to identify the location of instructions or data stored in the main memory\nof a computer?\na) Address b) Counter c) Index d) Pointer",
      "preferOriginal": false,
      "explanation": "An address uniquely identifies a memory location. The processor uses addresses to locate stored instructions and data."
    },
    {
      "number": 11,
      "text": "Which of the following is an appropriate explanation of HDMI?",
      "choices": [
        "It is an interface for an AV device that handles the input and output of video, audio, and control signals through a single cable.",
        "It is an interface that makes use of the infrared rays used in the exchange of information between cell phones.",
        "It is a serial interface that connects an external hard disk or such other devices through a cable.",
        "It is a wireless interface that makes use of radio waves and can perform communication even when there is a slight shielding."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q11)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of HDMI?\na) It is an interface for an AV device that handles the input and output of video, audio, and\ncontrol signals through a single cable.\nb) It is an interface that makes use of the infrared rays used in the exchange of information\nbetween cell phones.\nc) It is a serial interface that connects an external hard disk or such other devices through a\ncable.\nd) It is a wireless interface that makes use of radio waves and can perform communication\neven when there is a slight shielding.",
      "preferOriginal": false,
      "explanation": "HDMI carries digital video and audio, along with supported control signals, through one connection. It is a common interface for audiovisual devices."
    },
    {
      "number": 12,
      "text": "Which of the following is an appropriate explanation of GPU?",
      "choices": [
        "It is an index that shows the throughput of a CPU in terms of how many billions of instructions it can execute per second.",
        "It is a frequency signal that synchronizes the arithmetic processing of CPUs.",
        "It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main memory.",
        "It is a processing unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q12)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of GPU?\na) It is an index that shows the throughput of a CPU in terms of how many billions of\ninstructions it can execute per second.\nb) It is a frequency signal that synchronizes the arithmetic processing of CPUs.\nc) It is a storage unit that is placed between a CPU and a main memory, and has a higher\nreading and writing speed than the main memory.\nd) It is a processing unit that is used instead of a CPU to accelerate processing such as\nimage processing for 3D graphics.",
      "preferOriginal": false,
      "explanation": "A GPU is designed to process many graphics-related operations efficiently. It can accelerate tasks such as rendering three-dimensional images."
    },
    {
      "number": 13,
      "text": "If a process from when a PC is powered on to when it becomes ready to use is divided into four (4) stages, which of the following is the stage that is performed first?",
      "choices": [
        "Loading a BIOS",
        "Loading an OS",
        "Loading resident application software such as antivirus software",
        "Loading device drivers"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q13)",
      "images": [],
      "originalText": "If a process from when a PC is powered on to when it becomes ready to use is divided into\nfour (4) stages, which of the following is the stage that is performed first?\na) Loading a BIOS\nb) Loading an OS\nc) Loading resident application software such as antivirus software\nd) Loading device drivers",
      "preferOriginal": false,
      "explanation": "The BIOS or firmware performs the initial startup work before the operating system and applications are loaded. It is the earliest of the listed startup stages."
    },
    {
      "number": 14,
      "text": "Which of the following is an appropriate description concerning the reliability of a system or a device?",
      "choices": [
        "Controlling a system in a safe state in order to minimize damage when a fault occurs in a device is called foolproof.",
        "Reducing the probability of occurrence of a fault in a device by using high-quality and high-reliability parts and elements is called fail-safe.",
        "Enabling continuation of system processing when a fault occurs in a system due to an error is called fault tolerance.",
        "Taking measures in the design stage so that humans do not make mistakes in system operation, or no faults or failures occur even if they make mistakes is called fail soft."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q14)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning the reliability of a system\nor a device?\na) Controlling a system in a safe state in order to minimize damage when a fault occurs in a\ndevice is called foolproof.\nb) Reducing the probability of occurrence of a fault in a device by using high-quality and\nhigh-reliability parts and elements is called fail-safe.\nc) Enabling continuation of system processing when a fault occurs in a system due to an\nerror is called fault tolerance.\nd) Taking measures in the design stage so that humans do not make mistakes in system\noperation, or no faults or failures occur even if they make mistakes is called fail soft.",
      "preferOriginal": false,
      "explanation": "Fault tolerance is the ability to continue operating when a component fails. It often relies on redundancy and a way to detect and isolate faults."
    },
    {
      "number": 15,
      "text": "Among the costs below concerning a sales management system, which of the following is the list that contains all costs that are included in TCO? (i) The purchase cost for products handled by the sales management system (ii) The shipment cost for products handled by the sales management system (iii) The software maintenance cost for the sales management system (iv) The hardware maintenance cost for the sales management system",
      "choices": [
        "(i), (ii)",
        "(i), (iv)",
        "(ii), (iii)",
        "(iii), (iv)"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q15)",
      "images": [],
      "originalText": "Among the costs below concerning a sales management system, which of the following is\nthe list that contains all costs that are included in TCO?\n(i) The purchase cost for products handled by the sales management system\n(ii) The shipment cost for products handled by the sales management system\n(iii) The software maintenance cost for the sales management system\n(iv) The hardware maintenance cost for the sales management system\na) (i), (ii) b) (i), (iv) c) (ii), (iii) d) (iii), (iv)",
      "preferOriginal": false,
      "explanation": "The system's total cost of ownership includes its hardware and software maintenance costs. Purchasing and shipping the merchandise sold by the business are product costs, rather than ownership costs of the sales management system."
    },
    {
      "number": 16,
      "text": "In a web service and other services, in order to increase reliability and process a large volume of accesses from users, which of the following is a technique that links multiple computers and makes them work as if they were a single computer?",
      "choices": [
        "Clustering",
        "Spooling",
        "Buffering",
        "Mirroring"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q16)",
      "images": [],
      "originalText": "In a web service and other services, in order to increase reliability and process a large\nvolume of accesses from users, which of the following is a technique that links multiple\ncomputers and makes them work as if they were a single computer?\na) Clustering b) Spooling\nc) Buffering d) Mirroring",
      "preferOriginal": false,
      "explanation": "Clustering makes multiple computers cooperate as a system. This can improve service availability and distribute large processing workloads."
    },
    {
      "number": 17,
      "text": "In a file system with the hierarchy structure shown in the Figure, when “..\\..\\DIRB\\Fn.txt” is specified from the directory marked with an * (the current directory), which of the following is the file that is referenced? Here, in the Figure show the directory name, and the reference method for a file is as below. [Reference method] (1) A file is referenced as “directory name\\ ··· \\directory name\\file name”, where the directory names on the path are listed with a separator “\\” in sequence, followed by “\\” and the file name. (2) The current directory is represented by “.” (a period). (3) The directory one (1) level above is represented by “..” (two periods). (4) When a reference begins with a “\\”, it is assumed that the leftmost root directory has been omitted. (1) * DIRA DIRB Fn.txt (2) DIRB (3) Fn.txt DIRB Fn.txt Root DIRB (4) Fn.txt DIRA",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q17)",
      "images": [
        "questions/2024/q017-1.webp"
      ],
      "originalText": "In a file system with the hierarchy structure shown in the Figure, when “..\\..\\DIRB\\Fn.txt”\nis specified from the directory marked with an * (the current directory), which of the\nfollowing is the file that is referenced? Here, in the Figure show the directory\nname, and the reference method for a file is as below.\n[Reference method]\n(1) A file is referenced as “directory name\\ ··· \\directory name\\file name”, where the\ndirectory names on the path are listed with a separator “\\” in sequence, followed by\n“\\” and the file name.\n(2) The current directory is represented by “.” (a period).\n(3) The directory one (1) level above is represented by “..” (two periods).\n(4) When a reference begins with a “\\”, it is assumed that the leftmost root directory has\nbeen omitted.\n(1)\n*\nDIRA DIRB\nFn.txt\n(2)\nDIRB (3)\nFn.txt\nDIRB\nFn.txt\nRoot DIRB\n(4)\nFn.txt\nDIRA\na) Fn.txt at (1) b) Fn.txt at (2) c) Fn.txt at (3) d) Fn.txt at (4)",
      "preferOriginal": true,
      "explanation": "Each '..' moves up one directory. Move up twice from the marked current directory, then follow DIRB and Fn.txt. In the diagram, that path reaches the file marked (4)."
    },
    {
      "number": 18,
      "text": "Which of the following is an appropriate description concerning OSS (Open Source Software)?",
      "choices": [
        "Use in industries that require high quality, such as the medical industry, is prohibited.",
        "Various types of license exist, and the terms of license must be observed when the software is used.",
        "If the source code is released on the Internet, the software can be called OSS even if redistribution is prohibited.",
        "The software must not be sold for a fee."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q18)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning OSS (Open Source\nSoftware)?\na) Use in industries that require high quality, such as the medical industry, is prohibited.\nb) Various types of license exist, and the terms of license must be observed when the\nsoftware is used.\nc) If the source code is released on the Internet, the software can be called OSS even if\nredistribution is prohibited.\nd) The software must not be sold for a fee.",
      "preferOriginal": false,
      "explanation": "Open source software is still subject to license terms. Different open source licenses impose different conditions on use, modification and redistribution."
    },
    {
      "number": 19,
      "text": "Which of the following is a term that means the validation of a software license by using the product ID and the user’s hardware information, in order to prevent unauthorized use of the software?",
      "choices": [
        "Activation",
        "Cloud computing",
        "Streaming",
        "Fragmentation"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q19)",
      "images": [],
      "originalText": "Which of the following is a term that means the validation of a software license by using\nthe product ID and the user’s hardware information, in order to prevent unauthorized use\nof the software?\na) Activation b) Cloud computing\nc) Streaming d) Fragmentation",
      "preferOriginal": false,
      "explanation": "Activation verifies that a software installation is being used under a valid license, often using a product identifier and device information. Its purpose includes reducing unauthorized use."
    },
    {
      "number": 20,
      "text": "Sales data by month for each branch is evaluated. In the “Evaluation” field for each branch by month, if the amount of sales at the branch is below the average sales amount of branches A through C for the month, the symbol “X” is to be displayed, and if the amount is above or equal to the average, the symbol “O” is to be displayed. Which of the following is an appropriate expression to be entered in cell C3? Here, the expression that is entered in cell C3 is copied and used in cell D3, cell E3, cells C5 through E5, and cells C7 through E7. a) Unit: million yen A B C D E 1 Month Item Branch A Branch B Branch C 2 Sales amount 1,500 1,000 3,000 July 3 Evaluation 4 Sales amount 1,200 1,000 1,000 August 5 Evaluation 6 Sales amount 1,700 1,500 1,300 September 7 Evaluation a) IF($C2 < AVERAGE(C2 : E2) , 'O' , 'X') b) IF($C2 < AVERAGE(C2 : E2) , 'X' , 'O') c) IF(C2 < AVERAGE($C2 : $E2) , 'O' , 'X') d) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O')",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q20)",
      "images": [
        "questions/2024/q020-1.webp"
      ],
      "originalText": "Sales data by month for each branch is evaluated. In the “Evaluation” field for each branch\nby month, if the amount of sales at the branch is below the average sales amount of\nbranches A through C for the month, the symbol “X” is to be displayed, and if the amount\nis above or equal to the average, the symbol “O” is to be displayed. Which of the following\nis an appropriate expression to be entered in cell C3? Here, the expression that is entered\nin cell C3 is copied and used in cell D3, cell E3, cells C5 through E5, and cells C7 through\nE7.\na) Unit: million yen\nA B C D E\n1 Month Item Branch A Branch B Branch C\n2 Sales amount 1,500 1,000 3,000\nJuly\n3 Evaluation\n4 Sales amount 1,200 1,000 1,000\nAugust\n5 Evaluation\n6 Sales amount 1,700 1,500 1,300\nSeptember\n7 Evaluation\na) IF($C2 < AVERAGE(C2 : E2) , 'O' , 'X')\nb) IF($C2 < AVERAGE(C2 : E2) , 'X' , 'O')\nc) IF(C2 < AVERAGE($C2 : $E2) , 'O' , 'X')\nd) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O')",
      "preferOriginal": true,
      "explanation": "The sales reference C2 must change when copied to another branch or month. The average must always use columns C through E while allowing the row to change, so use AVERAGE($C2:$E2). A below-average value produces X; otherwise it produces O.",
      "equation": "IF(C2 < AVERAGE($C2:$E2), 'X', 'O')\nC2 moves with the branch and month.\n$C and $E keep the average's columns fixed."
    },
    {
      "number": 21,
      "text": "Which of the following is an appropriate description about the function keys of a PC?",
      "choices": [
        "They are the keys where specific functions are assigned for each application and OS.",
        "They display a keyboard shape on a screen and enable input processing with software.",
        "They have a security role and are keys for performing encryption and decryption.",
        "They are information to identify specific lines uniquely in a database."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q21)",
      "images": [],
      "originalText": "Which of the following is an appropriate description about the function keys of a PC?\na) They are the keys where specific functions are assigned for each application and OS.\nb) They display a keyboard shape on a screen and enable input processing with software.\nc) They have a security role and are keys for performing encryption and decryption.\nd) They are information to identify specific lines uniquely in a database.",
      "preferOriginal": false,
      "explanation": "Function keys have actions assigned by the operating system or the current application. The action of a key can therefore vary between programs."
    },
    {
      "number": 22,
      "text": "Which of the following is a technology that is also used in measures against tampering of software in IoT devices and verifies the digital signature of the OS, firmware, or other such software when it is started, and only executes the software if the verification is successful?",
      "choices": [
        "GPU",
        "RAID",
        "Secure boot",
        "Reboot"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q22)",
      "images": [],
      "originalText": "Which of the following is a technology that is also used in measures against tampering of\nsoftware in IoT devices and verifies the digital signature of the OS, firmware, or other such\nsoftware when it is started, and only executes the software if the verification is successful?\na) GPU b) RAID\nc) Secure boot d) Reboot",
      "preferOriginal": false,
      "explanation": "Secure boot verifies trusted digital signatures before running boot software. Rejecting software that fails verification helps prevent execution of tampered firmware or operating system components."
    },
    {
      "number": 23,
      "text": "Which of the following is the appropriate description concerning a smart meter that is an IoT device?",
      "choices": [
        "It is embedded in a car navigation system or a game controller, and measures the extent of change in speed.",
        "It is installed in a house or other such place and automatically measures consumption of electricity and gas, and sends the data to the supplier by using a cellular network, etc.",
        "It deletes the data that is stored on a mobile terminal such as a smartphone or mobile PC from a remote location via a network.",
        "In addition to counting the number of steps, it identifies the walking route, detects the walking speed and height variations in the route, and calculates the energy consumed."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q23)",
      "images": [],
      "originalText": "Which of the following is the appropriate description concerning a smart meter that is an\nIoT device?\na) It is embedded in a car navigation system or a game controller, and measures the extent\nof change in speed.\nb) It is installed in a house or other such place and automatically measures consumption of\nelectricity and gas, and sends the data to the supplier by using a cellular network, etc.\nc) It deletes the data that is stored on a mobile terminal such as a smartphone or mobile PC\nfrom a remote location via a network.\nd) In addition to counting the number of steps, it identifies the walking route, detects the\nwalking speed and height variations in the route, and calculates the energy consumed.",
      "preferOriginal": false,
      "explanation": "A smart meter measures consumption and sends the readings over a communications network. This enables automatic reporting of electricity or gas usage."
    },
    {
      "number": 24,
      "text": "Which of the following is the appropriate reason for using a style sheet in the creation of a website?",
      "choices": [
        "The data between the web server and the web browser can be exchanged in a safe manner.",
        "The users can be notified of update to the website.",
        "The users of the website can be identified.",
        "The appearance of multiple web pages can be easily unified."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q24)",
      "images": [],
      "originalText": "Which of the following is the appropriate reason for using a style sheet in the creation of a\nwebsite?\na) The data between the web server and the web browser can be exchanged in a safe\nmanner.\nb) The users can be notified of update to the website.\nc) The users of the website can be identified.\nd) The appearance of multiple web pages can be easily unified.",
      "preferOriginal": false,
      "explanation": "A shared stylesheet defines presentation rules that multiple pages can reuse. Changing those shared rules makes it easier to maintain a consistent appearance across the website."
    },
    {
      "number": 25,
      "text": "A technique that represents a figure with pixels is considered. In the case of Fig. 1, when each row of the figure of 3×3pixels is read on a pixel-by-pixel basis from upper left to right and B and W are respectively written for black and white, the result is “BWBBBBBWB” (9 characters). Then, when a succession of n characters of “B”s or “W”s is represented as “Bn” or “Wn” respectively (where n is an integer of 2 or greater), Fig. 1 can be represented as “BWB5WB” (6 characters) and the compression ratio in this case is defined as 6/9 or 66.7%. When the figure of 5×5pixels in Fig. 2 is represented by using the same technique, what is the compression ratio in percentage? Fig. 1 Fig. 2",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q25)",
      "images": [
        "questions/2024/q025-1.webp"
      ],
      "originalText": "A technique that represents a figure with pixels is considered. In the case of Fig. 1, when\neach row of the figure of\n3×3pixels\nis read on a pixel-by-pixel basis from upper left to\nright and B and W are respectively written for black and white, the result is\n“BWBBBBBWB” (9 characters). Then, when a succession of n characters of “B”s or “W”s\nis represented as “Bn” or “Wn” respectively (where n is an integer of 2 or greater), Fig. 1\ncan be represented as “BWB5WB” (6 characters) and the compression ratio in this case is\ndefined as 6/9 or 66.7%. When the figure of 5×5pixels in Fig. 2 is represented by using\nthe same technique, what is the compression ratio in percentage?\nFig. 1 Fig. 2\na) 48.0 b) 52.0 c) 76.0 d) 88.0",
      "preferOriginal": true,
      "explanation": "The uncompressed 5 × 5 image contains 25 pixel characters. Applying the specified run-length rule produces 13 characters. The compression ratio is 13 ÷ 25 × 100 = 52.0%.",
      "equation": "Compressed characters ÷ Original characters × 100\n= 13 ÷ 25 × 100\n= 52.0%"
    },
    {
      "number": 26,
      "text": "There are “Sales”, “Customer” and “Product” tables in a relational database. Among lists A through C, which of the following contains all and only the lists that can be created from the data in these tables? Here, a solid underlined part represents a primary key, and a dashed underlined column represents a foreign key. Sales SalesNumber CustomerNumber ProductNumber SalesDate SalesAmount Customer CustomerNumber CustomerName Product ProductNumber ProductCategoryName ProductName A The list of customers who bought more than a certain amount of money during a certain period in the past B The list of products that were out of stock in the previous month C The ranking list for sales amount by product in the previous month",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q26)",
      "images": [
        "questions/2024/q026-1.webp"
      ],
      "originalText": "There are “Sales”, “Customer” and “Product” tables in a relational database. Among lists\nA through C, which of the following contains all and only the lists that can be created from\nthe data in these tables? Here, a solid underlined part represents a primary key, and a dashed\nunderlined column represents a foreign key.\nSales\nSalesNumber CustomerNumber ProductNumber SalesDate SalesAmount\nCustomer\nCustomerNumber CustomerName\nProduct\nProductNumber ProductCategoryName ProductName\nA The list of customers who bought more than a certain amount of money during a\ncertain period in the past\nB The list of products that were out of stock in the previous month\nC The ranking list for sales amount by product in the previous month\na) A, B b) A, B, C c) A, C d) B, C",
      "preferOriginal": true,
      "explanation": "Sales amounts, dates, customers and product identifiers support the customer purchase list and product sales ranking. There is no inventory or stockout history, so the out-of-stock list cannot be produced from these tables alone."
    },
    {
      "number": 27,
      "text": "In the description below concerning the design process of a relational database, which of the following is an appropriate combination of terms to be inserted into blanks A through C? Analyze the target business operations, identify the data which is used there, and create , consisting of entities and . On the basis of the created, design . A B C",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q27)",
      "images": [
        "questions/2024/q027-1.webp"
      ],
      "originalText": "In the description below concerning the design process of a relational database, which of\nthe following is an appropriate combination of terms to be inserted into blanks A through\nC?\nAnalyze the target business operations, identify the data which is used there, and create\n, consisting of entities and . On the basis of the created,\ndesign .\nA B C\na) instances E-R diagram functions\nb) instances flowchart tables\nc) relationships E-R diagram tables\nd) relationships flowchart functions",
      "preferOriginal": true,
      "explanation": "An entity-relationship diagram models entities and the relationships between them. The relational tables are then designed using that model."
    },
    {
      "number": 28,
      "text": "Which of the following is an appropriate combination of relational database manipulations I through III and relational operations? I Extracting the specified field (column) II Extracting the specified record (row) III Combining multiple tables into one (1) table I II III",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q28)",
      "images": [
        "questions/2024/q028-1.webp"
      ],
      "originalText": "Which of the following is an appropriate combination of relational database manipulations\nI through III and relational operations?\nI Extracting the specified field (column)\nII Extracting the specified record (row)\nIII Combining multiple tables into one (1) table\nI II III\na) Join Projection Selection\nb) Projection Join Selection\nc) Projection Selection Join\nd) Selection Projection Join",
      "preferOriginal": true,
      "explanation": "Projection chooses columns, selection chooses rows, and a join combines related tables. Match these definitions to operations I, II and III respectively."
    },
    {
      "number": 29,
      "text": "Which of the following is the appropriate explanation of commit in transaction processing?",
      "choices": [
        "When a transaction attempts to update shared data, other transactions are blocked from updating this data.",
        "The update is confirmed in the database. It is used when a transaction is processed normally.",
        "The database is returned to the status prior to the start of a transaction. It is used when the transaction is not processed normally for some reason.",
        "Multiple tables are made into one (1) table by using the columns as keys that relate the tables to each other."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q29)",
      "images": [],
      "originalText": "Which of the following is the appropriate explanation of commit in transaction processing?\na) When a transaction attempts to update shared data, other transactions are blocked from\nupdating this data.\nb) The update is confirmed in the database. It is used when a transaction is processed\nnormally.\nc) The database is returned to the status prior to the start of a transaction. It is used when\nthe transaction is not processed normally for some reason.\nd) Multiple tables are made into one (1) table by using the columns as keys that relate the\ntables to each other.",
      "preferOriginal": false,
      "explanation": "Commit confirms a successfully completed transaction's updates in the database. Rollback is the operation used to undo uncommitted work instead."
    },
    {
      "number": 30,
      "text": "When an e-mail is sent to multiple recipients, there are cases that no recipient of the e-mail should know the e-mail addresses of other recipients. In such cases, which of the following is an appropriate place where the e-mail addresses of the multiple recipients are entered?",
      "choices": [
        "Bcc",
        "Cc",
        "To",
        "Both To and Bcc"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q30)",
      "images": [],
      "originalText": "When an e-mail is sent to multiple recipients, there are cases that no recipient of the e-mail\nshould know the e-mail addresses of other recipients. In such cases, which of the following\nis an appropriate place where the e-mail addresses of the multiple recipients are entered?\na) Bcc b) Cc\nc) To d) Both To and Bcc",
      "preferOriginal": false,
      "explanation": "BCC hides the listed recipients' addresses from the other recipients. It is the appropriate field when the recipient list must not be disclosed."
    },
    {
      "number": 31,
      "text": "Which of the following is not an appropriate description of online storage?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q31)",
      "images": [
        "questions/2024/q031-1.webp"
      ],
      "originalText": "Which of the following is not an appropriate description of online storage?\na) It can be used not only from a computer, but also from a smartphone or a tablet, if the\ndevice is connected to the Internet.\nb) There is a free service that can be used with limited capacity and functionalities.\nc) There is a service that allows multiple registered users to share and edit the same file.\nd) If the capacity of the auxiliary storage unit built into the user’s computer or tablet is\nincreased, the capacity of online storage will also increase automatically.",
      "preferOriginal": true,
      "explanation": "Online storage capacity is supplied by the remote storage service and its plan. Adding local disk space to a device does not automatically increase that remote allocation."
    },
    {
      "number": 32,
      "text": "Which of the following is an example of damage incurred by the theft of cookies by a cross- site scripting attack or other attack?",
      "choices": [
        "The PC becomes infected by a virus.",
        "The files on the PC are sent to an outside destination.",
        "Web service accounts are hijacked.",
        "Intrusion into the network takes place over the wireless LAN."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q32)",
      "images": [],
      "originalText": "Which of the following is an example of damage incurred by the theft of cookies by a cross-\nsite scripting attack or other attack?\na) The PC becomes infected by a virus.\nb) The files on the PC are sent to an outside destination.\nc) Web service accounts are hijacked.\nd) Intrusion into the network takes place over the wireless LAN.",
      "preferOriginal": false,
      "explanation": "Cookies can contain session identifiers. If an attacker steals a usable session cookie, the attacker may impersonate the logged-in user and hijack the account."
    },
    {
      "number": 33,
      "text": "When a web page with URL “http://srv01.itpec.org/abc.html” is accessed on the Internet, what does “srv01” in the URL stand for?",
      "choices": [
        "The fact that “itpec.org” is a web service",
        "The file name of the web page where an access is requested",
        "The fact that HTTP or HTTPS can be specified as a communication protocol",
        "The host name of a computer that belongs to the domain name “itpec.org”"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q33)",
      "images": [],
      "originalText": "When a web page with URL “http://srv01.itpec.org/abc.html” is accessed on the Internet,\nwhat does “srv01” in the URL stand for?\na) The fact that “itpec.org” is a web service\nb) The file name of the web page where an access is requested\nc) The fact that HTTP or HTTPS can be specified as a communication protocol\nd) The host name of a computer that belongs to the domain name “itpec.org”",
      "preferOriginal": false,
      "explanation": "In srv01.itpec.org, itpec.org is the domain and srv01 identifies the host within it. The remaining /abc.html portion identifies the requested resource path."
    },
    {
      "number": 34,
      "text": "A large number of IP addresses are required in order to connect a massive number of IoT devices to the Internet, so the decision was made to use the Internet Protocol with IP addresses that have a length of 128 bits. Which of the following is this protocol?",
      "choices": [
        "IPv4",
        "IPv5",
        "IPv6",
        "IPv8"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q34)",
      "images": [],
      "originalText": "A large number of IP addresses are required in order to connect a massive number of IoT\ndevices to the Internet, so the decision was made to use the Internet Protocol with IP\naddresses that have a length of 128 bits. Which of the following is this protocol?\na) IPv4 b) IPv5 c) IPv6 d) IPv8",
      "preferOriginal": false,
      "explanation": "IPv6 uses 128-bit addresses, compared with IPv4's 32-bit addresses. Its much larger address space supports large numbers of connected devices."
    },
    {
      "number": 35,
      "text": "Which of the following is a definition of a zero-day attack that is a threat to information security?",
      "choices": [
        "It stops the target system of the attack within 24 hours from the start of the attack.",
        "It causes the onset immediately after the infection by using a virus without an incubation period.",
        "It exploits vulnerability before any countermeasure against the software vulnerability is made public.",
        "It immediately obtains confidential information from a third party through social engineering or eavesdropping."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q35)",
      "images": [],
      "originalText": "Which of the following is a definition of a zero-day attack that is a threat to information\nsecurity?\na) It stops the target system of the attack within 24 hours from the start of the attack.\nb) It causes the onset immediately after the infection by using a virus without an incubation\nperiod.\nc) It exploits vulnerability before any countermeasure against the software vulnerability is\nmade public.\nd) It immediately obtains confidential information from a third party through social\nengineering or eavesdropping.",
      "preferOriginal": false,
      "explanation": "A zero-day attack exploits a vulnerability before a corrective measure or patch is available to users. The absence of a publicly available countermeasure is the key clue."
    },
    {
      "number": 36,
      "text": "Which of the following is an appropriate action for the secure use of a smartphone?",
      "choices": [
        "Using it without updating OS and using the same version of the OS as at the time of purchase",
        "Enhancing the functions by making alterations such as jailbreak",
        "Setting up a feature that locks the screen with a password",
        "Downloading applications that are considered to be useful from any web site"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q36)",
      "images": [],
      "originalText": "Which of the following is an appropriate action for the secure use of a smartphone?\na) Using it without updating OS and using the same version of the OS as at the time of\npurchase\nb) Enhancing the functions by making alterations such as jailbreak\nc) Setting up a feature that locks the screen with a password\nd) Downloading applications that are considered to be useful from any web site",
      "preferOriginal": false,
      "explanation": "A password-protected screen lock makes unauthorized access to a lost or unattended smartphone harder. It is an appropriate basic protection for stored information."
    },
    {
      "number": 37,
      "text": "Security risk treatment in ISMS includes risk transfer, risk avoidance, risk acceptance, and risk reduction. Which of the following is an example of risk avoidance?",
      "choices": [
        "A security measure was taken, which lowered the possibility of problems arising.",
        "The company took out insurance in case a problem arises and causes damage.",
        "The risk was confirmed to be small, and it was decided that damage would be borne by the company when a problem arises.",
        "The company withdrew from the services that carried high risk."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q37)",
      "images": [],
      "originalText": "Security risk treatment in ISMS includes risk transfer, risk avoidance, risk acceptance, and\nrisk reduction. Which of the following is an example of risk avoidance?\na) A security measure was taken, which lowered the possibility of problems arising.\nb) The company took out insurance in case a problem arises and causes damage.\nc) The risk was confirmed to be small, and it was decided that damage would be borne by\nthe company when a problem arises.\nd) The company withdrew from the services that carried high risk.",
      "preferOriginal": false,
      "explanation": "Risk avoidance stops the activity that creates the risk. Withdrawing from a high-risk service avoids that particular exposure rather than merely accepting or reducing it."
    },
    {
      "number": 38,
      "text": "Which of the following is an appropriate description of the beginning of a URL indicating that TLS is used for communication between a web browser and a web server?",
      "choices": [
        "http://",
        "https://",
        "shttp://",
        "ssl://"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q38)",
      "images": [],
      "originalText": "Which of the following is an appropriate description of the beginning of a URL indicating\nthat TLS is used for communication between a web browser and a web server?\na) http:// b) https://\nc) shttp:// d) ssl://",
      "preferOriginal": false,
      "explanation": "An HTTPS URL indicates HTTP communication protected using TLS. Its prefix is https://."
    },
    {
      "number": 39,
      "text": "Which of the following is a technique that is used to detect that the received data has been tampered with?",
      "choices": [
        "Compression",
        "Digital signature",
        "Password authentication",
        "Filtering"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q39)",
      "images": [],
      "originalText": "Which of the following is a technique that is used to detect that the received data has been\ntampered with?\na) Compression b) Digital signature\nc) Password authentication d) Filtering",
      "preferOriginal": false,
      "explanation": "A digital signature can be verified to detect changes to signed data and authenticate the signing key's holder. Changes invalidate the signature verification result."
    },
    {
      "number": 40,
      "text": "Among I through III below, which of the following lists all and only the appropriate measures for preventing a PC from getting infected with viruses? I Applying a security patch to software II Striping across hard disks III Educating users about security",
      "choices": [
        "I",
        "I, II",
        "I, III",
        "II, III"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q40)",
      "images": [],
      "originalText": "Among I through III below, which of the following lists all and only the appropriate\nmeasures for preventing a PC from getting infected with viruses?\nI Applying a security patch to software\nII Striping across hard disks\nIII Educating users about security\na) I b) I, II c) I, III d) II, III",
      "preferOriginal": false,
      "explanation": "Security patches remove known weaknesses, and user education reduces unsafe behavior. Disk striping is a storage technique and does not by itself prevent virus infection."
    },
    {
      "number": 41,
      "text": "Which of the following is an appropriate example of phishing?",
      "choices": [
        "An attacker’s act of sending a command via network to a virus-infected PC and having it execute an illegal program",
        "Sending an e-mail that pretends to be from a financial institution, directing a user to a false web site, and acquiring a password",
        "Identifying a password by using a dictionary data that enumerates strings that are likely to be used as a password",
        "Sending a large number of packets from multiple computers to a target server and disabling the function of the server"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q41)",
      "images": [],
      "originalText": "Which of the following is an appropriate example of phishing?\na) An attacker’s act of sending a command via network to a virus-infected PC and having it\nexecute an illegal program\nb) Sending an e-mail that pretends to be from a financial institution, directing a user to a\nfalse web site, and acquiring a password\nc) Identifying a password by using a dictionary data that enumerates strings that are likely\nto be used as a password\nd) Sending a large number of packets from multiple computers to a target server and\ndisabling the function of the server",
      "preferOriginal": false,
      "explanation": "Phishing impersonates a trusted organization to deceive users into disclosing information. The fake financial-institution email and password-collecting website fit that pattern."
    },
    {
      "number": 42,
      "text": "Which of the following is an appropriate description concerning behavioral detection technology for protecting systems from unknown threats such as zero-day attacks?",
      "choices": [
        "It detects that a PC has not been used for a certain period of time, darkens the screen automatically, and displays a changing image.",
        "It suspends use of an account when it detects that an incorrect password is entered on a web site more than a set number of times.",
        "It continually monitors the activity of programs and stops any program with any suspicious activity, such as unusual communication to an outside destination.",
        "It changes users’ input on a web site into safe character strings when it detects any harmful character string that could cause malfunction."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q42)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning behavioral detection\ntechnology for protecting systems from unknown threats such as zero-day attacks?\na) It detects that a PC has not been used for a certain period of time, darkens the screen\nautomatically, and displays a changing image.\nb) It suspends use of an account when it detects that an incorrect password is entered on a\nweb site more than a set number of times.\nc) It continually monitors the activity of programs and stops any program with any\nsuspicious activity, such as unusual communication to an outside destination.\nd) It changes users’ input on a web site into safe character strings when it detects any\nharmful character string that could cause malfunction.",
      "preferOriginal": false,
      "explanation": "Behavioral detection looks for suspicious program activity rather than relying only on known malware signatures. It can help detect previously unknown threats."
    },
    {
      "number": 43,
      "text": "Which of the following is appropriate as the characteristic of single sign-on?",
      "choices": [
        "It is an effective countermeasure for information leakage because data is processed and stored on a server side, and data does not remain on devices.",
        "It implements high availability because when the data is saved, it is automatically distributed and stored on multiple disks.",
        "It implements high confidentiality because it employs authentication that uses fingerprint and iris in addition to a password.",
        "It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q43)",
      "images": [],
      "originalText": "Which of the following is appropriate as the characteristic of single sign-on?\na) It is an effective countermeasure for information leakage because data is processed and\nstored on a server side, and data does not remain on devices.\nb) It implements high availability because when the data is saved, it is automatically\ndistributed and stored on multiple disks.\nc) It implements high confidentiality because it employs authentication that uses fingerprint\nand iris in addition to a password.\nd) It implements high convenience because once a user is authenticated, he or she is\nallowed to use multiple services without any more authentication.",
      "preferOriginal": false,
      "explanation": "Single sign-on lets a user access multiple participating services after one authentication. Its main user benefit is reduced repeated sign-in work."
    },
    {
      "number": 44,
      "text": "Among the descriptions from A through C, which of the following is the list that contains all and only appropriate features of VPN? A Devices can communicate with each other by using a VPN wirelessly without passing through any access point. B A VPN uses a public network, etc., but it can be used like a private network of one’s own company. C The security status of computers can be checked by connecting them to a VPN.",
      "choices": [
        "A",
        "A, C",
        "B",
        "C"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q44)",
      "images": [],
      "originalText": "Among the descriptions from A through C, which of the following is the list that contains\nall and only appropriate features of VPN?\nA Devices can communicate with each other by using a VPN wirelessly without passing\nthrough any access point.\nB A VPN uses a public network, etc., but it can be used like a private network of one’s\nown company.\nC The security status of computers can be checked by connecting them to a VPN.\na) A b) A, C c) B d) C",
      "preferOriginal": false,
      "explanation": "A VPN creates a logical private connection over a shared network. It does not inherently replace wireless access points or perform a device security inspection, so only statement B is a general VPN feature."
    },
    {
      "number": 45,
      "text": "When an attacker makes an unauthorized intrusion into a computer, the attacker sometimes changes a program or settings in the computer in order to make further intrusions into the computer easier. Which of the following is the most appropriate term to express the method used by the attacker for further intrusions into the computer?",
      "choices": [
        "Tapping",
        "Backdoor",
        "Phishing",
        "Port scan"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q45)",
      "images": [],
      "originalText": "When an attacker makes an unauthorized intrusion into a computer, the attacker sometimes\nchanges a program or settings in the computer in order to make further intrusions into the\ncomputer easier. Which of the following is the most appropriate term to express the method\nused by the attacker for further intrusions into the computer?\na) Tapping b) Backdoor\nc) Phishing d) Port scan",
      "preferOriginal": false,
      "explanation": "A backdoor is a hidden or unauthorized access route that bypasses normal controls. Attackers may install one to make future access easier."
    },
    {
      "number": 46,
      "text": "In order to achieve a non-stop system, which of the following is an appropriate item to be considered during the design of the system architecture?",
      "choices": [
        "Partitioning of software into components",
        "Encryption of data",
        "Reduction in power consumption of hardware",
        "Dual redundancy of hardware"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q46)",
      "images": [],
      "originalText": "In order to achieve a non-stop system, which of the following is an appropriate item to be\nconsidered during the design of the system architecture?\na) Partitioning of software into components\nb) Encryption of data\nc) Reduction in power consumption of hardware\nd) Dual redundancy of hardware",
      "preferOriginal": false,
      "explanation": "Redundant hardware can allow a second component to continue service when the first fails. This supports availability and the objective of continuous operation."
    },
    {
      "number": 47,
      "text": "A detailed design document of software is created as an output of software detailed design. Which of the following is the person who takes charge of the next process of development upon receipt of this output?",
      "choices": [
        "System auditor",
        "System operator in-charge",
        "System user",
        "Programmer"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q47)",
      "images": [],
      "originalText": "A detailed design document of software is created as an output of software detailed\ndesign. Which of the following is the person who takes charge of the next process of\ndevelopment upon receipt of this output?\na) System auditor b) System operator in-charge\nc) System user d) Programmer",
      "preferOriginal": false,
      "explanation": "The detailed software design tells the programmer how to implement the software. Coding is the development activity that follows that design output."
    },
    {
      "number": 48,
      "text": "Mr. A, a developer, is analyzing and verifying the internal structure of a program in order to determine whether input data is processed as intended. Which of the following is the test that Mr. A is currently conducting?",
      "choices": [
        "System test",
        "Top-down test",
        "Black box test",
        "White box test"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q48)",
      "images": [],
      "originalText": "Mr. A, a developer, is analyzing and verifying the internal structure of a program in order\nto determine whether input data is processed as intended. Which of the following is the test\nthat Mr. A is currently conducting?\na) System test b) Top-down test\nc) Black box test d) White box test",
      "preferOriginal": false,
      "explanation": "White-box testing uses knowledge of a program's internal structure and logic. Analyzing internal processing paths matches that technique."
    },
    {
      "number": 49,
      "text": "Among the descriptions A through D concerning software installation, which of the following lists all and only the appropriate descriptions? A: In a new development, installation is performed without delay by the deadline without the creation of an implementation plan. B: After software installation is performed, an implementation plan and an implementation report must be created promptly and agreement obtained. C: When software is developed in-house by a company, the scope of impact is internal, so installation is performed after the creation of an implementation plan, and agreement on the implementation plan is obtained after implementation. D: When a function is to be added to software in production system, an implementation plan is created for the software with the added function, agreement is obtained, and software installation is performed.",
      "choices": [
        "A, C",
        "B, C, D",
        "B, D",
        "D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q49)",
      "images": [],
      "originalText": "Among the descriptions A through D concerning software installation, which of the\nfollowing lists all and only the appropriate descriptions?\nA: In a new development, installation is performed without delay by the deadline without\nthe creation of an implementation plan.\nB: After software installation is performed, an implementation plan and an\nimplementation report must be created promptly and agreement obtained.\nC: When software is developed in-house by a company, the scope of impact is internal,\nso installation is performed after the creation of an implementation plan, and\nagreement on the implementation plan is obtained after implementation.\nD: When a function is to be added to software in production system, an implementation\nplan is created for the software with the added function, agreement is obtained, and\nsoftware installation is performed.\na) A, C b) B, C, D c) B, D d) D",
      "preferOriginal": false,
      "explanation": "An implementation plan should be created and agreed upon before installation. Statement D follows that sequence for a production-system change; the others obtain agreement too late or omit planning."
    },
    {
      "number": 50,
      "text": "Which of the following is the most appropriate term expressing initiatives to improve the services where the development side and the operations side of the system cooperate to proactively automate operations of the system and transition to the new production system, and release new functions?",
      "choices": [
        "DevOps",
        "RAD",
        "Object-oriented development",
        "Test-driven development"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q50)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term expressing initiatives to improve the\nservices where the development side and the operations side of the system cooperate to\nproactively automate operations of the system and transition to the new production system,\nand release new functions?\na) DevOps b) RAD\nc) Object-oriented development d) Test-driven development",
      "preferOriginal": false,
      "explanation": "DevOps brings development and operations together and uses automation to improve releases and operation. The described cooperative work and automated transition fit DevOps."
    },
    {
      "number": 51,
      "text": "Which of the following is an appropriate description concerning project scope management?",
      "choices": [
        "It defines and manages deliverables such as the products and services to be created by a project, as well as the activities necessary for their completion.",
        "It manages the activity path that requires the longest time through the entire project.",
        "It manages the events that may be advantageous or disadvantageous for the results of the project.",
        "It coordinates the stakeholders of the implementation and results of the project."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q51)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning project scope\nmanagement?\na) It defines and manages deliverables such as the products and services to be created by a\nproject, as well as the activities necessary for their completion.\nb) It manages the activity path that requires the longest time through the entire project.\nc) It manages the events that may be advantageous or disadvantageous for the results of the\nproject.\nd) It coordinates the stakeholders of the implementation and results of the project.",
      "preferOriginal": false,
      "explanation": "Scope management defines the deliverables and the work required to produce them. It controls what is included in the project."
    },
    {
      "number": 52,
      "text": "Which of the following is an appropriate description concerning the water fall model known as one of software development models?",
      "choices": [
        "It is a technique in object-oriented development for making improvements through trial and error by repeatedly going back and forth between design and programming.",
        "It is a technique for making improvements by repeating the development process for each subsystem while responding to requests from users.",
        "It is a technique that divides the processes of system development into stages, and based upon the output of previous processes, performs later processes in order.",
        "It is a technique that creates a prototype at an early stage of system development, and defines requirements and specifications with input from user comments."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q52)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning the water fall model\nknown as one of software development models?\na) It is a technique in object-oriented development for making improvements through trial\nand error by repeatedly going back and forth between design and programming.\nb) It is a technique for making improvements by repeating the development process for\neach subsystem while responding to requests from users.\nc) It is a technique that divides the processes of system development into stages, and based\nupon the output of previous processes, performs later processes in order.\nd) It is a technique that creates a prototype at an early stage of system development, and\ndefines requirements and specifications with input from user comments.",
      "preferOriginal": false,
      "explanation": "The waterfall model organizes development into sequential stages. Later stages use outputs produced and approved in earlier stages."
    },
    {
      "number": 53,
      "text": "Which of the following is an appropriate metrics for program quality in a software development project?",
      "choices": [
        "Budget at planning",
        "Return on investment",
        "Delivery date",
        "Number of identified bugs"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q53)",
      "images": [],
      "originalText": "Which of the following is an appropriate metrics for program quality in a software\ndevelopment project?\na) Budget at planning b) Return on investment\nc) Delivery date d) Number of identified bugs",
      "preferOriginal": false,
      "explanation": "The number of identified bugs is a defect-related quality measure. It provides information about program quality when interpreted with factors such as size and test coverage."
    },
    {
      "number": 54,
      "text": "When the outsourced development project of a system has passed beyond its halfway mark, there is a request from the outsourcer for adding a function to the system. Which of the following is the most appropriate action of the project manager?",
      "choices": [
        "Accepting the request and securing the budget and staff members",
        "Declining the request by explaining that changes after halfway mark are generally not accepted",
        "Taking into account the impact on the cost and schedule, and following the procedure of change management",
        "Quickly updating the baseline of scope since only the project scope will be affected"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q54)",
      "images": [],
      "originalText": "When the outsourced development project of a system has passed beyond its halfway mark,\nthere is a request from the outsourcer for adding a function to the system. Which of the\nfollowing is the most appropriate action of the project manager?\na) Accepting the request and securing the budget and staff members\nb) Declining the request by explaining that changes after halfway mark are generally not\naccepted\nc) Taking into account the impact on the cost and schedule, and following the procedure of\nchange management\nd) Quickly updating the baseline of scope since only the project scope will be affected",
      "preferOriginal": false,
      "explanation": "A requested addition should go through change management. The manager assesses effects on cost, schedule and other commitments before deciding how to handle the change."
    },
    {
      "number": 55,
      "text": "Which of the following is the appropriate explanation of a master schedule in a system development project where processes from requirements definition to installation are performed?",
      "choices": [
        "A schedule that describes in detail the activities of one (1) week",
        "A schedule that describes the activities of one (1) day, the start and end time of the activities, and the persons in charge",
        "A schedule that describes in detail the activities of the main processes",
        "A schedule that aggregates the main deliverables and activities of the entire project"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q55)",
      "images": [],
      "originalText": "Which of the following is the appropriate explanation of a master schedule in a system\ndevelopment project where processes from requirements definition to installation are\nperformed?\na) A schedule that describes in detail the activities of one (1) week\nb) A schedule that describes the activities of one (1) day, the start and end time of the\nactivities, and the persons in charge\nc) A schedule that describes in detail the activities of the main processes\nd) A schedule that aggregates the main deliverables and activities of the entire project",
      "preferOriginal": false,
      "explanation": "A master schedule summarizes the major activities and deliverables across the complete project. It provides an overall timeline rather than every detailed task."
    },
    {
      "number": 56,
      "text": "Which of the following is the appropriate description concerning WBS created in a project?",
      "choices": [
        "A WBS defines the details of activities to be implemented in a project and the deliverables, and can therefore be used as a basis for estimating the number of person- days.",
        "Activities outside the scope of the project are also examined and included in the WBS.",
        "The WBS breaks down the deliverables and the details of activities up to the same hierarchy in all projects.",
        "When a project member performs similar activities within the scope, the activities need not be described in the WBS."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q56)",
      "images": [],
      "originalText": "Which of the following is the appropriate description concerning WBS created in a project?\na) A WBS defines the details of activities to be implemented in a project and the\ndeliverables, and can therefore be used as a basis for estimating the number of person-\ndays.\nb) Activities outside the scope of the project are also examined and included in the WBS.\nc) The WBS breaks down the deliverables and the details of activities up to the same\nhierarchy in all projects.\nd) When a project member performs similar activities within the scope, the activities need\nnot be described in the WBS.",
      "preferOriginal": false,
      "explanation": "A WBS identifies and organizes project work and deliverables. Breaking the work into manageable pieces provides a basis for estimating effort in person-days."
    },
    {
      "number": 57,
      "text": "Company A orders the development of a system to Company B and starts a system development project. Among (i) through (iv) below who are concerned with the project, which of the following lists all and only the stakeholders of the project? (i) Company A’s management executives (ii) Company A’s user department (iii) Company B’s project manager (iv) Company B’s business partner that provides technical support",
      "choices": [
        "(i), (ii), (iv)",
        "(i), (ii), (iii), (iv)",
        "(ii), (iii), (iv)",
        "(ii), (iv)"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q57)",
      "images": [],
      "originalText": "Company A orders the development of a system to Company B and starts a system\ndevelopment project. Among (i) through (iv) below who are concerned with the project,\nwhich of the following lists all and only the stakeholders of the project?\n(i) Company A’s management executives\n(ii) Company A’s user department\n(iii) Company B’s project manager\n(iv) Company B’s business partner that provides technical support\na) (i), (ii), (iv) b) (i), (ii), (iii), (iv)\nc) (ii), (iii), (iv) d) (ii), (iv)",
      "preferOriginal": false,
      "explanation": "Stakeholders include people or organizations that affect or are affected by the project. All four groups listed have an interest in or contribution to the system development project."
    },
    {
      "number": 58,
      "text": "Which of the following is an appropriate description concerning the IT service management activity?",
      "choices": [
        "It defines the maturity level of a process in a system development organization on a level of one (1) to five (5), and supports improvement.",
        "It defines roles and responsibilities and creates a procurement plan for staff members in order to complete a system development project.",
        "It defines an index concerning system availability, acquires the availability record, and performs planning, measurements, and improvement in order to achieve an objective.",
        "It clarifies the deliverables that are required for a new system to be developed and the activities that are required for the creation of the deliverables."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q58)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning the IT service\nmanagement activity?\na) It defines the maturity level of a process in a system development organization on a level\nof one (1) to five (5), and supports improvement.\nb) It defines roles and responsibilities and creates a procurement plan for staff members in\norder to complete a system development project.\nc) It defines an index concerning system availability, acquires the availability record, and\nperforms planning, measurements, and improvement in order to achieve an objective.\nd) It clarifies the deliverables that are required for a new system to be developed and the\nactivities that are required for the creation of the deliverables.",
      "preferOriginal": false,
      "explanation": "IT service management includes setting service targets, measuring actual performance and improving the service. The availability planning and monitoring activity follows that approach."
    },
    {
      "number": 59,
      "text": "Which of the following activities aims at the maintenance and improvement of the service level through monitoring and reviewing the service status in order to implement the terms of agreement of an SLA?",
      "choices": [
        "CSR",
        "ERP",
        "SLM",
        "SWOT"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q59)",
      "images": [],
      "originalText": "Which of the following activities aims at the maintenance and improvement of the service\nlevel through monitoring and reviewing the service status in order to implement the terms of\nagreement of an SLA?\na) CSR b) ERP c) SLM d) SWOT",
      "preferOriginal": false,
      "explanation": "Service level management maintains and improves agreed service levels. It monitors actual performance against an SLA and reviews the results."
    },
    {
      "number": 60,
      "text": "Which of the following is an appropriate measure of facility management that maintains and protects facilities and equipment of information systems?",
      "choices": [
        "Reviewing the fuel replenishment plan in order to maintain the appropriate duration that power can be generated with a private power generation system",
        "Introducing asset management software in order to manage all the company’s software centrally",
        "Standardizing how to set a screen saver in order to prevent unauthorized use of the PCs",
        "Reviewing the network firewall settings in order to enhance the prevention of unauthorized network access to the information systems"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q60)",
      "images": [],
      "originalText": "Which of the following is an appropriate measure of facility management that maintains\nand protects facilities and equipment of information systems?\na) Reviewing the fuel replenishment plan in order to maintain the appropriate duration that\npower can be generated with a private power generation system\nb) Introducing asset management software in order to manage all the company’s software\ncentrally\nc) Standardizing how to set a screen saver in order to prevent unauthorized use of the PCs\nd) Reviewing the network firewall settings in order to enhance the prevention of\nunauthorized network access to the information systems",
      "preferOriginal": false,
      "explanation": "Facility management includes ensuring that the physical environment can support the information system. A workable fuel replenishment plan helps keep backup generation available for the required period."
    },
    {
      "number": 61,
      "text": "Which of the following is the most appropriate example concerning a chatbot that uses AI?",
      "choices": [
        "By connecting everything over the Internet, the switch of the air conditioner in one’s house can be turned on by a smart device from the outside of the house.",
        "By recognizing and learning a large number of images of various animals, a computer can differentiate between the images of a dog and a cat.",
        "If questions on how to use a product are entered, a person who has detailed knowledge submits a reply or advise.",
        "If a user enters the desired functions of a product on a sales site of products, the computer introduces recommended products in an interactive manner."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q61)",
      "images": [],
      "originalText": "Which of the following is the most appropriate example concerning a chatbot that uses AI?\na) By connecting everything over the Internet, the switch of the air conditioner in one’s\nhouse can be turned on by a smart device from the outside of the house.\nb) By recognizing and learning a large number of images of various animals, a computer\ncan differentiate between the images of a dog and a cat.\nc) If questions on how to use a product are entered, a person who has detailed knowledge\nsubmits a reply or advise.\nd) If a user enters the desired functions of a product on a sales site of products, the\ncomputer introduces recommended products in an interactive manner.",
      "preferOriginal": false,
      "explanation": "An AI chatbot handles a conversation with the user and provides automated responses or recommendations. The interactive product recommendation example matches that function."
    },
    {
      "number": 62,
      "text": "In order to improve the value of an IT service to be provided, it is necessary to consider the balance of three (3) items, namely the offer price of the service, the functions of the service, that is, what the service can offer, and a guarantee of the service with maintained availability. Which of the following is a description that corresponds to guarantee of the service of an instant messenger?",
      "choices": [
        "The service is usable for 24 hours a day, 365 days a year.",
        "The service is linkable with other software such as games.",
        "The service is usable for free.",
        "The service is usable with icons created by one’s own self rather than characters."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q62)",
      "images": [],
      "originalText": "In order to improve the value of an IT service to be provided, it is necessary to consider the\nbalance of three (3) items, namely the offer price of the service, the functions of the service,\nthat is, what the service can offer, and a guarantee of the service with maintained\navailability. Which of the following is a description that corresponds to guarantee of the\nservice of an instant messenger?\na) The service is usable for 24 hours a day, 365 days a year.\nb) The service is linkable with other software such as games.\nc) The service is usable for free.\nd) The service is usable with icons created by one’s own self rather than characters.",
      "preferOriginal": false,
      "explanation": "A service guarantee describes conditions such as availability and continuity rather than its feature list. Being usable 24 hours a day, every day, is an availability commitment."
    },
    {
      "number": 63,
      "text": "Which of the following is an appropriate description of the targets of a system audit?",
      "choices": [
        "Information systems used in private companies are not targeted.",
        "Information systems that do not make use of the Internet are not targeted.",
        "Activities other than accounting activities are not targeted.",
        "Activities that do not make use of information systems are not targeted."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q63)",
      "images": [],
      "originalText": "Which of the following is an appropriate description of the targets of a system audit?\na) Information systems used in private companies are not targeted.\nb) Information systems that do not make use of the Internet are not targeted.\nc) Activities other than accounting activities are not targeted.\nd) Activities that do not make use of information systems are not targeted.",
      "preferOriginal": false,
      "explanation": "A system audit examines information systems and activities related to their use and control. Activities entirely unrelated to information systems are outside that particular audit's scope."
    },
    {
      "number": 64,
      "text": "Which of the following is the term for the assignment of employees’ role that applies mutual checks among employees for the purpose of reducing the risk of misconduct or errors in work from the standpoint of internal control?",
      "choices": [
        "Delegation of authority",
        "Segregation of duties",
        "Monitoring",
        "Diversification of risk"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q64)",
      "images": [],
      "originalText": "Which of the following is the term for the assignment of employees’ role that applies\nmutual checks among employees for the purpose of reducing the risk of misconduct or\nerrors in work from the standpoint of internal control?\na) Delegation of authority b) Segregation of duties\nc) Monitoring d) Diversification of risk",
      "preferOriginal": false,
      "explanation": "Segregation of duties divides responsibilities so that employees can check one another's work. It reduces opportunities for unchecked errors and misconduct."
    },
    {
      "number": 65,
      "text": "The information system department implements the development and operation of the order entry system and the accounting system. The user of the order entry system is the sales department and the user of the accounting system is the accounting department. Which of the following is the appropriate description concerning internal control of financial reports?",
      "choices": [
        "Internal control is a matter of the accounting system, and therefore, the sales department does not participate in internal control, but the accounting department and the information system department do.",
        "Internal control is a matter concerning accounting activities, and therefore, only the accounting department participates in internal control.",
        "Internal control is a matter concerning activities that impact external reports such as financial statements, and therefore, the sales department, the accounting department and the information system department participate in internal control.",
        "Internal control is a matter concerning activities that involve manual operation, and therefore, the information system department does not participate in internal control, but the sales department and the accounting department do."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q65)",
      "images": [],
      "originalText": "The information system department implements the development and operation of the\norder entry system and the accounting system. The user of the order entry system is the\nsales department and the user of the accounting system is the accounting department.\nWhich of the following is the appropriate description concerning internal control of\nfinancial reports?\na) Internal control is a matter of the accounting system, and therefore, the sales department\ndoes not participate in internal control, but the accounting department and the\ninformation system department do.\nb) Internal control is a matter concerning accounting activities, and therefore, only the\naccounting department participates in internal control.\nc) Internal control is a matter concerning activities that impact external reports such as\nfinancial statements, and therefore, the sales department, the accounting department and\nthe information system department participate in internal control.\nd) Internal control is a matter concerning activities that involve manual operation, and\ntherefore, the information system department does not participate in internal control, but\nthe sales department and the accounting department do.",
      "preferOriginal": false,
      "explanation": "Controls over financial reporting involve every function whose activities affect the reports. Sales transactions, accounting and the supporting IT systems all contribute to that process."
    },
    {
      "number": 66,
      "text": "Which of the following is the scope that the CFO, one of the positions involved in corporate management, bears responsibility for?",
      "choices": [
        "Technology",
        "Finance",
        "Information",
        "Personnel"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q66)",
      "images": [],
      "originalText": "Which of the following is the scope that the CFO, one of the positions involved in corporate\nmanagement, bears responsibility for?\na) Technology b) Finance c) Information d) Personnel",
      "preferOriginal": false,
      "explanation": "The chief financial officer, or CFO, has responsibility for financial management. Finance is therefore the relevant scope."
    },
    {
      "number": 67,
      "text": "There are activities A, B, and C that use machines X and Y, and it is required in each activity that the machines are used in the sequence of machine X, machine Y. When the use times of machines X and Y in each activity are as shown in the table below, which of the following is the sequence of the activities where the total time required to complete the three (3) activities becomes minimum? Here, machines X and Y can be used in parallel as shown in the figure below, but two (2) or more tasks cannot be performed simultaneously with any machine and the sequence of activities must be the same for both machines. Table Use times of machines X and Y in each activity Use time of machine X Use time of machine Y Activity A 8 minutes 10 minutes Activity B 10 minutes 5 minutes Activity C 6 minutes 8 minutes Machine X Activity A (8 minutes) Activity B (10 minutes) Activity C (6 minutes) Machine Y Activity A (10 minutes) Activity B (5 minutes) Activity C (8 minutes) Figure Schedule of using the machines (Example of when activities are performed in the sequence A → B → C)",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q67)",
      "images": [
        "questions/2024/q067-1.webp"
      ],
      "originalText": "There are activities A, B, and C that use machines X and Y, and it is required in each activity\nthat the machines are used in the sequence of machine X, machine Y. When the use times\nof machines X and Y in each activity are as shown in the table below, which of the following\nis the sequence of the activities where the total time required to complete the three (3)\nactivities becomes minimum? Here, machines X and Y can be used in parallel as shown in\nthe figure below, but two (2) or more tasks cannot be performed simultaneously with any\nmachine and the sequence of activities must be the same for both machines.\nTable Use times of machines X and Y in each activity\nUse time of machine X Use time of machine Y\nActivity A 8 minutes 10 minutes\nActivity B 10 minutes 5 minutes\nActivity C 6 minutes 8 minutes\nMachine X Activity A (8 minutes) Activity B (10 minutes) Activity C (6 minutes)\nMachine Y Activity A (10 minutes) Activity B (5 minutes) Activity C (8 minutes)\nFigure Schedule of using the machines\n(Example of when activities are performed in the sequence A → B → C)\na) A → B → C\nb) A → C → B\nc) C → A → B\nd) C → B → A",
      "preferOriginal": true,
      "explanation": "For C → A → B, machine X finishes at minutes 6, 14 and 24. Machine Y finishes the same jobs at minutes 14, 24 and 29. Comparing the allowed schedules shows this order gives the minimum total time of 29 minutes.",
      "equation": "Order: C → A → B\nMachine X: C 0–6 | A 6–14 | B 14–24\nMachine Y: C 6–14 | A 14–24 | B 24–29\nCompletion time: 29 minutes"
    },
    {
      "number": 68,
      "text": "The table below is a part of the ingredients table of a steamed meat dumplings lunch box. How many grams of meat is necessary to prepare 100 steamed meat dumplings lunch boxes? Here, the steamed meat dumplings lunch boxes do not contain any dish that uses meat other than the steamed meat dumplings, and there is no loss of ingredients in the preparing process. Product Quantity Unit of Ingredients Quantity of Unit of to be quantity to ingredients quantity of prepared be prepared ingredients Steamed 1 unit Steamed meat 5 units meat dumplings dumplings Rice 300 grams lunch box … Steamed 1 unit Dumplings 1 sheet meat wrapper dumplings Dumplings 20 grams stuffing … Dumplings 100 grams Meat 60 grams stuffing Onion 30 grams … …",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q68)",
      "images": [
        "questions/2024/q068-1.webp"
      ],
      "originalText": "The table below is a part of the ingredients table of a steamed meat dumplings lunch box.\nHow many grams of meat is necessary to prepare 100 steamed meat dumplings lunch\nboxes? Here, the steamed meat dumplings lunch boxes do not contain any dish that uses\nmeat other than the steamed meat dumplings, and there is no loss of ingredients in the\npreparing process.\nProduct Quantity Unit of Ingredients Quantity of Unit of\nto be quantity to ingredients quantity of\nprepared be prepared ingredients\nSteamed 1 unit Steamed meat 5 units\nmeat dumplings\ndumplings\nRice 300 grams\nlunch box\n…\nSteamed 1 unit Dumplings 1 sheet\nmeat wrapper\ndumplings Dumplings 20 grams\nstuffing\n…\nDumplings 100 grams Meat 60 grams\nstuffing Onion 30 grams\n…\n…\na) 1,200 b) 3,000 c) 6,000 d) 30,000",
      "preferOriginal": true,
      "explanation": "Each box has five dumplings, each dumpling uses 20 g of stuffing, and meat is 60% of the stuffing. For 100 boxes, meat needed is 100 × 5 × 20 × 0.60 = 6,000 g.",
      "steps": [
        "100 lunch boxes × 5 dumplings = 500 dumplings.",
        "500 × 20 g stuffing = 10,000 g stuffing.",
        "60 g of each 100 g of stuffing is meat."
      ],
      "equation": "10,000 g × 0.60 = 6,000 g meat"
    },
    {
      "number": 69,
      "text": "Which of the following represents the “E” in ROE that is an index for the measurement of a company’s profitability?",
      "choices": [
        "Earnings",
        "Employee",
        "Enterprise",
        "Equity"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q69)",
      "images": [],
      "originalText": "Which of the following represents the “E” in ROE that is an index for the measurement of\na company’s profitability?\na) Earnings b) Employee\nc) Enterprise d) Equity",
      "preferOriginal": false,
      "explanation": "ROE means return on equity. It relates the company's earnings to the shareholders' equity used to generate them."
    },
    {
      "number": 70,
      "text": "Which of the following is the most appropriate terminology for referring to a method that uses AI, IoT, and other such IT for personnel-related work such as personnel evaluations and recruitment with aims including the improvement of a company’s personnel functions and achieving reform in working styles?",
      "choices": [
        "e-Learning",
        "Fintech",
        "HR Tech",
        "Competency"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q70)",
      "images": [],
      "originalText": "Which of the following is the most appropriate terminology for referring to a method that\nuses AI, IoT, and other such IT for personnel-related work such as personnel evaluations\nand recruitment with aims including the improvement of a company’s personnel functions\nand achieving reform in working styles?\na) e-Learning b) Fintech\nc) HR Tech d) Competency",
      "preferOriginal": false,
      "explanation": "HR Tech applies digital technology to human resources activities such as recruiting, evaluation and personnel management. The described use of AI and IoT in personnel work fits that term."
    },
    {
      "number": 71,
      "text": "Which of the following is most appropriate as the person with responsibility for an information systems strategy that is created on the basis of a business strategy?",
      "choices": [
        "The CIO",
        "The head of the user department of mission-critical systems",
        "The project manager for system development",
        "The head of system planning"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q71)",
      "images": [],
      "originalText": "Which of the following is most appropriate as the person with responsibility for an\ninformation systems strategy that is created on the basis of a business strategy?\na) The CIO\nb) The head of the user department of mission-critical systems\nc) The project manager for system development\nd) The head of system planning",
      "preferOriginal": false,
      "explanation": "The chief information officer, or CIO, is responsible for information systems direction and its alignment with business strategy."
    },
    {
      "number": 72,
      "text": "Which of the following is an index that indicates the efficiency of capital utilization?",
      "choices": [
        "Ratio of operating profit to net sales",
        "Equity to total assets",
        "Total capital turnover",
        "Break-even point ratio"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q72)",
      "images": [],
      "originalText": "Which of the following is an index that indicates the efficiency of capital utilization?\na) Ratio of operating profit to net sales b) Equity to total assets\nc) Total capital turnover d) Break-even point ratio",
      "preferOriginal": false,
      "explanation": "Total capital turnover compares sales with the capital used to produce them. It indicates how efficiently capital is being used to generate revenue."
    },
    {
      "number": 73,
      "text": "Which of the following is an example of a Non-Disclosure Agreement (NDA)?",
      "choices": [
        "A contract specifying the service content to be provided, which is agreed between the service provider and the customer before the provision of the IT service",
        "A contract specifying that the vendor of computer equipment bears the responsibility of transferring the property right, and that the buyer bears the responsibility of paying the charges",
        "A contract specifying the obligation of the outsourcer and outsourcee to maintain confidentiality of the secret information of a party that becomes known to the other party during system development",
        "A contract specifying that an outsourcee to whom the installation of a general-purpose software package has been outsourced performs the task at the outsourcee’s own discretion and responsibility, and receives payment upon the completion of the task"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q73)",
      "images": [],
      "originalText": "Which of the following is an example of a Non-Disclosure Agreement (NDA)?\na) A contract specifying the service content to be provided, which is agreed between the\nservice provider and the customer before the provision of the IT service\nb) A contract specifying that the vendor of computer equipment bears the responsibility of\ntransferring the property right, and that the buyer bears the responsibility of paying the\ncharges\nc) A contract specifying the obligation of the outsourcer and outsourcee to maintain\nconfidentiality of the secret information of a party that becomes known to the other party\nduring system development\nd) A contract specifying that an outsourcee to whom the installation of a general-purpose\nsoftware package has been outsourced performs the task at the outsourcee’s own\ndiscretion and responsibility, and receives payment upon the completion of the task",
      "preferOriginal": false,
      "explanation": "A non-disclosure agreement sets obligations to protect confidential information learned during a business relationship. The development contract's confidentiality obligations are an NDA example."
    },
    {
      "number": 74,
      "text": "From the viewpoint of corporate governance, which of the following is the most appropriate method of strengthening the functions of monitoring and supervising the decision-making process of the management?",
      "choices": [
        "Installing a camera for monitoring the entry and exit of the president’s office",
        "Periodically requesting a private detective to investigate the conduct of the management",
        "Appointing some outside directors",
        "Employing law school graduates as members of the internal audit department"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q74)",
      "images": [],
      "originalText": "From the viewpoint of corporate governance, which of the following is the most\nappropriate method of strengthening the functions of monitoring and supervising the\ndecision-making process of the management?\na) Installing a camera for monitoring the entry and exit of the president’s office\nb) Periodically requesting a private detective to investigate the conduct of the management\nc) Appointing some outside directors\nd) Employing law school graduates as members of the internal audit department",
      "preferOriginal": false,
      "explanation": "Outside directors can provide more independent monitoring of management decisions. This helps strengthen corporate governance and oversight."
    },
    {
      "number": 75,
      "text": "Which of the following is an international standard for environmental management systems developed by ISO?",
      "choices": [
        "ISO 9000",
        "ISO 14001",
        "ISO/IEC 20000",
        "ISO/IEC 27000"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q75)",
      "images": [],
      "originalText": "Which of the following is an international standard for environmental management systems\ndeveloped by ISO?\na) ISO 9000 b) ISO 14001\nc) ISO/IEC 20000 d) ISO/IEC 27000",
      "preferOriginal": false,
      "explanation": "ISO 14001 specifies requirements for environmental management systems. It is the environmental standard among the options."
    },
    {
      "number": 76,
      "text": "Which of the following examples of the sending of e-mail is inappropriate from the standpoint of the protection of personal information?",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q76)",
      "images": [
        "questions/2024/q076-1.webp"
      ],
      "originalText": "Which of the following examples of the sending of e-mail is inappropriate from the\nstandpoint of the protection of personal information?\na) In responding to an e-mail asking questions about a product, you placed the e-mail\naddresses of multiple customers in the “CC” field as you want these customers to read\nthe response.\nb) You created one (1) e-mail message for each of your top 10 customers with the largest\namount of mail-order purchases, in order to inform each customer of a corresponding\nprize.\nc) You sent an e-mail message with information on an alumni meeting, and addressed the\nmessage to the e-mail addresses of all members listed in the alumni association directory\nthat is distributed to all members.\nd) When you were arranging a special spring exhibition, you placed the e-mail addresses of\nselected members in the “BCC” field of an e-mail message and sent the message\nsoliciting exhibits.",
      "preferOriginal": true,
      "explanation": "Putting multiple customers' addresses in CC reveals those addresses to the other recipients. That disclosure is inappropriate when it is not authorized or necessary for the response."
    },
    {
      "number": 77,
      "text": "Which of the following is the most appropriate as an example of an enhancement activity for compliance?",
      "choices": [
        "Expansion of a program to support the community service activities of employees",
        "Education for employees concerning laws and rules that must be followed",
        "Acquisition of another company’s business for swift business deployment",
        "Withdrawal from businesses where it is difficult to make profit"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q77)",
      "images": [],
      "originalText": "Which of the following is the most appropriate as an example of an enhancement activity\nfor compliance?\na) Expansion of a program to support the community service activities of employees\nb) Education for employees concerning laws and rules that must be followed\nc) Acquisition of another company’s business for swift business deployment\nd) Withdrawal from businesses where it is difficult to make profit",
      "preferOriginal": false,
      "explanation": "Compliance education teaches employees the laws and internal rules that apply to their work. This directly supports compliance with those requirements."
    },
    {
      "number": 78,
      "text": "Which of the following is the appropriate description concerning an international organization for standardization?",
      "choices": [
        "ICANN is an international organization for standardization in the fields of industry, science, and technology.",
        "IEC is an international organization for standardization in the field of e-commerce.",
        "IEEE is an international organization for standardization in the field of accounting.",
        "ITU is an international organization for standardization in the field of telecommunications."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q78)",
      "images": [],
      "originalText": "Which of the following is the appropriate description concerning an international\norganization for standardization?\na) ICANN is an international organization for standardization in the fields of industry,\nscience, and technology.\nb) IEC is an international organization for standardization in the field of e-commerce.\nc) IEEE is an international organization for standardization in the field of accounting.\nd) ITU is an international organization for standardization in the field of\ntelecommunications.",
      "preferOriginal": false,
      "explanation": "The International Telecommunication Union, or ITU, works on international telecommunications standards. The field named in option D matches the organization's role."
    },
    {
      "number": 79,
      "text": "In product portfolio management, where products and business to be analyzed are classified into cash cows, stars, dogs, and question marks, which of the following is the appropriate combination of indexes used in the vertical axis and horizontal axis? A: Customer retention rate B: Market size C: Market growth rate D: Market share",
      "choices": [
        "A, B",
        "A, C",
        "B, D",
        "C, D"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q79)",
      "images": [],
      "originalText": "In product portfolio management, where products and business to be analyzed are classified\ninto cash cows, stars, dogs, and question marks, which of the following is the appropriate\ncombination of indexes used in the vertical axis and horizontal axis?\nA: Customer retention rate B: Market size\nC: Market growth rate D: Market share\na) A, B b) A, C c) B, D d) C, D",
      "preferOriginal": false,
      "explanation": "The portfolio matrix uses market growth rate and relative market share. Their combination distinguishes stars, cash cows, question marks and dogs."
    },
    {
      "number": 80,
      "text": "In Company X, the experience and know-how of employees who have managed drainage treatment in the facility over a long period of time is documented and accumulated, and the accumulated experience and know-how is utilized on daily drainage treatment activities and design of new processing equipment. Which of the following is appropriate as a concept of this example?",
      "choices": [
        "ERP",
        "SFA",
        "Supply chain management",
        "Knowledge management"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q80)",
      "images": [],
      "originalText": "In Company X, the experience and know-how of employees who have managed drainage\ntreatment in the facility over a long period of time is documented and accumulated, and the\naccumulated experience and know-how is utilized on daily drainage treatment activities\nand design of new processing equipment. Which of the following is appropriate as a\nconcept of this example?\na) ERP b) SFA\nc) Supply chain management d) Knowledge management",
      "preferOriginal": false,
      "explanation": "Knowledge management captures, shares and reuses organizational experience and expertise. Documenting experienced employees' know-how for later use is a direct example."
    },
    {
      "number": 81,
      "text": "Which of the following information is necessary for CRM?",
      "choices": [
        "Customer data and customer purchasing history",
        "Blueprint data",
        "Data of experts' knowledge",
        "Day and time of sales, shop, product sold, and quantity sold"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q81)",
      "images": [],
      "originalText": "Which of the following information is necessary for CRM?\na) Customer data and customer purchasing history\nb) Blueprint data\nc) Data of experts' knowledge\nd) Day and time of sales, shop, product sold, and quantity sold",
      "preferOriginal": false,
      "explanation": "Customer relationship management relies on information about customers and their interactions with the company. Customer records and purchasing history support that relationship management."
    },
    {
      "number": 82,
      "text": "Which of the following is a technique that analyzes the value of a product or service through the relationship between functionality and cost, and enhances that value through reduction in cost and increase in functionality and quality?",
      "choices": [
        "Supply chain management",
        "Knowledge management",
        "Value engineering",
        "Reverse engineering"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q82)",
      "images": [],
      "originalText": "Which of the following is a technique that analyzes the value of a product or service\nthrough the relationship between functionality and cost, and enhances that value through\nreduction in cost and increase in functionality and quality?\na) Supply chain management b) Knowledge management\nc) Value engineering d) Reverse engineering",
      "preferOriginal": false,
      "explanation": "Value engineering examines function in relation to cost. It seeks to improve the value delivered by providing the required function more effectively or at lower cost."
    },
    {
      "number": 83,
      "text": "Which of the following is the appropriate explanation of benchmarking used for corporate management?",
      "choices": [
        "It refers to the promotion of continual improvement of business processes by applying the PDCA cycle.",
        "It refers to the best case study for comparison and analysis when improvements are to be made.",
        "It refers to the unique skills and technologies for securing superiority over competitors.",
        "It refers to the measurement of the products and services of one’s company, and their comparison with other superior competitors."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q83)",
      "images": [],
      "originalText": "Which of the following is the appropriate explanation of benchmarking used for corporate\nmanagement?\na) It refers to the promotion of continual improvement of business processes by applying\nthe PDCA cycle.\nb) It refers to the best case study for comparison and analysis when improvements are to be\nmade.\nc) It refers to the unique skills and technologies for securing superiority over competitors.\nd) It refers to the measurement of the products and services of one’s company, and their\ncomparison with other superior competitors.",
      "preferOriginal": false,
      "explanation": "Benchmarking compares the organization's performance, products or practices with strong examples elsewhere. The comparison helps identify improvement opportunities."
    },
    {
      "number": 84,
      "text": "With the purpose of increasing the number of contracts concluded, salespersons in Company A’s sales department began an activity to make proposals for plans to customers. A key goal indicator (KGI) and key performance indicator (KPI) are to be set as indexes for achievement of sales activities. Which of the following is the most appropriate combination of KGI and KPI in this activity? KGI KPI",
      "choices": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q84)",
      "images": [
        "questions/2024/q084-1.webp"
      ],
      "originalText": "With the purpose of increasing the number of contracts concluded, salespersons in\nCompany A’s sales department began an activity to make proposals for plans to customers.\nA key goal indicator (KGI) and key performance indicator (KPI) are to be set as indexes\nfor achievement of sales activities. Which of the following is the most appropriate\ncombination of KGI and KPI in this activity?\nKGI KPI\na) No. of contracts concluded Sales amount\nb) No. of contracts concluded No. of proposals\nc) No. of proposals Sales amount\nd) No. of proposals No. of contracts concluded",
      "preferOriginal": true,
      "explanation": "The goal is more concluded contracts, so that is the KGI. The number of proposals is an activity measure that helps track progress toward that goal, so it is the KPI."
    },
    {
      "number": 85,
      "text": "Which of the following is an appropriate description of a “patent portfolio” that is important for establishing the patent strategy?",
      "choices": [
        "It is a compilation of patents owned and filed by a company to analyze their contribution to business, the synergy among them, and the expected fields of their applications.",
        "At the beginning of a technological innovation, patent applications tend to increase, but because of the emergence of dominant products in the market, there is a shift to process innovation, and patent applications decrease.",
        "It is a matrix with the share of the products of one’s company and the growth rate of the market as the axes, showing the positioning of the company and its competitors in the market.",
        "Multiple patent holders mutually grant their patent licenses."
      ],
      "answer": 0,
      "source": "(2024S, IP, Q85)",
      "images": [],
      "originalText": "Which of the following is an appropriate description of a “patent portfolio” that is important\nfor establishing the patent strategy?\na) It is a compilation of patents owned and filed by a company to analyze their contribution\nto business, the synergy among them, and the expected fields of their applications.\nb) At the beginning of a technological innovation, patent applications tend to increase, but\nbecause of the emergence of dominant products in the market, there is a shift to process\ninnovation, and patent applications decrease.\nc) It is a matrix with the share of the products of one’s company and the growth rate of the\nmarket as the axes, showing the positioning of the company and its competitors in the\nmarket.\nd) Multiple patent holders mutually grant their patent licenses.",
      "preferOriginal": false,
      "explanation": "A patent portfolio is the collection of patents and applications managed by an organization. Analyzing the collection helps connect intellectual property with business and technology strategy."
    },
    {
      "number": 86,
      "text": "Which of the following is the situation where an improvement can be expected by installing an MRP (Material Requirements Planning) system?",
      "choices": [
        "Drawing information is managed using electronic files and hard copies, so the design change history cannot be accurately known.",
        "Information concerning materials necessary for manufacturing and their required quantities is insufficient or incorrect, so production is adversely affected.",
        "There are too many design change requests, so production efficiency does not increase.",
        "High-mix, low-volume production is adopted, so the cost of installing production equipment is increasing."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q86)",
      "images": [],
      "originalText": "Which of the following is the situation where an improvement can be expected by installing\nan MRP (Material Requirements Planning) system?\na) Drawing information is managed using electronic files and hard copies, so the design\nchange history cannot be accurately known.\nb) Information concerning materials necessary for manufacturing and their required\nquantities is insufficient or incorrect, so production is adversely affected.\nc) There are too many design change requests, so production efficiency does not increase.\nd) High-mix, low-volume production is adopted, so the cost of installing production\nequipment is increasing.",
      "preferOriginal": false,
      "explanation": "Material requirements planning calculates what materials are needed, in what quantities and when. It addresses production problems caused by missing or inaccurate material requirements information."
    },
    {
      "number": 87,
      "text": "Which of the following is an appropriate explanation of a banner advertisement that is a form of Internet advertisement?",
      "choices": [
        "When a website is being browsed, an advertisement from an advertiser is displayed in another new window.",
        "When a web page is accessed from another page, a page with an advertisement is briefly shown before the accessed page is displayed.",
        "When an advertisement image that is placed on part of a web page is clicked, an advertiser page is displayed.",
        "When keywords are entered into a search site, an advertisement related to the keywords is displayed on the page showing the search results."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q87)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of a banner advertisement that is a\nform of Internet advertisement?\na) When a website is being browsed, an advertisement from an advertiser is displayed in\nanother new window.\nb) When a web page is accessed from another page, a page with an advertisement is briefly\nshown before the accessed page is displayed.\nc) When an advertisement image that is placed on part of a web page is clicked, an\nadvertiser page is displayed.\nd) When keywords are entered into a search site, an advertisement related to the keywords\nis displayed on the page showing the search results.",
      "preferOriginal": false,
      "explanation": "A banner advertisement is a clickable advertisement displayed within a webpage. Selecting it takes the user to the advertiser's destination page."
    },
    {
      "number": 88,
      "text": "A company wishes to create digital files from paper documents and paper blueprints, and make these available company-wide. Which of the following is appropriate equipment to be used?",
      "choices": [
        "GPS receiver",
        "Scanner",
        "Digitizer",
        "Plotter"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q88)",
      "images": [],
      "originalText": "A company wishes to create digital files from paper documents and paper blueprints, and\nmake these available company-wide. Which of the following is appropriate equipment to\nbe used?\na) GPS receiver b) Scanner\nc) Digitizer d) Plotter",
      "preferOriginal": false,
      "explanation": "A scanner captures a paper document or drawing as digital image data. It is the appropriate device for converting existing paper material into files."
    },
    {
      "number": 89,
      "text": "Which of the following is an appropriate explanation of CAD?",
      "choices": [
        "It is a circuit that converts an analog signal into a digital signal.",
        "It refers to the use of computers in the design of buildings and industrial products.",
        "It is an imaging element that converts light to an electrical signal.",
        "It refers to the creation of a single piece of content by combining characters, images, audio, and other data."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q89)",
      "images": [],
      "originalText": "Which of the following is an appropriate explanation of CAD?\na) It is a circuit that converts an analog signal into a digital signal.\nb) It refers to the use of computers in the design of buildings and industrial products.\nc) It is an imaging element that converts light to an electrical signal.\nd) It refers to the creation of a single piece of content by combining characters, images,\naudio, and other data.",
      "preferOriginal": false,
      "explanation": "Computer-aided design uses computers to create or modify designs and drawings. Architectural and industrial product design are common applications."
    },
    {
      "number": 90,
      "text": "Which of the following is the most appropriate example of a use of a wearable device?",
      "choices": [
        "Using a PC or tablet computer, and receiving diagnosis from a doctor over a network",
        "Acquiring blood pressure, body temperature, and other such measurement data with a smartwatch, and detecting abnormalities at an early stage",
        "Managing and sharing the computerized data of patient records from multiple hospitals in a cloud service",
        "Installing a human presence sensor in a bed, and sending a notification if the sensor does not respond for a certain length of time"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q90)",
      "images": [],
      "originalText": "Which of the following is the most appropriate example of a use of a wearable device?\na) Using a PC or tablet computer, and receiving diagnosis from a doctor over a network\nb) Acquiring blood pressure, body temperature, and other such measurement data with a\nsmartwatch, and detecting abnormalities at an early stage\nc) Managing and sharing the computerized data of patient records from multiple hospitals\nin a cloud service\nd) Installing a human presence sensor in a bed, and sending a notification if the sensor does\nnot respond for a certain length of time",
      "preferOriginal": false,
      "explanation": "A wearable device is worn on the body. A smartwatch collecting health measurements is a suitable example of wearable-device use."
    },
    {
      "number": 91,
      "text": "An EC site handles a wide range of user inquiries via chat with a mechanism where operators provide a response. It decides to use a new mechanism where software learns from the content of users’ past chats, infers an appropriate response from the flow of the conversation and provides an automatic response. Which of the following is the most appropriate technology that is used in the new mechanism?",
      "choices": [
        "AI",
        "AR",
        "CRM",
        "ERP"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q91)",
      "images": [],
      "originalText": "An EC site handles a wide range of user inquiries via chat with a mechanism where\noperators provide a response. It decides to use a new mechanism where software learns\nfrom the content of users’ past chats, infers an appropriate response from the flow of the\nconversation and provides an automatic response. Which of the following is the most\nappropriate technology that is used in the new mechanism?\na) AI b) AR c) CRM d) ERP",
      "preferOriginal": false,
      "explanation": "Learning from past conversations and generating context-appropriate responses uses artificial intelligence. The automatic chat response system described is an AI application."
    },
    {
      "number": 92,
      "text": "Which of the following is the most appropriate term to express the initiatives that are implemented by a financial institution or other such institution in order to prevent acts where funds obtained illegally are disguised as being obtained by legitimate means?",
      "choices": [
        "Anti-money laundering (AML)",
        "Insider trading regulations",
        "Skimming",
        "Phishing"
      ],
      "answer": 0,
      "source": "(2024S, IP, Q92)",
      "images": [],
      "originalText": "Which of the following is the most appropriate term to express the initiatives that are\nimplemented by a financial institution or other such institution in order to prevent acts\nwhere funds obtained illegally are disguised as being obtained by legitimate means?\na) Anti-money laundering (AML) b) Insider trading regulations\nc) Skimming d) Phishing",
      "preferOriginal": false,
      "explanation": "Anti-money laundering measures seek to detect and prevent attempts to disguise illegally obtained funds as legitimate income. That matches the activity in the question."
    },
    {
      "number": 93,
      "text": "Which of the following is an appropriate description concerning groupware?",
      "choices": [
        "It is software that has an animation or audio function and is useful when making presentations effective by incorporating the output of spreadsheet software or database software.",
        "It is software that has functions, such as setting print layout or changing and editing texts, and is used for creating documents.",
        "It is software that has functions, such as communication via e-mail and electronic bulletin boards, data sharing, and schedule management, and supports collaborative work.",
        "It is software that is used to enter data into cells of a worksheet, create tables, and tabulate data."
      ],
      "answer": 2,
      "source": "(2024S, IP, Q93)",
      "images": [],
      "originalText": "Which of the following is an appropriate description concerning groupware?\na) It is software that has an animation or audio function and is useful when making\npresentations effective by incorporating the output of spreadsheet software or database\nsoftware.\nb) It is software that has functions, such as setting print layout or changing and editing\ntexts, and is used for creating documents.\nc) It is software that has functions, such as communication via e-mail and electronic\nbulletin boards, data sharing, and schedule management, and supports collaborative\nwork.\nd) It is software that is used to enter data into cells of a worksheet, create tables, and\ntabulate data.",
      "preferOriginal": false,
      "explanation": "Groupware provides shared communication, information and scheduling tools for teams. Its purpose is to support collaboration."
    },
    {
      "number": 94,
      "text": "Which of the following is a modeling technique that is used for analyzing business operations and system from the viewpoint of the flow of data which is exchanged between processes?",
      "choices": [
        "BPR",
        "DFD",
        "MRP",
        "WBS"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q94)",
      "images": [],
      "originalText": "Which of the following is a modeling technique that is used for analyzing business\noperations and system from the viewpoint of the flow of data which is exchanged between\nprocesses?\na) BPR b) DFD c) MRP d) WBS",
      "preferOriginal": false,
      "explanation": "A data flow diagram models how data is exchanged and processed between business activities. It is suited to analysis focused on data movement."
    },
    {
      "number": 95,
      "text": "Training on how to use a sales forecast system is planned for the persons in charge of business across the country. Which of the following is a merit that is obtained by using e- learning in training?",
      "choices": [
        "The person in charge of business can be directly lectured about the system from the person in charge of design, and raise questions then and there.",
        "The person in charge of business can use his/her own free time and undergo training at any suitable time.",
        "Several persons in charge of business can participate together and exchange their opinions on how to use the system.",
        "The persons in charge of business can be asked to assemble together in a room and training can be given simultaneously."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q95)",
      "images": [],
      "originalText": "Training on how to use a sales forecast system is planned for the persons in charge of\nbusiness across the country. Which of the following is a merit that is obtained by using e-\nlearning in training?\na) The person in charge of business can be directly lectured about the system from the\nperson in charge of design, and raise questions then and there.\nb) The person in charge of business can use his/her own free time and undergo training at\nany suitable time.\nc) Several persons in charge of business can participate together and exchange their\nopinions on how to use the system.\nd) The persons in charge of business can be asked to assemble together in a room and\ntraining can be given simultaneously.",
      "preferOriginal": false,
      "explanation": "E-learning can allow learners to study at a suitable time using available free time. This flexibility is useful for staff spread across multiple locations."
    },
    {
      "number": 96,
      "text": "Attempts are being made to streamline the functions and services of cities and regions and make them more advanced with the use of ICT in order to solve regional problems, and vitalize regions. Which of the following is the most appropriate term to describe such a solution for community development?",
      "choices": [
        "Capacity",
        "Smart city",
        "Diversity",
        "University"
      ],
      "answer": 1,
      "source": "(2024S, IP, Q96)",
      "images": [],
      "originalText": "Attempts are being made to streamline the functions and services of cities and regions and\nmake them more advanced with the use of ICT in order to solve regional problems, and\nvitalize regions. Which of the following is the most appropriate term to describe such a\nsolution for community development?\na) Capacity b) Smart city\nc) Diversity d) University",
      "preferOriginal": false,
      "explanation": "A smart city uses information and communication technology to improve urban or regional services and address local problems. The community-development initiative fits that concept."
    },
    {
      "number": 97,
      "text": "In system development, which of the following is a process that clarifies the business functions to be newly constructed or reconstructed, and on the basis of the business functions, specifies the scope of computerization and the functions?",
      "choices": [
        "External design",
        "Internal design",
        "Programming",
        "Requirements definition"
      ],
      "answer": 3,
      "source": "(2024S, IP, Q97)",
      "images": [],
      "originalText": "In system development, which of the following is a process that clarifies the business\nfunctions to be newly constructed or reconstructed, and on the basis of the business\nfunctions, specifies the scope of computerization and the functions?\na) External design b) Internal design\nc) Programming d) Requirements definition",
      "preferOriginal": false,
      "explanation": "Requirements definition clarifies the intended business functions and what will be computerized. This establishes the scope and functionality needed from the system."
    },
    {
      "number": 98,
      "text": "Which of the following is the most appropriate description of IoT?",
      "choices": [
        "It is a learning mechanism in artificial intelligence.",
        "It is a mechanism where devices or control units equipped with a sensor connect to the Internet and exchange a variety of information via the Internet.",
        "It is a group of functions and procedures that are made public in order to enable some of the features of a piece of software to be used by other programs.",
        "It is a tool that uses a software robot to streamline routine work."
      ],
      "answer": 1,
      "source": "(2024S, IP, Q98)",
      "images": [],
      "originalText": "Which of the following is the most appropriate description of IoT?\na) It is a learning mechanism in artificial intelligence.\nb) It is a mechanism where devices or control units equipped with a sensor connect to the\nInternet and exchange a variety of information via the Internet.\nc) It is a group of functions and procedures that are made public in order to enable some of\nthe features of a piece of software to be used by other programs.\nd) It is a tool that uses a software robot to streamline routine work.",
      "preferOriginal": false,
      "explanation": "The Internet of Things connects physical devices, sensors and controllers so they can exchange information. The description in option B captures that connection."
    },
    {
      "number": 99,
      "text": "Which of the following is the most appropriate word to indicate the use of IoT, AI, and other IT in order to strategically overhaul a business model and produce new added value?",
      "choices": [
        "Digital signage",
        "Digital divide",
        "Digital transformation",
        "Digital native"
      ],
      "answer": 2,
      "source": "(2024S, IP, Q99)",
      "images": [],
      "originalText": "Which of the following is the most appropriate word to indicate the use of IoT, AI, and\nother IT in order to strategically overhaul a business model and produce new added value?\na) Digital signage b) Digital divide\nc) Digital transformation d) Digital native",
      "preferOriginal": false,
      "explanation": "Digital transformation uses digital technology to reshape business activities and business models and create new value. The strategic overhaul described is a DX initiative."
    },
    {
      "number": 100,
      "text": "Which of the following is the most appropriate explanation of an RFP that is created by a company, government organization, or other such organization that is planning the introduction of a new system?",
      "choices": [
        "It is a document created for collecting information from vendors and determining a system’s technical issues and feasibility.",
        "It is a definition of matters such as the performance requirements for a new system by the vendor and the ordering party.",
        "It sets out the agreed matters concerning the level of service quality between the vendor and the ordering party.",
        "It provides vendors with the objective of introduction and a functional overview of the system, and solicit a bid."
      ],
      "answer": 3,
      "source": "(2024S, IP, Q100)",
      "images": [],
      "originalText": "Which of the following is the most appropriate explanation of an RFP that is created by\na company, government organization, or other such organization that is planning the\nintroduction of a new system?\na) It is a document created for collecting information from vendors and determining a\nsystem’s technical issues and feasibility.\nb) It is a definition of matters such as the performance requirements for a new system by\nthe vendor and the ordering party.\nc) It sets out the agreed matters concerning the level of service quality between the vendor\nand the ordering party.\nd) It provides vendors with the objective of introduction and a functional overview of the\nsystem, and solicit a bid.",
      "preferOriginal": false,
      "explanation": "A request for proposal communicates the customer's objectives and system requirements to potential suppliers. It invites vendors to propose a suitable solution and bid."
    }
  ]
};
