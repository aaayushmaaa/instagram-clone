<template>
  <div class="profile-container">
    <!-- Profile Header -->
    <div class="profile-header flex items-center justify-between p-12 bg-white shadow-md">
      <div class="flex items-center">
        <img src="/profile.jpeg" alt="Profile" class="w-24 h-24 rounded-full border-2 border-gray-200" />
        <div class="ml-6">
          <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
          <p class="text-gray-500">{{ user.bio }}</p>
          <div class="flex space-x-4 mt-2">
            <span><strong>{{ posts.length }}</strong> posts</span>
            <span><strong>{{ user.followers }}</strong> followers</span>
            <span><strong>{{ user.following }}</strong> following</span>
          </div>
        </div>
      </div>
      <button class="bg-blue text-white px-4 py-2 rounded-lg">Edit Profile</button>
    </div>

    <!-- Profile Posts -->
    <div class="profile-posts grid grid-cols-3 gap-4 p-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="relative overflow-hidden bg-gray-200 rounded-lg"
      >
        <img :src="post.image" alt="Post" class="w-full h-full object-cover" />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
        >
          <div class="text-center">
            <i class="fas fa-heart"></i> {{ post.likes }}
            <br />
            <i class="fas fa-comment"></i> {{ post.comments.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Aayushma Gautam",
        bio: "🌻",
        followers: 908,
        following: 811,
      },
      posts: [
        {
          id: 1,
          image: "/post1.JPG",
          likes: 120,
          comments: ["Nice!", "Beautiful!"],
        },
        {
          id: 2,
          image: "/post2.JPG",
          likes: 98,
          comments: [],
        },
        {
          id: 3,
          image: "/post3.JPG",
          likes: 76,
          comments: ["Amazing!"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 900px;
  margin: 0 auto;
}
.profile-header {
  border-bottom: 1px solid #ddd;
}
.profile-posts {
  margin-top: 20px;
}
.profile-posts img {
  aspect-ratio: 1;
}
</style>
