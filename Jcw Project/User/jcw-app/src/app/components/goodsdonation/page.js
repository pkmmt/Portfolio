"use client";
import Link from "next/link";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import "@/app/ui/goodsdonation/goods.css";

const GoodsCard = ({ image, category, ribbonClass }) => (
  <div className="card">
    <Link href="/components/donationform">
      <img src={image} alt={`${category} donation`} />
      <div className={`ribbon ${ribbonClass}`}>
        <span>{category}</span>
      </div>
    </Link>
  </div>
);

const goodsCategories = [
  {
    image: "https://media.istockphoto.com/id/628557502/vector/kids-toy-box-full-of-toys.jpg?s=612x612&w=0&k=20&c=0IJjoPmG4cynAM4okhJuT4nWp7aC5bLxp1rON91aLQ8=",
    category: "Toys",
    ribbonClass: "ribbon-hot"
  },
  {
    image: "https://i.pinimg.com/originals/63/04/38/6304382bf71ff1d9eeff91fd8ed3a9ec.jpg",
    category: "Groceries",
    ribbonClass: "ribbon-new"
  },
  {
    image: "https://img.freepik.com/free-vector/isolated-set-clothes_1308-38983.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=ais_user",
    category: "Clothes",
    ribbonClass: "ribbon-pop"
  },
  {
    image: "https://www.shutterstock.com/image-vector/cleaning-supplies-objects-set-brushes-600nw-1593089716.jpg",
    category: "Cleaning",
    ribbonClass: "ribbon-spo"
  },
  {
    image: "https://as2.ftcdn.net/v2/jpg/01/62/05/03/1000_F_162050318_lF37ZSQxk30TGHqFMWkBaQItkGGwBnbn.jpg",
    category: "Other",
    ribbonClass: "ribbon-hot"
  }
];

function Goods() {
  return (
    <>
      <NavBar />
      <div className="goods-container">
        {goodsCategories.map((item, index) => (
          <GoodsCard key={index} {...item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Goods;
