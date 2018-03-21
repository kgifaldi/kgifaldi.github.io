(function(window, undefined) {
  var dictionary = {
    "e27054cd-0a9b-4db8-b3c0-3280fee8b054": "Main",
    "06cd918c-3ba4-4741-adf3-6b41e92cf80b": "Camera View",
    "f9da35b9-b444-4e1f-b44e-3263c3bf9b12": "Camera Results",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "1f97964c-5f6e-4a51-8a33-3da9f11be5f1": "Specific Ing Info",
    "2ed85903-4465-4cdd-b69d-abef5a8c3394": "Saved Ingredients",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);