// assets/react/controllers/MyComponent.jsx
import React from 'react';
import "../../styles/app.css";
import ToDo from './components/ToDo'
// import Counter from './Counter.jsx';
import MyModal from './MyModal.jsx'

export default function () {
  return (
    <>
        <ToDo />
      {/* <div className="h-1/5 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-max">
              <div className="mb-4">
                  <h1 className="text-grey-darkest">Todo List</h1>
                  <div className="flex mt-4">
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                      <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
                  </div>
              </div>
              <div>
                  <div className="flex mb-4 items-center">
                      <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
                  </div>
                  <div className="flex mb-4 items-center">
                      <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                  </div>
              </div>
          </div>
      </div> */}
    </>
  );
}