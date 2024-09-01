const productCategories = ['Beauty', 'Fashion', 'Electronics', 'Home Decor', 'Fitness', 'Skincare', 'Kitchen Gadgets', 'Accessories', 'Pet Supplies', 'Wellness Products'];
const creativeFormats = ['Long Text on Screen', 'Stitches', 'CapCut Memes', 'Image Carousels', 'Trending Audio Challenges', 'Day in the Life', 'Behind-the-Scenes', 'Quick Tips and Tricks', 'Product Showcases', 'Live Streaming', 'Before and After Transformations', 'Duets', 'Tutorial Videos', 'Reaction Videos', 'Storytelling Videos', 'Q&A Sessions', 'Countdown Videos', 'Fail Videos', 'Comparison Videos', 'Transition Videos'];
const trends = ["Give Me 14 of Them", "Pink Pony Club", "Not Today, Maybe Tomorrow", "Short Hair", "Passing the Phone", "I Really Did Believe in Myself", "Freed from Desire", "Goals, Actual Goals", "Texting My Sister", "Hangry", "Self-Growth and #Hopecore", "2024 Ins and Outs List", "Let's Groove", "ASMR", "Get Ready With Me (GRWM)", "#TikTokMadeMeBuyIt", "Relatable TikTok", "Mysterious Girl", "These Words", "Texting My Friends", "Very Mindful, Very Demure", "My Idea of a Very Nice Day Out", "If You Asked Me on a Deeper Level", "Hey, I'm Here. Where Are You?", "Ordinary Girl", "Silly Couple Trend", "I'd Rather Take My Whiskey Neat"];

const hookLibrary = [
    "Raise your hands if you hate [problem related to category]",
    "I guess the secrets are out about [category]...",
    "I'm exposing all [category] influencers...",
    "Unethical Ways To [benefit related to category]",
    "Most people can do this but what they can't do is [unique feature of product]",
    "Don't do [common mistake], do [product solution] instead",
    "My [category] was [problem], I had to do THIS to fix them",
    "I wasted $$ on expensive [category alternatives] until I found this!",
    "Try this if you struggle with [common problem in category]",
    "The ugly truth about [category]",
    "#1 mistake everyone makes when [using/buying category]",
    "Are you making this common mistake with [category]?",
    "Do you have problems with [category issue]? I just found the perfect solution…",
    "This hack will save you hours on [category-related task]",
    "Are you tired of [category problem]? Try this!",
    "This simple mistake could be costing you [benefit related to category]",
    "This is why your [category item] isn't working",
    "You need to watch this if you struggle with [category issue]",
    "I hate [category problem] so I started using [product]",
    "What most people are doing wrong when it comes to their [category]",
    "Stop throwing away your money on expensive [category alternatives]",
    "Does anyone else hate [category problem]",
    "Going through [category struggle] and want to cry?",
    "If you're using [outdated category solution], ditch it right away",
    "Why you're not getting [category benefit] and how to fix it",
    "Do you feel frustrated because you [category problem] and don't get [desired result]?",
    "Do you want [category benefit] but can't figure out [how to achieve it]?",
    "Why you always struggle to do [category task] no matter how hard you try",
    "Are you missing these [key elements] in your [category routine]?",
    "Wondering how to overcome [category challenge]?",
    "Does your [category item] look like this?",
    "Did you know that [surprising statistic about category]",
    "The biggest misconception about [category] is...",
    "I was tired of [category problem], so I...",
    "Never make these 5 mistakes with [category]. The last one is the most important"
];

function populateOptions(selectId, options) {
    const select = document.getElementById(selectId);
    select.innerHTML = `<option value="">Select ${selectId === 'productCategory' ? 'Product Category' : 'Creative Format'}</option>`;
    options.forEach(option => {
        const el = document.createElement('option');
        el.textContent = el.value = option;
        select.appendChild(el);
    });
}

function populateTrends() {
    const trendList = document.getElementById('trendList');
    trends.forEach(trend => {
        const li = document.createElement('li');
        li.textContent = trend;
        trendList.appendChild(li);
    });
}

