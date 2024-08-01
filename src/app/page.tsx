import SectionAtom from "./components/Atoms/SectionProps";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="p-4 flex justify-between items-center">
         <div className="text-2xl font-cursive text-[#FFB830]">FoodHouse</div>
         <nav>
           <ul className="flex space-x-12 text-[20px] gap-[30px] my-[42px]" >
             <li><Link href="/" className="text-[#FFB830]">HOME</Link></li>
             <li><Link href="/Restaurant" className="text-gray-500">RESTAURANT</Link></li>
             <li><Link href="/services" className="text-gray-500">SERVICES</Link></li>
             <li><Link href="/cart" className="text-gray-500">CART</Link></li>
           </ul>
         </nav>
         <button className="text-gray-500 text-[23px] mr-[53px]">Sign In</button>
       </header>
     <div className="flex ml-60"> 
        <div className="font-serif">
         <h1 className=" text-7xl font-light"><b>Enjoy Delicious</b></h1>
<h1 className="text-7xl font-light"><b>Food in</b> <b className="text-amber-500 text-7xl font-light">Healthy Life</b></h1>
<br></br>
<br></br>
<br></br>
         <p className="text-4xl">Tandoori masala is an Indian spice blend consisting of a </p>
          <p className="text-4xl">variety of spices Tandoori masala is an Indian spice blend</p>
          <p className="text-4xl">constiting of a variety of spices</p>
      <button className="my-[60px] text-slate-100 bg-yellow-500  min-w-[200px]  min-h-[65px] text-[25px] rounded-lg"> ORDER NOW</button>
        </div>
        <div>
        </div>
        <div>
        <img src="/media/chicken.png" className="justify-center" alt="chicken"/>
        </div>
        </div>
       <h3 className="text-center font-amsterlands text-4xl italic font-bold">Online Store</h3>
  <h2 className="text-center text-7xl">Popular Foods</h2>   
<div className=" flex mt-32 ml-64 gap-44">
<div>
  <img src="/media/chickenkale-image.png" alt="fruitdish"  className="size-60 rounded-full"/>
  <figcaption><h4>Fruit dish</h4></figcaption>
  <figcaption>Dinko Food</figcaption>
  <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  <button className="rounded-2xl p-3.5 text-slate-100 bg-amber-500"> Add to cart  $696</button>
  </div>
  <div>
  <img src="/media/seafood.webp" alt="fruitdish"  className="size-60 rounded-full"/>
  <figcaption><h4>Sea fish dish</h4></figcaption>
  <figcaption>Dinko Food</figcaption>
  <figcaption>&#11088;&#11088;&#11088;&#11088;&#11088;</figcaption>
  <button className="rounded-2xl p-3.5 text-slate-100 bg-amber-500"> Add to cart  $696</button>
  </div>
  <div>
  <img src="/media/seafish.webp" alt="fruitdish"  className="size-60 rounded-full"/>
  <figcaption><h4>Fruit dish</h4></figcaption>
  <figcaption>Dinko Food</figcaption>
<figcaption>&#11088;&#11088;&#11088;&#11088;&#11088;</figcaption>
  <button className="rounded-2xl p-3.5 text-slate-100 bg-amber-500"> Add to cart  $696</button>
  </div>
  <div>
  <img src="/media/pizza.jpg" alt="fruitdish"  className="size-60 rounded-full"/>
  <figcaption><h4>Pizza</h4></figcaption>
  <figcaption>Dinko Food</figcaption>
  <figcaption>&#11088;&#11088;&#11088;&#11088;&#11088;</figcaption>
  <button className="rounded-2xl p-3.5 text-slate-100 bg-amber-500"> Add to cart  $696</button>
  </div>
</div>
<div className="mt-32 ml-64">
<button className="p-3.5 text-slate-100 bg-amber-500">-50%</button>
  <div className="flex gap-44 mb-36">
  <div>
    <h1 className="text-7xl font-bold italic">Our Special Offer</h1>
    <br></br>
    <br></br>
    <p className="font-amsterlands  text-zinc-500 text-2xl">Best cooks and  best delivery guys all at your <br></br>service.Hot tasty food will reach you in 60 minutes</p>
    <br></br>
    <button className="text-center text-2xl m-4 flex rounded-2xl p-1.5 text-slate-100 bg-amber-500">See All Menu <img src="/media/arrow.png" className="size-12 p-2 mt-0.5"></img></button>
  </div>
  <div>
    <img src="/media/salad.png" alt="salad" className="size-96"/>
  </div>
