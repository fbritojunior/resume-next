import React from 'react';

export default function Profile (props: any) {

    return ( 
        <div className=''>
            {props.description.map((d: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
                return (
                    <div>
                        <div className='text-white text-lg'>
                            {d.title}
                        </div>
                        <div className='text-white text-sm'>
                            {d.content}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}