import Kodeguru from "../assets/kodeguru-Logo1.jpeg";
import Kate from "../assets/kate.jpg";

const Navbar = () => {
  return (
    <section className="w-full p-5 flex">
      {/* Logo Section */}
      <div className="">
        <img src="logo.svg" alt="KodeguruDev Logo" className="" />
        <span>GurudevAdmin</span>
      </div>
      {/* ICONS */}
      <div className="">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        {/* Notification */}
        <div>
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        {/* Users  */}
        <div>
          <img src={Kate} alt="" className="h-9 w-9 rounded-full" />
          <span></span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </section>
  );
};

export default Navbar;
