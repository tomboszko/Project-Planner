import {RefreshRemainingDays} from "./scripts/remainingDays.js";
import {changeSorting} from "./scripts/sorting.js";
import {changeFiltering} from "./scripts/filtering.js";

RefreshRemainingDays();

let sortingInput = document.getElementById("sortSelect");
sortingInput.addEventListener("change", changeSorting);

let filteringInput = document.getElementById("filterSelect");
filteringInput.addEventListener("change", changeFiltering);