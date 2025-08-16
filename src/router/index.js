import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/assignments',
      name: 'Assignments',
      component: () => import('../views/guests/AssignmentView.vue'),
    },
    { path: '/chat', 
      name: 'Chat', 
      component: () => import('../views/guests/ChatView.vue') 
    },
    {
      path: '/communities',
      name: 'Communities',
      component: () => import('../views/guests/CommunitiesView.vue'),
    },
    {
      path: '/createcourse',
      name: 'CreateCourse',
      component: () => import('../views/guests/CreateCourseView.vue'),
    },
    { 
      path: '/index', 
      name: 'Index', 
      component: () => import('../views/guests/IndexView.vue') 
    },
    { 
      path: '/profile', 
      name: 'Profile', 
      component: () => import('../views/guests/ProfileView.vue') 
    },
    { 
      path: '/studentenrollment', 
      name: 'StudentEnrollment', 
      component: () => import('../views/guests/StudentsEnrollmentView.vue') 
    },
    { path: '/login', 
      name: 'Login', 
      component: () => import('../views/guests/LoginView.vue') 
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('../views/guests/RegistrationView.vue'),
    },
  ],
})

export default router
