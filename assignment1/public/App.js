const userName = "Sachine V. Reddy";
const userProfile = "Software Developer";
const buttonName = "GITHUB REPOSITORY";
const buttonLink = "https://github.com/SachineReddy/profile";
const profileElement = /*#__PURE__*/React.createElement("div", {
  className: "profile-div"
}, addHeaderAndSubHeader(userName, userProfile), showProfileImagePara(), showButton(buttonName, buttonLink));
ReactDOM.render(profileElement, document.getElementById("profile"));

function addHeaderAndSubHeader(header, subheader) {
  return /*#__PURE__*/React.createElement("div", {
    className: "header-div"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "sub-header"
  }, subheader));
}

function showButton(buttonName, buttonLink) {
  return /*#__PURE__*/React.createElement("div", {
    className: "git-button"
  }, /*#__PURE__*/React.createElement("a", {
    href: `"{buttonLink}"`,
    className: "profile-link"
  }, /*#__PURE__*/React.createElement("h2", null, buttonName)));
}

function showProfileImagePara() {
  return /*#__PURE__*/React.createElement("div", {
    className: "profile-highlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../images/profile/sachine.jpeg",
    alt: "Profile Image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "profile-para"
  }, /*#__PURE__*/React.createElement("p", null, "I am a Software Developer professional with almost 5+ years of experience in application development. About my coding philosophy, I prefer to contribute to all the aspects of the coding cycle, starting from the development of a product to getting it deployed in an environment. Doing so, helps me to be in sync with the latest technologies and trends in the market and gives me a better understanding of the details involved in developing software. When it comes to development, the adage 'Jack of all trades' is something which I can relate to.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Apart from coding, I am an avid follower of chess. I could play chess for many hours at a time. I like to socialize with others and try to explore new stuff (a lot of items are pending in my wish list which needs to be ticked off).")));
}