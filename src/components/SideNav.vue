<template>
  <div id="SideNav" class="fixed top-0 left-0 h-screen lg:w-1/5 border-r border-lighter bg-white flex flex-col justify-between px-2 lg:px-6 py-4">
    <!-- Logo Section -->
    <div>
      <button class="h-18 w-18 p-0 hidden lg:block mb-4">
        <img src="/logo.png" alt="Button Image" class="w-full h-full object-contain" />
      </button>
      <button class="flex items-center text-5xl py-2 px-4 lg:hidden">
        <i class="fa-brands fa-instagram"></i>
      </button>
    </div>

    <!-- Navigation Links -->
    <div class="flex flex-col">
      <button @click="navigate('home')" class="nav-item">
        <i class="fas fa-home icon"></i>
        <p class="nav-text">Home</p>
      </button>

      <button class="nav-item">
        <i class="fa-solid fa-magnifying-glass icon"></i>
        <p class="nav-text">Search</p>
      </button>

      <button class="nav-item">
        <i class="fa-regular fa-compass icon"></i>
        <p class="nav-text">Explore</p>
      </button>

      <button class="nav-item">
        <i class="fa-solid fa-film icon"></i>
        <p class="nav-text">Reels</p>
      </button>

      <button class="nav-item">
        <i class="fa-brands fa-facebook-messenger icon"></i>
        <p class="nav-text">Messages</p>
      </button>

      <button class="nav-item">
        <i class="fa-regular fa-heart icon"></i>
        <p class="nav-text">Notifications</p>
      </button>

      <button @click="$emit('show-add-post')" class="nav-item">
        <i class="fa-regular fa-square-plus icon"></i>
        <p class="nav-text">Create</p>
      </button>

      <button class="nav-item">
        <i class="fa-brands fa-threads icon"></i>
        <p class="nav-text">Threads</p>
      </button>

      <button class="nav-item">
        <i class="fa-solid fa-bars icon"></i>
        <p class="nav-text">More</p>
      </button>

      <router-link to  ="/profile"><button class="nav-item">
        <img src="/profile.jpeg" class="w-10 h-10 rounded-full border border-lighter" />
        <p class="nav-text">Profile</p>
      </button></router-link>

    
    <div v-if="showAddPost" class="bg-white rounded-lg p-6 shadow-lg w-full max-w-md fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50">
      <AddPost @close="showAddPost = false" @post-created="handlePostCreated" />
    </div>
  </div>

  

  </div>
</template>

<script>
import AddPost from './AddPost.vue';

export default {
  name: "SideNav",
  components: {
    AddPost,
  },
  data() {
    return {
      showAddPost: false, 
      posts: [], 
    };
  },
  methods: {
    navigate(route) {
      if (route === "home") {
        this.$router.push("/");
      } else if (route === "profile") {
        this.$router.push('/profile');
      } else {
        console.error(`Unknown route: ${route}`);
      }
    },
    handlePostCreated(post) {
      this.posts.push(post);
      this.showAddPost = false;
    }
  },
};
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
}
.nav-item:hover {
  background-color: #f3f4f6; 
}
.icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #374151; 
}
.nav-text {
  font-size: 1rem;
  font-weight: 500;
  color: #374151; 
}
.home-posts {
  padding: 20px;
}

.post-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.post-user {
  font-weight: bold;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
