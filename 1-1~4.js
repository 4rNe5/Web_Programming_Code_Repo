let friend = {
    name: "안지영",
    tel: "010-1234-5678",
    address: "용인시 수지구 성복2로 100"
};
console.log(`${friend.name} ${friend.tel} ${friend.address}`);

console.log(`${friend["name"]} ${friend["tel"]} ${friend["address"]}`);

for (i in friend) {
    console.log(friend[i]);
}


friend = {
    name: "안지영",
    tel: {
        tel1:"010-1234-5678",
        tel2:"031-3557-2486"
    },
    address: "용인시 수지구 성복2로 100"
};

for (i in friend.tel) {
    console.log(friend.tel[i]);
}