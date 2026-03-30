

export function Sidebar() {
  return {
    <div className="sidenav">
        <div><img src="images/Company logo.png" className="logo" /></div>
        <div className="navlinks">
          <button className="navlink active">
            <img src="images/gauge.svg" className="nav-icon" />
            Dashboard
          </button>
          <button className="navlink">
            <img src="images/users.svg" className="nav-icon" />
            Team
          </button>
          <button className="navlink">
            <img src="images/folder.svg" className="nav-icon" />
            Projects
          </button>
          <button className="navlink">
            <img src="images/box.svg" className="nav-icon" />
            Blocks
          </button>
        </div>
      </div>
  };
}
