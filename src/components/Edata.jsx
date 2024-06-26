export const e_data =[{
    id: 1,
    tag: "Cars",
    title: "Review of New Porsche Cars",
    img:"post2.jpeg",

},
{
    id: 2,
    tag: "Fashion",
    title: "How Lovely Yellow is! It Stands for the Sun",
    img:"post1.jpeg"
  },
  {
    id: 3,
    tag:  "Technology",
    title: "Style Tips Every Woman Should Know",
    img:"post4.jpeg",

  },
  {
    id: 4,
    tag:"Food",
    title: "The Most Popular Fast Food Chains",
    img:"d.jpg"
  },
  {
    css:"


/* here  start the site css for navBar */
.body.dark{
  background-color: #000033;
  /* padding-bottom: 5rem; */

}
.navBar{
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBar.dark{
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #000033, #000066, #000099, #0000cc, #0000ff);
  color: white;
}

.links-logo{
  margin-left: 1.6rem;
}
.links-logo.dark{
  margin-left: 1.6rem;
}
.mainLogo{
  font-size: x-large;
  font-weight: 900;
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}
.mainLogo.dark{
  font-size: x-large;
  font-weight: 900;
  color: rgb(253, 252, 252);
  text-decoration: none;
  margin-right: 1rem;
}
.links-icon{
  margin-left: 25px;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  padding-bottom: 1rem;
}
.links-icon.dark{
  margin-left: 25px;
  font-size: 15px;
  font-weight: 500;
  color: #f8f6f6;
  text-decoration: none;
  padding-bottom: 1rem;}
.links-icon {
  position: relative;
  transition: all .3s ease-in-out;
}

.links-icon::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px; /* Adjust this value to move the line up or down */
  right: 50%;
  background: blueviolet;
  transition: width .3s ease-in-out, right .3s ease-in-out;
}

.links-icon:hover::after {
  width: 100%;
  right: 0;
}
@media(max-width:1000px){
  .links-icon{
    display: none;
  }
}

/* for span in travel */
.travel{
  font-size: 10px;
  margin-left: 5px;
  background-color: rgb(245, 249, 6);
  color: rgb(9, 8, 8);
  padding: 2px 2px;
}
.shop{
    font-size: 10px;
    margin-left: 5px;
    background-color: rgb(249, 6, 6);
    color: rgb(249, 244, 244);
    padding: 2px 2px;
}

.icons{
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
}
.icons.dark{
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
}


/* span for cart */
.cart{
  text-decoration: none;
  position: relative;
}
.cart-png:hover{
  color: blueviolet;
}
.cart-span{
  position: absolute;
  top: 3px;
  margin-left: 4px;
  margin-right: 1rem;
  font-size: 10px;
  color: white;
  background-color: red;
  padding-left: 4px;
  padding-right:4px ;
  padding-top: 1px;
  padding-bottom: 1px;
}

.cart {
  position: relative;
  transition: all .3s ease-in-out;
}

.cart::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px; /* Adjust this value to move the line up or down */
  right: 50%;
  background: blueviolet;
  transition: width .3s ease-in-out, right .3s ease-in-out;
}

.cart:hover::after {
  width: 100%;
  right: 0;
}

.showSearch{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0000008e;
  height: 100%;
  width: 100%;
}
.searchBar{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 70px;
  width: 500px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 4px solid rgb(203, 199, 199);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
#SearchBar{
  height: 49px;
  border: none;
  width: 400px;
  font-size: 15px;
  color: gry;
}
#SearchBar:focus{
  outline: none;
}
#SearchBar::placeholder{
  font-size: 18px;
  color: blueviolet;

}
.fa-search{
  color: gray;
  font-size: 18px;
  position: relative;
}
#forSearch{
  position: absolute;
  top: 25%;
  right: 20%;
  font-size: 30px;
  font-weight: 500;
  color: white;
}
#forSearch:hover{
  font-size: 35px;
  transition: .2s ease-in-out;
}
.sideBar{
    position: fixed;
    top: 0;
    right: 0;
    background-color: #f8eeee;
    height: 100%;
    width: 30%;
    display: block;
    justify-content: flex-start;
    align-items: center;

}
.list-of-links{
  margin-left: 2rem;
  list-style: none;

}
.forSideBar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0000008e;
  height: 100%;
  width: 100%;
}



#logo{
  margin-top: 5rem;
  margin-left: 1rem;
}

.closeBar{
  position: relative;
  top: 20%;
  right: 0;
}

/* for dark and light mode */
.dark-light{
  position: fixed;
  bottom: 2rem;
  right: 3rem;
}

