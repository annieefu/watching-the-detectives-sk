/**
 * @async
 * @function init
 * @function getAndWriteSheet
 *  * @param {object} opt - Object containing google sheet properties from meta.json
 *  * @param {function} cb - Callback function passed by init function that loops through array if more than one google sheet
 * @requires fs
 * @requires node-fetch
 * @description Writes google sheet to src/lib/data as csv file.
 * 	*	Requires that your google sheet is viewable by anyone on the internet.
 * 	*	Add google sheet id, gid and filepath you want to meta.json file
 * 	*	Then type npm run data in your cli and hit return
 * @see {@link https://nodejs.org/docs/latest-v16.x/api/fs.html} for fs documentation 
 * @see {@link https://github.com/node-fetch/node-fetch} for node-fetch documentation
 */

import fs from "fs"
import fetch from "node-fetch"

const CWD = process.cwd();
const CONFIG_PATH = `${CWD}/src/lib/data/meta.json`;
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const { sheet } = CONFIG.google;

async function getAndWriteSheet(opt, cb) {
	const base = 'https://docs.google.com/spreadsheets/u/1/d';
	const url = `${base}/${opt.id}/export?format=csv&id=${opt.id}&gid=${opt.gid}`;

	try {
		const response = await fetch(url);

		if (response.ok) {
			const body = await response.text();
			const file = `${CWD}/${opt.filepath || 'src/data/data.csv'}`;

			fs.writeFile(file, body, (err) => {
				if (err) throw err;
				console.log(
					'csv with id',
					'\x1b[32m',
					`${opt.id}`,
					'\x1b[0m',
					'and gid',
					'\x1b[32m',
					`${opt.gid}`,
					'\x1b[0m',
					'successfully written to',
					'\x1b[34m',
					`${file}\n`
				);
				cb();
			});
		}
	} catch (err) {
		console.error(err);
	}
}

function init() {
	let i = 0;
	const next = () => {
		const d = sheet[i];
		if (d.id)
			getAndWriteSheet(d, () => {
				i += 1;
				if (i < sheet.length) next();
				else process.exit();
			});
	};

	next();
}

init();