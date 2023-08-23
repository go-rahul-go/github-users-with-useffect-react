import "../style.css";


const UserCard = (props) => {
    return (
        
            <div className="card">
                <div id="image-card">
                    <img src={props.imageLink} alt="user avataar" />
                </div>
                <div id="details">
                    <p className="title">{props.name}</p>
                    <div id="icons">
                        <i className="fa fa-heart"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        
    )
}

export default UserCard;