// Inline

let n = 5;
let inline = "";
let star = "*";

for (let i = 0; i < n; i +=1) {
    inline += star;
}

for (let i = 0; i < n; i += 1) {
    console.log(inline);
}

// Triangule


let inline = "";
let star = "*";
let position = n - 1;

for (let i = 0; i <= n; i +=1) {
    console.log(inline);    
    inline += star;
}

for (let i = 0; i < n; i +=1) {
    for (let j = 0; j < n; j +=1) {
        if (j < position) {
        inline = inline + " "; 
        }
        else {
        inline = inline + star;
        }         
    }
    
    console.log(inline);    
    inline = "";
    position -= 1;
}


// another triangule 

let inline = "";
let star = "*";
let mid = (n + 1) / 2;
let controlLeft = mid;
let controlRight = mid;


for (let i = 0; i <= mid; i +=1) {
    for (let j = 0; j <= n; j +=1) {
        if (j > controlLeft && j < controlRight) {
        inline = inline + star; 
        }
       else {
        inline = inline + " ";
        }         
    }
    
   console.log(inline);    
   inline = "";
   controlLeft -= 1;
   controlRight += 1;
}


