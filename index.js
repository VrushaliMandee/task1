import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//props
// const author="paul coelho";
// const title="The Alchemist";
// const img=   "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
// function BookList(){
//     return(
//         <section className="booklist"> 
//         <Book sale="20%" job="developer"></Book>
//         <Book job="designer" number={22}></Book>    
//         </section>
//     );
// }
// const Book=(props)=>{
//     console.log(props);
//     return(
//     <article className="book">
//         <img src={img}></img>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         <p>sale:{props.sale}</p>
//         <p>{props.job}</p>
//         <p>{props.number}</p>
//     </article>
//     );
// }


const firstbook={
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
      title: "The Alchemist",
      author: "Paulo Coelho",
};
const secondbook={
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  title: "Ikigai: The Japanese secret to a long and happy life",
  author: "Héctor García",
};

function BookList (){
    return (
        <section className="booklist">
            <Book
             img={firstbook.img}
             title={firstbook.title} 
             author={firstbook.author}></Book>
            <Book 
            img={secondbook.img} 
            title={secondbook.title} 
            author={secondbook.author}></Book>
        </section>
    );
}
 const Book =(props)=>{
    //console.log(props);
    const {img,title,author}=props;
    return <article className="book">
<img src={img}></img>
<h1>{title}</h1>
<h4>{author}</h4>
    </article>
 }

ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>)
