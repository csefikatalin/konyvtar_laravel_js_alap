class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
        console.log("KonyvModel");
    }

    adatBe(vegpont, myCallBack) {
        console.log("vegpont")
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
   
    konyvVesz(adat) {
        console.log("Vettem: " + adat);
    }
}

export default KonyvModel;
