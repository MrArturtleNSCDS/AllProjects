console.log(isConflict([400,900],[500,1200]));
console.log(isConflict([500,1200],[400,900]));

console.log(isConflict([400,900],[1000,1200]));
console.log(isConflict([1000,1200],[400,900]));

console.log(isConflict([930,1020],[930,1020]));
console.log(isConflict([400,900],[900,1000]));


function isConflict(time1, time2){
    if(time1[0]<time2[0])
        return time2[0]<time1[1];
    return time1[0]<time2[1];;
}