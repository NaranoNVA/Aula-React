import React from "react";
import Layout from "../components/shared/layouts";
import { user, getPost } from "../data";
import Post from "../components/feed/Post";

export default function FeedPage() {
    const posts = [getPost(), getPost(), getPost()]

    return (
        <Layout>
            <div className="row">
                <div className="col-12 mx-auto text-center">
                    {
                        posts.map((post) =>
                            <Post post={post} key={post.id} />
                        )
                    }
                </div>
            </div>
        </Layout>
    );
}