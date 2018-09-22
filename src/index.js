// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let cur = currency;
    let obj = {};
    if (cur <=0){
        return obj = {}
    };
    if (cur>=10000){
        return obj = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    };
    let H, Q, D, N, P
    H = Math.floor(cur/50);
    Q = Math.floor((cur%50)/25);
    D = Math.floor((cur%25)/10);
    N = Math.floor(((cur%25)%10)/5);
    P = Math.floor((cur%5)/1);
    obj = {H, Q, D, N, P}
        if (obj.H == 0){
            delete obj.H};
        if (obj.Q == 0){
            delete obj.Q};
        if (obj.D == 0){
            delete obj.D};
        if (obj.N == 0){
            delete obj.N};
        if (obj.P == 0){
            delete obj.P};
return obj
   

        
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
