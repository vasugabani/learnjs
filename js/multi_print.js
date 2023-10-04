let arr = [
    [1, 'vasu', 21],
    [2, 'dev', 20],
    [3, 'amit', 31],
]

let print;

print = '<table border=1><tr><th>No.</th><th>Name</th><th>age</th></tr>'

for (let i = 0; i < arr.length; i++) {
    print = print + '<tr>'
    for (let j = 0; j < arr[i].length; j++) {
        print = print + '<td>'
        print = print + arr[i][j]
        print = print + '</td>'
    }
    print = print + '</tr>'
}

print = print + '</table>'

console.log(print);

document.getElementById("table").innerHTML = print

