import { House } from "@/assets/house";
import { Logo } from "@/assets/logo";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Dashboard() {
  // transaction- storing the data settransaction- THE storer
  const [transaction, setTransaction] = useState([]);

  const fetchTransactions = () => {
    axios.get("http://localhost:8000/transaction").then((response) => {
      setTransaction(response.data);
    });
  };
  // ^
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* background color */}
      <div>
        <main className="container mx-auto">
          {/* navbar */}
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-x-5">
              <Logo />
              <Link className="text-lg" href="#">
                Dashboard
              </Link>
              <Link className="text-lg font-bold" href="#">
                Records
              </Link>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="btn btn-sm font-thin rounded-full h-[32px] w-[100px] bg-blue-700 text-slate-50">
                + Record
              </button>
              <img src="/klee.png" className="h-[40px] w-[40px] rounded-full" />
            </div>
          </div>
        </main>
      </div>

      {/* background color */}
      <div className="bg-gray-100 flex-grow">
        {/* start of main area */}
        <div className="container mx-auto grid grid-cols-4 grid-rows-1 gap-2">
          <div className="mt-4 flex flex-col items-center border-[1px] rounded-lg bg-white">
            <div className="font-bold text-lg w-11/12 mt-2">
              <h1>Records</h1>
            </div>
            <button
              className="my-2 btn btn-sm font-thin rounded-full h-[32px] w-11/12 bg-blue-700 text-slate-50"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              + ADD
            </button>
          </div>
          <div className="mt-4 col-span-3">
            <div>HELLO</div>
            <div>
              <span>Here are the transactions \/</span>
            </div>
            {/* start of  */}

            {transaction.map((transaction) => (
              <div className="bg-white border rounded-xl p-3 flex items-center justify-between">
                <div className="flex  gap-3 items-center">
                  <House />
                  <div>
                    <h1>{transaction.name}</h1>

                    <h5 className="text-gray-400">{transaction.updated_at}</h5>
                  </div>
                </div>
                <h1 className="text-green-600">{transaction.amount}</h1>
              </div>
            ))}

            <div className="bg-white border rounded-xl p-3 flex items-center justify-between">
              <div className="flex  gap-3 items-center">
                <House />
                <div>
                  <h1>Lending & Renting</h1>

                  <h5 className="text-gray-400">14:00</h5>
                </div>
              </div>
              <h1 className="text-green-600">-1000</h1>
            </div>
            {/*  */}
          </div>
        </div>
        {/* dialog box */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl max-h-none h-[800px]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-lg btn btn-sm btn-circle btn-ghost absolute right-3 top-5">
                X
              </button>
            </form>
            <h3 className="font-bold text-2xl">Add Record</h3>
            <div className="py-3 w-full h-full flex gap-x-4">
              <div className="w-1/2">
                {/* income expense tabs */}
                <div role="tablist" className="tabs tabs-boxed">
                  <a role="tab" className="tab tab-active">
                    EXPENSE
                  </a>
                  <a role="tab" className="tab">
                    INCOME
                  </a>
                </div>
                {/* amount */}
                <div className="p-3 my-3 flex flex-col bg-gray-100 border-[1px] border-gray-300 rounded-xl">
                  <span className="font-thin text-lg">Amount</span>
                  <input
                    type="number"
                    placeholder="₮ 0.00"
                    className="placeholder:text-xl w-11/12 h-[28px] bg-gray-100"
                  />
                </div>
                {/* category */}
                <div className="w-full">
                  <h1 className="font-thin text-lg">Category</h1>
                  <div className="dropdown w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn bg-gray-100 border-[1px] border-gray-300 rounded-xl max-w-none w-full"
                    >
                      Category
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-1/2">HELLO</div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
