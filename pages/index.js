import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { addUser, deleteUser } from "../store/userSlice";
import { singleUser } from "../store/singleDataSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [newUser, setNewUser] = useState([]);
  const [reduxSingleUser, setReduxSingleUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const allReduxData = useSelector((state) => state.users);
  const singleuserData = useSelector((state) => state.singleuser);

  // console.log(singleuserData);

  // console.log(newUser);

  const clearData = () => {
    setModalData({
      ...modalData,
      name: "",
      email: "",
      phone: "",
    });
  };

  useEffect(() => {
    setNewUser(allReduxData);
  }, [allReduxData]);

  useEffect(() => {
    setReduxSingleUser(singleuserData);
  }, [singleuserData]);

  const SubmitModal = () => {
    let final = [...newUser, modalData];
    // console.log("final >>> ", final);

    dispatch(addUser(final));
    // console.log("newUser >>> ", newUser);
    setShowModal(false);
  };

  function EditUser(i) {
    // console.log("Edit index >>>> ", i);
    setEditIndex(i);
    // console.log(newUser[i]);

    dispatch(singleUser(newUser[i]));

    setOpenEditModal(true);
    setShowModal(true);
  }

  const SubmitEditModal = () => {
    // console.log("SubmitEditModal >>>", reduxSingleUser);

    // let ind = editIndex;

    // const editUserData = {
    //   name: reduxSingleUser.name,
    //   email: reduxSingleUser.email,
    //   phone: reduxSingleUser.phone,
    // };

    // let data = newUser;
    // const updateArr = data.map((e, i) => (i === ind ? (e = editUserData) : e));

    // dispatch(addUser(updateArr));

    // const reduxData = useSelector((state) => state.users);
    let index = allReduxData.indexOf(singleuserData);
    let copyArr = [...allReduxData];

    copyArr[index] = {
      ...copyArr[index],
      name: reduxSingleUser.name,
      email: reduxSingleUser.email,
      phone: reduxSingleUser.phone,
    };
    dispatch(addUser(copyArr));

    setOpenEditModal(false);
    setShowModal(false);
  };

  function DeleteData(i) {
    // console.log("Delete index >>>> ", i);

    // let data = newUser;
    // const result = allReduxData.filter((e, index) => {
    //   index != i;
    // });
    // console.log("result >> ", result);

    dispatch(deleteUser(i));
  }

  return (
    <>
      <button
        className="bg-slate-400 hover:bg-slate-100 mx-2 my-2 rounded-lg h-9 w-36"
        onClick={() => {
          clearData();
          setShowModal(true);
        }}
      >
        + Create User
      </button>

      {/* Table  */}
      {allReduxData.length > 0 ? (
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PHone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {newUser.map((ele, i) => {
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{ele.name}</td>
                      <td className="px-6 py-4">{ele.email}</td>
                      <td className="px-6 py-4">{ele.phone}</td>

                      <td className="px-6 py-4 ">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => EditUser(i)}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                          onClick={() => DeleteData(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {/* Modal  */}
      <div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h4 className="text-3xl font-semibold">
                      {openEditModal ? "Edit User Data" : "Upload User Data"}
                    </h4>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                        setOpenEditModal(false);
                      }}
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
                        value={
                          openEditModal ? reduxSingleUser.name : modalData.name
                        }
                        onChange={(e) => {
                          openEditModal
                            ? setReduxSingleUser({
                                ...reduxSingleUser,
                                name: e.target.value,
                              })
                            : setModalData({
                                ...modalData,
                                name: e.target.value,
                              });
                        }}
                      />
                    </div>
                    <div className="my-2">
                      <span className="font-medium">Email : </span>
                      <input
                        type="text"
                        className="bg-slate-100 rounded-lg h-8 w-64 "
                        value={
                          openEditModal
                            ? reduxSingleUser.email
                            : modalData.email
                        }
                        onChange={(e) => {
                          openEditModal
                            ? setReduxSingleUser({
                                ...reduxSingleUser,
                                email: e.target.value,
                              })
                            : setModalData({
                                ...modalData,
                                email: e.target.value,
                              });
                        }}
                        // onChange={(e) => {
                        //   setModalData({ ...modalData, email: e.target.value });
                        // }}
                      />
                    </div>
                    <div>
                      <span className="font-medium">Phone : </span>
                      <input
                        type="text"
                        className="bg-slate-100 rounded-lg h-8 w-64 "
                        // onChange={(e) => {
                        //   setModalData({ ...modalData, phone: e.target.value });
                        // }}
                        value={
                          openEditModal
                            ? reduxSingleUser.phone
                            : modalData.phone
                        }
                        onChange={(e) => {
                          openEditModal
                            ? setReduxSingleUser({
                                ...reduxSingleUser,
                                phone: e.target.value,
                              })
                            : setModalData({
                                ...modalData,
                                phone: e.target.value,
                              });
                        }}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setOpenEditModal(false);
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={openEditModal ? SubmitEditModal : SubmitModal}
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
}
