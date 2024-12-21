import Swal from "sweetalert2";

// https://i.ibb.co.com/ykM4R6r/2.png
// https://i.ibb.co.com/SNhJfdj/3.png
// https://i.ibb.co.com/x8T2BVf/4.png
// https://i.ibb.co.com/wW8MTYw/5.png
// https://i.ibb.co.com/wBbSMN7/6.png
// https://i.ibb.co.com/kBxJGfK/1.png

/*
Here are some demo coffee examples based on your properties:

---

### 1. **Name**: Sunrise Brew  
   - **Chef**: Emma Carter  
   - **Supplier**: Golden Bean Roasters  
   - **Taste**: Citrus notes with a smooth caramel finish  
   - **Category**: Light Roast  
   - **Details**: Perfect for early mornings, this light roast coffee features beans sourced from high-altitude farms in Ethiopia, providing a bright and refreshing flavor.

---

### 2. **Name**: Midnight Harmony  
   - **Chef**: Liam Anderson  
   - **Supplier**: Black Velvet Traders  
   - **Taste**: Deep chocolate with hints of cherry  
   - **Category**: Dark Roast  
   - **Details**: A bold and intense dark roast crafted for those who enjoy a full-bodied coffee experience. The beans are aged in oak barrels for a unique flavor profile.

---

### 3. **Name**: Spiced Serenade  
   - **Chef**: Priya Kapoor  
   - **Supplier**: Spice Roots Coffee Co.  
   - **Taste**: Warm spices with vanilla undertones  
   - **Category**: Flavored Coffee  
   - **Details**: A blend of high-quality Arabica beans infused with cinnamon, cardamom, and a touch of vanilla. Ideal for a cozy afternoon treat.

---

### 4. **Name**: Tropical Breeze  
   - **Chef**: Mateo Rivera  
   - **Supplier**: Island Bean Collective  
   - **Taste**: Fruity and floral with a hint of coconut  
   - **Category**: Medium Roast  
   - **Details**: This exotic coffee is a medium roast featuring beans from Hawaiian estates, delivering a tropical twist with every sip.

---

### 5. **Name**: Classic Comfort  
   - **Chef**: John Miller  
   - **Supplier**: Heritage Coffee Supplies  
   - **Taste**: Rich and nutty with a smooth finish  
   - **Category**: Medium Roast  
   - **Details**: A timeless medium roast that blends beans from Colombia and Brazil for a balanced and satisfying flavor. Great for everyday brewing.

---
*/

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photoURL };

    console.log(newCoffee);

    fetch(`https://coffee-store-server-neon-five.vercel.app/coffee`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New coffee successfully added!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold text-center my-3">Add New Coffee</h1>
      {/* Form */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#F4F3F0] p-8 max-w-[1300px] mx-auto"
        onSubmit={handleSubmit}
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
          />
        </div>
        {/* Add Coffee Button */}
        <div className="form-control col-span-2">
          <input type="submit" className="btn btn-primary" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
