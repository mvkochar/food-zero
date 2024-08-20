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
    }
]

export default PostsList