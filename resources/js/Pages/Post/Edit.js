import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Input from '@/Components/Input';

export default function Edit(props) {
    const { data, setData, patch, processing, errors } = useForm({
        title: props.post.title,
        body: props.post.body,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();

        patch(route("posts.update", props.post.id));
    }
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
                            <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <div className="mt-2">
                                    <Label forInput="title" value="タイトル"/>
                                    <Input 
                                        type="text" 
                                        name="title" 
                                        value={data.title} 
                                        className="mt-1 block w-full" 
                                        isFocused={true} 
                                        handleChange={onHandleChange} 
                                    />
                                </div>
                                <div className="mt-2">
                                    <Label forInput="body" value="概要・説明"/>
                                    <Input 
                                        type="text" 
                                        name="body" 
                                        value={data.body} 
                                        className="mt-1 block w-full" 
                                        isFocused={true} 
                                        handleChange={onHandleChange} 
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button 
                                        className="ml-4"
                                        processing={processing}
                                    >
                                        編集
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}