import { defineStore } from "pinia";

export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: []
  }),
  actions: {
    ajouterAuPanier(produit) {
      const item = this.panier.find(p => p.id === produit.id);
      if (item) {
        item.quantite++;
      } else {
        this.panier.push({ ...produit, quantite: 1 });
      }
    },
    supprimerDuPanier(produitId) {
      this.panier = this.panier.filter(p => p.id !== produitId);
    }
  },
  getters: {
    totalPanier: (state) => state.panier.reduce((acc, p) => acc + p.prix * p.quantite, 0),
    nombreArticles: (state) => state.panier.reduce((acc, p) => acc + p.quantite, 0)
  }
});