</div>
</div>
<div className="text-center mb-36">
        <p className="font-amsterlands text-2xl">Quality Food&#129295;</p>
        <h1 className="text-center text-6xl font-medium">Get The Best Offers</h1>
        <br></br>
        <p className="font-amsterlands text-[20px]  text-zinc-500">The food at your doorstep.Why starve when you have us.You hunger <br/>partner.Straight out of the oven to your doorstep.</p>
      </div>
      <div className="flex  gap-20 mt-32 ml-64">
        <div className="flex">
        <div>
          <h1 className="font-bold text-3xl">Any day <br/>Offers</h1>
          <p className=" text-zinc-500 text-2xl">New phenomenon <br/>Burger taste</p>
          <p className="text-amber-500 text-2xl font-semibold">$12.90</p>
        </div>
        <div>
          <div className="flex items-center justify-center">
  <div className="relative w-40 h-40 bg-amber-400 rounded-full flex items-center justify-center ml-20">
    <img src="/media/hamburger.png" alt="okra" className="size-28 rounded-full object-cover mr-20" />
  </div>
</div>
        </div>
        </div>
        <div className="flex">
        <div>
          <h1 className="font-bold text-3xl">Other <br/>flavours</h1>
          <p className=" text-zinc-500 text-2xl">save room.We <br/>made salats</p>
          <p className="text-amber-500 text-2xl font-semibold">$12.90</p>
        </div>
        <div className="flex items-center justify-center">
  <div className="relative w-40 h-40 bg-amber-400 rounded-full flex items-center justify-center ml-20">
    <img src="/media/okra.png" alt="okra" className="size-28 rounded-full object-cover mr-20" />
  </div>
</div>
        </div>
        <div className="flex">
        <div className=" font-bold text-3xl">Find a poco<br/>store near <br/>you</div>
        <div><img src="/media/location.png" alt="location" /></div>
      </div>
      <div>
      </div>
      </div>
        <h1 className="text-center text-6xl font-medium mb-36">Our Service</h1>
      <div className="flex gap-48 ml-52 font-medium text-2xl mr-24" >
      <div>
        <img src="/media/hone.png" alt="hone"/>
        <figcaption>55+ Restaurants</figcaption>
      </div>
      <div>
        <img src="/media/quality.png" className="size-56"></img>
        <figcaption>Good Quality</figcaption>
      </div>
      <div>
      <img src="/media/car.png" alt="car"/>
        <figcaption>Discount System</figcaption>
      </div>
      <div>
      <img src="/media/motorcycle.png" alt="motorcycle"/>
        <figcaption>Fast Delivery</figcaption>
      </div>
      </div>
      <div className="mt-96">
        <p className="text-center font-bold text-xl mr-24">Testimonial</p>
        <br></br>
        <h1 className="text-center font-bold text-7xl italic">What Our Clients Say</h1>
       <div className="flex justify-center mt-16">
  <img src="/media/speech.png" alt="speech" className="size-20 " />
</div>
<br></br>
<br></br>
        <p className="text-center text-[20px]  text-zinc-500">Lorem ipsum dolor sit amet, consectetur apidiscing elit, sed do eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud incididunt <br/>ullamco laboris nisi ut aliquip ex ea commodo<br/></p>
        <div className="flex gap-10 justify-center items-center  mt-16">
          <img src="/media/team1.jpg" className="size-12 rounded-full"></img>
          <img src="/media/team2.png" className="size-12 rounded-full"></img>
          <img src="/media/team3.jpg" className="size-24 rounded-full"></img>
          <img src="/media/team4.jpg" className="size-12 rounded-full"></img>
          <img src="/media/team5.jpeg" className="size-12 rounded-full"></img>
        </div>
        <h3 className="text-center font-bold text-2xl">Mitchell Marsh</h3>
        <p className="text-center text-xl">CEO, Bexon Agency</p>
        <br></br>
        <div className="flex justify-center">
  <i className="mr-2 text-4xl">&#10094;</i>
  <i className="ml-2 text-4xl text-amber-500 ">&#10097;</i>
