// selecting major text tags
const allText = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a");

// make an object with word as keys and emoji codes as values
const emojis = { "apple" : "0x1F34E", "grin": "0x1F603", "grinning": "0x1F604", "smiling": "0x1F601", 
"laughing" : "0x1F606", "nervous": "0x1F605", "laugh" : "0x1F923", "guffaw" : "0x1F602", "smile" : "0x1F642", "upside-down": "0x1F643",
"wink": "0x1F609", "pleased" : "0x1F60A", "angel" :"0x1F607", "kiss": "0x1F617", "love": "0x1F970", "delicious" : "0x1F60B",
"think": "0x1F914", "shush": "0x1F92B", "neutral": "0x1F610", "asleep": "0x1F634", "sad": "0x1F614", "vomit": "0x1F92E", "hot":"0x1F975",
"dizzy" :"0x1F635", "cowboy": "0x1F920", "party":"0x1F973", "worried":"0x1F61F", "shocked":"0x1F632", "blush": "0x1F633", "blushing": "0x1F633",
"pleading":"0x1F97A", "crying": "0x1F622", "weeping": "0x1F62D", "scream":"0x1F631", "yawn": "0x1F971", "rage":"0x1F621", "angry":"0x1F620",
"devil":"0x1F608", "skull": "0x1F480", "death": "0x2620", "poo":"0x1F4A9", "clown":"0x1F921", "ghost" :"0x1F47B", "alien":"0x1F47D",
"robot":"0x1F916", "lip":"0x1F48B", "heart":"0x2764", "hundred":"0x1F4AF", "sweat":"0x1F4A6", "puff": "0x1F4A8", "bomb":"0x1F4A3",
"thought": "0x1F4AD", "wave":"0x1F44B", "ok":"0x1F44C", "thumb":"0x1F44D", "fist":"0x270A", "clap":"0x1F44F", "write":"0x270D",
"arm":"0x1F4AA", "leg":"0x1F9B5", "foot":"0x1F9B6", "ear":"0x1F442", "nose":"0x1F443", "brain":"0x1F9E0", "tooth":"0x1F9B7", 
"bone": "0x1F9B4", "eye":"0x1F441", "tongue":"0x1F445", "mouth":"0x1F444", "baby":"0x1F476", "prince":"0x1F934", "princess": "0x1F478",
"pregnant":"0x1F930", "santa": "0x1F385", "wizard":"0x1F9D9", "run":"0x1F3C3", "dance":"0x1F57A", "walk":"0xFE0F",

}

// separating words, finding matches and reconnecting 
for (i of allText) {
    let text = i.innerText;
    const split_ = text.split(" ");
    for (let j=0; j<split_.length; j++){
        if (split_[j].toLowerCase() in emojis){
            split_[j] = String.fromCodePoint(emojis[split_[j].toLowerCase()]);
        } else if (split_[j][split_[j].length -1]=="s" && split_[j].slice(0,-1) in emojis){
            split_[j] = String.fromCodePoint(emojis[split_[j].slice(0,-1)]) + "s";
        }
    }
    i.innerText = split_.join(" ");

    console.log(split_.join(" "));
}
