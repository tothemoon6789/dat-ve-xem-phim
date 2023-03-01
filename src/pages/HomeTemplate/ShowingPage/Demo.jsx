import React, { lazy, Suspense } from 'react';
const MYDEMI = lazy(() => import('./Demi'))
const Demo = () => {
    return (
        <Suspense fallback={<div className='bg-warning'>Loddding.....</div>}>

            <div className='p-4'>
                <MYDEMI/>
            </div>
        </Suspense>
    );
};

export default Demo;