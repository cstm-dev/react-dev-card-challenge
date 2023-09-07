function Avatar() {
    const profileImg = "./src/assets/profile.jpg"

    return (
        <div>
            <img className="avatar" src={profileImg} alt="Profile Image" />
        </div>
    )
}

export default Avatar