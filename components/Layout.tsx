import React from 'react'

const Layout = (props: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-green-500 to-blue-500">
            <div className="flex flex-col items-center justify-center page-content w-full md:w-4/6 lg:w-1/2 h-full md:h-max rounded-none md:rounded-xl absolute z-10 p-10 bg-gray-100 text-center shadow-xl">
                <main>{props.children}</main>
            </div>
        </div>
    </div>
)

export { Layout }