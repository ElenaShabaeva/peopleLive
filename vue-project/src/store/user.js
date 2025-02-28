import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        firstName: "Елена",
        middleName: "Геннадьевна",
        secondName: "Шабаева",
    }),
    getters: {
        fullName: (state) =>
            state.secondName + " " + state.firstName + " " + state.middleName,
    },
    actions: {
        setFullName() {
            this.firstName = "";
            this.middleName = "";
            this.secondName = "";
        },
    },
});
