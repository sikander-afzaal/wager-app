const ConfirmModal = ({
  setModal,
  totalCHC,
  totalCash,
  wagedCHC,
  wagedCash,
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-white opacity-70  z-20"
        onClick={() => setModal(false)}
      ></div>
      <div className="flex rounded justify-center flex-col items-center min-w-[350px] w-[90%] max-w-[450px] fixed top-1/2 left-1/2 text-center py-8 px-4 -translate-x-1/2 -translate-y-1/2  bg-green z-30">
        <p className="text-white font-semibold text-lg">
          Your wager has been placed.
        </p>
        <p className="text-white font-semibold text-lg">Wager Details:</p>
        <p className="text-white font-semibold text-lg">
          CHC Wager: {wagedCHC} CHC
        </p>
        <p className="text-white font-semibold text-lg">
          Remaining balance: {totalCHC - wagedCHC} CHC
        </p>
        <p className="text-white font-semibold text-lg">
          Cash Wager: ${wagedCash}
        </p>
        <p className="text-white font-semibold text-lg">
          Remaining balance: ${totalCash - wagedCash}
        </p>{" "}
        <button
          onClick={() => setModal(false)}
          className="cursor-pointer mt-6 text-white font-bold text-3xl w-full leading-[1] rounded-full h-[65px] bg-darkBlue border-4 border-solid border-darkBlue hover:text-darkBlue self-center hover:bg-transparent transition-all duration-500   "
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ConfirmModal;
