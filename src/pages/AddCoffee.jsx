const AddCoffee = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold text-center my-3">Add New Coffee</h1>
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          />
        </div>
        {/* Chef */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" placeholder="Chef" className="input input-bordered" required />
        </div>
        {/* Supplier */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" placeholder="Supplier" className="input input-bordered" required />
        </div>
        {/* Taste */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" placeholder="Taste" className="input input-bordered" required />
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" className="input input-bordered" required />
        </div>
        {/* Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Details" className="input input-bordered" required />
        </div>
        {/* Photo URL */}
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        {/* Add Coffee Button */}
        <div className="form-control col-span-2">
          <button className="btn btn-primary">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
