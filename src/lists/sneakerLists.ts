import { computed } from "vue";
import { useSneakersStore } from "@/stores/sneakers.store";

export function useSneakers() {
    const store = useSneakersStore();
    const addedSneakers = computed(() => store.data.filter(s => s.is_added));
    const favoriteSneakers = computed(() => store.data.filter(s => s.is_favorite));
    const purchasedSneakers = computed(() => store.data.filter(s => s.is_purchased));
    const sumSneakerInCart = computed(() => addedSneakers.value.reduce((sum, s) => sum += s.price, 0));

    function removeAddedSneakers() {
        addedSneakers.value.forEach((s) => {
            store.update(s.id, false, "is_added");
        });
    }
    function addToPurchased() {
        addedSneakers.value.map((s) => {
            store.update(s.id, true, "is_purchased");
        });
    }
    function clearPurchases() {
        store.data.forEach((s) => {
            store.update(s.id, false, "is_purchased");
        });
    }
    function clearFavorite() {
        store.data.forEach((s) => {
            store.update(s.id, false, "is_favorite");
        });
    }

    return {
        addedSneakers,
        sumSneakerInCart,
        favoriteSneakers,
        purchasedSneakers,
        clearFavorite,
        addToPurchased,
        removeAddedSneakers,
        clearPurchases
    }
}