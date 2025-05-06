/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// Custom Error Class for File Data Issues
// ============================================
class FileDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "FileDataError";
    }
}
// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
      // 🔍 Input Validation
      // Added Addon validation for empty filename added for space char
      if (!fileName || fileName.trim()==="") {
          throw new ReferenceError("File name is missing or empty.");
      }
      if (typeof fileData !== "string") {
          throw new TypeError("File data must be a string.");
      }
      if (fileData.trim() === "") {
        // instead of general error catching we catch Custom Exceptions
          throw new FileDataError("File data cannot be empty.");
      }

      // ✅ Simulated File Processing
      console.log(`Processing file: ${fileName}`);
      console.log(`File content: ${fileData}`);
  } catch (err) {
    //we added extra logic in catch to categorize FileDataError 
    if (err instanceof FileDataError)
        {
            console.log("File data function error happened:", err.message); // Handle known errors
        }
         else
          { 
              // ⚠️ Handle Known Errors
            console.error(`${err.name}: ${err.message}`);
            }
  } finally {
      // 📦 Always Release Resources
      console.log("Closing file handle...");
  }
}

// ============================================
// 🧪 Test Cases
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
//processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
//processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
//processFile(" ", ""); // ❌ Error: File name is missing or empty
processFile(" ",null); // ❌ Error: File name is missing or empty

