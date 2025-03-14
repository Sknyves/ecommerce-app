<script setup>
import { usePanierStore } from "@/stores/cart";
import { computed } from "vue";

const panierStore = usePanierStore();
const quant = computed(() => panierStore.panier.length);
</script>

<template>
    <div class="justify-between flex border p-4 mx-auto mt-4 bg-orange-600 text-white rounded-lg h-auto">
        <RouterLink to="/">
            Home
        </RouterLink>
        <RouterLink to="/cart">
            Cart ({{ quant }})
        </RouterLink>
    </div>
</template>
