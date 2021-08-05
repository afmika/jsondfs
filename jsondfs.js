function deepSearchHelper (input, to_find, max_depth, validator_func) {
	if (max_depth <= 0) 
		return false;
	let result = false;
	for (let key in input) {
		let current = input[key];
		let types = ['number', 'string'];
		let leaf = types.includes(typeof current) || current == undefined || current == null; 
		if (leaf) {
			current += '';
			if (validator_func) {
				if (validator_func(current)) // custom node validator
					return true;
			} else {
				let expr = new RegExp (to_find, 'i');
				if (expr.test(current)) 
					return true;
			}
		}
		
		result = result || deepSearchHelper (input[key], to_find, max_depth - 1, validator_func);
	}
	return result;
}

/**
 * @param {JSON[]} list 
 * @param {JSON} config {keyword : ..., max_depth : ...}
 * @returns {JSON[]}
 */
function deepSearch (list, config) {
	let result = [];
	for (let item of list) {
		if (deepSearchHelper(item, config.keyword, config.max_depth || 1000, config.validator))
			result.push(item);
	}
	return result;
}


module.exports = deepSearch;