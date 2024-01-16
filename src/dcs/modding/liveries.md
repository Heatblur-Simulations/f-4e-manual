# Liveries

Creating Liveries for our F-4E can be tedious work.
Over the past 1,5 Years creating the Art and ultimately the Liveries you see available,
the largest chunk of time went into researching on the Web and in Books to provide the most
accurate, realistic Liveries.
Now with the release of the F-4E Phantom II, we want to see what you have in store for the F-4.
To support you in your creative ways of recreating your favourite Livery, there's a few things to
know for a couple of areas
regarding the Jet and how it is represented in DCS.

## The Paintkit

The Paintkits goal was made with ease of use in mind. Of course, unwrapping a 3D Object onto 2D
Space will never be a fully satisfying experience but we tried to keep it as nice and clean as
possible. To provide the highest quality available, the Paintkit comes in Linear Color Space and 16
Bit Color depth. Bear in mind that not every Graphics Suite will handle this correctly. The Paintkit
was created using Adobe Photoshop. Saving in 16 Bit Color depth will take a while, so be patient
when hitting Save in your Graphics Application. We also implemented a layer stack thats labeled "
Administrative Tools". Here you will find the Wireframe unwrap which will help in aligning your art.
The folder called "Partsfinder" you will find helps you identify pieces that belong together on the
UV Unwrap for certain parts. There's no padding applied there so if you use them for your selection,
you might want to expand your selection by a few pixels to get rid of artifacts on the seams. The
other parts of the Paintkit are pretty self explanatory.

As a final tip on this front:
You can link files in Photoshop. This means you can create art, save it as a file and then link it
in your Paintkit file. This makes for a non destructive workflow which allows you to changes things
afterswards if you're not satisfied with your result.

## PBR Rendering / RoughMet File

Next to your Albedo File which you create by exporting your custom Livery out of the Paintkit,
you will need the RoughMet File to make the most out of your custom livery. We provide you the
uncompressed RoughMet files within the Paintkit files. Remember, DCS uses Physical Based Rendering
to create the Picture you see on your Monitor or through your VR Headset. The RoughMet files makes
use of the three RGB Channels Red -> Ambient Occlusion (pre baked Shadows) Blue -> Metallic (Defines
if a Surface is metallic or not) Green -> Roughness (is the Surface super smooth or really rough)
Since the Roughmet File is in the 8Bit RGB Range of Colors, per channel, you get 255 Values to
define the named attributes. Visually this is represented with (per Channel) a Value of 0 is Black,
a Value of 255 is White.

To keep it short and this directly affects your Albedo File:
Do not use very bright / dark and 100% saturated Colors.
Togehter with the what is defined in the RoughMet, the DCS Engine renders the Picture.
Using very bright / dark and saturated Colors in your Albedo File leads to DCS not being able to
create proper effects when the Surface is hit by direct sunlight.
Mathematically, the Engine can not render a color greater than the available color space.
So if you want a bright Yellow Marking on your Jet, reduce the Saturation by around 15% as well
as the brightness of this Marking.
Ultimately you can check if your Textures are withing the PBR Spectrum by loading up your Custom
Livery in the DCS Modelviewer and hit F8 which gives
you the Material Errors View.
If you see Orange or Magenta Color here, it shows you that the Renderer cannot draw the full
effects on it since the Base Color (Albedo) is too Bright / Saturated.
Keeping it short here, there's a whole lot to learn when it comes to Physical Based Rendering and
it would not fit this Manual to contiune further.
There's many great sources out there and you're always welcome to ask Questions in our Discord or
Forums!

## Pilot Customization

With the F-4E we introduce our Pilot Customization Feature. This means you'll be able to pick
from a selection of Pilot Gear we made.
Now don't get too excited, we don't simulate Mustache growth...yet.
With the Early Access release of the Phantom, you'll be able to choose from a small variety of
Pilot Gear. Later during Early Access we will provide a wider selection
as well as a Graphical User interface to choose your Gear.
But for now, I want you to give you the technical background on in and how it's done without the
fancy UI.
In Order to virtually dress your Pilot, you need to look into the description.lua of your Livery.

Here's a snipped of the Area you need to look at:

