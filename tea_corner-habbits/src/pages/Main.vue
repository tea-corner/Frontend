<template>
<body>
  <div class="mainPage">
    <hero-menu :user="user"></hero-menu>
    <div class="blockItemAll">
      <block-item 
        :habits="habits"
        :dailies="dailies"
        :todos="todos"
        :inventory="inventory"
        :user=user.userNickname
      > </block-item>
    </div>
  </div>
  
</body>
  
</template>

<script>
import HeroMenu from "@/components/HeroMenu";
import Hero from "@/components/Hero";
import blockItem from "@/components/BlockItem";

export default {
  components: {
    HeroMenu,
    Hero,
    blockItem,
  },

  data() {
    return {
      baseUrl: "http://haits.tk/api",
      
      user: {
        balance: 0,
        exp: 0,
        hp: 0,
        level: 0,
        password: "admin",
        userNickname: "admin"
      },

      habits: [],
      dailies: [],
      todos: [],
      inventory: []
    
    };
  },

  methods: {
    async getUserData() {
      let response = await fetch(
        this.baseUrl +
          "/user?nickname=" +
          this.user.userNickname +
          "&password=" +
          this.user.password
      );

      let res = await response.json();
      this.user = res.user;
      this.habits = res.habits;
      this.dailies = res.dailies;
      this.todos = res.todo;
      this.setInventory(res.inventory);
      console.log(res);
    },

    async updateHabbit(isCompleted, habbitName) {
      let requestString =
        this.baseUrl + "/user/habits?nickname=" + this.user + "&";
      requestString += "name=" + habbitName;
      requestString += isCompleted ? "&completed=true" : "";

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "aplication/json; charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);
    },

    async updateDaily(dailyName) {
      
      let requestString =
        this.baseUrl + "/user/dailies?nickname=" + this.user + "&";
        requestString += "name=" + dailyName;

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "aplication/json; charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);

    },

    async updateTodo(todoName) {
      
      let requestString =
        this.baseUrl + "/user/todos?nickname=" + this.user + "&";
        requestString += "name=" + todoName;

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "aplication/json; charset=UTF-8",
        },
      });

      let result = await response.json();

      console.log(result);
      
    },

    async addHabit() {
      // Not working!
      let habbitObj = {
        name: "test1",
        userNickname: this.user,
        duration: 667
      };  
        
      let requestString = this.baseUrl + "/user/habits";

      let response = await fetch(requestString, {
        method: "POST",
        body: JSON.stringify(habbitObj),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json;charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);
    },

    async addItemToInvetory(itemName, type) {
      
      let requestString = this.baseUrl + "/user/inventory?" 
        + "nickname=" + this.user + "&name=" + itemName 
        + "&type=" + type;

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "aplication/json; charset=UTF-8",
        },
      });

      let result = await response.json();

      console.log(result);
    },

    async createUser(login, password) {
      
      let requestString = 
          this.baseUrl +
          "/user?nickname=" +
          login +
          "&password=" +
          password;

      let response = await fetch(
        requestString, {
          method: "POST",
          headers: {
            "Content-type": "aplication/json;charset=UTF-8"
          }
        }
      );

      let res = await response.json();
      console.log(requestString);
      console.log(res);
    },

    setInventory(inventory) {
      
      inventory.armors.forEach(armor => {
        this.inventory.push(armor);
      });

      inventory.resources.forEach(resource => {
        this.inventory.push(resource);
      });

      inventory.weapons.forEach(weapon => {
        this.inventory.push(weapon);
      });

    }

  },

  mounted() {
    this.getUserData();
    // this.updateHabbit(true, "user"); // pressed + in habbit
    // this.updateHabbit(false, "user1"); // pressed - in habbit
    // this.updateDaily("user1");
    // this.updateTodo("user3"); 
    
    // let obj = {"user": "123"};
    // this.addHabit();

    // this.addItemToInvetory("Uzi", "weapons");
    // this.createUser("donil", "123456781");
    // this.addHabit();
  },

};
</script>

<style>

.mainPage {
  font-size: 2.4rem;
  background: url("../../public/images/menuIMG.jpg") center;
  font-family: "Blender Pro";
  background-size: cover;
}

body {
  margin: 0;
}
.blockItemAll {
  display: flex;
  flex-direction: column;
}
</style>