function generateIdea() {
    const category = document.getElementById('productCategory').value;
    const format = document.getElementById('creativeFormat').value;
    
    if (!category || !format) {
        alert('Please select both a product category and a creative format.');
        return;
    }
    
    const hook = getRandomHook(category);
    const contentIdeas = getContentIdeas(format, category);
    const cta = getRandomCTA(category);
    const trendIdea = getTrendIdea(getRandomItem(trends), category);

    const idea = `${format} Idea for ${category}\n\nHook:\n"${hook}"\n\nContent:\n${contentIdeas.map((idea, index) => `${index + 1}. ${idea}`).join('\n')}\n\nTrend Integration:\n${trendIdea}\n\nCall to Action:\n"${cta}"\n\nKey Tip: Keep it authentic! Your genuine excitement about the product will make viewers want to buy it too.`;
    
    document.getElementById('generatedIdea').textContent = idea;
    document.getElementById('ideaDisplay').classList.remove('hidden');
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomHook(category) {
    return getRandomItem(hookLibrary)
        .replace(/\[category\]/g, category)
        .replace(/\[problem related to category\]/g, `finding the perfect ${category} product`)
        .replace(/\[benefit related to category\]/g, `transform your ${category} game`)
        .replace(/\[common mistake\]/g, `overpay for ${category} items`)
        .replace(/\[product solution\]/g, `shop smart on TikTok`)
        .replace(/\[category alternatives\]/g, `${category} products that don't deliver`)
        .replace(/\[common problem in category\]/g, `finding reliable ${category} products`)
        .replace(/\[category issue\]/g, `${category} disappointments`)
        .replace(/\[category-related task\]/g, `${category} shopping`)
        .replace(/\[category item\]/g, `go-to ${category} product`)
        .replace(/\[outdated category solution\]/g, `old-school ${category} items`)
        .replace(/\[category benefit\]/g, `amazing ${category} results`)
        .replace(/\[desired result\]/g, `the ${category} transformation you want`)
        .replace(/\[category task\]/g, `find the right ${category} product`)
        .replace(/\[key elements\]/g, `must-have features`)
        .replace(/\[category routine\]/g, `${category} routine`)
        .replace(/\[category challenge\]/g, `${category} shopping frustrations`)
        .replace(/\[surprising statistic about category\]/g, `90% of people are using the wrong ${category} products`);
}

function getRandomCTA(category) {
    const callToActions = [
        "Tap the orange cart to transform your [category] game!",
        "Don't miss out! Shop now in my TikTok Shop!",
        "Limited stock alert! Grab yours before they're gone!",
        "Swipe up to shop this [category] game-changer!",
        "Your [category] upgrade is just a click away. Shop now!"
    ];
    return getRandomItem(callToActions).replace(/\[category\]/g, category);
}

function getContentIdeas(format, category) {
    const ideasMap = {
        'Long Text on Screen': [
            `Create an engaging background video related to ${category}`,
            `Write a long, relatable text about a common ${category} problem`,
            `Overlay the text on the video, making sure it's easy to read`
        ],
        'Stitches': [
            `Find a popular video discussing ${category} issues`,
            `Stitch it with your unique perspective or solution`,
            `Showcase how your product solves the problem mentioned in the original video`
        ],
        // ... (add other formats here)
    };
    return ideasMap[format] || [
        `Create content showcasing your ${category} product`,
        `Highlight key features and benefits`,
        `End with a strong call-to-action`
    ];
}

function getTrendIdea(trend, category) {
    const trendIdeasMap = {
        "Give Me 14 of Them": `Show 14 must-have ${category} items from your TikTok Shop, using the "Give Me 14 of Them" audio`,
        "Pink Pony Club": `Showcase ${category} products that celebrate diversity and inclusion, set to "Pink Pony Club"`,
        // ... (add other trends here)
    };
    return trendIdeasMap[trend] || `Incorporate the "${trend}" trend to showcase your ${category} product creatively`;
}

document.addEventListener('DOMContentLoaded', () => {
    populateOptions('productCategory', productCategories);
    populateOptions('creativeFormat', creativeFormats);
    populateTrends();
    document.getElementById('generateIdea').addEventListener('click', generateIdea);
});
