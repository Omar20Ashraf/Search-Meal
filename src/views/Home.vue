<template>
    <div class="flex flex-col p-8">
        <div>
            <input 
                type="text" 
                cLass="rounded border-2 border-gray-200 w-full" 
                placeholder="Search for Meals"
            />
        </div>

        <div class="flex justify-center gap-2 mt-2">
            <router-Link 
                :to="{name:'byLetter',params:{letter}}" 
                v-for="letter in letters" 
                :key="letter">
                    {{ letter }}
            </router-Link>
        </div>
    </div>
</template>

<script setup>

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

</script>
