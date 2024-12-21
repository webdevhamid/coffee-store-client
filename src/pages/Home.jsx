import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div className="my-10">
      <h2 className="text-5xl text-center font-bold my-3">All Coffees ({coffees.length})</h2>
      {/* Coffees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees?.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
        ))}
      </div>
    </div>
  );
};

export default Home;
