import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import { Link } from '@inertiajs/inertia-react';
import Post from './components/Post';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="投稿一覧" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div>
                                <Link href={route('posts.create')}>
                                    <Button type="button">新規投稿</Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {props.posts.map((post) => {
                                    return(
                                      <Post key={post.id} post={post}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}