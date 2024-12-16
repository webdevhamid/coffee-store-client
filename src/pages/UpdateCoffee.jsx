import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, photoURL, _id, category, taste, supplier, details } = coffee || {};
  console.log(coffee);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = { name, chef, supplier, taste, category, details, photoURL };

    console.log(updatedCoffee);

    // Fetch the update coffee URL
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);

            if (result.modifiedCount > 0)
              Swal.fire({
                title: "Coffee Updated!",
                text: "Your coffee has been updated.",
                icon: "success",
              });
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold text-center my-3">
        Update Coffee <span className="text-pink-500">{name}</span> {}
      </h1>
      {/* Form */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#F4F3F0] p-8 max-w-[1300px] mx-auto"
        onSubmit={handleUpdate}
      >
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter coffee name"
            className="input input-bordered"
            required
            name="name"
            defaultValue={name}
          />
        </div>
        {/* Chef */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input
            type="text"
            name="chef"
            placeholder="Chef"
            className="input input-bordered"
            required
            defaultValue={chef}
          />
        </div>
        {/* Supplier */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            className="input input-bordered"
            required
            defaultValue={supplier}
          />
        </div>
        {/* Taste */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input
            type="text"
            name="taste"
            placeholder="Taste"
            className="input input-bordered"
            required
            defaultValue={taste}
          />
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered"
            required
            defaultValue={category}
          />
        </div>
        {/* Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Details"
            className="input input-bordered"
            required
            defaultValue={details}
          />
        </div>
        {/* Photo URL */}
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
            required
            defaultValue={photoURL}
          />
        </div>
        {/* Add Coffee Button */}
        <div className="form-control col-span-2">
          <input type="submit" className="btn btn-primary" value="Update Coffee" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
