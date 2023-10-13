// class employee{

//     id;
//     name;
//     salary;

//     constructor(i,n,s){
//         this.id=i;
//         this.name=n;
//         this.salary=s;
//     }

//     getallinfo = () => {
//         console.log(this.id,this.name,this.salary);
//     }
// }
// class bonus extends employee{
//     bonusamt;
//     per;

//     constructor(id,name,salary,per){

//         super(id,name,salary);

//         this.per=per;
//     }

//     calculate = () => {
//         let b=this.salary*this.per;
//         console.log("bonus is: ",b);
//     }
// }
// let b1=new bonus(1,'amit',10000,0.5);

// b1.getallinfo();
// b1.calculate();

// ----------------------------------------------------

// class computer{
//     name;
//     price;
//     company;

//     constructor(n,c){
//         this.name= n ;
//         this.company=c;

//         console.log(this.name,this.company);
//     }

//     configuration = (p) => {
//         this.price=p;
//         console.log(this.price);
//     }

//     basic_details = () => {
//         console.log(this.name,this.price,this.company);
//     }
// }

// class processer extends computer{
//     pro_name;
//     version;

//     constructor(n,c,p,v){
//         super(n,c);

//         this.pro_name=p;
//         this.version=v;
//     }

//     alldetails = () => {
//         this.basic_details();
//         console.log(this.pro_name,this.version);
    
//     }

// }
// let p1= new processer('asusF15','asus','intel','10 gen');
// p1.configuration(70000);
// // p1.basic_details();
// p1.alldetails();

// --------------------------------------------------

class car{
    model_name;
    man_year;
    price;
    company;

    constructor(m,c){
        this.model_name= m ;
        this.company=c;
    }

    set = (y,p) => {
        this.man_year=y;
        this.price=p;
    }

    display_info = () =>{
        console.log(this.model_name,this.company,this.man_year,this.price);
    }
}

class serCen extends car{
    rating;
    main_branch;

    constructor(m,c,r,b){
        super(m,c);

        this.rating=r;
        this.main_branch=b;
    }

    allinfo = () => {
        this.display_info();
        console.log(this.rating,this.main_branch);
    }
}
let s1=new serCen('neno','tata','4 star','zarkhand');
s1.set(2003,100000)
// s1.display_info();
s1.allinfo();

// --------------------------------------------------

// 1.encapsulation 

// our data and function together into a single unit class

// class employee{

    //     id;
    //     name;
    //     salary;
    
    //     constructor(i,n,s){
    //         this.id=i;
    //         this.name=n;
    //         this.salary=s;
    //     }
    
    //     getallinfo = () => {
    //         console.log(this.id,this.name,this.salary);
    //     }
    // }

    // let e=getallinfo();

    // ---------------------------------------------

// 2.polymorphism

// subclass can define its own unique behavior and still yhe same function class

// class squre{

//     area(){

//     };
// }
// s1=new squre();
// console.log(s1);

// class circle{

//     area(){
        
//     };
// }
// c1=new circle();
// console.log(c1);
