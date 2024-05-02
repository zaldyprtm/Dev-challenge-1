import { Data } from "./Data";
import "../components/Col.css";

export const Menu = () => {
  console.log(Data);
  return (
    <>
      <div
        className="bg-no-repeat h-96"
        style={{
          backgroundImage: "url(../src/assets/img/bg-cafe.jpg)",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="awal bg-[#1B1D1F] w-[350px] h-auto mx-auto -mt-80 rounded-lg">
        <div
          style={{
            backgroundImage: "url(/src/assets/img/vector.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
          className="mx-auto p-6"
        >
          <h1
            className="text-center text-2xl text-white py-8 font-head "
            style={{ fontWeight: "800" }}
          >
            Our Collection
          </h1>
          <p className="text-[#6F757C] text-md font-semibold text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-evenly mt-5 relative">
            <p
              className="font-head text-white bg-[#6F757C] text-center items-center justify-center flex w-32 h-10 rounded-md"
              style={{ fontWeight: "500" }}
            >
              All Products
            </p>
            <p className=" text-white font-head flex items-center">
              Available Now
            </p>
          </div>
        </div>
        <div className="grid mt-6">
          {Data.map((item, index) => (
            <div key={index} className=" mx-auto mb-10">
              {item.popular && <p className="text-black bg-[#F6C768] rounded-lg w-16 text-center font-head relative text-sm top-7 left-2" style={{fontWeight:'600' } }>Popular</p>}
              <img
                src={item.image}
                alt={item.name}
                className=" rounded-md w-72"
              />
              <div className="flex justify-between  mt-2">
                <p
                  className="text-white font-head"
                  style={{ fontWeight: "500" }}
                >
                  {item.name}
                </p>
                <p
                  className="font-head mt-1 text-center text-black h-[25px] w-[60px] rounded-md bg-[#BEE3CC]"
                  style={{ fontWeight: "800" }}
                >
                  {item.price}
                </p>
              </div>
              <div className="flex">
                {item.votes === 0 ? (
                  <img src="./src/assets/img/star.svg"  />
                ) : (
                  <img src="./src/assets/img/star_fill.svg"  />
                )}
                &nbsp; 
                <p className="text-white mt-1">{item.rating}&nbsp;  </p> 
                <p className="text-[#6F757C] mt-1">  ({item.votes} votes)</p>

                {item.available ? null : (
                  <p className="text-[#ED735D] ml-20 font-head mt-2" style={{fontWeight: '500'}}>Sold Out</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
