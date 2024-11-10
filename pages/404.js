import React from "react";

export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">

          <p className="text-base font-semibold text-customRed pb-16">404</p>
          <h1 className="mt-4 text-balance text-5xl dark:text-white font-semibold tracking-tight text-gray-900 sm:text-7xl">
            This page does not exist
          </h1>
          <p className="mt-6 text-pretty text-lg dark:text-white font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-16 flex items-center justify-center gap-x-6 b">
            <a
              href="/index"
              className="rounded-md bg-customRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hoverColors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go Back Home
            </a>
            <a href="https://t.me/Xone_Group"
              className="text-sm font-semibold leading-6 text-tahiti dark:text-white">
              Contact Support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