custom_args =
{
[512] = 0.3, -- 0 is no mirrors, 0 - 0.4 is both mirrors (mickey mouse) and 0.5+ is top mirror
only.
[2008] = 0.95, --WSO Helmet, 0.95 is HGU-55
[2006] = 0.95, --Pilot Helmet, 0.95 is HGU-55 (expand list of draw args)
}

Find the custom_args section which is usually towards the bottom of the file.
In the square brackets [] you see a number.
This Number represents the Draw Argument used by DCS to tell the Model what your Pilot(and Jet)
wears. Draw Argument [512] represents the Mirrors on the WSO Canopy. After the equal = symbol you
will find a number that has a valid range from 0.0 to 1.0.
This represents the animation range of the Draw Argument. Our 3D Guys use this value to give your
Pilot a certain helmet, or Gloves .. or define if the Pilot is Male
or Female. We put the explanation to what each Draw Arg does into the file.
[2006] is the Draw Argument for the Pilot Helmet. Set it to 0.1 your Pilot wears a old school
HGU-2 helmet. Set it to 0.95 and he will be wearing a more modern HGU-55.
Now dress your Pilot they way you like it through the description.lua of your livery!

## Applying Custom Paints / Option Available to pick from

While you're probably already familiar with how to apply your custom texture to the jet (Just
copy an existing one and replace the files keeping the names the same), I made a small library of
textures to cut down on the overall size of a Livery. You can find these in the "commons" folder
under \CoreMods\aircraft\F-4E\Liveries\F-4E-45MC\commons Trying to keep folder depth shallow this at
first might look a bit messy but it actually makes it easier to apply the texture in your
description.lua and does not bloat it too much with long folder paths.

For example:

the Folder "ALQ131_g" contains a Livery for the ALQ-131 Pod in Olive/Green Colors.
You can tell your description.lua to use this Texture instead of the default white one from DCS
when equiping the ALQ-131 to the Phantom ingame by putting this line of code
into your description.lua file for both the Albedo and the Roughmet Texture:

    {"ALQ_131", 0 , "../commons/alq131_g/alq_131_diff", false};
    {"ALQ_131", ROUGHNESS_METALLIC , "../commons/alq131_g/alq_131_diff_roughmet", false};

The first Value after the { in Brackets "" is the Material Name, in this case the ALQ_131.
It can be a bit tricky to find these Material names through DCS. Feel free to ask in our Discord
in the #liveries-lair channel we we'll happily try and provide the
ones you are looking for. Using the same principle, you can apply custom Fligh Suit textures to your
Pilot as well as a HGU-2 Texture. Here's an example of a German Luftwaffe F-4F Pilot and WSO being
equiped with German Luftwaffe Flight Suits and Grey HGU-2 Helmets:

    {"PILOT_HGU-2_Helmet", 0 ,"../commons/HGU2_g/HGU-2_Helmet",false};
    {"PILOT_HB_Char_RobinOlds_CWU", 0 ,"../commons/LGFS/hb_char_robinolds_cwu",false};
    {"PILOT_HB_Char_RobinOlds_overall", 0 ,"../commons/LGFS/hb_char_robinolds_overall", false};
    {"PILOT_HB_Char_RobinOlds_overall", NORMAL_MAP ,"../commons/LGFS/hb_char_robinolds_overall_nrm"
    ,false};
    {"PILOT_HB_Char_RobinOlds_roughmet", ROUGHNESS_METALLIC ,"
    ../commons/LGFS/hb_char_robinolds_overall_roughmet",false};

    {"WSO_HGU-2_Helmet", 0 ,"../commons/HGU2_g/HGU-2_Helmet",false};
    {"WSO_HB_Char_RobinOlds_CWU", 0 ,"../commons/LGFS/hb_char_robinolds_cwu",false};
    {"WSO_HB_Char_RobinOlds_overall", 0 ,"../commons/LGFS/hb_char_robinolds_overall",false};
    {"WSO_HB_Char_RobinOlds_overall", NORMAL_MAP ,"../commons/LGFS/hb_char_robinolds_overall_nrm",false};
    {"WSO_HB_Char_RobinOlds_roughmet", ROUGHNESS_METALLIC ,"../commons/LGFS/hb_char_robinolds_overall_roughmet",false};

Hopefully this brought some valuable insights for you.
Let's show off those custom Liveries!
