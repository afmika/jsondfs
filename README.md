# json-dfs
## Basic use
### Example 1
```javascript
const jsondfs = require ('json-dfs');
const datas = [
    {'id' : 0, 'name' : 'Carl', properties : [{a : {b : 'foo', m : 1}}, {i : am, home : 'hello'}]},
    {'id' : 1, 'name' : 'Bob'},
    {'id' : 2, 'name' : 'Carlos', stats : {magic : 17, hp : 4, quest : [{special : 1}, 2, 3]}}
];

// basic
console.log('# Test 1', jsondfs(datas, {
    keyword : 'no',
    max_depth : 100
}));

// supports regex
console.log('# Test 2', jsondfs(datas, {
    keyword : '^B',
    max_depth : 100
}));
```

### Example 2
```javascript
const jsondfs = require ('json-dfs');
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

console.log('# Test 3', jsondfs(values, {
	keyword : 'hello',
	max_depth : 10
}));
```