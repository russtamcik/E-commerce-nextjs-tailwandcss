import ProductType from "@/types/product";
import ProductCard from "../card/ProductCard";

interface ProductsRowProps {
  loading?: boolean;
  products: ProductType[];
}

const ProductsRow = ({ loading, products }: ProductsRowProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {loading ? (
        <div style={{ color: "white", fontSize: "50px" }}>Please wait...</div>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))
      )}
    </div>
  );
};

export default ProductsRow;
