import request from "@/server";
import CategoryType from "@/types/category";
import { Fragment } from "react";
import CategoryCard from "../card/CategoryCard";

const Category = async () => {
  const { data } = await request.get<CategoryType[]>("category");
  console.log(data);
  return (
    <Fragment>
      <section>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data.map((category) => (
            <CategoryCard key={category._id} {...category} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Category;
