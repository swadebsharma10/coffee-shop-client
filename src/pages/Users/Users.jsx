import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser = useLoaderData();

    const[users, setUsers] = useState(loadedUser);

    const handleDelete = ID =>{
        console.log('delete ', ID);
        fetch(`https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/user/${ID}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                // remove the user from UI
                const remaining = users.filter(user => user._id !== ID);
                setUsers(remaining)
            }
        })
    }

    return (
        <div>
            <h2>User: {loadedUser.length}</h2>
            <div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>CreateAt</th>
                  <th>Last Logged in</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               
                {
                   users.map(user => <tr key={user._id}>
                        <th>1</th>
                        <td>{user.email}</td>
                        <td>{user.createAt}</td>
                        <td></td>
                        <td>
                            <button onClick={() =>handleDelete(user._id)} className="btn">X</button>
                        </td>
                      </tr>)
                }
                
              
              </tbody>
            </table>
          </div>
            
            
            </div>
        </div>
    );
};

export default Users;