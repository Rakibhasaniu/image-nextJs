export const metadata = {
  title: "Home Page",
  description: "This Is Home Page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h1 className="text-center">This Is Home Page</h1>
      <div className="flex justify-between">
        {data.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>

                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
