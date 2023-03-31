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
        backgroundColor: "#FAC7A8"
    },
    "css": {
        emoji: "🎨",
        backgroundColor: "#B4CEF8"
    },
    "javascript": {
        emoji: "🤖",
        backgroundColor: "#FFFCD2"
    },
    "hooks":{
        emoji: "🎣",
        backgroundColor: "#DBCAF6"
    },
    "react": {
        emoji: "⚛️",
        backgroundColor: "#BFF1FF"
    },
    "node": {
        emoji: "🌲",
        backgroundColor: "#C3E7C7"
    },
    "typescript": {
        emoji: "📘",
        backgroundColor: "#A6D4F9"
    },
    "python": {
        emoji: "🐍",
        backgroundColor: "#cee2c2"
    },
    "sql": {
        emoji: "🗃️",
        backgroundColor: "#FDE2B9"
    },
    "git":{
        emoji: "📝",
        backgroundColor: "#F9B7B3"
    },
    "responsive":{
        emoji: "🔀",
        backgroundColor: "#DEC9F1"
    },
    "testing":{
        emoji: "🧪",
        backgroundColor: "#C3E6BE"
    },
    "clean":{
        emoji: "🧹",
        backgroundColor: "#B2EBE5"
    },
    "test":{
        emoji: "🚦",
        backgroundColor: "#F9BDC2"
    },
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