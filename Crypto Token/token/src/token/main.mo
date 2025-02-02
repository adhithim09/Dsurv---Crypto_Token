import Principal "mo:base/Principal";

actor Token {

    var owner : Principal = Principal.from text();
    var totalSupply : Nat = 100000000;
    var symbol : Text = "NEX";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal): async Nat {

        let balance: Nat = switch (balances.get(who)){
            case null 0;
            case(?result) result;

        };
        
        if (balances.get()== null){
            return 0;
        }else{
            return balances.get(who);
        }
    }
};