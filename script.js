var aboutUs = {
    "Mission": " Our <b>Mission</b> is to collect and distribute household food to those in need . You can donate leftover or excess fruits or vegetables and also non-perishable food items such as canned goods,rice,cereal to us",
    "Vision": "Our <b>Vision</b> is to create sustainable and efficient system that reduce food waste while also providing nutritious meal to those in need so that no one goes to bed hungry",
    "Focus": " Our <b>Focus</b> is to reach marginalized and vulnerable population such as slums areas, individuals experiencing homelessness and street animals,to ensure that everyone has access to food."
  };
  
  //<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>

  var unseletectedColor = "#646872";
  var seletectedColor = "#2A2D34";
  
  
  var aboutUsTab = document.getElementsByClassName("single-tab");
    for(var a = 0; a < aboutUsTab.length; a++){
      
      aboutUsTab[a].onclick = function()
      {
        var clickedValue = this.innerHTML;
        document.getElementById("box-text").innerHTML = aboutUs[clickedValue];                      //here we are not writing like aboutUs.clickedValue (not using dot operator) coz var clickedValue is not follow variable naming rule
   
      //inner loop for not selected element
      for(var b = 0; b < aboutUsTab.length; b++) {
        aboutUsTab[b].style["backgroundColor"] = unseletectedColor;               //we can also do --->style.background-color(by follow the naming rule)
        aboutUsTab[b].style["fontWeight"] = "normal";
      }
      
      //for selected element
        this.style["backgroundColor"] = seletectedColor; 
        this.style["fontWeight"] = "bold"; 
      }
  }
  
  


  // Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();