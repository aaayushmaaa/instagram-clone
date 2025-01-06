<template>
<div id="Suggestions" class="fixed top-0 right-0 h-screen lg:w-1/4 border-l border-lighter bg-white px-4 py-6">
  <div class="w-full rounded-lg bg-lightest">
    <div class="relative">
      <button @click="toggleDropdown" class="flex items-center w-full py-2 px-4">
        <img src="/profile.jpeg" class="w-10 h-10 rounded-full border border-lighter" />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-bold leading-tight">Aayushma</p>
          <p class="text-sm leading-tight">@_.aayushma</p>
        </div>
        <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
      </button>

      <!-- Dropdown Menu -->
    <div v-if="dropdown" class="absolute left-0 w-full lg:w-64 rounded-lg shadow-md border bg-white mt-2">
        <button @click="toggleDropdown" class="flex items-center w-full py-2 px-4 hover:bg-lighter">
          <img src="/profile.jpeg" class="w-10 h-10 rounded-full border border-lighter" />
          <div class="ml-4">
            <p class="text-sm font-bold leading-tight">@_.aayushma</p>
            <p class="text-sm text-blue leading-tight">Switch account</p>
          </div>
          <i class="fas fa-check ml-auto"></i>
        </button>
        <button @click="toggleDropdown" class="w-full text-left hover:bg-lighter border-t border-lighter p-3 text-sm">
          Add an existing account
        </button>
        <button @click="toggleDropdown" class="w-full text-left hover:bg-lighter border-t border-lighter p-3 text-sm">
          Log out @_.aayushma
        </button>
    </div>
</div>

    <div class="w-full rounded-lg bg-lightest">
      <div class="p-3">
        <p class="text-sm font-bold text-dark">Suggested for you</p>
      </div>
      <div
        v-for="friend in friends"
        :key="friend.handle"
        class="w-full flex hover:bg-lighter p-3 border-t border-lighter"
      >
        <img :src="friend.src" class="w-12 h-12 rounded-full border border-lighter" />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-semibold leading-tight">{{ friend.name }}</p>
          <p class="text-sm leading-tight">{{ friend.handle }}</p>
        </div>
        <button class="ml-auto text-sm text-blue py-1 px-4 border-none">Follow</button>
      </div>
      <button class="p-3 w-full hover:bg-lighter text-sm text-left text-blue border-t border-lighter">Show More</button>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Suggestions",
  data() {
    return {
      friends: [
        { src: "kanye.jpeg", name: "Ye", handle: "kanyewest" },
        { src: "zendaya.jpeg", name: "Zendaya", handle: "zendaya" },
        { src: "rock.jpeg", name: "Dwayne Johnson", handle: "therock" },
      ],
      dropdown:false,
    };
  },
};
</script>
