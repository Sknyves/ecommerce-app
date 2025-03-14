<script setup>
import { usePanierStore } from "@/stores/cart";

const panierStore = usePanierStore();

const products = [
    { id: 1, title: 'Title 1', price: 6, image: '/src/assets/1.jpg' },
    { id: 2, title: 'Title 2', price: 132, image: '/src/assets/2.jpg' },
    { id: 3, title: 'Title 3', price: 92, image: '/src/assets/3.jpg' },
    { id: 4, title: 'Speaker', price: 10, image: '/src/assets/4.jpg' },
    { id: 5, title: 'iTouch', price: 15, image: '/src/assets/5.jpg' },
    { id: 6, title: 'Airpods', price: 22, image: '/src/assets/6.jpg' },
    { id: 7, title: 'Casque', price: 17, image: '/src/assets/7.jpg' },
    { id: 8, title: 'Robe', price: 12, image: '/src/assets/8.jpg' },
    { id: 9, title: 'Yoga clothe', price: 122, image: '/src/assets/9.jpg' },
    { id: 10, title: 'Shoes', price: 20, image: '/src/assets/10.jpg' },
    { id: 11, title: 'Tablette 11', price: 30, image: '/src/assets/11.jpg' },
    { id: 12, title: 'T-shirt black', price: 88, image: '/src/assets/12.jpg' }
];

const ajouter = (product) => {
    panierStore.ajouterAuPanier({ ...product, qtt: 1 });
};
</script>

<template>
    <h1 class="pl-4 text-[30px]">Nos Produits</h1>
    <div class="mx-auto grid grid-cols-3 gap-4 p-4">
        <div v-for="product in products" :key="product.id" class="bg-gray-300 rounded-lg">
            <img :src="product.image" :alt="product.title" class="w-full h-[200px] object-cover rounded-lg">
            <div class="p-4">
                <h2 class="text-lg font-bold">{{ product.title }}</h2>
                <div class="flex justify-between items-center">
                    <p>{{ product.price }}$</p>
                    <button class="hover:bg-orange-600 bg-gray-400 p-4 rounded-lg" @click="ajouter(product)">
                        <img src="./../../assets/plus.svg" alt="Ajouter" class="w-3 h-3">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
