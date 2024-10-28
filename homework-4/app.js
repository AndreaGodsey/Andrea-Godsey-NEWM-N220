document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
const firstChoiceAction = prompt(`Snuggles had ran into these woods! But which way did he go?
    \n (Click the number of your choice)
    \n 1. Choose the Left Path
    \n 2. Choose the Right Path`);
    
    
    
    if (firstChoiceAction === "1") {
      document.getElementById("story").innerHTML += "You choose the left path, only to find feathers spread chaotically on the ground! Snuggles went this way for sure! But what is this on the ground? Could that be red paint? Oh dear! We better find Snuggles before he takes up the painting business! He can't handle the pay cuts!";
      // Other Option
    } else {
      document.getElementById("story").innerHTML += "You have chosen the right path, but have so far found nothing to point to Snuggles's location...the air feels cooler in this area-perhaps Snuggles continued on in search for the nearest Carhart shop? They have wonderful jackets!";
      // Other Option
    }
});

document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
    const secondChoiceAction = prompt(`There is another path that appears to be a safer route for your search, but the red paint leads to a much darker path. What shall you do? What is the smartest decision?
        \n (Click the number of your choice)
        \n 1. Choose the Safer Path
        \n 2. Choose the Darker Path`);
        
        
        
        if (secondChoiceAction === "1") {
          document.getElementById("story").innerHTML += "The safer path sounded the smartest! After all, it was very cold back there! As you treck onward, you find your dogs leash torn to pieces on the ground! I knew he wouldn't handle those pay cuts!";
          // Other Option
        } else {
          document.getElementById("story").innerHTML += "You have bravely chosen to search for your puppy in the darkness! As you treck onward, you have found that the forest grows darker as you march onward. You hear the steady howl of a creature to your right. Possibly another creature who is lost...who is hungry...who chose the wrong time to take up the painting business and seeks revenge on the government due to bankruptcy!";
          // Other Option
        }
    });

    document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
        const thirdChoiceAction = prompt(`This is a test-
            \n (Click the number of your choice)
            \n 1. Oh noes
            \n 2. EEEEEEEE`);
            
            
            
            if (thirdChoiceAction === "1") {
              document.getElementById("story").innerHTML += "Intense Barking Sounds";
              // Other Option
            } else {
              document.getElementById("story").innerHTML += "OOOO Spooky Ghost";
              // Other Option
            }
        });
    
    
