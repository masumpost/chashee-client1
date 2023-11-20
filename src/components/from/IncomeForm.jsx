import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function IncomeForm({ isOpen, setIsOpen, name }) {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div>Add a {name ? name : ""}</div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Income Name
                        </label>

                        <select
                          className="input input-bordered input-primary w-full"
                          id="incomeName"
                          {...register("incomeName")}
                          required
                        >
                          <option className="w-full p-3" value="mlprofit">
                            ML Profit
                          </option>
                          <option className="w-full p-3" value="wlprofit">
                            WL Profit
                          </option>
                          <option className="w-full p-3" value="ladprofit">
                            Lad Profit
                          </option>
                          <option className="w-full p-3" value="serviceCharge">
                            Service Charge
                          </option>
                          <option className="w-full p-3" value="loneForm">
                            lone Form
                          </option>
                          <option className="w-full p-3" value="stampfee">
                            Stamp Fee
                          </option>
                        </select>
                      </div>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Income Amount
                        </label>
                        <input
                          placeholder="Write Income Amount"
                          className="input input-bordered input-primary w-full"
                          type="number"
                          id="incomeAmount"
                          {...register("incomeAmount")}
                          required
                        />
                      </div>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Income Date
                        </label>
                        <input
                          className="input input-bordered input-primary w-full"
                          type="date"
                          id="incomeDate"
                          {...register("incomeDate")}
                          required
                        />
                      </div>
                      <div className="flex gap-4">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-active btn-primary btn-sm"
                        />
                        <input
                          onClick={closeModal}
                          type="submit"
                          value="Cancle"
                          className="btn btn-active btn-error btn-sm"
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
