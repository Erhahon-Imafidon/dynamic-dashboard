import Kodeguru from "../assets/kodeguru-Logo1.jpeg";

const Navbar = () => {
  return (
    <section>
      {/* Logo Section */}
      <div className="">
        <img src={Kodeguru} alt="KodeguruDev Logo" className="w-16" />
        <span>GurudevAdmin</span>
      </div>
      {/* ICONS */}
      <div>
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        {/* Notification */}
        <div>
          <img src="/notifications.svg" alt="" />
        </div>
        {/* Users  */}
        <div></div>
        <img src="/settings.svg" alt="" />
      </div>
    </section>
  );
};

export default Navbar;
