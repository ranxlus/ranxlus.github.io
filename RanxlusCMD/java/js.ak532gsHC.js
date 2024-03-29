function handleCommand() {
    const commandLine = inputField.value.trim();
    const [command, ...args] = commandLine.split(' ');
  
    printToConsole(`<span style="color: #00ff00;">&gt; ${commandLine}</span>`);
    inputField.value = '';
  
    switch (command) {
      case 'help':
        console.log("Command 'Help' Executed");
        printToConsole('Available commands:');
        printToConsole('  help    - Display this help message');
        printToConsole('  echo    - Print a message');
        printToConsole('  cls     - Clear the console');
        printToConsole('  dateti  - Show the Date and Time');
        printToConsole('  time    - Show the time');
        printToConsole('  exit    - Exit the Command Prompt back to Ranxlus Site')
        printToConsole('  shutdown  - Exit CMD ')
        break;
      case 'echo':
        console.log("Command 'echo' Executed");
        const message = args.join(' ');
        printToConsole(message);
        break;
      case 'cls':
        console.log("Command 'clear' Executed");
        outputDiv.innerHTML = '';
        break;
      case 'dateti':
        console.log("Command 'dateti' Executed");
        const currentTime = new Date().toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString();
        printToConsole(`The Date is: ${currentDate} and The time is: ${currentTime}`);
        break;
      case 'exit':
        window.location.href = ("https://ranxlus.github.io/")
        break;
      case 'shutdown':
        alert("Shutdown Doesn't Work, I'll Fix It Later.")
        window.close()
        break;
      case 'calc':
        console.log("Command 'calc' Executed");
        try {
        const result = eval(args.join(' '));
        printToConsole(`${result}`);
        } catch (error) {
        printToConsole('calc.dll encountered an error.');
        }
        break;
      default:
        console.log("Command Is Unknown");
        printToConsole(`${command} Is Unknown.`);
        break;
    }
  }
