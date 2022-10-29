import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import GuitarList from "~/components/guitar-list";
import PostList from "~/components/post-list";
import Course from "~/components/course";
import guitarStyles from '~/styles/guitars.css'
import blogStyles from "~/styles/blog.css";
import courseStyles from "~/styles/course.css";

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: guitarStyles,
        },
        {
            rel: 'stylesheet',
            href: blogStyles,
        },
        {
            rel: 'stylesheet',
            href: courseStyles,
        },
    ]
}

export const meta = () => {
    return {
        title: 'GuitarLA - Main page',
        description: 'GuitarLA store - Main page',
    }
}
export const loader = async () => {

    const [guitars, posts, course] = await Promise.all([getGuitars(), getPosts(), getCourse()]);

    return {
        guitars: guitars.data,
        posts: posts.data,
        course: course.data,
    }
}

const Index = () => {
    const { guitars, posts, course } = useLoaderData();

    return (
        <>
            <main className="container">
                <GuitarList guitars={guitars}/>
            </main>

            <Course course={course}/>
            
            <section className="container">
                <PostList posts={posts}/>
            </section>
        </>
    );
}

export default Index;