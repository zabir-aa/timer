const delays = process.argv.slice(2); // storing inputs from terminal

for (let item of delays) { // iterating through all inputs
  item = Number(item); // converting inputs to numbers before execution
  if (typeof item === "number" && item >= 0) { // filtring for edge cases (empty input, NaN input, negative input)
    setTimeout(() => { // setting timeOut for delay
      process.stdout.write('\x07'); // std function for system sound / beep
    }, 1000 * item); // delay amount (microsecond)
  }
}
