import ProPage from "./proPage";


const Product = ({ params }: {params:{product: string}}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
     <ProPage params={params}/>
    </section>
  );
};

export default Product;
