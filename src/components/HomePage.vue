<template>
  <div class="lg:ml-[20%] lg:mr-[20%] px-4 py-6">
    <div v-for="post in posts" :key="post.id" class="mb-6 bg-white shadow rounded p-4">
      <div class="flex items-center mb-3">
        <img src="/profile.jpeg" alt="User" class="w-10 h-10 rounded-full mr-3" />
        <h3 class="font-semibold">{{ post.user }}</h3>
      </div>
      <img :src="post.image" alt="Post" class="w-full rounded mb-3" />
      <p>{{ post.caption }}</p>
      <div class="flex items-center mt-3">
        <button @click="toggleLike(post)" class="text-gray-600 hover:text-red-500 mr-4">
          <i :class="['fas fa-heart', post.liked ? 'text-red-500' : '']"></i>
          <span>{{ post.likes }}</span>
        </button>
        <button @click="toggleCommentSection(post)" class="text-gray-600 hover:text-blue-500">
          <i class="fas fa-comment"></i>
        </button>
      </div>
      <div v-if="post.showComments" class="mt-3">
        <div v-for="comment in post.comments" :key="comment.id" class="text-sm mb-1">
          <span class="font-bold">{{ comment.user }}</span>: {{ comment.text }}
        </div>
        <input
          v-model="post.newComment"
          type="text"
          placeholder="Add a comment..."
          class="w-full p-2 border border-gray-300 rounded mt-2"
          @keyup.enter="addComment(post)"
        />
      </div>
    </div>
    <div class="lg:w-1/4 w-full">
      <Suggestions />
    </div>
  </div>
</template>

<script>
import Suggestions from './Suggestions.vue';
export default {
  components:{
    Suggestions,
  },
  props: ["posts"], // Receives the posts from App.vue
  methods: {
    toggleLike(post) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
    },
    toggleCommentSection(post) {
      post.showComments = !post.showComments;
    },
    addComment(post) {
      if (post.newComment.trim()) {
        post.comments.push({
          id: Date.now(),
          user: "You",
          text: post.newComment,
        });
        post.newComment = "";
      }
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures the content is vertically centered */
}

.home-posts-container {
  width: 100%;
  max-width: 1200px; /* Restrict width for large screens */
}

.post-card {
  border: 1px solid #ddd;
  padding: 20px;
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
