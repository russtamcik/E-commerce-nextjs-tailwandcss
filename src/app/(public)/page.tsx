import { Metadata } from "next";
import { Fragment } from "react";
import axios, { AxiosResponse } from "axios";
import CategoryCard from "@/components/card/CategoryCard";
import request from "@/server";
import CategoryType from "@/types/category";

export const metadata: Metadata = {
  title: "Najot e-commerce | Home",
  description: "E-commerce website forever",
};

const Home = async () => {
  try {
    const { data } = await request.get<CategoryType[]>("category");
    // const datas = await request.get<ProductType[]>("last-products");

    // const datas: AxiosResponse<ProductType[]> = await request.get(
    //   "last-products"
    // );

    return (
      <Fragment>
        <section style={{ marginTop: "100px" }}>
          <h1 className="py-3 border border-sky-600 text-center rounded-full text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Latest Products
          </h1>
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {datas.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div> */}
        </section>
        <section>
          <h1 className="py-3 border border-sky-600 text-center rounded-full text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Categories
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map((category) => (
              <CategoryCard key={category._id} {...category} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export default Home;
