let localUserId = 0;

class User {
  constructor(obj){
    this.localUserId = ++localUserId;
    this.name = obj.name;
  }

  //POST new user to the server
  addUserBackend(){
    let submissionBody = {
      "name": this.name,
    };
    function addUser(userUrl,submissionBody) {
       const postConfig = {
         Accept: "application/json",
         method: "POST",
         headers: {
           "Content-type": "application/json"
         },
         body: JSON.stringify(submissionBody)
       };
       return fetch(userUrl, postConfig)
     }
     addUser(userUrl,submissionBody);
  }

  //create new instance of game. Associate a user instance with the new game
  createGame(score){
    let newGame = new Game({"user_id": this.localUserId, "score": score})
    store["game"].push(newGame);
    //post this game with user instance to the backend
    newGame.addGameBackend();
    return newGame;
  }

  static findUserById(id) {
    return store["user"].find(function(individualUser){
      return individualUser.localUserId == id;
    })
  }
}
