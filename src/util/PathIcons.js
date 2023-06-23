const style = {
  color: "#fff",
  fontSize: "15px",
  marginRight: "4px",
};
const iconPost = {
  color: "#a303a0",
  fontSize: "20px",
};
export class PathIcons {
  static addFriend = (<i className="fa-solid fa-user-plus" style={style}></i>);
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
  static close = (
    <i
      class="fa-solid fa-circle-xmark"
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
