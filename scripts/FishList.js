/**
 *   FishList which renders individual fish objects as HTML
 */
import {
  useFish,
  mostHolyFish,
  soldierFish,
  nonHolyFish,
} from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

const buildHTML = (fishArray) => {
  // Generate all of the HTML for all of the fish
  let fishHTMLRepresentations = "";
  for (const singleFishObject of fishArray) {
    /*
             Invoke the Fish component function
             and pass the current fish object as an argument.
             Each time, add the return value to the
             fishHTMLRepresentations variable with `+=`
         */
    fishHTMLRepresentations += Fish(singleFishObject);
  }

  return fishHTMLRepresentations;
};

export const FishList = () => {
  const contentElement = document.querySelector("#FishList");

  const mostHolyArray = mostHolyFish();
  const soldierArray = soldierFish();
  const normalArray = nonHolyFish();

  const holyHTML = buildHTML(mostHolyArray);
  const soldierHTML = buildHTML(soldierArray);
  const normalHTML = buildHTML(normalArray);

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
         <article class="fishList">
         <h3>Most Holy</h3>
              ${holyHTML}
         <h3>Solider Fish</h3>
             ${soldierHTML}
         <h3>Regular Fish</h3>
             ${normalHTML}
         </article>
     `;
};