/* for hero section */
.hero{
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 5rem;
}
.main-hero.dark{
  background-color: #000033;
  height: 100%;
  width: 100%;
}


.hero1 {
  background-image: url(post1.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
  width: 740px;
  position: relative;
  margin-left: 1.5rem;
}

.hero1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2); /* Adjust the last value (0.5) to make the overlay darker or lighter */
}

.tag{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(236, 92, 249);
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  height: 25px;
  width: 70px;
}

.title{
  position: absolute;
  bottom: 17%;
  left: 5%;
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-decoration: none;
  width: 80%;
}
.title:hover{
  color: blueviolet;
  transition: .3s ease-in-out;
  text-decoration: underline;
}
.author{
  position: absolute;
  bottom: 5%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

}

.link-post1{
  color: white;
  text-decoration: none;
}

.link-post1:hover{
  color: blueviolet;
  transition: 0.2s ease-in-out;
}

.hero2{
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  gap: 27px;
  margin-right: 1.5rem;
}

.post2{
  background-image: url(post2.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 218px;
  width: 388px;
  position: relative;
}
.poat2::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.post3{
  background-image: url(post3.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 218px;
  width: 388px;
  position: relative;
}
.post3::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.post2-title{
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  bottom: 15%;
  left: 5%;
  color: white;
}
.post2-title:hover{
  color: blueviolet;
  transition: .3s ease-in-out;
  text-decoration: underline;
}

/* for posts div  */
.postContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.post4{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 194px;
  width: 80%;
  /* margin-left: 2rem; */
  position: relative;
  margin-top: 1.5rem;
}
.latest-posts{
  position: absolute;
  bottom: -5%;
  left: 2.7%;
  margin-top: 1rem;
}
.latest-posts.dark{
  position: absolute;
  bottom: -5%;
  left: 2.7%;
  margin-top: 1rem;
  color: white;
}


.post4-img{
  height: 194px;
  width: 230px;
  object-position: center;
  object-fit: cover;
}


.post4-tag{
  position: absolute;
  top: 0;
  left: 0;
  background-color: blueviolet;
  height: 25px;
  width: 80px;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.author-detail{
  width: 70%;
}

.detail{
  font-size: 15px;
  color: gray;
  margin-bottom: 1rem;

}
.postTitle{
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1.5rem;  
  color: #000033;
  text-decoration: none;
}
.postTitle:hover{
  color: blueviolet;
  transition: .3s ease-in-out;
  text-decoration: underline;
}
.postTitle.dark{
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1rem;  
  color: #ddddde;
}
.postTitle.dark:hover{
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1rem;  
  color:white;
  color: blueviolet;
  transition: .3s ease-in-out;
  text-decoration: underline;
}

.post-detail{
  color: gray;
  font-weight: 400;
  line-height: 20px;
  margin-top: .60rem;
}
.post-detail.dark{
  color: rgb(240, 240, 240);
  font-weight: 400;
  line-height: 20px;
}


/* for aside pas\rt */

.container{
  display: flex;
  justify-content: flex-start;
  align-items: start;
  position: absolute;
  flex-direction: column;
  gap: 1.5rem;
  top: 108%;
  right: 4%;
}
.container.dark{
  display: flex;
  justify-content: flex-start;
  align-items: start;
  position: absolute;
  flex-direction: column;
  gap: 1.5rem;
  top: 108%;
  right: 4%;
}
.e-img{
  height: 85px;
  width: 85px;
  object-fit: cover;
  object-position: center;
}
.e-post{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
}
.e-post.dark{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
}
.edited-text{
  position: absolute;
  top: -55%;
  left: 0;
}
.edited-text.dark{
  position: absolute;
  top: -55%;
  left: 0;
  color: white;
}
.e-tag{
  color: blueviolet;
  font-size: 15px;
  font-weight: 500;

}

.e-title{
  font-size: 16px;
  color: #000033;
  font-weight: 600;
  width: 100%;
  margin-top: 1rem;
}
.e-title.dark{
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  margin-top: 1rem;
  color: white;
}

.e-img {
  transition: transform 0.3s ease; 
  display: block; 
}

.e-img:hover {
  transform: scale(1.1); 
}


/* for icon setup */
.joinContainer{
  margin-top: 5rem;
}
.icon-container{
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 2rem;
  text-decoration: none;
  position: relative;
  color: #000000;
  border-bottom: 1px solid rgba(135, 132, 132, 0.778);
  padding-bottom: 10px;

}
.icon-container:hover{
  display: flex;
  justify-content: start;
  align-items: center;
  /* margin-top: 2rem; */
  text-decoration: none;
  position: relative;
  color: blueviolet;

}
.left-i{
  position: absolute;
  right: 2%;
}
.left-i.dark{

  color: white;
}

.joinContainer{
  width: 100%;
}
.i-name{
  font-size: 14px;
  color: #000033;
  margin-left: 1.5rem;
  font-weight: 600;

}
.i-name.dark{
  font-size: 14px;
  margin-left: 1.5rem;
  font-weight: 600;
  color: white;

}
.i-name:hover{
  margin-left: 1.5rem;
  color: blueviolet;
  font-weight: 600;
  transition: .3s ease-in-out;

}
.fa.dark{
  color: white;
}
.join-us.dark{
  color: white;
}
.join-us{
  color: #000033;
}

.news-shelter{
  margin-top: 4rem;

}
.news-shelter.dark{
  margin-top: 4rem;
  color: white;
}
.news{
  margin-bottom: 1.5rem;
}
.news.dark{
  margin-bottom: 1.5rem;
  color: white;
}
.sign-up{
  height: 60px;
  width: 90%;
  border-radius: 30px;
  border: 1px solid rgb(201, 200, 200);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up.dark{
  height: 60px;
  width: 90%;
  border-radius: 30px;
  border: 1px solid rgb(29, 29, 51);
  display: flex;
  justify-content: center;
  align-items: center;
}
.email{
  height: 60px;
  font-size: 16px;
  border: none;
  outline: none;
  width: 69%;
  margin-left: 10px;
  border-radius: 30px;
}
.email.dark{
  height: 60px;
  font-size: 16px;
  border: none;
  outline: none;
  width: 69%;
  margin-left: 10px;
  border-radius: 30px;
  background-color: transparent;
  color: white;
}
.sign-up-btn{
  height: 60px;
  width: 130px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  background-color: #ddddde;
  color: #000000;
}
.sign-up-btn:hover{
  background-color: #549a42;
}
.sign-up-btn.dark{
  height: 60px;
  width: 130px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  background-color: #000020;
  color: #fcfafa;
}
.text{
  font-size: 16px;
  font-weight: 500;
  color: #000033;
  width: 70%;
  margin-bottom: 2rem;
}
.text.dark{
  font-size: 16px;
  font-weight: 500;
  width: 70%;
  margin-bottom: 2rem;
  color: white;
}

/* foootrt start here  */
.footer{
  margin-top: 5rem;
  background-color:gainsboro ;
  height: 100%;

}

.take-all{
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;
  padding-bottom: 5rem;
}

.f-log{
  font-size: 29px;
  color: #000020;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 1.3rem;
}

.f-phone{
  font-size: 15px;
  color: rgb(99, 99, 99);
  margin-bottom: .50rem;
  
}
.f-contact{
  font-size: 15px;
  color: rgb(99, 99, 99);
  margin-bottom: .50rem;
}
.f-populer{
  font-size: 20px;
  color: #000020;
  font-weight: 800;
  margin-bottom:1rem;
  margin-top: 1rem;
}
.f-populer.dark{
  margin-top: 1rem;
  font-size: 25px;
  font-weight: 800;
  color: white;
}
.p-span{
  font-size: 20px;
  color: rgb(167, 166, 166);
  margin-right: .80rem;
}
.p-post{
  color: #000020;
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
}
.p-post:hover{
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
  color: blueviolet;
  transition: .3s ease-in-out;
}
.p-post.dark{
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
  color: white;
}
.p-time{
  margin-left: 20px;
  color: gray;
  margin-bottom: 2rem;
  margin-top: .50rem;
  font-size: 14px;
}


.cat{
  margin-top: 1rem;
  margin-bottom: .50rem;
  width: 27%;
}
.f-cat{
  color: #000020;
  font-size: 25px;
  font-weight: 800;
}
.f-cat.dark{
  color: #ffffff;
  font-size: 25px;
  font-weight: 800;

}
.all-cat{
  display: flex;
  justify-content:start;
  align-content:start;
  flex-wrap: wrap;
}
.cat-item{
  text-decoration: none;
  height: 20px;
  font-weight:400;
  color: #000000;
  text-align: center;
  margin-top: 20px;
  margin-right: 20px;
}
.cat-item:hover{
  text-decoration: none;
  height: 20px;
  font-weight:400;
  color: blueviolet;
  text-align: center;
  margin-top: 20px;
}
.footer-txt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
}
.f-txt{
  margin-left: 2rem;
  font-size: 15px;
  color: #000033;
}
.socil-link{
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}  ",
  }
]