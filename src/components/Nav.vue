import { useRoute, useRouter } from 'vue-router';


<template>
    <nav class="">
        <ul class="flex border-b">
            <li class="-mb-px mr-1">
                <router-link to="/" class="inline-block py-2 px-4 text-blue-700 font-semibold">Home</router-link>
            </li>
            <li class="-mb-px mr-1">
                <router-link to="/portfolio" class="inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Portfolio</router-link>
            </li>
            <li class="-mb-px mr-1">
                <router-link to="/contact" class="inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Contact</router-link>
            </li>
            <li class="-mb-px mr-1">
                <router-link to="/bio" class="inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Bio</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'Navigation', 
}
</script>
