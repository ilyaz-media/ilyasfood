export default function Banner() {
  return (
    <div className="grid grid-cols-2 gap-2 w-[90%] mt-20 m-[auto]">
      <div className="bg-orange-700 h-[400px] rounded-3xl overflow-hidden">
        <img
          src="src\assets\2.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="  grid grid-rows-2 gap-3 h-[400px] rounded-lg overflow-hidden">
        <div className="bg-orange-200 rounded-3xl overflow-hidden">
          <img
            src="src\assets\1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-orange-200 rounded-3xl overflow-hidden ">
          <img
            src="src\assets\2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
