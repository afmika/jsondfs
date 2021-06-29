const jsondfs = require ('./jsondfs');

const values = [
	{
		a : 2,
		q : {
			b : { c : 3, d : {f : 8}}
		},
		c : {
			e : -3
		}
	},
	{
		a : 8,
		q : {
			b : { c : 13, d : {f : 'hello'}}
		},
		c : {
			e : 4
		}
	}
];
const datas = [
    {'id' : 0, 'name' : 'Carl', properties : [{a : {b : 'foo', m : 'no'}}, {i : 'am', home : 'hello'}]},
    {'id' : 1, 'name' : 'Bob'},
    {'id' : 2, 'name' : 'Carlos', stats : {magic : 17, hp : 4, quest : [{special : 1, hero : 'no'}, 2, 3]}}
];

// search for all entries with '1'
console.log('# Test 1', jsondfs(datas, {
    keyword : 'no',
    max_depth : 100
}));

// with regex
console.log('# Test 2', jsondfs(datas, {
    keyword : '^B',
    max_depth : 100
}));

console.log('# Test 3', jsondfs(values, {
	keyword : 'hello',
	max_depth : 10
}));