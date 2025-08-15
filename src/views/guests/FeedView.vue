<script setup>
import { ref } from 'vue'

const communities = ref([
  {
    name: 'Computer Science Society',
    tag: 'CS',
    members: '1.2k members',
    description:
      'A community for computer science enthusiasts to discuss coding, algorithms, and emerging technologies.',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'Biology Club',
    tag: 'Bio',
    members: '880 members',
    description:
      'Explore the wonders of life sciences. Collaborate on research, share articles, and organize lab sessions.',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Arts Society',
    tag: 'Art',
    members: '620 members',
    description:
      'For painters, sculptors, and creators. Join art challenges, share work, and exhibit on campus.',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Mathematics Club',
    tag: 'Math',
    members: '950 members',
    description:
      'Problem-solving, math competitions, and study groups. Delve into the world of numbers.',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    name: 'Environmental Club',
    tag: 'Eco',
    members: '540 members',
    description: 'Cleanup drives, awareness campaigns, and green initiatives around campus.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Literature Circle',
    tag: 'Lit',
    members: '430 members',
    description: 'Poetry, creative writing, book readings, and literary discussions.',
    color: 'bg-purple-100 text-purple-700',
  },
])
</script>

<template>
  <div class="flex min-h-screen bg-gray-100 font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-6 hidden md:block">
      <h2 class="text-xl font-bold text-indigo-600 mb-6">Navigation</h2>
      <nav class="space-y-4 text-sm font-medium text-gray-700">
        <router-link to="/" class="block hover:text-indigo-600">🏠 Feed</router-link>
        <router-link to="/communities" class="block text-indigo-600 font-semibold"
          >👥 Communities</router-link
        >
        <router-link to="/assignments" class="block hover:text-indigo-600"
          >📝 Assignments</router-link
        >
        <router-link to="/events" class="block hover:text-indigo-600">📅 Events</router-link>
        <router-link to="/chat" class="block hover:text-indigo-600">💬 Chat</router-link>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 p-6">
      <!-- Topbar -->
      <div class="flex justify-between items-center mb-6">
        <div class="text-2xl font-bold text-indigo-600">EduConnect</div>
        <div class="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for communities or people"
            class="px-4 py-2 border rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <!-- Profile Dropdown (static for now) -->
          <div class="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              class="w-8 h-8 rounded-full cursor-pointer"
            />
            <!-- Dropdown (example static) -->
            <div class="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md text-sm py-2">
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">View Profile</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-red-600">Log Out</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Communities Section -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Explore Communities</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(community, index) in communities"
            :key="index"
            class="bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div class="flex items-center justify-between mb-2">
              <span :class="['text-sm font-medium px-2 py-1 rounded', community.color]">
                {{ community.tag }}
              </span>
              <span class="text-xs text-gray-500">{{ community.members }}</span>
            </div>
            <h3 class="text-md font-semibold text-gray-800 mb-1">{{ community.name }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ community.description }}</p>
            <div class="flex justify-between items-center text-sm">
              <button class="text-indigo-600 hover:underline">View</button>
              <button class="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                Join
              </button>
            </div>
          </div>
        </div>

        <!-- Create Community CTA -->
        <div class="bg-white rounded-lg p-6 mt-8 text-center shadow">
          <p class="mb-4">Want to start your own community?</p>
          <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Create Community
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add dropdown toggle logic for real interaction later if needed */
</style>
