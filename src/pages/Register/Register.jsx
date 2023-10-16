import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // create user
        createUser(email, password)
        .then(result =>{
            // const createUser = result.user;
            console.log('created user', result.user);
            const createAt = result.user?.metadata?.creationTime;
            const user = {email,  createAt: createAt}
            fetch('https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/user', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    alert('User created successfully')
                }
            })
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;