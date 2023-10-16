import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, photo, category, quantity, supplier, test, details } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const newCoffee = {name, quantity, supplier,test,category,details,photo}
        console.log(newCoffee)
        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
          console.log(data) 
          if(data.modifiedCount > 0 ){
            alert('product Updated successfully')
          }
        })
      }
   
    return (
        <section className="my-10">
        <h2 className="text-center text-3xl font-bold text-purple-600 underline">Update a Coffee</h2> 
        <div className="text-center">
        <form onSubmit={handleUpdateCoffee}>
         {/*form name and quantity row*/}
           <div className="md:flex mb-7">
            <div className="form-control md:w-1/2">
             <label className="label">
             <span className="label-text">Coffee Name</span>
             </label>
             <label className="input-group">
             <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" id="" className="input input-bordered w-full" />
             </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-3">
             <label className="label">
             <span className="label-text">Available Quantity</span>
             </label>
             <label className="input-group">
             <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" id="" className="input input-bordered w-full" />
             </label>
            </div>
           
           </div>
         {/*form supplier and test row*/}
           <div className="md:flex mb-7">
            <div className="form-control md:w-1/2">
             <label className="label">
             <span className="label-text">Supplier</span>
             </label>
             <label className="input-group">
             <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" id="" className="input input-bordered w-full" />
             </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-3">
             <label className="label">
             <span className="label-text">Test</span>
             </label>
             <label className="input-group">
             <input type="text" name="test" defaultValue={test} placeholder="Test" id="" className="input input-bordered w-full" />
             </label>
            </div>
           
           </div>
         {/*form category and details row*/}
           <div className="md:flex mb-7">
            <div className="form-control md:w-1/2">
             <label className="label">
             <span className="label-text">Category</span>
             </label>
             <label className="input-group">
             <input type="text" name="category" defaultValue={category} placeholder="Category" id="" className="input input-bordered w-full" />
             </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-3">
             <label className="label">
             <span className="label-text">Details</span>
             </label>
             <label className="input-group">
             <input type="text" name="details" defaultValue={details} placeholder="Details" id="" className="input input-bordered w-full" />
             </label>
            </div>
           
           </div>
         {/*form photoUrl row*/}
           <div className="mb-7">
            <div className="form-control md:w-full">
             <label className="label">
             <span className="label-text">PhotoUrl</span>
             </label>
             <label className="input-group">
             <input type="text" name="photo" defaultValue={photo} placeholder="PhotoUrl" id="" className="input input-bordered w-full" />
             </label>
            </div>         
           </div>

           <button type="submit" className="btn btn-block">Add Coffee</button>

        </form>
        </div>
      </section>
    );
};

export default UpdateCoffee;