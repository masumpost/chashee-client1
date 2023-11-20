import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function DepositForm({ isOpen, setIsOpen , name}) {
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
                    <div>Add a {name? name : "" }</div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Name
                        </label>
                        <input
                          placeholder="Write The Name"
                          className="input input-bordered input-primary w-full"
                          type="text"
                          id="name"
                          {...register("name")}
                          required
                        />
                      </div>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Phone Number
                        </label>
                        <input
                          placeholder="Write Phone Number"
                          className="input input-bordered input-primary w-full"
                          type="tel"
                          id="phone"
                          {...register("phone")}
                          required
                        />
                      </div>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Deposit Amount
                        </label>
                        <input
                          placeholder="Enter Deposit Amount"
                          className="input input-bordered input-primary w-full"
                          type="number"
                          id="depositAmount"
                          {...register("depositAmount")}
                          required
                        />
                      </div>
                      <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                          Deposit Validity
                        </label>
                        <input
                          placeholder="Enter Deposit Validity"
                          className="input input-bordered input-primary w-full"
                          type="number"
                          id="depositValidity"
                          {...register("depositVlidity")}
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
