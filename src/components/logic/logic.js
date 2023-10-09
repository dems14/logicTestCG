export function smallPath(start, target, MAX_SMALL, MAX_LARGE) {
	let path = [];
	let step = start;
	while (step.large !== target || step.small !== target) {
		let residue = 0;
		//fill small bucket
		step.small = step.small > 0 ? step.small : MAX_SMALL;
		if (step.small === MAX_SMALL) {
			path.push({
				small: step.small
				, large: step.large
				, message: "small filled"
			});
			if (step.small === target) break;
		}
		//transfer from small to large
		if (step.large + step.small > MAX_LARGE) {
			residue = MAX_LARGE - step.large;
			step.large = step.large + MAX_LARGE - step.large;
		} else step.large += step.small;

		if (residue > 0) {
			step.small = step.small - residue;
		}
		else if (step.small < MAX_SMALL) {
			step.small -= step.small
		} else step.small -= MAX_SMALL;
		path.push({
			small: step.small
			, large: step.large
			, message: "transfered from small to large"
		});
		//stops the cicle
		if (step.large === target || step.small === target || path.length > 20) {
			break;
		}
		//empty large when full
		if (step.large === MAX_LARGE) {
			step.large = 0;
			path.push({
				small: step.small
				, large: step.large
				, message: "emptied large"
			});
		}
	}
	return path;
}
export function largePath(start, target, MAX_SMALL, MAX_LARGE) {
	let path = [];
	let step = start;
	while (step.large !== target || step.small !== target) {
		let residue = 0;
		//fill large
		step.large = step.large > 0 ? step.large : MAX_LARGE;
		if (step.large === MAX_LARGE) {
			path.push({
				small: step.small
				, large: step.large
				, message: "large filled"
			});

			if (step.large === target) break;
		}
		//transfer from large to small
		if (step.small === 0) {
			step.small = step.large - MAX_SMALL < 0 ? step.large : MAX_SMALL;
		} else {
			debugger
			residue = MAX_SMALL - step.small;
			step.small = step.small + residue;
		}
		if (residue > 0) {
			step.large = step.large - residue;
		}
		else {
			step.large = step.small < MAX_SMALL ? 0 : step.large - MAX_SMALL;
		}
		path.push({
			small: step.small
			, large: step.large
			, message: "transfered from large to small"
		});
		//stops the cicle
		if (step.large === target || step.small === target || path.length > 20) {
			break;
		}
		//empty small when full
		if (step.small === MAX_SMALL) {
			step.small -= step.small;
			path.push({
				small: step.small
				, large: step.large
				, message: "small emptied"
			});
		}
	}
	return path;}