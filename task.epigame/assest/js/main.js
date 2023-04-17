var cards =[
{
  name:"Kine",
  img: "2(1).jpg",
    
},
{
  name:"Journey",
  img:"2(2).jpg",
  
},
{
  name:"Fortnite", 
  img:"3.jfif",
  
},
{
  name:"World War Z",  
  img:"4.jpg",
  
},
{
  name:"Jon Wick Hex", 
 img:"5.jpg",
  
},
{
  name:"Cyberpunk 2077",
  img:"6.jpg",
   
},
{
  name:"Abzu",
  img:"7.jfif",
  
},
{
  name:"Batman Arkham City",
  img:"8.jpg",
  
},
{
  name:"Metro Exodus",  
   img:"9.jpg",
   
},
{
  name:"Dounless",
  img:"10.jfif",
    
},
];

var result="";
for ( let i = 0; i < cards.length; i++){
  result +='<div class="col-4">
    <div class="pic-item">
      <img class="w-100" src="./assest/js/img/${cards[i].img}" alt="">
      <p>${cards[i].name}</p>
   </div>
  </div>';
};
area.innerHTML =result;