import { useEffect, useState } from "react";
import ConfirmModal from "./Components/ConfirmModal";

function App() {
  const [confirmModal, setConfirmModal] = useState(false);
  const [payoutCHC, setPayoutCHC] = useState(0);
  const [payoutBalance, setPayoutBalance] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [levelSelected, setLevelSelected] = useState(1);
  const [chcBalanceSelected, setChcBalanceSelected] = useState(25);
  const [cashBalanceSelected, setCashBalanceSelected] = useState(10);
  const paraText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque velit inventore doloribus consectetur aut tempora sequi officiis doloremque accusamus exercitationem reiciendis repellat animi aliquid tenetur eum eaque dicta suscipit.`;
  const CHC__BALANCE = 758;
  const CASH__BALANCE = 252;
  //pulse animation  for payout in CHC
  useEffect(() => {
    const elem = document.querySelector(".animate-add");
    elem.classList.remove("animate");
    elem.classList.add("animate");
    setTimeout(() => {
      elem.classList.remove("animate");
    }, 600);
  }, [payoutCHC]);
  //pulse animation  for payout in dollars
  useEffect(() => {
    const elem = document.querySelector(".animate-add2");
    elem.classList.remove("animate");
    elem.classList.add("animate");
    setTimeout(() => {
      elem.classList.remove("animate");
    }, 600);
  }, [payoutBalance]);
  //progress bar code
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMaxPlayers((prev) => prev + 1);
    }, 1200);
    if (maxPlayers >= 150) {
      clearTimeout(timeOut);
    }
  }, [maxPlayers]);
  //formulas to calculate payout balances
  useEffect(() => {
    setPayoutBalance(() => {
      const set1 = cashBalanceSelected * levelSelected;
      return (set1 + cashBalanceSelected).toFixed(0);
    });
    setPayoutCHC(() => {
      const set1 = chcBalanceSelected * levelSelected;
      return (set1 + chcBalanceSelected).toFixed(0);
    });
  }, [cashBalanceSelected, chcBalanceSelected, levelSelected]);

  return (
    <div className="flex  justify-center items-center w-screen min-h-screen">
      {confirmModal && (
        <ConfirmModal
          setModal={setConfirmModal}
          totalCHC={CHC__BALANCE}
          totalCash={CASH__BALANCE}
          wagedCHC={chcBalanceSelected}
          wagedCash={cashBalanceSelected}
        />
      )}
      <div className="flex justify-center isolate items-start flex-col rounded-3xl min-w-[350px] w-[90%] max-w-[350px] bg-white shadow-box p-4 relative gap-3 overflow-hidden">
        <div className="absolute left-0 top-0 -z-10 -translate-x-[50%] -translate-y-[67%] bg-veryLightGray border-midGray border-[50px] border-solid rounded-full w-[200%] aspect-square"></div>
        <div className="flex pb-2 justify-between border-solid border-b-2 border-slate w-full items-center gap-3">
          <div className="flex justify-start items-start flex-col gap-1 w-full">
            <h4 className="text-darkBlue font-semibold leading-[1] text-2xl">
              Event Title
            </h4>
            <div className="relative rounded-full overflow-hidden mt-1 flex justify-center items-center isolate w-[85%] h-[25px] bg-grey">
              <p className="text-white font-medium text-[13px] leading-[1] italic">
                Daily Maximum Players {maxPlayers === 150 && "Reached"}
              </p>
              <div
                style={{ width: `${(maxPlayers / 150) * 100}%` }}
                className="absolute left-0 top-0 h-full bg-red -z-10 "
              ></div>
            </div>
            {/* <p className="text-red italic font-medium text-base">
              Daily spots remaining {timer} of 150
            </p> */}
          </div>
          <a
            href="#"
            target={"blank"}
            className="flex justify-center items-center rounded-full bg-veryLightGray border-[6px] border-solid border-lightGrey min-w-[55px] cursor-pointer h-[55px]"
          >
            <p className="text-slate text-3xl font-bold text">?</p>
          </a>
        </div>
        <p className="text-grey text-base font-medium leading-[1.3] ">
          {paraText}
        </p>
        <div className="flex justify-between items-center gap-3 w-[85%] self-center p-2 rounded-full bg-darkBlue">
          {/* //minus btn */}
          <div
            onClick={() => {
              if (chcBalanceSelected <= 0) return;
              setChcBalanceSelected((prev) => {
                if (prev === 50) {
                  return 25;
                } else if (prev <= 25 && prev > 10) {
                  return 10;
                } else if (prev <= 10 && prev > 5) {
                  return 5;
                } else if (prev <= 5 && prev > 0) {
                  return 0;
                } else return (prev -= 50);
              });
            }}
            className="rounded-full min-w-[50px] border-[6px] cursor-pointer border-solid border-white bg-grey flex justify-center items-center min-h-[50px] "
          >
            <div className="bg-white rounded-full w-[70%] h-[5px]"></div>
          </div>
          <h2 className="text-white font-bold text-[26px]  w-full text-center">
            {chcBalanceSelected} CHC
          </h2>
          {/* //plus btn */}
          <div
            onClick={() => {
              if (chcBalanceSelected >= CHC__BALANCE) return;
              setChcBalanceSelected((prev) => {
                if (prev + 50 >= CHC__BALANCE) return CHC__BALANCE;
                if (prev <= 50) {
                  if (prev >= 0 && prev < 5) {
                    return 5;
                  } else if (prev >= 5 && prev < 10) {
                    return 10;
                  } else if (prev < 25 && prev >= 10) {
                    return 25;
                  } else if (prev >= 25 && prev < 50) {
                    return 50;
                  } else return (prev += 50);
                } else return (prev += 50);
              });
            }}
            className="rounded-full  min-w-[50px] border-[6px] cursor-pointer border-solid border-white bg-green flex justify-center items-center relative min-h-[50px]"
          >
            <div className="bg-white rounded-full w-[70%] h-[5px]"></div>
            <div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full w-[70%] h-[5px]"></div>
          </div>
        </div>
        <p className="text-grey font-normal text-sm text-center w-full -mt-2">
          Your CHC balance: {CHC__BALANCE}
        </p>
        <div className="flex justify-between items-center gap-3 w-[85%] self-center p-2 rounded-full bg-darkBlue">
          {/* //minus btn */}
          <div
            onClick={() => {
              if (cashBalanceSelected <= 0) return;
              setCashBalanceSelected((prev) => {
                if (prev === 50) {
                  return 25;
                } else if (prev <= 25 && prev > 10) {
                  return 10;
                } else if (prev <= 10 && prev > 5) {
                  return 5;
                } else if (prev <= 5 && prev > 0) {
                  return 0;
                } else return (prev -= 50);
              });
            }}
            className="rounded-full min-w-[50px] border-[6px] cursor-pointer border-solid border-white bg-grey flex justify-center items-center min-h-[50px] "
          >
            <div className="bg-white rounded-full w-[70%] h-[5px]"></div>
          </div>
          <h2 className="text-white font-bold text-[26px]  w-full text-center">
            ${cashBalanceSelected}
          </h2>
          {/* //plus btn */}
          <div
            onClick={() => {
              if (cashBalanceSelected >= CASH__BALANCE) return;
              setCashBalanceSelected((prev) => {
                if (prev + 50 >= CASH__BALANCE) return CASH__BALANCE;
                if (prev <= 50) {
                  if (prev >= 0 && prev < 5) {
                    return 5;
                  } else if (prev >= 5 && prev < 10) {
                    return 10;
                  } else if (prev < 25 && prev >= 10) {
                    return 25;
                  } else if (prev >= 25 && prev < 50) {
                    return 50;
                  } else return (prev += 50);
                } else return (prev += 50);
              });
            }}
            className="rounded-full  min-w-[50px]  border-[6px] cursor-pointer border-solid border-white bg-green flex justify-center items-center relative min-h-[50px] "
          >
            <div className="bg-white rounded-full w-[70%] h-[5px]"></div>
            <div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full w-[70%] h-[5px]"></div>
          </div>
        </div>
        <p className="text-grey font-normal text-sm text-center w-full -mt-2">
          Your cash balance: ${CASH__BALANCE}
        </p>
        <div className="flex justify-between items-center w-full rounded-full bg-veryLightGray border-4 border-solid border-lightGrey overflow-hidden">
          <p
            onClick={() => setLevelSelected(1)}
            className={`w-full rounded-full flex justify-center items-center cursor-pointer select-none transition-all duration-300 p-3 ${
              levelSelected === 1
                ? "text-white bg-darkBlue"
                : "text-darkBlue bg-transparent"
            } font-bold`}
          >
            Normal
          </p>
          <p
            onClick={() => setLevelSelected(2)}
            className={`w-full rounded-full flex justify-center items-center cursor-pointer select-none transition-all duration-300 p-3 ${
              levelSelected === 2
                ? "text-white bg-darkBlue"
                : "text-darkBlue bg-transparent"
            } font-bold`}
          >
            Skilled
          </p>
          <p
            onClick={() => setLevelSelected(3)}
            className={`w-full rounded-full flex justify-center items-center cursor-pointer select-none transition-all duration-300 p-3 ${
              levelSelected === 3
                ? "text-white bg-darkBlue"
                : "text-darkBlue bg-transparent"
            } font-bold`}
          >
            Hard
          </p>
          <p
            onClick={() => setLevelSelected(4)}
            className={`w-full rounded-full flex justify-center items-center cursor-pointer select-none transition-all duration-300 p-3 ${
              levelSelected === 4
                ? "text-white bg-darkBlue"
                : "text-darkBlue bg-transparent"
            } font-bold`}
          >
            Insane
          </p>
        </div>
        <div className="min-w-[360px] w-[90vw] mt-3 mb-3 bg-red -translate-x-[16px] flex justify-center items-center p-2 max-w-[350px]">
          <p className="text-white font-semibold text-[22px]">
            Payout:{" "}
            <span className="animate-add inline-block">{payoutCHC}</span> CHC
            and $
            <span className="animate-add2 inline-block">{payoutBalance}</span>
          </p>
        </div>
        <button
          onClick={() => setConfirmModal(true)}
          className="cursor-pointer text-white font-bold text-3xl w-full leading-[1] rounded-full h-[65px] bg-green border-4 border-solid border-green hover:text-green self-center hover:bg-transparent transition-all duration-500  mb-2 "
        >
          Place Wager
        </button>
      </div>
    </div>
  );
}

export default App;
