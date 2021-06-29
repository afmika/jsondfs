# jsondfs
`jsondfs` is a json array query tool, it simply does a depth-first search on each entries and stops as soon as the current data meets the keyword criteria, then proceeds to the next entries.
- Easy to use
- Regex support

## Basic use
### Example 1
```javascript
const jsondfs = require ('jsondfs');
const datas = [
    {'id' : 0, 'name' : 'Carl', properties : [{a : {b : 'no', m : 1}}, {i : 'am', home : 'hello'}]},
    {'id' : 1, 'name' : 'Bob'},
    {'id' : 2, 'name' : 'Carlos', stats : {magic : 17, hp : 4, quest : [{special : 1, human : 'no'}, 2, 3]}}
];

// basic
console.log('# Test 1', jsondfs(datas, {
    keyword : 'no',
    max_depth : 100
}));

// with regex
console.log('# Test 2', jsondfs(datas, {
    keyword : '^B',
    max_depth : 100
}));
```

### Example 2
```javascript
const jsondfs = require ('jsondfs');
const datas = [
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

console.log('# Test 3', jsondfs(datas, {
	keyword : 'hello',
	max_depth : 10
}));
```