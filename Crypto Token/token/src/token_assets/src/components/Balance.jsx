import React from "react";
import { Principal } from '@dfinity/principal';
import {token} from "../../../declarations/token";

function Balance() {

  const [inputvalue, setInput] = useState("");
  const [balanceResult, setBalance] = useState("");
  const [cryptoSymbol, setSymbol] = usrState("";)

  async function handleClick() {
    //console.log(inputvalue);
    const principal = Principal.fromText(inputvalue);
    const balance=await token.balenceOf(principal);
    setBalance(balance.toLocaleString());
    setSymbol(await token.getSymbol());
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputvalue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p>This account has a balance of {balanceResult} {cryptoSymbol}.</p>
    </div>
  );
}

export default Balance;
