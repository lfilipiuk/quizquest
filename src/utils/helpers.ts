export const formatCategory = (category: string) => {
    return category.toLowerCase().replace(" ", "-");
}

interface CategoryEmoji {
    [key: string]: {
        emoji: string;
        backgroundColor: string;
    };
}

const categoryEmoji: CategoryEmoji = {
    "html": {
        emoji: "🌍",
        backgroundColor: "#F7DDBE"
    },
    "css": {
        emoji: "🎨",
        backgroundColor: "#C2DDE2"
    },
    "javascript": {
        emoji: "🤖",
        backgroundColor: "#FCD0BA"
    },
    "react": {
        emoji: "⚛️",
        backgroundColor: "#cec2e2"
    },
    "node": {
        emoji: "🌲",
        backgroundColor: "#cbe2c2"
    },
    "typescript": {
        emoji: "🔥",
        backgroundColor: "#F7DDBE"
    },
    "python": {
        emoji: "🐍",
        backgroundColor: "#cee2c2"
    }
}

const defaultEmoji = {
    emoji: "🌟",
    backgroundColor: "#F2E9E4"
};

export const iconSelector = (category: string) => {
    for (const key in categoryEmoji) {
        if (category.toLowerCase().includes(key)) {
            return categoryEmoji[key];
        }
    }

    // Return default emoji if no match is found
    return defaultEmoji;
};