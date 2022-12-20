import { resolveModuleName } from "typescript";

const getData = async (slug) => {
    const post = await delay(5000)
    return post;
}

const delay = (time) => new Promise((resolve)) => {
    setTimeout(() => resolve(1),time)
}

export default async function Blog({ params }) {
    console.log(params)
    const { slug } = params
    const post = await getData(slug);
    return (
        <div>
            {post}
        </div>
    )
}
