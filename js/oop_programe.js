// // 1. ENCUPSULATION

// class student {
//     id;
//     name;
//     #fees;   //access only closing tab

//     constructor(i,n,f){
//         this.id= i;
//         this.name = n;
//         this.#fees = f;
//     }

//     displayinfo(){
//         console.log(this.id,this.name);
//     }

//     #displayfees(){
//         console.log(this.#fees);
//     }

//     displayall(){
//         this.displayinfo();
//         this.#displayfees();
//     }
// }

// class course extends student{
//     courseName;
//     duration;
//     #scholarship;

//     constructor(i,n,f,c,d){
//         super(i,n,f);

//         this.courseName=c;
//         this.duration=d;
//     }

//     getallinfo(){
//         this.displayall();
//         console.log(this.courseName,this.duration,this.#scholarship);
//     }

//     set scholarship(s){
//         this.#scholarship=s;
//         // console.log(this.#scholarship);
//     }

//     get scholarship(){
//         console.log(this.#scholarship);
//     }
// }
// let course1 = new course (1,"John",500,'java script','3 month');
// // course1.displayall();
// // student1.#displayfees();   //not access

// course1.scholarship=200
// course1.getallinfo();
// course1.scholarship;

// -----------------------------------------------------

// class bike{
//     model;
//     company;
//     man_year;

//     constructor(m,c,y){
//         this.model= m ;
//         this.company= c ;
//         this.man_year= y ;
//     }

//     getbike(){
//         console.log(this.model,this.company,this.man_year);
//     }
// }
// class aboutprice extends bike{
//     #price;
//     market_price;

//     constructor(m,c,y,mp){
//         super(m,c,y);

//         this.market_price= mp;
//     }
//     set amount(p) {
//         this.#price=p;
//     }
//     get amount() {
//         console.log(this.#price);
//     }

//     allinfo(){
//         this.getbike();
//         console.log(this.market_price);
//     }
// }
// let p1=new aboutprice('shine','honda',2022,95000);
// p1.allinfo();
// p1.amount=85000;
// p1.amount;

// // -----------------------------------------------------

// class squre{
//     side;

//     area(){
//         console.log("squre side");
//     }
// }
// class circle extends squre{
//     radius;

//     area(){
//         console.log("circle radius");
//     }
// }
// let s=new squre();
// let c=new circle();

// s.area();
// c.area();

// ------------------------------------------------------

