const { exec } = require('child_process');

first_command = process.stdout.write(`Welcome to Holberton School, what is your name?\n`);
second_command = process.stdin.on('readable', function() {
                var input = process.stdin.read();
                if (input !== null) {
                        process.stdout.write(`Your name is: ${input}`);
                }
        console.log("This important software is now closing");
});


exec(first_command.toString() &&
        second_command.toString() );
