import { House } from "@/assets/house";
import { Logo } from "@/assets/logo";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Gift } from "@/assets/gift";
import { Eye } from "@/assets/eye";
import Sidebar from "./components/category-sidebar";

export default function Dashboard() {
  // transaction- storing the data settransaction- THE storer
  const [transaction, setTransaction] = useState([]);

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [user_id, setUser] = useState("admin");
  const [transaction_type, setType] = useState("exp");
  const [category, setCategory] = useState("");

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };
  const changeDate = (event) => {
    setDate(event.target.value);
  };
  const changeTime = (event) => {
    setTime(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeDesc = (event) => {
    setDesc(event.target.value);
  };
  const changeCategory = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const fetchTransactions = () => {
    axios.get("http://localhost:8000/transaction").then((response) => {
      setTransaction(response.data);
    });
  };

  const createTransaction = async () => {
    try {
      await axios.post("http://localhost:8000/transaction/create", {
        user_id,
        amount,
        name,
        desc,
        date,
        time,
        category,
        transaction_type,
      });
      fetchTransactions();
      document.getElementById("my_modal_3").close();
    } catch (error) {
      console.error("error");
    }
  };

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
              <button className="btn btn-sm font-thin rounded-full h-[32px] w-[100px] bg-blue-400 text-slate-50">
                + Record
              </button>
              <img src="/girl.png" className="h-[40px] w-[40px] rounded-full" />
            </div>
          </div>
        </main>
      </div>

      {/* background color */}
      <div className="bg-gray-100 flex-grow">
        {/* start of main area */}
        <div className="container mx-auto grid grid-cols-4 grid-rows-1 gap-2">
          <div className="mt-4 flex flex-col items-center border-[1px] rounded-lg bg-white gap-3 h-full">
            <div className="font-bold text-lg w-11/12 mt-2">
              <h1>Records</h1>
            </div>
            <button
              className="my-2 btn btn-sm font-thin rounded-full h-[32px] w-11/12 bg-blue-400 text-slate-50"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              + ADD
            </button>
            <input
              type="search"
              placeholder="Type here"
              className="input input-bordered w-11/12 max-w-none h-9 "
            />
            <div className="w-11/12">
              <h1 className="font-bold">Types</h1>
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs"
                />
                <h1>All</h1>
              </div>
              <div className=" items-center flex gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs"
                />
                <h1>Income</h1>
              </div>
              <div className="items-center flex gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs"
                />
                <h1>Expense</h1>
              </div>
            </div>
            <div className="w-11/12">
              <h1 className="font-bold">Categories</h1>
              <Sidebar />
            </div>
          </div>
          <div className="mt-4 col-span-3">
            <div>ni hao</div>
            <div>
              <span>wow</span>
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
          <div className="modal-box w-11/12 max-w-5xl max-h-none h-[450px]">
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
                    value={amount}
                    onChange={changeAmount}
                    type="number"
                    placeholder="₮ 0.00"
                    className="placeholder:text-xl w-11/12 h-[28px] bg-gray-100"
                  />
                </div>
                {/* category */}
                <div className="w-full">
                  <h1 className="font-thin text-lg">Category</h1>
                  <select
                    onChange={(value) => setCategory(value)}
                    className="select w-full max-w-xs"
                  >
                    <option value="home">🕌home</option>
                    <option value="gift">🎁Gift</option>
                    <option value="food">🫐Food</option>
                    <option value="drink">🍸Drink</option>
                    <option value="transport">🚕Taxi</option>
                    <option value="shop">🛍️Shopping</option>
                  </select>

                  <div className="flex">
                    <div>
                      <h1>Date</h1>
                      <input
                        value={date}
                        onChange={changeDate}
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-md max-w-xs gap-3"
                      />
                    </div>
                    <div>
                      <h1>Time</h1>
                      <input
                        value={time}
                        onChange={changeTime}
                        type="time"
                        placeholder="Type here"
                        className="input input-bordered w-md max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="flex center pt-8">
                    <button
                      onClick={createTransaction}
                      className="btn bg-blue-300 rounded-full w-[350px]"
                    >
                      Add Record
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <h1>Payee</h1>

                  <input
                    value={name}
                    onChange={changeName}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <h1>Note</h1>
                  <textarea
                    value={desc}
                    onChange={changeDesc}
                    type="text"
                    placeholder="write here"
                    className="input input-bordered input-lg w-full max-w-full h-[260px]"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
