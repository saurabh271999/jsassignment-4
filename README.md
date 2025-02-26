# String Problem Solver

This repository contains solutions to various string manipulation problems using JavaScript. The focus is on efficiently handling operations such as counting vowels and consonants, removing duplicates, reversing strings, and more.

## 🚀 Features
- Count vowels and consonants in a given string
- Remove duplicate words or characters
- Reverse a string
- Check for palindromes
- Convert cases (uppercase to lowercase, and vice versa)

## 📌 Problem Statement
Given a string, implement a function to count the occurrences of vowels and consonants and store them at each step.

### Example:
#### **Input:**
```javascript
let str = "Prepbytes";
```
#### **Output:**
```javascript
[
  { vowel: 0, consonant: 1 },
  { vowel: 0, consonant: 2 },
  { vowel: 1, consonant: 2 },
  { vowel: 1, consonant: 3 },
  { vowel: 1, consonant: 4 },
  { vowel: 1, consonant: 5 },
  { vowel: 1, consonant: 6 },
  { vowel: 2, consonant: 6 },
  { vowel: 2, consonant: 7 }
]
```

## 🛠 Solution Approach
- Convert the string to lowercase.
- Loop through each character and check if it's a vowel.
- Maintain separate counts for vowels and consonants.
- Store the cumulative count at each step.

### 🔹 Code Implementation
```javascript
function countVowelConsonantOccurrences(str) {
    let vowelCount = 0;
    let consCount = 0;
    let result = [];
    let strArr = str.toLowerCase().split('');
    
    for (let i = 0; i < strArr.length; i++) {
        if ('aeiou'.includes(strArr[i])) {
            vowelCount++;
        } else {
            consCount++;
        }
        result.push({ vowel: vowelCount, consonant: consCount });
    }
    return result;
}

console.log(countVowelConsonantOccurrences("Prepbytes"));
```

## 📂 Project Structure
```
📦 String-Problem-Solver
├── 📜 README.md   # Project Documentation
├── 📜 index.js    # JavaScript solution file
└── 📜 test.js     # Test cases for validation
```

## ✅ How to Run
1. Clone the repository:
   ```sh
  https://github.com/saurabh271999/jsassignment-4.git
   ```
2. Navigate to the project directory:
   ```sh
   cd string-question-solver
   ```
3. Run the JavaScript file:
   ```sh
   node index.js
   ```

## 📝 Contributing
Contributions are welcome! If you have additional string-related problems and solutions, feel free to submit a pull request.

## 📜 License
This project is licensed under the MIT License.

## 🎯 Connect with Me
If you have any questions or suggestions, feel free to reach out:
- GitHub: [Your GitHub Profile](https://github.com/saurabh271999)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)

---
✨ Happy Coding! ✨

