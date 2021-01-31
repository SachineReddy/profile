const userName = "Sachine V. Reddy";
const userProfile = "Software Developer";
const buttonName = "GITHUB REPOSITORY";
const buttonLink = "https://github.com/SachineReddy/profile";

const profileElement = (
    <div className="profile-div">
        {addHeaderAndSubHeader(userName,userProfile)}
        {showProfileImagePara()}
        {showButton(buttonName,buttonLink)}
    </div> 
);

ReactDOM.render(profileElement, document.getElementById("profile"));

function addHeaderAndSubHeader(header, subheader) {   
    return (
        <div className="header-div">
            <div className="header">{header}</div>
            <div className="sub-header">{subheader}</div>
        </div>      
    )    
}

function showButton(buttonName, buttonLink) {    
    return (
        <div className="git-button">    
            <a href={`"{buttonLink}"`} className="profile-link">
               <h2>{buttonName}</h2>
            </a>            
        </div>
    )
}

function showProfileImagePara() {   
    return (
        <div className="profile-highlight">
            <div className="profile-image">
                <img src="../images/profile/sachine.jpeg" alt="Profile Image"/>
            </div>
            <div className="profile-para">
                <p>
                I am a Software Developer professional with almost 5+ years of experience in application development. About my coding philosophy, I prefer to contribute to all the aspects of the coding cycle, starting from the development of a product to getting it deployed in an environment. Doing so, helps me to be in sync with the latest technologies and trends in the market and gives me a better understanding of the details involved in developing software. When it comes to development, the adage 'Jack of all trades' is something which I can relate to.
                <br/><br/>
                Apart from coding, I am an avid follower of chess. I could play chess for many hours at a time. I like to socialize with others and try to explore new stuff (a lot of items are pending in my wish list which needs to be ticked off).
                </p>
            </div>
        </div>
    )
}