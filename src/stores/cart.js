import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: []
  }),
  actions: {
    ajouterAuPanier(produit) {
      const item = this.panier.find(p => p.id === produit.id);
      if (item) {
        Swal.fire({
          icon: "warning",
          title: "Produit déjà présent",
          text: "Ce produit est déjà dans le panier.",
          confirmButtonColor: "#ff9800"
        });
      } else {
        this.panier.push({ ...produit, quantite: 1 });
        Swal.fire({
          icon: "success",
          title: "Ajouté au panier",
          text: "Le produit a été ajouté avec succès.",
          confirmButtonColor: "#4caf50"
        });
      }
    },
    supprimerDuPanier(produitId) {
      Swal.fire({
        title: "Êtes-vous sûr ?",
        text: "Cette action supprimera le produit du panier.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Oui, supprimer !",
        cancelButtonText: "Annuler"
      }).then((result) => {
        if (result.isConfirmed) {
          this.panier = this.panier.filter(p => p.id !== produitId);
          Swal.fire({
            icon: "success",
            title: "Supprimé !",
            text: "Le produit a été retiré du panier.",
            confirmButtonColor: "#4caf50"
          });
        }
      });
    }    
  },
  getters: {
    totalPanier: (state) => state.panier.reduce((acc, p) => acc + p.prix * p.quantite, 0),
    nombreArticles: (state) => state.panier.reduce((acc, p) => acc + p.quantite, 0)
  }
});
