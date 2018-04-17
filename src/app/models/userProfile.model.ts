export class userProfile{
    public userName: String;
    public profilePic: String;
    public gender: String

    constructor(username,profilepic,gender){
        this.userName = username;
        this.profilePic = profilepic;
        this.gender = gender;
    }
}