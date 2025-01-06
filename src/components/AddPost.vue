<template>
  <div class="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
    <h2 class="text-xl font-bold mb-4">Add a New Post</h2>
    <input
      type="text"
      v-model="newPost.user"
      placeholder="Enter your username"
      class="w-full p-2 border border-gray-300 rounded mb-4"
    />
    <input
      type="file"
      @change="handleFileUpload"
      class="w-full p-2 border border-gray-300 rounded mb-4"
    />
    <textarea
      v-model="newPost.caption"
      placeholder="Write a caption..."
      rows="3"
      class="w-full p-2 border border-gray-300 rounded mb-4"
    ></textarea>
    <div class="flex justify-end">
      <button
        @click="submitPost"
        class="bg-blue text-white px-4 py-2 rounded mr-2"
      >
        Post
      </button>
      <button @click="closePost" class="bg-gray-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      newPost: {
        user: "",
        image: null,
        caption: "",
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newPost.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitPost() {
      if (this.newPost.user && this.newPost.image && this.newPost.caption) {
        const post = {
          ...this.newPost,
          id: Date.now(), // Unique ID for each post
          likes: 0,
          liked: false,
          comments: [],
          showComments: false,
          newComment: "",
        };
        this.$emit("post-created", post); // Emit post-created event with post data
        this.closePost();
      } else {
        alert("Please fill in all fields!");
      }
    },
    closePost() {
      this.$emit("close");
    }
  },
};
</script>
