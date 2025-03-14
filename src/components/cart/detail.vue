<script setup>
import { ref, computed } from 'vue'
import { usePanierStore } from "@/stores/cart";

const panierStore = usePanierStore();
const panier = computed(() => panierStore.panier);

const addQtt = (product) => {
    product.qtt++;
};

const quant = panier.length;

const minusQtt = (product) => {
    if (product.qtt > 1) {
        product.qtt--;
    }
};

const removeProduct = (productId) => {
    panierStore.supprimerDuPanier(productId);
};

const totalPanier = computed(() => {
    return panier.value.reduce((total, product) => total + product.price * product.qtt, 0)
})
</script>

<template>
    <table v-if="panier.length > 0"
        class="w-full border-collapse border border-gray-300 text-center shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-100 text-left">
            <tr class="text-gray-700">
                <th class="p-4 w-[200px] border border-gray-300">Image du produit</th>
                <th class="p-4 border border-gray-300">Nom</th>
                <th class="p-4 border border-gray-300">Prix</th>
                <th class="p-4 border border-gray-300">Qté</th>
                <th class="p-4 border border-gray-300">Total</th>
                <th class="p-4 border border-gray-300 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in panier" :key="product.id">
                <td class="p-4 border border-gray-300">
                    <img :src="product.image" :alt="product.title"
                        class="w-full h-[150px] object-cover rounded-lg shadow-md">
                </td>
                <td class="p-4 border border-gray-300 font-medium">{{ product.title }}</td>
                <td class="p-4 border border-gray-300 text-green-600 font-semibold">{{ product.price }} $</td>
                <td class="p-4 border border-gray-300 w-auto p-auto">
                    <div class="flex items-center space-x-2 justify-center">
                        <button v-if="product.id > 1" class="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition" @click="minusQtt(product)">
                            <img src="./../../assets/minus.svg" alt="Moins" class="w-4">
                        </button>
                        <span class="text-lg font-medium">{{ product.qtt }}</span>
                        <button class="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition" @click="addQtt(product)">
                            <img src="./../../assets/plus.svg" alt="Plus" class="w-4">
                        </button>
                    </div>
                </td>
                <td class="p-4 border border-gray-300 font-semibold text-blue-600">
                    {{ (product.price * product.qtt).toFixed(2) }} $
                </td>
                <td class="p-4 border border-gray-300 text-center">
                    <button class="text-red-600 hover:text-red-800 font-bold text-lg" @click="removeProduct(product.id)">
                        ✖
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <tfoot>
        <tr class="bg-gray-100 font-semibold">
            <td colspan="4" class="p-4 text-right">Total :</td>
            <td class="p-4 text-blue-600">{{ totalPanier }} $</td>
            <td></td>
        </tr>
    </tfoot>
</template>
