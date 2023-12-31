import Sortable from "sortablejs";

htmx.onLoad(function (content) {
  let sortables = content.querySelectorAll("#items");
  for (let i = 0; i < sortables.length; i++) {
    let sortable = sortable[i];
    new Sortable(sortable, {
      draggable: ".draggable",
      handle: ".handle",
    });
  }
});
