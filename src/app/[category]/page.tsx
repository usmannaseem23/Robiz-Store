import CataPage from "./CataPage";



const Category = ({params}: {params:{category:string}}) => {

 
  // const bestSell = [
  //   {
  //     src: "/pic/bs1.webp",
  //     alt: "Polo",
  //     title: "Black Polo",
  //     description: "Best quality t-shirt for men",
  //     price: 20,
  //     category: "polos",
  //     product: "black-polo",
  //   },
  //   {
  //     src: "/pic/bs1.webp",
  //     alt: "Polo",
  //     title: "Black Polo",
  //     description: "Best quality t-shirt for men",
  //     price: 20,
  //     category: "tops",
  //     product: "loose-fit",
  //   },
  //   {
  //     src: "/pic/bs1.webp",
  //     alt: "Polo",
  //     title: "Black Polo",
  //     description: "Best quality t-shirt for men",
  //     price: 20,
  //     category: "shoes",
  //     product: "brown-slippers",
  //   },
  // ];
  return (
    <div className="mt-[50px] mb-[100px]">
       <CataPage params={params}/>
    </div>
  );
};

export default Category;
