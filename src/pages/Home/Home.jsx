import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <section>
          <h3 className="font-bold my-10 text-center">Coffees of You like to drink: {coffees.length}</h3>
          <div className="grid md:grid-cols-2 gap-4">
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              ></CoffeeCard>)
          }
          </div>
        </section>
    );
};

export default Home;