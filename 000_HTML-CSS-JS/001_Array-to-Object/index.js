// convert array to object

const arr = ['a', 'b', 'c', 'd', 'e', 'f']

const obj = arr.reduce((acc, currVal, i) => ({
    ...acc,
    [i]:currVal
}), {})

console.log(obj)

// output: {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f'}