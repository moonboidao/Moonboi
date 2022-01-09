    
        const serverUrl = "https://jcunxxiupwes.usemoralis.com:2053/server";
        const appId = "tNSksVQ0rFtl6o3HdEiNh0iIGqvy8VO9qlIUqTLx";
        Moralis.start({ serverUrl, appId });

        async function login() {
        let user = Moralis.User.current();
        if (!user) {
          user = await Moralis.Web3.authenticate();
        }
        console.log("logged in user:", user);
        getStats();
        
      }



      async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
      }

      // bind button click handlers
      document.getElementById("btn-login").onclick = login;
      document.getElementById("btn-logout").onclick = logOut;

      