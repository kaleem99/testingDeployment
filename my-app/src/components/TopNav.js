import logo from "./notebook/img/2u-logo.png";


function TopNavigationMenu({ windowSize, OpenClose, navigation, start }) {
  return (
    <div className="topNav">
      <img alt="" className="logo" src={logo}></img>
      <p>Negotiating an employment contract</p>
      {windowSize > 700 || !start ? "" : <OpenClose navigation={navigation} />}
    </div>
  );
}

export default TopNavigationMenu;
