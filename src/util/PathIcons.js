const style = {
  color: "#fff",
  fontSize: "15px",
  marginRight: "4px",
};
const iconPost = {
  color: "#a303a0",
  fontSize: "20px",
};
const menuNav = {
  color: "#a303a0",
  fontSize: "20px",
  backgroundColor: "#f7f7f8",
  display: "flex",
  alignItems: "center",
  padding: "5px",
  borderRadius: "50%",
};
export class PathIcons {
  static addFriend = (<i className="fa-solid fa-user-plus" style={style}></i>);
  static search = (
    <i className="fa-solid fa-magnifying-glass" style={iconPost}></i>
  );
  static messenger = (
    <i className="fa-brands fa-facebook-messenger" style={style}></i>
  );
  static menuDots = (<i className="fi fi-br-menu-dots"></i>);
  static unlike = (<i className="fa-regular fa-heart" style={iconPost}></i>);
  static like = (<i className="fa-solid fa-heart" style={iconPost}></i>);
  static comment = (
    <i className="fa-regular fa-comment-dots" style={iconPost}></i>
  );
  static send = (
    <i className="fa-regular fa-paper-plane" style={iconPost}></i>
  );

  static image = (<i className="fi fi-rr-images" style={iconPost}></i>);
  static feeling = (<i className="fi fi-rr-grin-alt" style={iconPost}></i>);
  static upload = (
    <i className="fa-solid fa-cloud-arrow-up" style={iconPost}></i>
  );
  static settings = (<i className="fa-solid fa-gear" style={menuNav}></i>);
  static language = (<i className="fi fi-rr-language" style={menuNav}></i>);
  static darkMode = (<i className="fa-solid fa-moon" style={menuNav}></i>);
  static signOut = (<i className="fi fi-br-sign-out-alt" style={menuNav}></i>);
  static searchIcon = (<i className="fi fi-rr-search" style={iconPost}></i>);
  static close = (
    <i
      className="fa-solid fa-circle-xmark"
      style={{ color: "red", fontSize: "35px" }}
    ></i>
  );
  // static user = (<i className={`fa-solid fa-user`} style={iconPost}></i>);
  // static birthrate = (
  //   <i className={`fa-solid fa-cake-candles`} style={iconPost}></i>
  // );
  // static location = (
  //   <i className={`fa-solid fa-location-dot`} style={iconPost}></i>
  // );
  // static email = (<i className={`fa-solid fa-envelope`} style={iconPost}></i>);
  // static phone = (<i className={`fa-solid fa-phone`} style={iconPost}></i>);
}
