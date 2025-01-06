<template>
  <div class="flex justify-center lg:space-x-4">
    <!-- Side Navigation -->
    <SideNav class="hidden lg:block lg:w-1/5" @show-add-post="openAddPost" />

    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row lg:w-4/5">
      <!-- Conditional Rendering Based on Route -->
      <RouterView v-slot="{ Component }">
        <component :is="Component" :posts="posts" />
      </RouterView>
    </div>
  </div>

  <!-- Add Post Modal -->
  <div v-if="showAddPost" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <AddPost @close="closeAddPost" @post-created="addNewPost" />
  </div>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import AddPost from "./components/AddPost.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    SideNav,
    AddPost,
  },
  data() {
    return {
      showAddPost: false,
      posts: [
        {
          id: 1,
          user: "adele",
          image: "/post5.JPG",
          caption: "Concert",
          likes: 12,
          liked: false,
          comments: [],
          showComments: false,
          newComment: "",
        },
        {
          id: 2,
          user: "therock",
          image: "/post4.JPG",
          caption: "yayy",
          likes: 98,
          liked: false,
          comments: [],
          showComments: false,
          newComment: "",
        },
        {
          id: 3,
          user: "beyonce",
          image: "/post6.JPG",
          caption: "👀",
          likes: 170,
          liked: false,
          comments: [],
          showComments: false,
          newComment: "",
        },
      ],
    };
  },
  methods: {
    openAddPost() {
      this.showAddPost = true;
    },
    closeAddPost() {
      this.showAddPost = false;
    },
    addNewPost(newPost) {
      this.posts.unshift(newPost);
      this.closeAddPost();
    },
  },
};
</script>
