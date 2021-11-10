import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Dropdown from '@/Components/Dropdown';

export default function Detail({post}) {

  return (
    <div class=" px-10 py-6 mx-auto">
        <div class="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <Link 
              href="#_"
              class="block transition duration-200 ease-out transform hover:scale-110"
            >
                <img 
                  class="object-cover w-6/12 shadow-sm h-6/12" 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                />
            </Link>
            <div class="flex items-center justify-start mt-4 mb-4">
                <a href="#"class="px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Django</a>
                <a href="#"class="px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Python</a>
                <a href="#"class="px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
            </div>
            <div class="mt-2">
                <h1 class="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
                  {post.title}
                </h1>
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" 
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link href={route('posts.edit', post.id)} method="get" as="button">
                            Edit
                        </Dropdown.Link>
                        
                        <Dropdown.Link href={route('posts.destroy', post.id)} method="delete" as="button">
                            Delete
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
                
                <div class="flex justify-start items-center mt-2">
                    <p class="text-sm text-green-500  bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                    <p class="text-sm text-gray-400 font-bold ml-5">Views</p>
                </div>
                <div class="font-light text-gray-600">
                    <a href="#" class="flex items-center mt-6 mb-6">
                        <img
                            src="https://avatars.githubusercontent.com/u/71964085?v=4"
                            alt="avatar" 
                            class="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" 
                        />
                        <h1 class="font-bold text-gray-700 hover:underline">By James Amos</h1>
                    </a>
                </div>
            </div>
            <div class="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                <div>
                    <p class="mt-2 p-8">
                      {post.body}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}