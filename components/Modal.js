import React from "react";

export const Modal = (props) => {
  return (
    <>
      <div>Modal</div>
      {/* Modal  */}
      <div>
        {props.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h4 className="text-3xl font-semibold">Enter User Data</h4>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-black hover: bg-slate-200 ">
                        X
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>
                      <span className="font-medium">Name : </span>
                      <input
                        type="text"
                        className="bg-slate-100 rounded-lg h-8 w-64 "
                      />
                    </div>

                    <div className="my-1">
                      <span className="font-medium">Email : </span>
                      <input
                        type="text"
                        className="bg-slate-100 rounded-lg h-8 w-64 "
                      />
                    </div>
                    <div className="my-1">
                      <span className="font-medium">Phone : </span>
                      <input
                        type="text"
                        className="bg-slate-100 rounded-lg h-8 w-64 "
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
};
