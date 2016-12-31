# Apple
cp logo-symbol.svg ../public/assets/favicon/apple.svg

apple=("76" "76@2x" "60@2x" "60@3x" "83.5@2x")
sizes=(76 152 120 180 167)
length=${#apple[@]}

for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../public/assets/favicon/apple_${apple[$i]}.png -w ${sizes[$i]} logo-square.svg
done

# Other
sizes=(16 32 36 48 72 96 144 192)
length=${#sizes[@]}
for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../public/assets/favicon/${sizes[$i]}.png -w ${sizes[$i]} logo-dark.svg
    convert ../public/assets/favicon/${sizes[$i]}.png -gravity center -background transparent -extent ${sizes[$i]}x${sizes[$i]} ../public/assets/favicon/${sizes[$i]}.png
done

# ICO
convert ../public/assets/favicon/16.png ../public/assets/favicon/32.png ../public/assets/favicon/48.png ../public/favicon.ico

# MS
ms=("70" "150" "310")
sizes=("70" "150" "310")
length=${#ms[@]}
for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../public/assets/favicon/mstile_${ms[$i]}.png -w ${sizes[$i]} logo-white.svg
    convert ../public/assets/favicon/mstile_${ms[$i]}.png -gravity center -background transparent -extent ${ms[$i]}x${ms[$i]} ../public/assets/favicon/mstile_${ms[$i]}.png
done
convert ../public/assets/favicon/mstile_150.png -gravity center -background transparent -extent 310x150 ../public/assets/favicon/mstile_310x150.png
