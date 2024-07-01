function sortStrings(array) {
    return array.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
}

console.log(sortStrings(["TH19", "SG20", "TH2"]));
console.log(sortStrings(["TH1", "TH3Netflix", "TH7", "TH10"])); 