import "./App.css";
import course from "./assets/courses.svg";
import Group13 from "./assets/Group13.svg";
import Group from "./assets/Group.svg";
import account from "./assets/account.svg";
import Logo from "./assets/Logo.svg";
import Group361 from "./assets/Group361.svg";
import more from "./assets/more.svg";
import pricing from "./assets/pricing.svg";
import profile from "./assets/profile.svg";
import setting from "./assets/setting.svg";
import billing from "./assets/billing.svg";
import team from "./assets/team.svg";
import gift from "./assets/gift.svg";
import signout from "./assets/signout.svg";
import discounts from "./assets/discounts.svg";
import user from "./assets/user.svg";
import Avatar from "./assets/Avatar.svg";
import LockFill from "./assets/LockFill.svg";
import menu from "./assets/menu.svg";
import color from "./assets/Color.svg";
function App() {
  return (
    <div className="home">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav_wrap">
            <div className="nav_item_wrap">
              <img src={course} alt="" />
              <a href="">Courses</a>
            </div>
            <div className="nav_item_wrap">
              <img src={Group361} alt="" />
              <a href="">Tutorials</a>
            </div>
            <div className="nav_item_wrap">
              <img src={Group13} alt="" />
              <a href="">Livestreams</a>
            </div>
            <div className="nav_item_wrap">
              <img src={pricing} alt="" />
              <a href="">Pricing</a>
            </div>
            <div className="nav_item_wrap">
              <img src={more} alt="" />
            </div>
            <div className="nav_item_wrap">
              <img src={Group} alt="" />
            </div>
            <div className="nav_item_wrap">
              <img src={account} alt="" />
            </div>
          </div>
        </nav>

        <div className="content">
          <div className="extra_navbar">
            <div className="extra_nav_wrap">
              <img src={profile} alt="" />
              <a href="#">Profile</a>
            </div>
            <div className="extra_nav_wrap active">
              <img src={setting} alt="" />
              <a href="#">Sittings</a>
            </div>
            <div className="extra_nav_wrap">
              <img src={billing} alt="" />
              <a href="#">Billing</a>
            </div>
            <div className="extra_nav_wrap">
              <img src={team} alt="" />
              <a href="#">Manage Team</a>
            </div>
            <div className="extra_nav_wrap">
              <img src={discounts} alt="" />
              <a href="#">Discounts</a>
            </div>
            <div className="extra_nav_wrap">
              <img src={gift} alt="" />
              <a href="#">Gift Licenses</a>
            </div>
            <div className="extra_nav_wrap">
              <img src={signout} alt="" />
              <a href="#">Sign Out</a>
            </div>
          </div>
          <div className="edit_profile">
            <h2>Edit profile</h2>
            <p>Manage your DesignCode profile and account</p>
            <div className="avatar_wrap">
              <img src={Avatar} alt="" />
              <div className="btn">
              change avatar
                <input className="input_file" type="file" placeholder="Change avatar" />
              </div>
              {/* <button className="btn">change avatar</button> */}
            </div>
            <form className="form">
              <div className="form_wrap">
                <div className="profile_sittings form_content">
                  <h4>profile settings</h4>
                  <div className="input_wrap">
                    <img src={user} alt="" />
                    <input type="text" placeholder="Meng to" />
                  </div>
                  <div className="input_wrap">
                    <img src={menu} alt="" />
                    <textarea type="text" placeholder="description">
                      I teach designer code and developers design
                    </textarea>
                  </div>
                </div>
                <div className="account_sittings form_content">
                  <h4>account settings</h4>
                  <div className="input_wrap">
                    <img src={color} alt="" />
                    <input type="email" placeholder="email@designcode.io" />
                  </div>
                  <div className="input_wrap">
                    <img src={LockFill} alt="" />
                    <input type="text" placeholder="******" />
                  </div>
                </div>
              </div>

              <button className="submit_btn" type="submit">Save settings</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
