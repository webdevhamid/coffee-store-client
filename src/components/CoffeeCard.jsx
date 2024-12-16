import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, photoURL, _id } = coffee || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });

              const remainingCoffees = [...coffees].filter((coffee) => coffee._id !== id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt={name} />
      </figure>
      <div className="flex py-5 items-center justify-between w-full pr-5 my-5">
        <div className="">
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Price: 500 BDT</p>
        </div>
        <div>
          <div className="join join-vertical space-y-3">
            <button className="btn">Edit</button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn">Update</button>
            </Link>
            <button className="btn" onClick={() => handleDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
