const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// Full path to your CLI tool
const cliToolPath = path.join(__dirname, "ast77cli/astrolog.exe");

// Start the CLI tool
const runAstro = (args: string) =>
  spawn(cliToolPath, args.split(" "), { shell: true });

// Listen for output from the tool

// Listen for errors
// cliProcess.stderr.on("data", (data) => {
//   console.error(`Error: ${data}`);
// });

// Handle process exit
// cliProcess.on("close", (code) => {
//   console.log(`CLI tool exited with code ${code}`);
// });

// Function to send commands to the CLI too

// Example: Send commands to the CLI
// setTimeout(() => sendCommand("your-command-1"), 1000); // Replace with your command
// setTimeout(() => sendCommand("your-command-2"), 2000); // Replace with your command

// Optional: Exit the CLI after sending commands
// setTimeout(() => {
//   console.log("Exiting CLI...");
//   cliProcess.stdin.end(); // Close the input stream
// }, 5000);

// sendCommand("astrolog /H");

app.get("/generate-file", (req, res) => {
  const name = "testix" + ".bmp";
  const cliPro = runAstro(
    `astrolog /qc 12 25 2024 14:30 1 -5 77.0369 38.9072 "John Doe" "Washington DC" /Xb /Xo "${name}"`
  );

  cliPro.on("close", (code) => {
    const outputFile = path.join(__dirname, name);
    if (fs.existsSync(outputFile)) {
      // Send the created file as a response
      res.sendFile(outputFile, (err) => {
        if (err) {
          console.error("Error sending file:", err);
          return res.status(500).json({ error: "Failed to send the file" });
        }

        // Delete the file after sending
        fs.unlink(outputFile, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting the file:", unlinkErr);
          } else {
            console.log("File deleted successfully");
          }
        });
      });
    } else {
      res.status(500).json({ error: "File not created by CLI" });
    }
    console.log(`CLI tool exited with code ${code}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
