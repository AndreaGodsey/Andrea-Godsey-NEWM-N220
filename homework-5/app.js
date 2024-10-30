document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
const firstChoiceAction = prompt(`I see you have understood the urgency of your young fellow's safety! You enter the woods, tattered leash in hand! Snuggles has ran into these very woods! But which way did he go? Follow your heart, dear player! Your puppy's life depends on it!
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
  const secondChoiceAction = prompt(`As you stride through the path in the woods, you hear a soft chittering continue to follow your every move. The chittering turned to tapping as you gaze upwards at the trees. Your heartrate begins to rise, for that chittering and tapping sounded close. However, it appears to not only follow you, but wishes to lead you off the path. What shall you do, dear Player? Shall you follow this siren's call to find answers? Wish to wait for a moment to process its message? Or continue onward, ignoring such animal tendencies.
      \n (Enter the number of your choice)
      \n 1. Follow the sound 
      \n 2. Stand perfectly still
      \n 3. Refuse to listen`);
      
      if (secondChoiceAction === "1") {
        document.getElementById("story").innerHTML += "You choose to listen to this creature's message for only a moment. The twittering leads you forward, just as before. Yet, as suddenly as before, the twittering moved quickly to the right. You stand still for a moment, wondering if this creature can lead you to your friend. You then shake your head, returning to your original path. The message did not yield enough results to satisfy you, as you continue onward. ";
        // Other Option
      } else if (secondChoiceAction === "2")  {
          document.getElementById("story").innerHTML += "You decide to stand in place, gazing at your surroundings. The leaves rustled slightly as the twittering continued quietly. You wait for a few minutes until the twittering and tapping began to seize. Your messenger has given up due to your stubborness, as you decide to press on your current path. ";
          // Other Option
        }
        else {
            document.getElementById("story").innerHTML += "You convince yourself that this is only a mere animal trick. The creature is only minding their business, continuing its everyday life as usual. You pay this messenger no heed as you continue on your current path. ";
            // Other Option
          }
  });

document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
    const thirdChoiceAction = prompt(`(Scroll to seal your fate, dear Player) You come across three paths once again, each containing red paw prints of your lost fellow. You are certain these belong to your faitful friend, but he appears he went into a frenzy while defending your honor against the wretched raven! One path before you is brighter in light, but few pawprints dot the path forward. The other path leads into darkness, but contains the most of your friend's red pawsprints. Finally, the dim path continues on, but no prints wait before you. 
        \n (Enter the number of your choice)
        \n 1. Choose the Safer Path
        \n 2. Choose the Darker Path
         \n 3. Choose the Dim Path`);
        
        
        
        if (thirdChoiceAction === "1") {
          document.getElementById("story").innerHTML += "The safest path was your heart's faithful plea. Your little companion did not leave much for you to find, but all that matters now is to press on. The evening light continues to dim, revealing the glowing white specks in the sky. The trees continued to provide you cover from this small light. You realize there are no more paw prints left to follow. Nevertheless, you feel less apprehensive, willing to even call out your companion's name. You call for Snuggles, your desperate plea echoing in the forest. Suddenly, there came several noises in front of you. In many different directions, animals responded to your call. Three paths lay ahead once more. 'Which animal sounds like your small fellow', you wonder to yourself";
          // Other Option
        } else if (thirdChoiceAction === "2")  {
          document.getElementById("story").innerHTML += "The darkest path, despite your heartrates shaken pleas for other options, you chose to follow. With fear in your step, but determination in mind, you follow the red prints. You gaze straight-forward, squinting against the dimly lit path. The fog drifted subtly into your view, gradually covering what little light you had left. You wanted to leave. You wanted to run. There were no more pawprints that could be followed on your path. You could not stop your sudden stirring in your vocal chords as you released you true emotion. You call for Snuggles loudly. The animals waiting in the darkness answered your plea. 'Which animal sounds like your small fellow', you wonder to yourself.";
          // Other Option
        }
        else {
            document.getElementById("story").innerHTML += "The dimly lit path seemed to soothe your heartrates shaken beats, but only slightly. With a tense feeling in your stomach, you watch the fog slowly creeps beneath your waist. The evening light could barely be seen through the trees. You felt cold and slightly hungry. No pawprints were your guide. You no longer wanted to keep searching, therefore you swiftly inhaled, then released a single note from your vocal chords. You call for Snuggles, but only hear many animals return your call. 'Which animal sounds like your small fellow', you wonder to yourself.";
            // Other Option
          }
    });

document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
        const fourthChoiceAction = prompt(`The animal noises contained screeches of woe and displeasure. Your voice was slienced swiftly by your hand, grasping your mouth. You softly apologize, but find that the animals would not settle their caterwauls. There was a sudden rustle of bushes, shaking rapidly in front of you. You slowly back away from the sudden shivers from the bushes. And yet the rustling contained a familiarity. What is your best choice of action, dear Player?
            \n (Enter the number of your choice)
            \n 1. Hide behind the nearest tree
            \n 2. Pick up a stick from the ground to defend yourself
            \n 3. Drop to the ground and blend in with the leaves`);
            
            if (fourthChoiceAction === "1") {
              document.getElementById("story").innerHTML += "You slowly step towards a tree behind you, quickly grabbing the tough tree trunk. As you watch the leaves shake rapidly, you see a small figure rush directly towards you. Before you could react, the creature bats at your legs excitedly, its ice blue eyes filled with glee. Your heart melts, freeing itself from fear's cold embrace. Little Snuggles, white fluff in all, has returned to your arms! Now to return to your cozy abode! To your warm kitchen! The hot cocoa and your dramas await your attention! All is now well.";
              // Other Option
            } else if (fourthChoiceAction === "2")  {
                document.getElementById("story").innerHTML += "You pick up the stick from the ground as you steady your rapid heartbeat. The time for running is over as you prepare to face the creature that is preparing its attack. You raise your stick, like a true warrior. The figure lunges from the cover of bushes, batting at your legs eagerly. The cool, ice blue eyes gazed up at you. Its soft yet playful yips made your heart melt free from fear's frozen grip. You reach down to pet the soft white ball of fluff. Little Snuggles has returned to you safely, but not before stealing your weapon playfully! Now to return to your cozy abode! To your warm kitchen where you steaming cup of tea awaits its exhausted owner and playful pup. All is now well.";
                // Other Option
              }
              else {
                  document.getElementById("story").innerHTML += "Your fear appeared more overpowering than your mind as you dropped to the ground. The leaves crumpled underneath your wait as the figure runs towards your head. You close your eyes, awaiting your fate. But suddenly you feel a wet, black nosy bury into your head. It sniffed delightedly, making a small yipping sound. You open your eyes, seeing those beautiful, ice blue eyes stare into yours. Snuggles! You sit up happily, cuddling your soft white ball of fluff. Everything was right now. Your comfy cottage now awaits its owner and companion, with your hot chocolate still awaiting your return. All is now well.";
                  // Other Option
                }
        });

document.getElementById("makeyourchoiceplayer").addEventListener("click", function() {
            const finalChoiceAction = prompt(`I see that you thought this was over...that you head home to your cozy cottage, dear Player? What have I said at the beginning? Are you willing to face your end? And what about those bloody pawprints? They came from somewhere. Now it is time to face your choices. Some may also say, greet the consequences of your actions as they come. Your choices, dear Player, have affected how you defeat your beast. You are no longer alone as a creature that has haunted you every night since you began your life as a widower. A flashlight sits now towards your right, your only tool that this narrator may offer... What shall you do, since you have now fallen into its trap, dear Player? (Scroll to seal your fate, dear Player)
                \n (Enter the number of your choice)
                \n 1. Run back home/Use Flashlight
                \n 2. Throw Snuggles
                \n 3. Pick up a stick`);
                
                if (finalChoiceAction === "1") {
                  document.getElementById("story").innerHTML += "You steal one glance at the creature. All has become clear. The red paint was not from your fellow, but from his enemy's folly. Your brave companion used this red force to lead you straight to him. This creature has been stalking you. You have found your creature. Its black feathers shook with its black eyes gazing into yours, soulessly. You rush for the flashlight, gripping your now furious friend in hand. You were not losing him again. The creature raises his wings, screeching as you run forward. This large black bird. Why can't they leave? Why must they follow you, forevermore? That constant tapping at night- that tapping at your chamber door! It has now lured you out here-wishing to haunt you forever more. The leaves crunched as the trees wave to and frow. You see your cottage up ahead, waiting to welcome you in. The large black bird behind you, screeching in a voice so shrill. The hair raises on the back of your neck as you grip the golden doorknob. As you rush inside, you slam the door behind you. Your fellow barked angrily as you set him down. He wishes to defend your honor. The bird tapped lightly on the door as you watch with horrified sorrow. This bird. This creature, will continue to haunt you, forevermore.   ";
                  // Other Option
                } else if (finalChoiceAction === "2")  {
                    document.getElementById("story").innerHTML += "Despite reuniting with your faithful companion, Snuggles is willing to fight for you once again. You notice that he was not the one who was bleeding. No. Your paws prints were fine...this creature was injured. The bird...or so you thought...was no longer a bird. This creature was seven feet tall, its glowing black eyes piercing yours. You eye the flashlight, but your dog was struggling against your grip. You agree, with a look of determination. You raise Snuggles upwards, the small fluff bearing his teeth. You throw your fearless friend at the bird-like creature. Snuggles bites the creature's beak as you rush for the flashlight. You grip it in hand, your eyes determined to find the target. The creature's wings flapped as Snuggles was gripping the top of the creature's head. You see the now stale wound on the side of the creature's wing. The paint that dripped from its wing...that was not paint...your dog was passionate...but not about art. Snuggles left prints for you to find him, to put an end to this creature that stalked you from the woods. It was time to put the nail into this creature's coffin. You run forward, flashlight in hand. The creature's eyes widened as Snuggles jumped down. With a loud crack, your flashlight aimed true, hitting the creature between the eyes. The creature fell back, no longer moving, its eye twitching one final time. The bird. The bird that has forsaken you is no more. Goodbye, dear Player. This bird shall bother you, shall we say, nevermore. ";
                    // Other Option
                  }
                  else {
                      document.getElementById("story").innerHTML += "The stick. You think to yourself. The stick will be your savior. You look to Snuggles as you set him down. He growled as the creature shows themselves through the trees. The black bird was large, looming over seven feet tall. It shakes its feathers as they cascaded towards the ground. Its beak releases a soft chittering sound. You grimace, knowing who this creature is. The black bird with its black eyes piercing your very soul. And yet, you felt nothing, no fear or even anger. Snuggles on the other hand, lunges towards the bird angrily. The large black bird screeched in anger as the dog grips its hind leg. Its wing was torn, revealing to you where the paint actually came from. This substance was pure red, and your companion steps it this substance to lead you to this monster. This bird that has been bothering you every night. The constant tapping at your door. It waited for you to leave safety. To bother you forevermore. You felt nothing as the creature fought with your companion. You were frozen. Frozen yet content. Frozen and unmoving. Snuggles releases his grip, landing on the ground harshly. He shakes himself, continuing to growl angrily. You stare at the bird, and it stares back at you. No fear. Nothing. The bird blinks slowly, acting unbothered by its wounds. It backs away from you slowly, retreating into the trees. Snuggles settled silently as you sighed heavily. You do not know when it will be back. But one thing was certain, this very moment, will haunt you forever more.";
                      // Other Option
                    }
            });

document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
              const fifthChoiceAction = prompt(`You have decided to hurry back to your cottage for supplies. This is a dark forest after all, and it is close to the evening! Before you leave, you grab your backpack. However, you have only recently moved in, therefore you supplies are scarce. Which item is the most important to you to bring?
                  \n (Enter the number of your choice)
                  \n 1. Snuggles's Dog Toy
                  \n 2. Flashlight
                  \n 3. Hatchet`);
                  
                  if (fifthChoiceAction === "1") {
                    document.getElementById("story").innerHTML += "You decide to bring along Snuggles's dog toy on your trip. After all, you can lure Snuggles back to with a small squeak from Mr.Gopher. With heart in your throat, you leave cottage and enter the chilly evening air. The trees rustled in your direction, beckoning you to enter its unruly realm. You enter these woods, finding that the sun has long set. The only light in the area now is the dimly lit fireflies waitng for you. You come across three paths, but decide to continue straight. You could not see anything, and decided to go through the areas that you can see.";
                    // Other Option
                  } else if (fifthChoiceAction === "2")  {
                      document.getElementById("story").innerHTML += "You decided to bring the flashlight along. After all, the sun has only now decided to set. You step outside to see the dark and gloomy forest welcome you into its moonlight shadow realm. You shine your radiant light into the depths, approaching down path ahead. You don't want to stray too far, so you decide to continue straight on passed the two other paths ahead of you. ";
                      // Other Option
                    }
                    else {
                        document.getElementById("story").innerHTML += "You chose to bring the hatchet. Of course you need to defend yourself against the creatures that lurk in the shadowy forest. Night fall had already approached as you step outside your comfy abode. You enter the dimly lit forest as the fireflys wavered in front of you. You clutch the hatchet as you continue straight down the path, not even glancing at the other two paths before you";
                        // Other Option
                      }
              });

document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
                const sixthChoiceAction = prompt(`As the night approaches, the fog begins to reach your waist. The animals have come out to hunt, looking to feast on unwanted travelers. You suddenly hear a loud chittering sound coming from the right side of the path. There was a soft tapping that seemed to be leading you away from the path. What shall you do, dear Player?
                    \n (Enter the number of your choice)
                    \n 1. Follow the noise confidently
                    \n 2. Follow the noise nervously
                    \n 3. Follow the noise in anger`);
                    
                    if (sixthChoiceAction === "1") {
                      document.getElementById("story").innerHTML += "You hear the tapping sound that has haunted your dreams. The tapping. The rapping. On your cottage door at night. The haunting loneliness it brings. And yet, you were desperate to find your companion. Snuggles is all you have left. You step off the path slowly, patient as the slick leaves grazed the bottom of your shoes. With your confidence tool in hand, you follow the soft tapping and chittering of the messenger. You hope that this sound can lead you true.  ";
                      // Other Option
                    } else if (sixthChoiceAction === "2")  {
                        document.getElementById("story").innerHTML += " You hear a soft sound and your heart skips a beat. The tapping of the wood grazing that beak. The chittering beckoning you to his post. It sounded unnatural. Irrational. Unnerving. Your steps turned quickly to the right as you running towards the sound. The crunches beneath your shoes became the sound of crashing waves. You hold your backpack straps tightly as the sound of the creature remained steady in sound as you continue to follow its hypnotic sound.";
                        // Other Option
                      }
                      else {
                          document.getElementById("story").innerHTML += "You clenched the tool of your choice in hand, grimacing. You tire of that sound. That wretched sound that dares pierce your ears. That tapping. That rapping. You turned angrily towards the sound, gripping your tool of choice. You tire of this sound. But you follow it, almost demanding that sound to return what was stolen from you.   ";
                          // Other Option
                        }
                });
document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
                  const seventhChoiceAction = prompt(` As you continue to follow the sound, no matter your feelings, you do find this suspicious. This sound that hates you and pesters you...never seemed to care...nevermore...Suddenly, the sounds stopped, just as suddenly as they had started. You swallow nervously, hoping that sound suddenly comes back. Just as much as you hated it...you begged it to return. However, you see something ahead...a small clumo of white fluff, wavering in the wind. You rush over to it, recognizing the coat. Your companion has lost something important. It is time to return it to him. You stand tall, holding your weapon of choice. How do you respond to such a sudden discovery?
                      \n (Enter the number of your choice)
                      \n 1. Call for Snuggles
                      \n 2. Threaten the creature who harmed Snuggles
                      \n 3. Listen for more sounds`);
                      
                      if (seventhChoiceAction === "1") {
                        document.getElementById("story").innerHTML += "You call to Snuggles, but sadly do not receive a response as you continue through the gloomy wood. The screeching no longer gave you hints as you wondered aimlessly forward, desperate for your companion's safe return.";
                        // Other Option
                      } else if (seventhChoiceAction === "2")  {
                          document.getElementById("story").innerHTML += "You call out to the creature of the wood, threatening that if it ever harms Snuggles, it will regret its decision. You do not hear a response as you wondered angrily through the gloomy wood. ";
                          // Other Option
                        }
                        else {
                            document.getElementById("story").innerHTML += "You say nothing, still hoping that the creature will come back for a moment. Now was not the time to feel fear or anger. Snuggles needed to be found...and your hope continued to fuel you as you wandered the wood cautiously. ";
                            // Other Option
                          }
                  });
document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
                    const eighthChoiceAction = prompt(` As you follow the chittering animal's voice, you notice that the forest around you has become dark and twisted. The beautiful thorn bushes become a twisted mass of vines. You grip your tool tightly in hand as you followed the sounds. Finally, you come across an empty clearing, you hear the sounds of angry animals fighting nearby. One of these animals does sound familiar. How will you respond to this encounter, dear Player?
                        \n (Enter the number of your choice)
                        \n 1. Rush towards the area with your tool in hand
                        \n 2. Cautiously approach the area with tool in hand
                        \n 3. Crawl towards the area, holding your tool in the area`);
                        
                        if (eighthChoiceAction === "1") {
                          document.getElementById("story").innerHTML += "You recognize one of those sounds of anger coming from your faithful fellow. You break through the bushes to find him snarling at a large creature. The creature was wounded, his wing dripping with a sticky red substance. It turns to you. You clutch your item nervously as the creature turns completely towards you. It was calm, its black souless eyes appearing emotionless towards you. The raven was back. It had found and followed you here. Snuggles rushes in front of yoi, continuing to bark at the creature. You stood very still, stunned at the creature before you. ";
                          // Other Option
                        } else if (eighthChoiceAction === "2")  {
                            document.getElementById("story").innerHTML += "You slowly approach the bushes to see the two animals that were clearly having a disagreement. The creature was...a large black bird. A bird you had hoped to never see again. To nevermore hear its tapping...its constant reminding. The bird turned slowly to your direction. Snuggles has sensed your fear, rushing towards you in quick defense. You slowly stand, for all you can do is stare into those pitch black eyes. They have been awaiting your gaze...dare say he has been hoping to find you...forevermore. ";
                            // Other Option
                          }
                          else {
                              document.getElementById("story").innerHTML += "You get down on your hands and knees, crawling slowly towards the bushes. This was not very effective, for the loud rustling of leaves gave way your presence. There was a sudden silence as tension hung in the air. You peak through the bushes, only to find your eager fluffy friend licking your face. You quickly sit up, smiling sheepishly at the sudden change in tone. You hold snuggles, caressing his cheek lovingly. Your friend was here all along...with it. You stand slowly as you lock eyes with the creature. The bird...you had hoped to never see again. Its two black eyes were the abyss...and you were close to falling into it.";
                              // Other Option
                            }
                    });
document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
                      const ninthChoiceAction = prompt(` You wanted to express your displeasure, for the creature was none other than the evil raven that follows your every move. This large creature wishes to make your life difficult and melancholy. Ask this raven questions as to why he was here-you were a widower now. You wanted to be left alone. You and your dog. The raven had no place near you. How would you like to voice or express your complaint, dear Player?
                          \n (Enter the number of your choice)
                          \n 1. You wish to shout at the raven
                          \n 2. You are unable to speak
                          \n 3. You meerly express a digusted scowl in return`);
                          
                          if (ninthChoiceAction === "1") {
                            document.getElementById("story").innerHTML += "You felt all your emotions come out of you at once. Why was the raven here? Why follow you? You wanted peace! You needed peace! No more constant reminders of your old life. The past happiness and fortune you wished that could return. It won't. And it has left this thing in its place! The raven meerly says nothing, as you continue to screech for it to never return...to nevermore.  ";
                            // Other Option
                          } else if (ninthChoiceAction === "2")  {
                              document.getElementById("story").innerHTML += "You meerily stare at the raven in pure shock. You could not believe it has found. It was a bird. A mere small bird that hung by your window in the city. You desperatley begged it not to follow you. But it had. It had followed you...the entitled thing felt it could be near you. And now this bird-this creature- was much larger than that small bird of the city. It has returned, ready to greet you forevermore. ";
                              // Other Option
                            }
                            else {
                                document.getElementById("story").innerHTML += "You did not want to give the creature your voice for it did not deserve it. You meerily scowled in its presence as Snuggles growled contiously. It was a standoff between all of you. One on the side of hatred, the other in blissful indifference. It followed here...wishing to preach its reminders to you...forevermore  ";
                                // Other Option
                              }
                      });

document.getElementById("makeyourchoiceplayerTwo").addEventListener("click", function() {
                        const tenthChoiceAction = prompt(` You have had enough of his constant reminders. His chittering and tapping. What does he know? Your still in pain, and this creature continues to thrive off of it. It is time to put an end to this creature. It may pick and mame at your very being, but Snuggles deserves no such treatment. Your weapon of choice, dear Player. You may use it now.
                            \n (Enter the tool you had chosen at the beginning)
                            \n 1. Throw the dog toy
                            \n 2. Attack using the flashlight
                            \n 3. Rush forward with the hatchet in hand`);
                            
                            if (tenthChoiceAction === "1") {
                              document.getElementById("story").innerHTML += "You look to Snuggles, holding the small dog toy in hand. Snuggles wags eagerly as you wave it around. You look to the raven one last time, but this time with a smile. You were willing to let things be. The raven may leave someday or never will. You throw the toy in the other direction as Snuggles runs after it. The raven mearly watches curiously as you walk away from him...forevermore. ";
                              // Other Option
                            } else if (tenthChoiceAction === "2")  {
                                document.getElementById("story").innerHTML += "You look to your flashlight, then to Snuggles once again. You nodded to him as you set Snuggles down. Snuggles prepares to attack as you grimace at the raven one final time. You ask it to leave. No more begging. The raven meerly tilts his head in curiousity. You demand it to leave now while it has the chance. It refuses to leave as you wave your flashlight at the creature angrily. It flaps upwards as you continue to show at it angrily. Snuggles provides support, his loud bark cracking even the bird's confidence. You hoped, as it flapped away, that it will never come back...forevermore. ";
                                // Other Option
                              }
                              else {
                                  document.getElementById("story").innerHTML += "You have had enough of this bird constantly being around. Your sanity can no longer take its existence. You held your hatchet in hand as you set Snuggles down. You did not give the bird the chance, as you pointed at him angrily. The bird shall bother you nevermore, you think as your dog rushes forward quickly to the bird's wings. Your companion bites true as the bird screeches in pain. You did not care for it finally feels your pain. All the better as you strike your hatchet cleanly against the chest. The infernal chittering. The tapping. It shall haunt you forever more as you continue to strike. The souless eyes shall now long show its evil gaze as you step back from the limp enemy before you. You and Snuggles are finally free...forevermore.  ";
                                  // Other Option
                                }
                        });

document.getElementById("restartGame").addEventListener("click", function() {
    location.reload();
          });
    
    
