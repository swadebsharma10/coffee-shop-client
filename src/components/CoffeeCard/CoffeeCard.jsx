import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, photo, category, quantity, test, details } = coffee;

    const handleDelete = Id =>{
        console.log("delete this item", Id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            // we will call the fetch here.
            fetch(`http://localhost:5000/coffee/${Id}` , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                      Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success' );
                const remaining = coffees.filter(coff => coff._id !==Id);
                setCoffees(remaining)
                }
            })
            }
          })
    }

    return (
        <section>
        <div className="card card-side bg-base-100 shadow-xl m-3">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className=" flex justify-between items-center w-full pr-4">
          <div className='pl-5'>
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{quantity}</p>
          <p>{test}</p>
          <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
          <button className="btn ">View</button>
          <Link to={`update/${_id}`}> <button className="btn ">Edit</button></Link>
          <button
            onClick={()=> handleDelete(_id)}
           className="btn bg-warning">Delete</button>
        </div>
          </div>
        </div>
      </div> 
        </section>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
   
    
    
}
