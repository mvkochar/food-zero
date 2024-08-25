type TPost = {
    id: number
    image: string
    category: string
    authorPhoto: string
    authorName: string
    date: string
    time: string
    comments: number
    title: string
    description: string
}

const PostsList:TPost[] = [
    {
        id: 0,
        image: "/images/blog/1.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author1.png",
        authorName: "Julie Christie",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "Fruit and vegetables and protection against diseases",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: 1,
        image: "/images/blog/2.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author2.png",
        authorName: "Dianne Russell",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: 2,
        image: "/images/blog/3.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author3.png",
        authorName: "Jenifier Lopez",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "The Best Style of Dough for Dumplings",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    
    {
        id: 3,
        image: "/images/blog/4.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author4.png",
        authorName: "Theresa Webb",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "7 Reasons to Start Your Day With Lemon Water",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: 4,
        image: "/images/blog/5.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author5.png",
        authorName: "Cody Fisher",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "Three Ideas for Cooking Goat Meat at Home",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: 5,
        image: "/images/blog/6.png",
        category: "Fashion",
        authorPhoto: "/images/blog/author6.png",
        authorName: "Leslie Alexander",
        date: "October 17,2021",
        time: "3:33 pm",
        comments: 2,
        title: "12 Sparkling Wines We're Loving This Summer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default PostsList