const fs = require('node:fs');
function countStudent(filePath) {
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if (err) {
			throw new Error("Cannot load the database");
		}
		let total = 0;
		let CS = 0;
		let listCS = [];
		let SWE = 0;
		let listSWE = [];
		const result = data.split('\n');
		for(const iter of result) {
			if (iter.includes('CS')) {
				CS += 1;
				let temp = iter.split(',');
				listCS.push(' ' + temp[0]);
			} else if (iter.includes('SWE')) {
				SWE += 1;
				let pmet = iter.split(',');
				listSWE.push(' ' + pmet[0]);
			} else {
				continue;
			}
			total += 1


		}
		console.log(`Number of students: ${total}`);
		console.log(`Number of students in CS: ${CS} List: ${listCS}`);
		console.log(`Number of students in SWE: ${SWE} List: ${listSWE}`);
	});
}

module.exports = countStudent;