</div>
      </div>
      <div className="flex gap-64 ml-96 " >
        <div>
          <img src="/media/phone.png" className="h-max"></img>
        </div>
        <div className="mt-44">
          <h3 className="text-amber-500 text-4xl font-light">Downlod Our App</h3>
          <h1 className="text-7xl font-medium">It's all here. <br/>All in one app.</h1>
          <p className=" text-zinc-500 text-[20px]">Discover local, on-demand delivery or pickup from <br/>restaurants, nearby grocery and conveniences stores, <br/>and more.</p>
           <div className="flex gap-10 mt-14">
           <img src="/media/apple.png"></img>
           <img src="/media/google.png"></img>
           </div>
        </div>
      </div>
      <div className="flex ml-[200px] gap-[50px]">
<div>
<h1 className="text-[45px] font-bold mt-[100px]">Subscribe Our Newsletter</h1>
<p className="mt-[20px] font-medium text-[20px] text-zinc-500">Subscribe on our newsletter to get our</p>
<p className="font-medium text-[20px] text-zinc-500">news</p>
</div>
<div className="my-[190px]  text-zinc-500 text-[20px] ml-[100px] ">
<input
    type="email"
    placeholder="Your email address..."
    className="border border-zinc-500 rounded-l-md px-4 py-2 text-zinc-800 text-[20px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
  />
</div>
<div>
<button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[300px]  min-h-[85px] text-[35px] rounded-lg mr-[60px] mt-[160px]">Subscribe</button>
</div>
</div>
<div className=" text-white	flex gap-2 place-content-around bg-[rgb(24,6,5)] p-24 ">
  <div>
    <h2 className="font-medium text-2xl mb-9">FoodHouse<b className="text-amber-500">.</b></h2>
    <p className=" text-zinc-500 text-2xl">Best cooks and best delivery guys all</p>
    <p className=" text-zinc-500 text-2xl">at your service. Hot tasty food will</p>
    <p className=" text-zinc-500 text-2xl">reach you in 60 minutes.</p>
    <img src="/media/icons.png" alt="facebook " />
  </div>
  <div>
    <h2 className="font-medium text-2xl mb-9">Company</h2>
    <p className=" text-zinc-500 text-2xl">Career</p>
    <p className=" text-zinc-500 text-2xl">About Us</p>
    <p className=" text-zinc-500 text-2xl">Blog</p>
    <p className=" text-zinc-500 text-2xl">Press Info</p>
    <p className=" text-zinc-500 text-2xl">Features</p>
  </div>
  <div>
    <h2 className="font-medium text-2xl mb-9">Fudo</h2>
    <p className=" text-zinc-500 text-2xl">Why Fudo</p>
    <p className=" text-zinc-500 text-2xl">How it Works</p>
    <p className=" text-zinc-500 text-2xl">Why choose us</p>
    <p className=" text-zinc-500 text-2xl">Client Stories</p>
    <p className=" text-zinc-500 text-2xl">Gallery</p>
  </div>
  <div>
    <h2 className="font-medium text-2xl mb-9">Menu</h2>
    <p className=" text-zinc-500 text-2xl">Breakfast</p>
    <p className=" text-zinc-500 text-2xl">Lunch</p>
    <p className=" text-zinc-500 text-2xl">Dinner</p>
    <p className=" text-zinc-500 text-2xl">Fast Foods</p>
    <p className=" text-zinc-500 text-2xl">Drinks</p>
  </div>
</div> 
<div className="text-slate-100 bg-amber-500 flex gap-6 ml-auto pb-10 ">
<h6 className="ml-96 text-center">Copyright 2021 Besnik All Right Reserved</h6>
<div className="flex gap-9 ml-96">
  <h6>Teams</h6>
  <h6>Privacy</h6>
  <h6>Security</h6>
</div>
</div>   
</main>
  );
}
