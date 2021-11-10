import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Detail from './components/Detail';

export default function Show(props) {
  return (
      <Authenticated
          auth={props.auth}
          errors={props.errors}
          header={<h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
      >
          <Head title="投稿詳細" />

          <div class="mt-6 bg-gray-50">
              <Detail post={props.post}/>
          </div>
      </Authenticated>
  )
}
