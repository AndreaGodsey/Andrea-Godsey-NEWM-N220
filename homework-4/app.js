document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
const firstChoiceAction = prompt(`Snuggles has ran into these very woods! But which way did he go? Follow your heart, dear player! Your puppy's life depends on it!
    \n (Enter the number of your choice)
    \n 1. Choose the Left Path
    \n 2. Choose the Right Path
    \n 3. Choose the Middle Path`);
    
    
    
    if (firstChoiceAction === "1") {
      document.getElementById("story").innerHTML += "With your loyal companion's tattered leash in hand, you crept towards the path on the left. The wind howls as the evening air turns cold, making your heart all the more timid to continue on. Continue on as you may, you come across red, sticky prints on the autumn leaves in front of you. It appears your little friend has taken up the arts! While you support his artistic idealogies, you need your friend to come home! Three paths wait for your decision again dear Player, choose wisely. ";
      // Other Option
    } else if (firstChoiceAction === "2") {
      document.getElementById("story").innerHTML += "With your loyal companion's tattered leash in hand, you crept towards the path on the right. The trees around you become more dense, blocking out the calm autumn sun. You feel the cool air pierce daggers into your already timid heart. You feel fearful that the right path, was not so right after all. Fear not, dear player, for up ahead you see small red blotches etched into the autumn leaves! It appears your little friend has taken up the arts! While you support his, artistic idealogies, you need your friend to come home! Three paths wait for your decision again dear Player, choose wisely.  ";
      // Other Option
    }
    else {
        document.getElementById("story").innerHTML += "With your loyal companion's tattered leash in hand, you crept towards the path straight in front of you. After all, why stray from your current path, dear Player? The wind feels steady, drifting through the trees. The autumn season was here: Little Snuggles always loved jumping into your neatly stacked leaf piles. How you wish you could see his delightful ice blue eyes and his white, fluffy coat.As you follow this path, you find speckled red prints dotting those beautiful autumn leaves ahead of you. It appears your little friend has taken up the arts! While you support his, artistic idealogies, you need your friend to come home! Three paths wait for your decision dear Player, choose wisely.";
        // Other Option
      }
});

document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
    const secondChoiceAction = prompt(`You come across three paths once again, each containing red paw prints of your lost fellow. You are certain these belong to your faitful friend, but he appears he went into a frenzy while defending your honor against the wretched sparrow! One path before you is brighter in light, but few pawprints dot the path forward. The other path leads into darkness, but contains the most of your friend's red pawsprints. Finally, the dim path continues on, but no prints wait before you. 
        \n (Enter the number of your choice)
        \n 1. Choose the Safer Path
        \n 2. Choose the Darker Path
         \n 3. Choose the Dim Path`);
        
        
        
        if (secondChoiceAction === "1") {
          document.getElementById("story").innerHTML += "The safest path was your heart's faithful plea. Your little companion did not leave much for you to find, but all that matters now is to press on. The evening light continues to dim, revealing the glowing white specks in the sky. The trees continued to provide you cover from this small light. You realize there are no more paw prints left to follow. Nevertheless, you feel less apprehensive, willing to even call out your companion's name. You call for Snuggles, your desperate plea echoing in the forest. Suddenly, there came several noises in front of you. In many different directions, animals responded to your call. Three paths lay ahead once more. 'Which animal sounds like your small fellow', you wonder to yourself";
          // Other Option
        } else if (secondChoiceAction === "2")  {
          document.getElementById("story").innerHTML += "The darkest path, despite your heartrates shaken pleas for other options, you chose to follow. With fear in your step, but determination in mind, you follow the red prints. You gaze straight-forward, squinting against the dimly lit path. The fog drifted subtly into your view, gradually covering what little light you had left. You wanted to leave. You wanted to run. There were no more pawprints that could be followed on your path. You could not stop your sudden stirring in your vocal chords as you released you true emotion. You call for Snuggles loudly. The animals waiting in the darkness answered your plea. 'Which animal sounds like your small fellow', you wonder to yourself.";
          // Other Option
        }
        else {
            document.getElementById("story").innerHTML += "The dimly lit path seemed to soothe your heartrates shaken beats, but only slightly. With a tense feeling in your stomach, you watch the fog slowly creeps beneath your waist. The evening light could barely be seen through the trees. You felt cold and slightly hungry. No pawprints were your guide. You no longer wanted to keep searching, therefore you swiftly inhaled, then released a single note from your vocal chords. You call for Snuggles, but only hear many animals return your call. 'Which animal sounds like your small fellow', you wonder to yourself.";
            // Other Option
          }
    });

    document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
        const thirdChoiceAction = prompt(`The animal noises contained screeches of woe and displeasure. Your voice was slienced swiftly by your hand, grasping your mouth. You softly apologize, but find that the animals would not settle their caterwauls. There was a sudden rustle of bushes, shaking rapidly in front of you. You slowly back away from the sudden shivers from the bushes. And yet the rustling contained a familiarity. What is your best choice of action, dear Player?
            \n (Enter the number of your choice)
            \n 1. Hide behind the nearest tree
            \n 2. Pick up a stick from the ground to defend yourself
            \n 3. Drop to the ground and blend in with the leaves`);
            
            if (thirdChoiceAction === "1") {
              document.getElementById("story").innerHTML += "You slowly step towards a tree behind you, quickly grabbing the tough tree trunk. As you watch the leaves shake rapidly, you see a small figure rush directly towards you. Before you could react, the creature bats at your legs excitedly, its ice blue eyes filled with glee. Your heart melts, freeing itself from fear's cold embrace. Little Snuggles, white fluff in all, has returned to your arms! Now to return to your cozy abode! To your warm kitchen! The hot cocoa and your dramas await your attention!";
              // Other Option
            } else if (thirdChoiceAction === "2")  {
                document.getElementById("story").innerHTML += "You pick up the stick from the ground as you steady your rapid heartbeat. The time for running is over as you prepare to face the creature that is preparing its attack. You raise your stick, like a true warrior. The figure lunges from the cover of bushes, batting at your legs eagerly. The cool, ice blue eyes gazed up at you. Its soft yet playful yips made your heart melt free from fear's frozen grip. You reach down to pet the soft white ball of fluff. Little Snuggles has returned to you safely, but not before stealing your weapon playfully! Now to return to your cozy abode! To your warm kitchen where you steaming cup of tea awaits its exhausted owner and playful pup.";
                // Other Option
              }
              else {
                  document.getElementById("story").innerHTML += "The dimly lit path seemed to soothe your heartrates shaken beats, but only slightly. With a tense feeling in your stomach, you watch the fog slowly creeps beneath your waist. The evening light could barely be seen through the trees. You felt cold and slightly hungry. No pawprints were your guide. You no longer wanted to keep searching, therefore you swiftly inhaled, then released a single note from your vocal chords. You call for Snuggles, but only hear many animals return your call. 'Which animal sounds like your small fellow', you wonder to yourself.";
                  // Other Option
                }
        });
    
    
