import Task1 from './components/Task1.vue';
import Task2 from './components/Task2.vue';
import Task5 from './components/Task5.vue';

//Your solutions
 import Task1Solution from './components/solutions/Task1Solution.vue';
// import Task2Solution from './components/Task2Solution.vue';
// import Task5Solution from './components/Task5Solution.vue';

const routes = [
    { path: '/task1', component: Task1 },
    { path: '/task2', component: Task2 },
    { path: '/task5', component: Task5 },
    //Your solutions
    { path: '/task1Solution', component: Task1Solution },
    // { path: '/task2Solution', component: Task2Solution },
    // { path: '/task5Solution', component: Task5Solution },
];

export default routes;