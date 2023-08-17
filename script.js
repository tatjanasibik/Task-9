/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;

    this.wasExpensive = (budget) => 
        {
        budget > 100_000_000 ?  console.log("true") : console.log("false");
        };
        }
}

const Film = new Movie ("Name", "Director", 100_000_000_000);
console.log(Film.wasExpensive(100_000));